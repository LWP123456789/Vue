<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'河南大学',
				address:'开封',
			}
		},
		methods: {
			demo(msgName,data){
				console.log('received',msgName,data)
			}
		},
		mounted() {
			// console.log('School',this)
			this.pubId = pubsub.subscribe('hello',this.demo)
		},
		beforeDestroy() {
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>