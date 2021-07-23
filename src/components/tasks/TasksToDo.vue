<template>
<div>
  <list-banner
  bgColor="bg-orange-4">Tarefas por cumprir</list-banner>
  <q-list bordered>
      <task
      v-for="(task, key) in tasksToDo"
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
  props: ['tasksToDo']
}
</script>

<style>

</style>
