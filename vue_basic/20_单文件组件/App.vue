<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
	// const school = Vue.extend({
	// 	data() {
	// 		return {
				
	// 		}
	// 	},
	// 	methods: {
			
	// 	},
	// })
	// export default school //ES6语法之一

	
</script>
