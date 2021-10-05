//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions--用于响应组件中的动作
const actions = {
    add(context,value){     //上下文对象
        console.log('action中的add被调用了',context,value)
        context.commit('Add',value) //作大写区分,编程习惯
    },
    reduce(context,value){
        context.commit('Reduce',value)
    },
    addOdd(context,value){     //上下文对象
        console.log('action中的add被调用了',context,value)
        if(context.state.sum % 2){
            context.commit('Add',value) 
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('Add',value)
        },500)
    },
}

//准备mutations--用于操作数据(state)
const mutations = {
    Add(state,value){
        console.log('mutation中的Add被调用了',state,value)
        state.sum += value
    },
    Reduce(state,value){
        state.sum -= value
    },
}

//准备state--用于存储数据
const state = {
    sum:0
}

//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// // 暴露“导出”store
// export default store