<template>
  <h2>About组件内容</h2>
</template>

<script>
    export default {
        name:'About',
        beforeDestroy() {
          console.log('About组件即将被销毁了')
        },
    }
</script>

