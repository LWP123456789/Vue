<template>
	<div>
		<Student name="李四" sex="女" :age="18"/><!-- 这里传入组件格式没有逗号 是空格 -->
		<Student name="乐培" sex="男" :age="20"/><!-- 这里传入的类型是字符串 不能去掉字符串(破坏结构)-->
		<Student name="伟培" sex="男" :age="18+1"/><!-- v-bind=后是js表达式,不是字符串,但是仍然不能去掉双引号破坏结构-->
	</div>
</template>

<script>
	//引入School组件
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student},
	}
</script>