# 需求分析
- [] 
- [] 有两种主题,light和dark
- [] 点击右侧按钮按钮可以关闭toast
- [] 定义按钮是否显示
- [] 


- [x] component receiving props declartion
- [x] component emits events declartion
- [x] props filter,formated, validation


- [x] event listen
- [x] event trigger
- [x] event emits
- [x] event handle


```js
interface AlertProps {
  content: string
  type: 'primary' | ..
  theme: 'light' | 'dark'
  closeable: boolean
}


interface AlertEvents {
  (e: 'close'):void
}


// exposed method
interface AlertInstance {
  clsoe: () => void
}
```

