<template>
  <td v-if="day.day == currentDateOfMonth && currentDateOfMonth != null">
    <div class="w-full h-full">
      <div
        class="
          flex
          items-center
          justify-center
          w-full
          rounded-full
          cursor-pointer
        "
      >
        <a
          tabindex="0"
          role="link"
          class="
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:calendar-blue-dark
            focus:bg-calendar-blue-dark
            hover:bg-calendar-blue-dark
            text-base
            w-8
            h-8
            flex
            items-center
            justify-center
            font-medium
            text-white
            bg-calendar-blue-dark
            rounded-full
          "
        >
          {{ String(day.day).padStart(2, '0') }}
        </a>
      </div>
    </div>
  </td>
  <td v-else>
    <div class="px-1 rounded-full w-8 h-8 py-1 cursor-pointer flex justify-center hover:bg-gray-300">
      <p
        v-if="day.blur"
        class="text-base text-gray-400 dark:text-gray-100 font-medium"
      >
        {{ String(day.day).padStart(2, '0') }}
      </p>
      <p
        v-else
        class="text-base text-calendar-blue-dark dark:text-gray-100 font-medium"
      >
        {{ String(day.day).padStart(2, '0') }}
      </p>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    day: Object,
    currentDateOfMonth: Number,
  },
}
</script>
