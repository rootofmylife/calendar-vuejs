<template>
  <p v-if="week == 0 || week == 6" class="text-xs pt-2 pl-2 pb-16 bg-indigo-100">
    <span v-if="day.day == currentDateOfMonth && currentDateOfMonth != null" class="p-1 text-white font-bold rounded-full bg-calendar-blue-dark justify-center">
        {{ day.day }}
    </span>
    <span v-else-if="day.blur" class="p-1 font-medium text-gray-400">
        {{ day.day }}
    </span>
    <span v-else class="p-1 font-medium">
        {{ day.day }}
    </span>
  </p>
  <p v-else class="text-xs pt-2 pl-2 pb-16">
    <span v-if="day.day == currentDateOfMonth && currentDateOfMonth != null" class="p-1 text-white font-bold rounded-full bg-calendar-blue-dark  justify-center">
        {{ day.day }}
    </span>
    <span v-else-if="day.blur" class="p-1 font-medium text-gray-400">
        {{ day.day }}
    </span>
    <span v-else class="p-1 font-medium text-opacity-5">
        {{ day.day }}
    </span>
  </p>
</template>

<script>
export default {
    props: {
        week: Number,
        day: Object,
        currentDateOfMonth: Number,
    }
}
</script>