<template>
    <div class="lg:flex shadow rounded-lg" 
        v-bind:class='classObject'>
      <div class="w-full lg:w-11/12 xl:w-full px-1 py-5 lg:px-2 lg:py-2 tracking-wide">
        <!-- Title -->
        <div class="font-semibold text-sm text-center lg:text-left px-2">
          {{ event.title }}
        </div>

        <!-- Time -->
        <div class="flex flex-col lg:justify-start justify-center mt-2">
          <div class="font-medium text-xs text-center lg:text-left px-2">
            {{ event.startHour }} - {{ event.endHour }}
          </div>
        </div>
        
        <div class='flex flex-row lg:justify-start justify-center items-center mt-2'>
            <img :src="event.picture" alt="Client Picture" class="w-6 h-6">
            <div class=" ont-medium text-xs pt-1 text-center lg:text-left px-2">
                {{ event.name }}
            </div>
        </div>
      </div>

      <!-- Accept -->
      <div class="flex flex-row items-center w-full lg:w-1/3 lg:justify-end justify-center px-2 py-4 lg:px-0">
        <span class="cursor-pointer tracking-wider text-gray-600 bg-white px-2 text-sm rounded leading-loose mx-2 font-semibold">
          {{ checkType }}
        </span>
      </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        lightOrange: 'bg-calendar-orange-light',
        darkOrange: 'bg-calendar-orange-dark',
        lightBlue: 'bg-calendar-blue-light',
        darkBlue: 'bg-calendar-blue-dark',
    }),
    props: {
        event: Object,
    },
    computed: {
        classObject() {
            if (this.event.tag == 1) {
                return {
                    'text-black': true,
                    'border-l-8': true,
                    'border-calendar-orange-dark': true,
                    'bg-calendar-orange-light': true,
                }
            }
            else {
                return {
                    'text-white': true,
                    'border-l-8': true,
                    'border-calendar-blue-dark': true,
                    'bg-calendar-blue-light': true,
                }
            }
        },
        checkType() {
            if (this.event.isMeetingCall) {
                return 'Going'
            }
            else {
                return 'Going'
            }
        }
    }
}
</script>