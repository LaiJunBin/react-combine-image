# React Combine Image

[English](https://github.com/LaiJunBin/react-combine-image#react-combine-image)｜繁體中文

可以合併多張圖片，基於畫布(Canvas)

# 安裝
```
$ npm i react-combine-image
```

# 引入
```js
import CombineImage from 'react-combine-image'
```

# 範例：將圖片放置右下角
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

`CombineImage` 組件可用的屬性：
類型  | 名稱           | 描述  |
--------------|-----|---|
屬性 | images    | 一個陣列，詳細資訊如下 |
屬性 | ref     | 與 React ref 相同，可以取得 canvas ref |
事件 | onDrawEnd(ctx)    | 當 drawImage 後會呼叫的事件 |


`images` 中每個物件可用的屬性：
屬性           | 描述  |
--------------|-----|
src    | 要合併的圖片路徑 |
scale | 一個陣列，[x, y] 軸的縮放比例，1=100% |
x | x軸座標位移，相對於畫布 |
y | y軸座標位移，相對於畫布 |
tx | x軸座標位移，相對於來源圖片本身 |
ty | y軸座標位移，相對於來源圖片本身 |
width| 來源圖片的寬度 |
height| 來源圖片的高度 |
rotate | 向右旋轉的角度 |