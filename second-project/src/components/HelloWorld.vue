
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <input v-model.number='operand1'/>
    <input v-model.number='operand2'/>
    <br/>

    <button v-on:click='doAmount'>Сложение</button>
    <div>{{ operand1 }} + {{ operand2 }} = {{ resultAmount }}</div>
  
    <br/>
    <br/>
    <button v-on:click='doSubstraction'>Вычитание</button>
    <div>{{ operand1 }} - {{ operand2 }} = {{ resultSubstraction }}</div>
  
    <br/>
    <br/>
    <button v-on:click='doMultiplication'>Умножение</button>
    <div>{{ operand1 }} * {{ operand2 }} = {{ resultMultiplication }}</div>
  
    <br/>
    <br/>

    <button v-on:click='doExponential'>Возведение в степень</button>
    <div>{{ operand1 }} в степени {{ operand2 }} равно {{ resultExp }}</div>
  
    <br/>
    <br/>
    <button v-on:click='doDevide' :disabled='operand2==0'>Целочисленное деление</button>
    <div>{{ operand1 }} разделить на {{ operand2 }} равно {{ Math.floor(resultDev) }}</div>
    
    <br/>
    <br/>

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <br/>


    <template v-if="checked">
      <button v-for='button in buttons'
              :key='button'
              v-on:click='pressButton(button)'>
              {{ button }}
      </button>
      <button v-on:click='deleteSymbol'>←</button>

      <br/>

      <input type="radio" id="one" name="radio" value="operand1" v-model="picked">
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" name="radio" value="operand2" v-model="picked">
      <label for="two">Операнд 2</label>
    </template>

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
      operand1: '',
      operand2: '',
      resultAmount: 0,
      resultSubstraction: 0,
      resultMultiplication: 0,
      resultExp: 0,
      resultDev: 0,
      checked: true,
      buttons: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      picked: '',
    };  
  },

  methods: {
    doAmount () {
      this.resultAmount = Number(this.operand1) + Number(this.operand2);
    },

    doSubstraction () {
      this.resultSubstraction = this.operand1 - this.operand2;
    },

    doMultiplication () {
      this.resultMultiplication = this.operand1 * this.operand2;
    },
    
    doExponential () {
      this.resultExp = this.operand1 ** this.operand2;
    },

    doDevide () {
      this.resultDev = this.operand1 / this.operand2;
    },

    pressButton (button) {
      if (this.picked=='operand1') {
        this.operand1+=button;
      } else if (this.picked=='operand2') {
        this.operand2+=button;
      } else {
        console.log('Выберите операнд!')
      }
    },

    deleteSymbol () {
      if (this.picked=='operand1') {
        this.operand1 = this.operand1.slice(0, -1);
      } else if (this.picked=='operand2') {
        this.operand2 = this.operand2.slice(0, -1);
      } else {
        console.log('это конец')
      }
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
