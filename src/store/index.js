import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedVar: 'allItems',
    todos: [
/*       {
        'id': 1,
        'name': 'Start Vue Project',
        'completed': false,
        'edit': false,
      },
      {
        'id': 2,
        'name': 'Finish Vue Project',
        'completed': false,
        'edit': false,
      }, */
    ]
  },
  mutations: {
    addItem: (state, item) => {
      if(item.name.length >= 65){
        alert(`Your input ${item.name.substring(0, 15)}... is very long. Perhaps shorten it a little bit!\n10-59 characters will be best! :)`)
      }
      state.todos.push({
        'id': item.id,
        'name': item.name,
        'completed': item.completed,
        'edit': item.edit
      })
    },
    doneEdit(state, todo) {
      console.log('hello')
      const i = state.todos.findIndex(item => item.id == todo.id)
      state.todos.splice(i, 1, {
        'id': todo.id,
        'name': todo.name,
        'edit': todo.edit,
      })
    },
    deleteItem: (state, id) => {
      const i = state.todos.findIndex(item => item.id == id);
      state.todos.splice(i+1, 1);
    },
    selectedfunc: (state, value) => {
      state.selectedVar = value;
    },
    clearCompleted: state => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    }
  },
  actions: {
  },
  getters: {
    totalItems(state) {
      return state.todos.filter(item => !item.completed).length
    },
    todosSelected(state) {
      if (state.selectedVar == 'allItems') {
        return state.todos;
      } else if (state.selectedVar == 'activeItems') {
        return state.todos.filter(todo => !todo.completed);
      } else if (state.selectedVar == 'completedItems') {
        return state.todos.filter(todo => todo.completed);
      }
      return state.todos;
    },
  }
})
