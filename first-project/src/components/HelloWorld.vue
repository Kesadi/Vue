
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <input v-model.number='operand1'/>
    <input v-model.number='operand2'/>
    <br/>
    <button v-on:click='doExponential'>Возведение в степень</button>
    <div>{{ operand1 }} в степени {{ operand2 }} равно {{ resultExp }}</div>
  
    <br/>
    <br/>
    <button v-on:click='doDevide' :disabled='operand2==0'>Целочисленное деление</button>
    <div>{{ operand1 }} разделить на {{ operand2 }} равно {{ Math.floor(resultDev) }}</div>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data () {
    return {
      operand1: 0,
      operand2: 0,
      resultExp: 0,
      resultDev: 0,
    };  
  },

  methods: {
    doExponential () {
      this.resultExp = this.operand1 ** this.operand2;
    },

    doDevide () {
      this.resultDev = this.operand1 / this.operand2;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
