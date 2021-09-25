<template>
  <div id="app">
    <div class="bg-calendar-tile px-5 text-calendar-blue-dark">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div class="col-span-3">
          <SmallCalendar
            :currentDay.sync="currentDay"
            :selectedMonth.sync="selectedMonth"
            :dateOfMonth.sync="dateOfMonth"
            :currentDateOfMonth.sync="currentDateOfMonth"
          />
        </div>
        <div class="col-span-9 hidden md:block">
          <Calendar
            :currentDay.sync="currentDay"
            :selectedMonth.sync="selectedMonth"
            :dateOfMonth.sync="dateOfMonth"
            :currentDateOfMonth.sync="currentDateOfMonth"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "@src/components/Calendar.vue";
import SmallCalendar from "@src/components/mobile/SmallCalendar.vue";

export default {
  name: "App",
  created() {
    this.currentDay = this.$utils.time.getCurrentDay(); // Show current time e.g. Saturday, September 25
    this.selectedMonth = this.$utils.time.getMonth(); // Show selected month
    this.dateOfMonth = this.$utils.time.numberOfDateInMonth(); // Count how many days in month
    this.currentDateOfMonth = this.$utils.time.getCurrentDateOfMonth(); // Use for highlight current day
  },
  data() {
    return {
      currentDay: null,
      selectedMonth: null,
      dateOfMonth: null,
      currentDateOfMonth: null,
    }
  },
  components: {
    Calendar,
    SmallCalendar,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
