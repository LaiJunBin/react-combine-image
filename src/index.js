import React, { forwardRef, useEffect, useRef, useState } from 'react'

function calcActualValue (n, m, scale = 1) {
  if (typeof n === 'string') {
    if (n.endsWith('%')) {
      const val = Number(n.substring(0, n.length - 1))
      if (isNaN(val)) {
        throw new Error(`${n} is invalid.`)
      }

      return (m / 100) * val
    }

    const val = Number(n)
    if (isNaN(val)) {
      throw new Error(`${n} is invalid.`)
    }

    return val
  }

  return n * scale
}

function CombineImage ({ images, onDrawEnd = (ctx) => {}, ...rest }, ref) {
  if (!ref) {
    ref = useRef()
  }

  const [count, setCount] = useState(0)
  const [memoriedImages, setMemoriedImages] = useState({
    images: {},
    layers: [],
    count: 0
  })

  useEffect(() => {
    if (ref.current && count === memoriedImages.count) {
      const ctx = ref.current.getContext('2d')
      memoriedImages.layers.forEach((layer, i) => {
        const image = memoriedImages.images[layer.key]
        const {
          scale = [1, 1],
          x = 0,
          y = 0,
          tx = 0,
          ty = 0,
          width,
          height,
          rotate = 0
        } = layer.props
        if (i === 0) {
          ctx.canvas.width = image.naturalWidth
          ctx.canvas.height = image.naturalHeight
        }

        const scaleX = ctx.canvas.width / image.naturalWidth
        const scaleY = ctx.canvas.height / image.naturalHeight
        const actualImageWidth =
          (calcActualValue(width, ctx.canvas.width, scaleX) ||
            ctx.canvas.width) * scale[0]
        const actualImageHeight =
          (calcActualValue(height, ctx.canvas.height, scaleY) ||
            ctx.canvas.height) * scale[1]

        ctx.save()
        ctx.translate(
          calcActualValue(x, ctx.canvas.width, scaleX) -
            calcActualValue('50%', actualImageWidth),
          calcActualValue(y, ctx.canvas.height, scaleY) -
            calcActualValue('50%', actualImageHeight)
        )
        ctx.rotate((Math.PI / 180) * rotate)
        ctx.translate(
          -(
            calcActualValue(x, ctx.canvas.width, scaleX) -
            calcActualValue('50%', actualImageWidth)
          ),
          -(
            calcActualValue(y, ctx.canvas.height, scaleY) -
            calcActualValue('50%', actualImageHeight)
          )
        )

        ctx.translate(
          calcActualValue(x, ctx.canvas.width, scaleX) +
            calcActualValue(tx, actualImageWidth),
          calcActualValue(y, ctx.canvas.height, scaleY) +
            calcActualValue(ty, actualImageHeight)
        )
        ctx.drawImage(
          image,
          0,
          0,
          image.naturalWidth,
          image.naturalHeight,
          0,
          0,
          actualImageWidth,
          actualImageHeight
        )
        ctx.restore()
        onDrawEnd(ctx)
      })
    }
  }, [ref, memoriedImages, count])

  useEffect(() => {
    setCount(count + 1)
  }, [images])

  useEffect(() => {
    Promise.all(
      images.map(({ src, ...rest }) => {
        return new Promise((resolve) => {
          if (src in memoriedImages.images) {
            return resolve({
              ...rest,
              key: src,
              image: memoriedImages.images[src]
            })
          }

          const image = new Image()
          image.crossOrigin = 'anonymous'
          image.src = src
          image.onload = () => {
            resolve({
              ...rest,
              key: src,
              image
            })
          }

          image.onerror = () => {
            resolve({
              key: src,
              image,
              error: true
            })
          }
        })
      })
    ).then((result) => {
      const images = memoriedImages.images
      const layers = []
      result.forEach((row) => {
        const { key, image, error, ...rest } = row
        if (error) {
          return
        }

        images[key] = image
        layers.push({ key, props: rest })
      })

      setMemoriedImages({
        images,
        layers,
        count
      })
    })
  }, [count])

  return <canvas ref={ref} {...rest} />
}

export default forwardRef(CombineImage)
