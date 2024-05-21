# 需求分析

UI
collapsable lists
  - collapsable
    - title
    - content
interaction
  - click title to expand or collapse
  - mode:accordin, click one to collapse the others


solution

```vue
<Collapse :title="items"></Collapse>

const items = [
  {
    {
      name:'vue',
      title: 'the joy of vue',
      content: 'text/vVDOm'
    }
  }
]
```

DOM strcture render properly
```vue
<Collapse>
  <CollapseItem>
    <h1>title</h1>
    <div>content</div>
  </CollapseItem>
</Collapse>

```


*确定属性*
```ts
interface ItemProps {
  id: String,
  title: string,
  disabled: boolean
}

interface collapseProps {
  // receive multi items ref['a', 'b']
  modelValue: string[],
  accordion:: boolean
}
```


*确定事件*
```ts
interface Emits {
  (e: 'change', values: string[]),
  (e: 'update:modelValue', values: string[])
}

```

*思路分析*
- maintain reactive arrary, represent expanded items
```ts
  ref(['a'])
```

- 点击item,观察它是否在数组中,进行添加或删除
```ts
['a']
add => ['a', 'b']
remove => ['a']
```
- item组件内部,观察它是否存在数组中,来判断是否打开或关闭
```ts
expandItems.include(props.title)
```


*vue基础*

v-model
```vue
<CutomInput v-model='searchText'/>

// euqivalent
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
```