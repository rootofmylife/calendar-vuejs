<template>
  <div class="min-h-screen">
    <div class="flex items-center justify-center mt-10 px-2">
      <div class="max-w-sm w-full rounded-md shadow-lg md:p-5 p-3 bg-white">
        <!-- Title -->
        <div class="px-4 flex items-center justify-between leading-8">
          <div class="flex flex-row justify-center px-12">
            <button
              class="mr-3 calendar-blue-dark focus:text-calendar-blue-dark hover:text-gray-400"
              aria-label="calender backward"
              @click="prevMonth()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-left"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <a
              tabindex="0"
              role="link"
              class="
                cursor-pointer
                text-base text-calendar-blue-dark
                font-bold
                hover:text-calendar-blue-light
              "
            >
              {{ currentDay }}
            </a>
            <button
              class="ml-3 calendar-blue-dark focus:calendar-blue-dark hover:text-gray-400"
              aria-label="calender forward"
              @click="nextMonth()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
        <!-- End Title -->

        <!-- Calendar -->
        <div class="flex items-center justify-between pt-8 overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th v-for="(d, index) in daysInWeek" :key="index">
                  <div class="w-full flex justify-center">
                    <p
                      class="
                        text-base
                        font-medium
                        text-center text-gray-800
                        dark:text-gray-100
                      "
                    >
                      {{ d }}
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index1) in dateOfMonth" :key="index1">
                <td v-for="(item2, index2) in item" :key="index2">
                  <SmallCell
                    :day="item2"
                    :currentDateOfMonth="currentDateOfMonth"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End Title -->

        <!-- Event -->
        <div class="mt-4 border-t-2 border-gray-400">
          <div class='flex flex-row items-center mt-4'>
            <p class="font-bold text-xl mr-4">
              Upcoming Events
            </p>
            <div class="relative inline-flex">
              <svg class="w-2 h-2 absolute top-0 right-0 m-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
              <select class="border border-gray-300 rounded-full text-gray-600 h-8 pl-3 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Today</option>
                <option>Future</option>
              </select>
            </div>
          </div>
          
          <dir v-for="(item, index) in eventDate" :key="index" class="p-0">
            <Card
              :event='item'
            />
          </dir>
        </div>
        <!-- End Event -->
      </div>
    </div>
  </div>
</template>

<script>
import SmallCell from '@src/components/mobile/SmallCell.vue'
import Card from '@src/components/Card'

export default {
  data: () => ({
    daysInWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }),
  props: {
    currentDay: String,
    selectedMonth: Date,
    dateOfMonth: Array,
    currentDateOfMonth: Number,
    eventDate: Array,
  },
  components: {
    SmallCell,
    Card,
  },
  methods: {
    prevMonth() {
      this.$emit(
        'update:currentDay',
        this.$utils.time.getCurrentDay(
          this.$utils.time.subOneMonth(this.selectedMonth)
        )
      )
      this.$emit(
        'update:selectedMonth',
        this.$utils.time.subOneMonth(this.selectedMonth)
      )
      this.$emit(
        'update:dateOfMonth',
        this.$utils.time.getPreviousMonth(
          this.$utils.time.subOneMonth(this.selectedMonth)
        )
      )
      if (
        this.$utils.time.checkMonth(
          this.$utils.time.subOneMonth(this.selectedMonth)
        )
      ) {
        this.$emit(
          'update:currentDateOfMonth',
          this.$utils.time.getCurrentDateOfMonth()
        )
      } else {
        this.$emit('update:currentDateOfMonth', null)
      }
    },
    nextMonth() {
      this.$emit(
        'update:currentDay',
        this.$utils.time.getCurrentDay(
          this.$utils.time.addOneMonth(this.selectedMonth)
        )
      )
      this.$emit(
        'update:selectedMonth',
        this.$utils.time.addOneMonth(this.selectedMonth)
      )
      this.$emit(
        'update:dateOfMonth',
        this.$utils.time.getNextMonth(
          this.$utils.time.addOneMonth(this.selectedMonth)
        )
      )
      if (
        this.$utils.time.checkMonth(
          this.$utils.time.addOneMonth(this.selectedMonth)
        )
      ) {
        this.$emit(
          'update:currentDateOfMonth',
          this.$utils.time.getCurrentDateOfMonth()
        )
      } else {
        this.$emit('update:currentDateOfMonth', null)
      }
    },
  },
}
</script>
