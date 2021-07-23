<template>
  <div class="row q-mb-sm">
            <q-input
            outlined
            label="Data"
            :value="date"
            @input="$emit('update:date', $event)">
            <template v-slot:append>
              <q-icon
                  v-if="date"
                  name="close"
                  @click="$emit('clear')"
                  class="cursor-pointer"
                />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date
                    :value="date"
                    @input="$emit('update:date', $event)"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          </div>
</template>

<script>
export default {
  name: 'modaltaskdate',
  props: ['date']
}
</script>

<style>

</style>
