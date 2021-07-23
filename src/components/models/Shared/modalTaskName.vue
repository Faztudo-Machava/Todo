<template>
  <div class="row q-mb-sm">
            <q-input
            outlined
            autofocus
            :value="name"
            @input="$emit('update:name', $event)"
            ref="nome"
            :rules="[val => !!val || 'Esse campo é obrigatorio']"
            label="Nome da tarefa"
            class="col">
              <template v-slot:append>
                <q-icon
                  v-if="name"
                  name="close"
                  @click="$emit('update:name', '')"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
</template>

<script>
export default {
  name: 'modaltaskname',
  props: ['name']
}
</script>

<style>

</style>
