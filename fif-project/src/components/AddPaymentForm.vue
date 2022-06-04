<template>
    <div :class="[$style.wrapper]" v-show="btn">
        <input placeholder="Сумма" v-model="amount" />
        <input placeholder="Категория" v-model="type" />
        <input placeholder="Дата" v-model="date" />
        <button :class="[$style.btn]" @click="onSaveClick">ADD +</button>
    </div>
</template>


<script>
export default {
    name: 'AddPaymentForm',
    props: {
        btn: {
            type: Boolean
        },
        routeParams: {
            type: Object
        },
        
    },



    data () {
        return {
            amount: '',
            type: '',
            date: '',
        }
    },

    computed: {
        getCurrentDate () {
            const today = new Date();
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },

    methods: {
        onSaveClick () {
            const data = {
                value: +this.amount,
                category: this.type,
                date: this.date || this.getCurrentDate,
            }
            this.$emit('addNewPayment', data)
        },

    },


    mounted () {
        // console.log(this.$route.params.type, this.$route.query.value)
        
        if(!this.$route.params.type || !this.$route.query.value) return
        else {
            this.type = this.$route.params.type
            this.amount = this.$route.query.value
            this.onSaveClick()
        }
    },

    watch: {
        $route () {
            console.log(this.$route)
            this.type = this.$route.params.type
            this.amount = this.$route.query.value
            this.onSaveClick()
        }
    }

    
}
</script>

<style lang="scss" module>
  .wrapper {
    color: red;
  }

  .btn {
    color: white;
    background-color: #4CAF50;
    border: none;
    font-size: 10px;
    padding: 6px 20px;
  }
</style>