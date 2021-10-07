<template>
  <h2>About组件内容</h2>
</template>

<script>
    export default {
        name:'About',
        beforeDestroy() {
          console.log('About组件即将被销毁了')
        },
        //通过路由规则,进入该组件时被调用
        beforeRouteEnter (to, from, next) {
          // console.log('About---beforeRouteEnter',to)
          console.log('About---beforeRouteEnter',to,from)
          if(to.meta.isAuth){//判断是否需要鉴权
              if(localStorage.getItem('school') === 'henu'){
                  // document.title = to.meta.title
                  next()
              }else{
                  alert('学校名不对,无权限查看!')
              }
          }else{
              // document.title = to.meta.title
              next()
          }
        },

        //通过路由规则,离开该组件时被调用
        beforeRouteLeave (to, from,next) {
          console.log('About---beforeRouteLeave',to,from)
          next()
        }
    }
</script>

