<template>
  <div class="q-pt-lg">
    <list-banner
    bgColor="bg-green-4">Tarefas cumpridas</list-banner>
    <q-list bordered>
      <task
      v-for="(task, key) in tasksCompleted"
        v-bind:key="key"
        :task="task"
        :id="key"></task>
    </q-list>
  </div>
</template>

<script>
import ListBanner from '../models/Shared/listBanner.vue'
import task from './task.vue'
export default {
  components: { task, ListBanner },
  props: ['tasksCompleted']
}
</script>

<style>

</style>
