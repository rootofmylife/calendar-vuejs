<template>
    <div class="flex mr-2">
        <div class="relative">
            <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block rounded-md focus:outline-none">
                <svg class="h-5 w-5 text-calendar-blue-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
            </button>

            <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>

            <div v-show="dropdownOpen" v-bind:class='position' class="absolute mt-2 rounded-md shadow-lg overflow-hidden z-20" style="width: 20rem;">
                <div class="cursor-pointer">
                    <a v-for="item in appointment" :key="item.token" href="#" v-bind:class='classObject(item.tag)' class="flex items-center px-4 py-3 border-b">
                        <img class="h-8 w-8 rounded-full object-cover mx-1" :src="item.picture" alt="avatar">
                        <p class="text-sm mx-2">
                            <span class="font-bold">
                                {{ item.title }}
                            </span>
                            <br />
                            <span class="font-bold text-xs">
                                {{ item.startHour }} - {{ item.endHour }}
                            </span>
                        </p>
                    </a>
                </div>
                <a href="#" class="block bg-gray-800 text-white text-center font-bold py-2">See More Events</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        dropdownOpen: false,
    }),
    props: {
        appointment: Array,
        x: Number,
        y: Number,
    },
    methods: {
        classObject(tag) {
            if (tag == 1) {
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
    },
    computed: {
        position() {
            if (this.x < 3) {
                if (this.y > 2) {
                    return {
                        'left-0': true,
                        '-top-28': true,
                    }
                }
                else {
                    return {
                        'left-0': true,
                    }
                }
            } 
            else {
                if (this.y > 2) {
                    return {
                        'right-0': true,
                        '-top-28': true,
                    }
                }
                else {
                    return {
                        'right-0': true,
                    }
                }
            }
        }
    }
}
</script>