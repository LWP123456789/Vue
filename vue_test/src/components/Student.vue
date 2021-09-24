<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生姓名：{{sex}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				msg:'我是河南大学的一个学生',
				// name:'乐培',
				// sex:'男',
				// age:18
			}
		},
		// props:['name','sex','age'] //简单声明接收

		//接收的同时对数据进行类型限制
		// props:{
		// 	name:String,
		// 	age:Number,
		// 	sex:String
		// }

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true//name是必要的
				//required和default一般不会同时出现
			},
			age:{
				type:Number,
				default:99	//默认值
			},
			sex:{
				type:String,
				required:true
			}
		}
	}
</script>
