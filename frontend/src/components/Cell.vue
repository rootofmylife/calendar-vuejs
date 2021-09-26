<template>
  <div>
    <div
      v-if="week == 0 || week == 6"
      class="flex flex-row justify-between items-center text-xs pt-2 pl-2 pb-16 bg-indigo-100 hover:bg-indigo-300"
    >
      <span
        v-if="day.day == currentDateOfMonth && currentDateOfMonth != null"
        class="
          p-1
          text-white
          font-bold
          rounded-full
          bg-calendar-blue-dark
          justify-center
        "
      >
        {{ day.day }}
      </span>
      <span v-else-if="day.blur" class="p-1 font-medium text-gray-400">
        {{ day.day }}
      </span>
      <span v-else class="p-1 font-medium">
        {{ day.day }}
      </span>

      <div v-if="day.appointment.length > 0">
        <Notification
          :appointment="day.appointment"
          :x='x'
          :y='y'
        />
      </div>
    </div>
    <div v-else class="flex flex-row justify-between items-center text-xs pt-2 pl-2 pb-16 hover:bg-gray-300">
      <span
        v-if="day.day == currentDateOfMonth && currentDateOfMonth != null"
        class="
          p-1
          text-white
          font-bold
          rounded-full
          bg-calendar-blue-dark
          justify-center
        "
      >
        {{ day.day }}
      </span>
      <span v-else-if="day.blur" class="p-1 font-medium text-gray-400">
        {{ day.day }}
      </span>
      <span v-else class="p-1 font-medium text-opacity-5">
        {{ day.day }}
      </span>

      <div v-if="day.appointment.length > 0">
        <Notification
          :appointment="day.appointment"
          :x='x'
          :y='y'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '@src/components/Notification.vue'

export default {
  components: {
    Notification
  },
  props: {
    week: Number,
    day: Object,
    currentDateOfMonth: Number,
    x: Number,
    y: Number,
  },
}
</script>
