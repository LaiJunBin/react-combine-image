# React Combine Image

English｜[繁體中文](https://github.com/LaiJunBin/react-combine-image/blob/main/README-zh-tw.md#react-combine-image)

The package can combine multiple images into one image, based on canvas.

# Install
```
$ npm i react-combine-image
```

# Import
```js
import CombineImage from 'react-combine-image'
```

# Example：place image to right bottom
```jsx
import CombineImage from 'react-combine-image'
import React from 'react'

function Example() {
  return (
    <CombineImage
      images={[{
        // ...props
      }, {
        src: 'source path'
        scale: [0.5, 0.5],
        x: '100%',
        y: '100%',
        tx: '-100%',
        ty: '-100%',
        rotate: 180,
        width: 50,
        height: '50%',
        onDrawEnd={(ctx) => {}}
      }]}
    />
  )
}

export default Example
```

`CombineImage` component available properties:
Type | Name           | Description  |
--------------|-----|---|
Property | images    | An array, details in below. |
Property | ref     | Same as React ref, it could get the canvas ref. |
Event | onDrawEnd(ctx)    | callback after drawing the image |

`images` available properties for every object:
Property           | Description  |
--------------|-----|
src    | Source path to be combined. |
scale | An array, scale by axis [x, y], 1=100% |
x | X-axis offset, relative by canvas. |
y | Y-axis offset, relative by canvas. |
tx | X-axis offset, relative by source image. |
ty | Y-axis offset, relative by source image. |
width| Width of image |
height| Height of image |
rotate | Rotate deg of image |