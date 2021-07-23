<template>
  <div>
    <q-card>
      <modalheader>Atualizar tarefa</modalheader>
          <form @submit.prevent="submitForm">
            <q-card-section>
              <modaltaskname :name.sync="taskToSubmit.nome"
              ref="modalTaskName"/>
              <modaltaskdate :date.sync="taskToSubmit.Data" @clear="cleanData"/>
              <modaltaskhora :hora.sync="taskToSubmit.Hora"
              :data="taskToSubmit.Data"/>
        </q-card-section>
      <q-card-actions align="right">
        <modaltaskbutton>Atualizar</modaltaskbutton>
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
  props: ['task', 'id'],
  data () {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm () {
      this.$refs.modalTaskName.$refs.nome.validate()
      if (!this.$refs.modalTaskName.$refs.nome.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      // eslint-disable-next-line no-undef
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
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
  },
  mounted () {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style>

</style>
