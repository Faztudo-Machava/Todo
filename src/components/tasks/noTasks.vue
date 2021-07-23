<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon
      name="check"
      color="primary"/>
    </template>
    No momento não existe nenhuma tarefa por cumprir.
    <template v-slot:action>
      <q-btn
      flat
      color="primary"
      label="Adicionar tarefa"
      @click="$root.$emit('showAddTask', $event)">
      </q-btn>
    </template>
  </q-banner>
</template>

<script>
export default {

}
</script>

<style>

</style>
