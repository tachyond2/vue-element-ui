# button 按钮组件


*需求分析*
属性列表props
- type: Default Primary Danger Info Warning Success
- plain: border-fill replace background-fill
- round:
- circle
- size small normal large
- disable
- icon
- loading 



```js
class='ve-button-primary vm-button-large vm-button-isRound'
```
z-index 
- is used to control stacking order, to figure out which one shows up "on top" if they overlap

layout flow 

inline formating context vs block formating context
- Without the width: 100% declaration, as you may have suspected, an inline-block will shrink to fit its contents

css white space property

|            | line breaks char | extra while space | Text wrapping |
| :--------- | :--------------- | :-------------- | :------------ |
| `normal`   | Collapse         | Collapse        | Wrap          |
| `pre`      | Preserve         | Preserve        | No wrap       |
| `nowrap`   | Collapse         | Collapse        | No wrap       |
| `pre-wrap` | Preserve         | Preserve        | Wrap          |
| `pre-line` | Preserve         | Collapse        | Wrap          |
native attribute support

*proejct structure*
- components
 - Button
  - Button.vue
  - style.css
  - type.ts
  - Button.test.tsx

- hooks
  - useMousePosition.ts


*color system*

System-lelvel color Ststem
-  base color
-  nertual color
Product-level Color System
- brand color
- functional color

*css solution*
inline css

css preprocessor
- sass
- less
- stylus
- postcss


  - pick and choose what we use; 
  - pre- and post-processing
  - feature extension
    - @each $type, $color in (primary...), ()
    - postcss-nested for better CSS readability 
    - variables mapping
    - @for iterate

css module
css in js
utility first css
element ui ant design
*color system*