import Vue from 'vue'
import { uid } from 'quasar'
const state = {
  tasks: {
    // ID1: {
    //   nome: 'Estudar',
    //   Data: '26/06/2021',
    //   Hora: '07:00',
    //   completed: false
    // },
    // ID2: {
    //   nome: 'Arrumar a casa',
    //   Data: '26/06/2021',
    //   Hora: '10:00',
    //   completed: false
    // },
    // ID3: {
    //   nome: 'Fazer Teste de GSI',
    //   Data: '05/07/2021',
    //   Hora: '17:00',
    //   completed: false
    // }
  }
}

const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  // eslint-disable-/next-line no-empty-pattern
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    // eslint-disable-next-line no-unused-vars
    const taskId = uid()
    const payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasksToDo: (state) => {
    const tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      const task = state.tasks[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state) => {
    const tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      const task = state.tasks[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
