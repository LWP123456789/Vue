<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为：{{bigSum}}</h3>
		<h3>我在{{school}}学习{{subject}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1,
			}
		},
		computed:{
			// 靠程序员自己亲自去写计算属性
			// 	sum(){
			// 		return this.$store.state.sum
			// 	},
			// 	school(){
			// 		return this.$store.state.school
			// 	},
			// 	subject(){
			// 		return this.$store.state.subject
			// 	},
			//借助mapState生成计算属性,从state中读取数据。(数组写法)
				...mapState(['sum','school','subject']), //...对对象进行解构,ES6语法
			/**************************/
				// bigSum(){
				// 	return this.$store.getters.bigSum
				// },
			//借助mapGetters生成计算属性,从getters中读取数据。(数组写法)
				...mapGetters(['bigSum']),
		},
		methods: {
			increment(){
				// this.$store.dispatch('add',this.n)
				this.$store.commit('Add',this.n)
			},
			decrement(){
				// this.$store.dispatch('reduce',this.n)
				this.$store.commit('Reduce',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('addOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('addWait',this.n)
			},
		},
		mounted() {
			// const x = mapState(['sum','school','subject'])
			// console.log(x)
		}
	}
</script>

<style>
	button{
		margin-left: 5px;
	}
</style>