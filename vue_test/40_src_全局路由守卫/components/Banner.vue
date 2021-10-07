<template>
    <div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
	</div>
</template>

<script>
    export default {
        name:'Banner',
        methods: {
            back(){ 
                // this.$router.back()
                this.$router.go(-1) //go中的参数表示前进/后退几步
            },
            forward(){
                this.$router.forward()
            }
        },
    }
</script>

<style>

</style>