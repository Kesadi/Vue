import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const pages = {
  page1: [
    {id: 1, date: '20.03.2020', category: 'Food', value: 169},
    {id: 2, date: '21.03.2020', category: 'Navigation', value: 50},
    {id: 3, date: '22.03.2020', category: 'Sport', value: 450}
  ],
  page2: [
    {id: 4, date: '23.03.2020', category: 'Entertaiment', value: 669},
    {id: 5, date: '24.03.2020', category: 'Education', value: 50},
    {id: 6, date: '25.03.2020', category: 'Food', value: 450}
  ],
  page3: [
    {id: 7, date: '23.03.2020', category: 'Entertaiment', value: 669},
    {id: 8, date: '24.03.2020', category: 'Education', value: 50},
    {id: 9, date: '25.03.2020', category: 'Food', value: 450}
  ],
  page4: [
    {id: 10, date: '23.03.2020', category: 'Entertaiment', value: 669},
    {id: 11, date: '24.03.2020', category: 'Education', value: 50},
    {id: 12, date: '25.03.2020', category: 'Food', value: 450}
  ],
  page5: [
    {id: 13, date: '23.03.2020', category: 'Entertaiment', value: 669},
    {id: 14, date: '24.03.2020', category: 'Education', value: 50},
    {id: 15, date: '25.03.2020', category: 'Food', value: 450}
  ],
  page6: [
    {id: 16, date: '23.03.2020', category: 'Entertaiment', value: 33},
    {id: 17, date: '24.03.2020', category: 'Education', value: 333},
    {id: 18, date: '25.03.2020', category: 'Food', value: 3333}
  ],
}

const mutations = { // ПОМЕСТИТЬ ДАННЫЕ В ХРАНИЛИЩЕ
  setPaymentsListData(state, payload) { //напишем мутацию, которая положит в хранилище данные - массив из трех объектов
    state.paymentList = payload    // Кладем в хранилище paymentList данные payload. Но пока это не сработает, т.к. эту мутацию нужно вызвать в компоненте App.vue
  },
  // addDataToPaymentList(state, payload) { //напишем мутацию, которая дополнит хранилище paymentList одним и более элементом
  //   state.paymentList.push(payload)    //payload - это тот самый элемент, который добавляется. Далее мутацию нужно вызвать в компоненте AddPaymentForm
  // },

  addDataToPaymentList(state, {res, pNumber}) { //напишем мутацию, которая дополнит хранилище paymentList одним и более элементом
      //payload - это тот самый элемент, который добавляется. Далее мутацию нужно вызвать в компоненте AddPaymentForm
   Vue.set( state.paymentList[0], "page"+pNumber, res)
  },


  changePaymentListFirstElement(state, payload) {  // мутация, которая меняет первый элемент в хранилище
    Vue.set(state.paymentList, 0, payload)    // state.paymentList - где меняем (в хранилище);  0 - номер элемента в массиве; payload - что будет вместо него
  }
}

 const getters = {     // ПОЛУЧИТЬ ДАННЫЕ ИЗ ХРАНИЛИЩА
  getPaymentsList: state => state.paymentList, // геттер с именем getPaymentsList готов отдать массив paymentList
                                              // также здесь можно что-нибудь вычислить
                                              // отловим его в компоненте App. Там его ОБЯЗАТЕЛЬНО поместить в computed!
getObjectFromState: state => state.paymentList[0]
    // state.paymentList.find(page => page.page+`${pNumber}`)
    
    // state.paymentList.find(page => `page${pNumber}` === pNumber)
  //store.getters.getTodoById(2)
}


export default new Vuex.Store({ //здесь перечисляем что у нас есть: хранилище, мутации, геттеры и т. д.
  state: {
    paymentList: [
      {
        
      },

    ] // 1. данные, которые мы изначально помещаем в хранилище

  },
  getters,
  mutations,       // синхронные. ТОЛЬКО МУТАЦИИ реактивно изменяют состояние хранилища - state!!!
    
  
  actions: {        // асинхронные. В рамках actions можно делать запросы на бэкенд, вызывать другие actions
    fetchData({commit}) {  //commit - аргумент, чтобы потом вызвать мутацию setPaymentsListData и положить туда результат; fetchData - асинхронная ф-ция=action
      return new Promise((resolve)=> {
        setTimeout(()=> {
          const items = []
          for (let i=1; i<=20; i++) {
            items.push({
              date: '28.03.2020',
              category: 'Food',
              value: 1000,
            })
          } resolve(items)
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
        //или можно дальше работать с этим результатом, вызвать новый экшн: НЕ ЗАБЫТЬ в fetchData В АРГУМЕНТ ПЕРЕДАТЬ dispatch
        // dispatch('updateObj', res) 
      })
    },// теперь нам нужно вызвать этот экшн в компоненте App

    //updateObj(context, arg) {  context - это что мы будем делать с результатом(мутировать, геттер); arg - это res
    //context.commit('')
    //}

     fetchProducts(context, pNumber) {  //commit - аргумент, чтобы потом вызвать мутацию setPaymentsListData и положить туда результат; fetchData - асинхронная ф-ция=action
      return new Promise((resolve)=> {
        setTimeout(()=> {
         const myProd = pages["page"+pNumber]
          console.log(myProd)
          
          resolve(myProd)
        }, 500)
      }).then(res => {
        context.commit('addDataToPaymentList', {res, pNumber})        
      })
    }

  }, 
  modules: {
  }
})
