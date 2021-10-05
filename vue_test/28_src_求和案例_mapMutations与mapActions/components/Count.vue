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
		<button @click="Add(n)">+</button>
		<button @click="Reduce(n)">-</button>
		<button @click="addOdd(n)">当前求和为奇数再加</button>
		<button @click="addWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1,
			}
		},
		computed:{
			//借助mapState生成计算属性,从state中读取数据。(数组写法)
				...mapState(['sum','school','subject']), //...对对象进行解构,ES6语法
			//借助mapGetters生成计算属性,从getters中读取数据。(数组写法)
				...mapGetters(['bigSum']),
		},
		methods: {
			// 程序员亲自写方法
			// increment(){
			// 	// this.$store.dispatch('add',this.n)
			// 	this.$store.commit('Add',this.n)
			// },
			// decrement(){
			// 	// this.$store.dispatch('reduce',this.n)
			// 	this.$store.commit('Reduce',this.n)
			// },

			//借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象写法)
			// ...mapMutations({increment:'Add',decrement:'Reduce'}),

			// 借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(数组写法)
			...mapMutations(['Add','Reduce']),

			/* ******************************************************** */
			// incrementOdd(){
			// 	this.$store.dispatch('addOdd',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('addWait',this.n)
			// },
			//借助mapActions生成对应的方法,方法中会调用commit去联系mutations(对象写法)
			// ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),

			// 借助mapActions生成对应的方法,方法中会调用commit去联系mutations(数组写法)
			...mapActions(['addOdd','addWait'])
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