<template>
	<div class="app">
		<h1>{{msg}}{{studentName}}</h1>
		<!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 (第一种写法,使用@或v-on)-->
		<!-- <Student v-on:lep101="getStudentName"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 (第二种写法,使用ref)-->
		<Student ref="student" @click.native="show"/>
		<hr>
		<!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>

		<!-- <Student ref="student" @click.native="show" /> -->
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'


	export default {
		name:'App',
		components:{Student,School},
		data() {
			return {
				msg:'你好啊!',
				studentName:''
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名:',name)
			},
			getStudentName(name){ //括号后面可以继续用形参去接,一般用数组接收(ES6语法 ...params )
				console.log('App收到了学生名:',name)
				this.studentName = name
			},
			show(){
				alert(123)
			}
		},
		mounted() {
			this.$refs.student.$on('lep101',this.getStudentName)
			// this.$refs.student.$once('lep101',this.getStudentName) //自定义事件只生效一次
		},
	}
</script>

<style scoped>
	.app{
		background-color:gray;
		padding: 5px;
	}
</style>