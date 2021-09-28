<template>
	<div>
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一个混合
	import {mixin,mixin2} from '../mixin'
	export default {
		name:'School',
		data() {
			return {
				name:'河南大学',
				// name:'乐培',
				address:'北京',
				// age:18
			}
		},
		mixins:[mixin,mixin2]
	}
</script>
