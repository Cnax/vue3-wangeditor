# vue3-wangeditor-easy

## 基于vue3.x和wangeditor二次封装

### 安装

``` bash
  npm i vue3-wangeditor-easy -S
```

### 使用

一、全局使用

```javascript
import wangeditor from 'vue3-wangeditor-easy'
Vue.use(wangeditor)
```

二、按需引入
```javascript
<template>
  <div>
    <wangeditor v-model="content" disabled />
  </div>
</template>

<script>
import wangeditor from 'vue3-wangeditor-easy'
export default {
  components: { wangeditor },
  data () {
    return {
      content: '<p>1212121<br>ww</p>'
    }
  }
}
</script>

```

### Props
| 方法名       | 说明 |         备注 |
| :--------- | :--: | -----------: |
| v-model    |  编辑器内容  | 方便设置和获取值 |
| disabled   |  禁用编辑器  |   - |
| openXss    |  开启xss防护  | 开启后从v-model中获取的值会被专业的工具 xss 过滤恶意脚本 |
| config     |编辑器配置|  示例{ height:500 }，具体可以查看 [wangeditor](https://doc.wangeditor.com/) 的配置项 |

### Event
| 事件名       | 说明 |         参数 |
| :--------- | :--: | -----------: |
| onChang    |  编辑器内容变化  | function(html) |

