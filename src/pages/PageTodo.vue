<template>
  <q-page class="q-pa-md">

    <no-tasks
    v-if="!Object.keys(tasksToDo).length"
    ></no-tasks>

    <tasks-to-do
    v-else
    :tasksToDo="tasksToDo"/>
    <tasks-completed
    v-if="Object.keys(tasksCompleted).length"
    :tasksCompleted="tasksCompleted" />
    <div class="absolute-button text-center q-mb-lg">
      <q-btn
       round
       color="primary"
       size="24px"
       icon="add"
      @click="showAddTask = true"
      class="q-mt-lg"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>
<script>
import { mapGetters } from 'vuex'
import NoTasks from '../components/tasks/noTasks.vue'
import TasksCompleted from '../components/tasks/TasksCompleted.vue'
import TasksToDo from '../components/tasks/TasksToDo.vue'
export default {
  computed: {
    ...mapGetters('tasks', ['tasksToDo', 'tasksCompleted'])
  },
  data () {
    return {
      showAddTask: false
    }
  },
  mounted () {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'add-task': require('components/models/addTask.vue').default,
    TasksToDo,
    TasksCompleted,
    NoTasks
  }
}
</script>
<style>

</style>
