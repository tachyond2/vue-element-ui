# 功能分析
- reference element 触发区
  also known as the anchor element.
  this is the element being refered to for positioning
  often this is a button that trigger a floating popover like a tooltip or menu.

- floating element 展示区
  this the element float next to the reference element

intial position colors sizing
```css
/* #tooltip */
#floating {
  position: absolute;
  left: 0;
  top: 0;
  /* regardless of styles of any ancestor container */
  display:none;
  width: max-content;
  background: #222;
  color: white;
  font-weight:500;
  padding: 5px 10px;
  border-radius:50%;
  font-size: 90%;
}

```

*user interaction*
show tooltip when hovering or focusing the button
```js
const button = document.getElementById('#button')
const tooltip = document.getElementById('#tooltip')

function showTooltip(){
  tootip.style.display = 'block'
}
function hideTooltip(){
  tootip.style.display = ''
}

  [
    ['mouseenter,' showTooltip],
    ['mouseleave,' hideTooltip],
    ['focus,' showTooltip],
    ['blur,' hideTooltip],

  ].forEach( [event, handler] => {
      button.addEventListener(event, handler)
  })

  const events = {
    foucs: showTooltip ,
    blur: hideTooltip,
    mouserenter: showTooltip,
    mouseleave: hideTooltip
  } 

  v-on="events"
```
*auto update when resizing or scolling*
```js
import { computePosition, autoUpdate } from '@floating-ui/dom'

  // setup when floating element is open to screen
  const cleanup = autoUpdate(referenceEl, floatingEl, () => {
    computedPosition(referenceEl, floatingEl, {
      // options
    }).then( {x, y} => {
      // ...
    })
  }) 

placement.split('-')

// when it's removed
cleanup()

```
```ts
interface autoUpdateOptions {
  ancestorScoll?: boolean,
  ancestorResize?: boolean,
  elementResize?: boolean,
  layoutshift?: boolean,
  animationFrame?: boolean
}
```
*middleware*
objedt that tweak/alter the positon of floating element, executed in order
shape:
props type annoation
function type signature
(If it walks like a duck and it quacks like a duck, then it must be a duck. an object is of a given type if it has all methods and properties required by that type.)


- 触发方式
  - when hovering
  - when focuing(click/tab)


## 展示方案
```js
<Tooltip content="content pass in as prop">
  <Button>Trigger</Button>
</Tooltip>


<Tooltip>
  <Button>tirgger</Button>
  <template #content>
    <p> complex strcture content goes here </p>
  </template>
</Tooltip>

```

## props
```ts
interface TooltipProps {
  content?: string //display content, optional can be overridden by slot#content, default: -
  trigger: 'hover' | 'focus',
  placement: string//`[orientation]-[alignment]`.split('-')
  modifiers?: 'offset' | 'inline'
  // visibility optimizers
}

```
## emits
```js
interface TooltipEmits {
  (e: 'visible-change', value: boolean) : void
}
```

## instances

```js
interface TooltipInstance {
  show: () => void
  hide: () => void
}
```


## 开发计划
- [x] trigger mode: hover/focus
- [x] close/hide when click/hover outside the tooltip, open when click/hover inside the trigger
  - inside events bind to trigger
  - outside events bind to tooltip
  - dynamic bind events
```js
// 方案一: 使用dom来绑定事件 
// trigger mode = click
domNodeRef.addEventListener('click', callback)
// trigger mode = hover
domNodeRef.addEventListener('mouseEnter', callback)

// 方案二: 使用v-on 来完成
// @click = v-on:click
// construct event / handler pairs
const events = {'mouseenter', openTooltip, 'mouseleave': closeTooltip}
// bind in events bind to trigger(target)
const inEvents = {'mouseenter', openTooltip}
<div class="tooltip__trigger" v-on="inEvents"></div>
// bind out events bind to tooltip
const outEvents = {'mouseleave', openTooltip}
<div class="tooltip" v-on="outEvents"></div>
 
```
- [x] manual trigger
- [x] popper parameter
- [x] animation
- [x] delay
- [x] styles