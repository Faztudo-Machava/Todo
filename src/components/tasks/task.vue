<template>
  <div>
    <q-item
        clickable
        v-ripple
        @click="updateTask({ id: id, updates: {completed: !task.completed}})"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      >
        <q-item-section side top>
          <q-checkbox :value="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}"> {{ task.nome }} </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon v-if="task.Data" name="event" />
            </div>
            <div class="column">
              <q-item-label caption>
              {{ task.Data }}
              </q-item-label>
              <q-item-label caption>
                <small class="float-right">{{ task.Hora }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <q-btn
            @click.stop="showEditTask = true"
            flat
            round
            dense
            color="primary"
            icon="edit"
            />
            <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            dense
            color="red"
            icon="delete"
            />
          </div>
        </q-item-section>
      </q-item>
    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false"/>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditTask from '../models/editTask.vue'
export default {
  name: 'task',
  props: ['task', 'id'],
  data () {
    return {
      showAddTask: false,
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'confirm',
        message: 'Tem certeza que deseja eliminar a tarefa?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    EditTask

  }
}
</script>

<style>

</style>
