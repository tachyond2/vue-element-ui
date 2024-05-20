# button 按钮组件


*需求分析*
属性列表
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
= functional color

*css solution*
inline css

css preprocessor
- sass
- less
- stylus
- postcss
  - enable variable mappping
    - @each $type, $color in (primary...), ()
    - install: npm install --save-dev postcss-each-variables
    - usage: postcss([require('postcss-each-variables')])
    

css module

css in js

utility first css

*color system*