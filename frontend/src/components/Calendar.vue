<template>
  <body class="min-h-screen">
    <div class="mx-auto container mt-10 py-10 px-6 bg-white">
        <div class="w-full flex items-cente justify-between">
             <!-- Title -->
            <div class="md:flex w-1/2">
                <div class="flex items-center">
                    <div @click="prevMonth()">
                        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="15 6 9 12 15 18"></polyline>
                        </svg>
                    </div>
                    
                    <div @click="nextMonth()">
                        <svg class="cursor-pointer ml-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                        </svg>
                    </div>
                    
                </div>
                <div class="ml-5 py-2">
                    <span class="text-xl font-bold xl:text-2xl hover:text-calendar-blue-light">{{ currentDay }}</span>
                </div>
            </div>
            <!-- End Title -->

            <!-- Choose View -->
            <div class="flex flex-row py-1 space-x-4">
                <div>
                    <a href="javascript:void(0)">
                        <h4 class="py-1 px-2 cursor-pointer text-xs lg:text-base font-medium text-right border-2 border-calendar-blue-dark rounded-lg">
                            Month view
                        </h4>
                    </a>
                </div>
                <div>
                    <a href="javascript:void(0)">
                        <h4 class="py-1 px-2 cursor-pointer text-xs lg:text-base font-medium text-right border-2 border-calendar-blue-dark rounded-lg">
                            Week view
                        </h4>
                    </a>
                </div>
                <div>
                    <a href="javascript:void(0)">
                        <h4 class="py-1 px-2 cursor-pointer text-xs lg:text-base font-medium text-right border-2 border-calendar-blue-dark rounded-lg">
                            Day view
                        </h4>
                    </a>
                </div>
            </div>
            <!-- End Choose View -->
        </div>
        <div class="w-full overflow-x-scroll xl:overflow-x-hidden mt-4">
            <table class="min-w-full border-t border-gray-300">
                <thead class="items-center">
                    <tr class="h-20">
                        <th v-for="(d, index) in daysInWeek" :key="index" class="px-10">
                            <p class="w-4 text-xs text-left text-custom-3 uppercase cursor-pointer">
                                {{ d }}
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index1) in dateOfMonth" :key="index1"
                        class="border border-gray-300">
                        <td v-for="(item2, index2) in item" :key="index2"
                            class="border-r border-gray-300">
                            <Cell
                                :week="index2"
                                :day="item2"
                                :currentDateOfMonth="currentDateOfMonth"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </body>
</template>

<style scoped>
body {
    font-family: "Lato", sans-serif;
}

@media screen and (min-width: 375px) {
    .custom-width {
        width: 40rem;
    }
}

@media screen and (min-width: 1300px) {
    .custom-width {
        width: 50%;
    }
}
</style>

<script>
import Cell from "@src/components/Cell.vue";

export default {
    data: () => ({
        daysInWeek: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
    }),
    components: {
        Cell,
    },
    props: {
        currentDay: String,
        selectedMonth: Date,
        dateOfMonth: Array,
        currentDateOfMonth: Number,
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
    }
}
</script>
