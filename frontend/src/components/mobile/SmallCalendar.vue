<template>
  <div class="min-h-screen">
    <div class="flex items-center justify-center mt-10 px-4">
      <div class="max-w-sm w-full rounded-md shadow-lg md:p-8 p-5 bg-white">
        <div class="px-4 flex items-center justify-between leading-8">
          <div class="flex items-center">
            <button
              class="mr-3 text-gray-800 focus:text-gray-400 hover:text-gray-400"
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
            <a tabindex="0" role="link"
              class="cursor-pointer text-base text-calendar-blue-dark font-bold hover:text-calendar-blue-light">
              {{ currentDay }}
            </a>
            <button
              class="ml-3 text-gray-800 dark:text-gray-100 focus:text-gray-400 hover:text-gray-400"
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
        <div class="flex items-center justify-between pt-8 overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th v-for="(d, index) in daysInWeek" :key="index">
                  <div class="w-full flex justify-center">
                    <p class=" text-base font-medium text-center text-gray-800 dark:text-gray-100">
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
      </div>
    </div>
  </div>
</template>

<script>
import SmallCell from "@src/components/mobile/SmallCell.vue";

export default {
  data: () => ({
        daysInWeek: [
            'Su',
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa',
        ],
    }),
  props: {
    currentDay: String,
    selectedMonth: Date,
    dateOfMonth: Array,
    currentDateOfMonth: Number,
  },
  components: {
    SmallCell,
  },
  methods: {
    prevMonth() {
            this.$emit('update:currentDay', this.$utils.time.getCurrentDay(this.$utils.time.subOneMonth(this.selectedMonth)));
            this.$emit('update:selectedMonth', this.$utils.time.subOneMonth(this.selectedMonth));
            this.$emit('update:dateOfMonth', this.$utils.time.getPreviousMonth(this.$utils.time.subOneMonth(this.selectedMonth)));
            if (this.$utils.time.checkMonth(this.$utils.time.subOneMonth(this.selectedMonth))) {
                this.$emit('update:currentDateOfMonth', this.$utils.time.getCurrentDateOfMonth());
            }
            else {
                this.$emit('update:currentDateOfMonth', null);
            }
            
        },
    nextMonth() {
        this.$emit('update:currentDay', this.$utils.time.getCurrentDay(this.$utils.time.addOneMonth(this.selectedMonth)));
        this.$emit('update:selectedMonth', this.$utils.time.addOneMonth(this.selectedMonth));
        this.$emit('update:dateOfMonth', this.$utils.time.getNextMonth(this.$utils.time.addOneMonth(this.selectedMonth)));
        if (this.$utils.time.checkMonth(this.$utils.time.addOneMonth(this.selectedMonth))) {
            this.$emit('update:currentDateOfMonth', this.$utils.time.getCurrentDateOfMonth());
        }
        else {
            this.$emit('update:currentDateOfMonth', null);
        }
    },
  },
};
</script>
