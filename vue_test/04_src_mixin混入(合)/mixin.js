export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    data() {
        return {
            z:300
        }
    },
}

export const mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}
