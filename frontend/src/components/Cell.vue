<template>
  <p v-if="week == 0 || week == 6" class="text-xs text-custom-4 pt-2 pl-2 pb-16 bg-indigo-100">
    <span v-if="day == currentDateOfMonth && currentDateOfMonth != null" class="p-1 text-white font-bold rounded-full bg-calendar-blue-dark justify-center">
        {{ day }}
    </span>
    <span v-else class="p-1">
        {{ day }}
    </span>
  </p>
  <p v-else class="text-xs text-custom-4 pt-2 pl-2 pb-16">
    <span v-if="day == currentDateOfMonth && currentDateOfMonth != null" class="p-1 text-white font-bold rounded-full bg-calendar-blue-dark">
        {{ day }}
    </span>
    <span v-else class="p-1">
        {{ day }}
    </span>
  </p>
</template>

<script>
export default {
    props: {
        week: Number,
        day: Number,
        currentDateOfMonth: Number,
    }
}
</script>