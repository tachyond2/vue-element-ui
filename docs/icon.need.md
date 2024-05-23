
## folder strcture
- components/
  - Icon/
    - types.ts
    - Icon.vue
    - sytles.css

# fontawesome icon 二次封装
*todo list/check list*
- [x]  introduce icon package 
  - npm i --save @fortawesome/fontawesome-svg-core Add SVG Core
  - npm i --save @fortawesome/free-solid-svg-icons  Add Icon Packages
  - npm i --save @fortawesome/vue-fontawesome@latest-3 Add the Vue Component
- [x] encapsulated component native props FortawesomeProps support  (原始属性支持) filterProps
- [x] expand props supprot (color, type) 拓展组件属性
  - type/color属性支持
  - delcared received attribute filter with lodash omit
