### 默认登录页还原步骤
* 在 src\router\index.ts 路径下 先将原登录页解除注销
```js
  // {
  //   path: '/user',
  //   name: 'user',
  //   meta: { hideInMenu: true, title: 'pages.layouts.userLayout.title' },
  //   children: [
  //     {
  //       path: '/user/login',
  //       name: 'login',
  //       meta: { title: 'pages.login.accountLogin.tab' },
  //       component: () => import('@/views/login/login.vue')
  //     }
  //   ]
  // },
```


* 在 src\router\define-meta.ts 路径下 

```js
    let loginPath = '/tips'; 
    //修改为 
    let loginPath = '/user/login';
```



* 在 src\utils\request.ts 路径下 将unauthorizedHandler()函数中的 

```js
    router.push({
        name: 'tips'
    });
    //修改为
    router.push({
      name: 'login'
    });
```
