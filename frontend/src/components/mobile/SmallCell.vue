<template>
  <td v-if="day == currentDateOfMonth && currentDateOfMonth != null">
    <div class="w-full h-full">
      <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
        <a
          tabindex="0"
          role="link"
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base
            w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">
          {{ String(day).padStart(2, '0') }}
        </a>
      </div>
    </div>
  </td>
  <td v-else>
    <div class="px-1 py-1 cursor-pointer flex w-full justify-center">
      <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
          {{ String(day).padStart(2, '0') }}
      </p>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    day: Number,
    currentDateOfMonth: Number,
  },
};
</script>
