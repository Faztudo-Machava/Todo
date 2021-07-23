<template>
  <div class="row q-mb-sm"
           v-if="data"
           >
            <q-input
          outlined
          label="Hora"
          :value="hora"
          @input="$emit('update:hora', $event)"
          class="col">
            <template v-slot:append>
              <q-icon
                  v-if="hora"
                  name="close"
                  @click="$emit('update:hora','')"
                  class="cursor-pointer"
                />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time
                    :value="hora"
                    @input="$emit('update:hora', $event)"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          </div>
</template>

<script>
export default {
  name: 'modaltaskhora',
  props: ['hora', 'data']
}
</script>

<style>

</style>
