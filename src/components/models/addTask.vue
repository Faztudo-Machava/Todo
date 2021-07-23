<template>
  <div>
    <q-card>
      <modalheader>Adicionar tarefa</modalheader>
          <form @submit.prevent="submitForm">
            <q-card-section>
              <modaltaskname :name.sync="taskToSubmit.nome"
              ref="modalTaskName"/>
              <modaltaskdate :date.sync="taskToSubmit.Data" @clear="cleanData"/>
              <modaltaskhora :hora.sync="taskToSubmit.Hora"
              :data="taskToSubmit.Data"/>
        </q-card-section>
      <q-card-actions align="right">
        <modaltaskbutton>Adicionar</modaltaskbutton>
      </q-card-actions>
          </form>
      </q-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import modalheader from './Shared/modalHeader.vue'
import modaltaskname from './Shared/modalTaskName.vue'
import modaltaskdate from './Shared/modaltaskdate.vue'
import Modaltaskhora from './Shared/modaltaskhora.vue'
import Modaltaskbutton from './Shared/modaltaskbutton.vue'
export default {
  data () {
    return {
      taskToSubmit: {
        nome: '',
        Data: '',
        Hora: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      this.$refs.modalTaskName.$refs.nome.validate()
      if (!this.$refs.modalTaskName.$refs.nome.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    cleanData () {
      this.taskToSubmit.Data = ''
      this.taskToSubmit.Hora = ''
    }
  },
  components: {
    modalheader,
    modaltaskname,
    modaltaskdate,
    Modaltaskhora,
    Modaltaskbutton
  }
}
</script>

<style>

</style>
