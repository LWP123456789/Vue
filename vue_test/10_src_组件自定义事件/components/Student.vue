<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生名给App</button>
		<button @click="unbind">解绑lep101事件</button>
		<button @click="death">销毁当前Student组件的实例</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'乐培',
				sex:'男',
			}
		},
		methods: {
			sendStudentName(){
				//触发Student组件实例身上的lep101事件
				this.$emit('lep101',this.name)
			},
			unbind(){
				// this.$off('lep101')//解绑一个自定义事件
				// this.$off(['lep101','lwp']) //解绑多个自定义事件
				this.$off()  //解绑所有的自定义事件
			},
			death(){
				this.$destroy() //销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效
			}
		},
	}
</script>

<style scoped>
	.student{
		background-color: orange;
		padding: 5px;
		margin-top: 30px;
	}
</style>