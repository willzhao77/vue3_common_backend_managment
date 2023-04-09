# vue3_basic_login_v1

This template should help get you started developing with Vue 3 in Vite.

Including below features:
1. reset style
2. turn off Eslint multi word component rule.
3. scss
4. elemenbt UI plus
5. fontawesome
6. Axios
7. basic login
8. form validation
9. Vue proxy
10. Axios Encapsulation
11. API Encapsulation


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



# Steps:

# init project
```
npm init vue@latest
```

# clean update files
# install scss
```
npm install scss
```

#reset style

https://meyerweb.com/eric/tools/css/reset/

import reset style in App.vue

```
<style lang="scss" scoped>
	@import url('./assets/reset.css');
</style>
```

#install element UI Plus

```
npm install element-plus --save
```
And finish config


# install fontawesome

```
npm i --save @fortawesome/fontawesome-svg-core

# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

# for Vue 3.x
npm i --save @fortawesome/vue-fontawesome@latest-3

```
And finish config

#install Axios

```
main.js
import Axios from 'axios'

const app = createApp(App)

/* 挂载全局对象 start */
app.config.globalProperties.$http = Axios
app.config.globalProperties.$utils = Utils
/* 挂载全局对象 end */
```

# use axios

```
import { ref, reactive, getCurrentInstance } from 'vue'

// 方法一 start
      const currentInstance = getCurrentInstance()
      const { $http, $message, $route } = currentInstance.appContext.config.globalProperties
      
      function getList() {
        $http({
          url: '/api/v1/posts/list'
        }).then(res=>{
          let { data } = res.data
          console.log(data)
        })
      }
      // 方法一 end
      
      // 方法二 start
      const { proxy } = getCurrentInstance()
      
      function getData() {
        proxy.$http({
          url: '/api/v1/posts/list'
        }).then(res=>{
          let { data } = res.data
          console.log(data)
        })
      }
      // 方法二 end
```
方法一：通过getCurrentInstance方法获取当前实例，再根据当前实例找到全局实例对象appContext，进而拿到全局实例的config.globalProperties。

方法二：通过getCurrentInstance方法获取上下文，这里的proxy就相当于this。


# turn off Eslint multi word component rule.
在.eslintrc.js中配置：
```
rules: {
        'vue/multi-word-component-names': 0,
      },
```

# create basic login page.  Update route.

# basic login,  or custom validation.

# 简单封装方法

#进一步封装 axios 方法
1. 代理设置
2. 封装axios 方法到http.js
3. API 封装
