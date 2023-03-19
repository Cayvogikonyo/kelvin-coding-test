
<template>
    <div class="space-y-5 px-6">
        <div v-for="(standard, index) in standards" :key="index">
            <div v-if="standard.code != '' || standard.description != '' " class="relative flex items-start">
                <div class="flex h-6 items-center">
                    <input :id="index" name="comments" type="checkbox" :checked="selectedStandards.includes(standard)"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        @change="addStandard(standard)" />
                </div>
                <div class="ml-3 text-sm leading-6">
                    <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                    <p class="text-gray-500">{{ standard.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['standards'],
    methods: {
        addStandard(standard) {
            this.$store.dispatch('standards/addItemToStandards', standard)
        }
    },
    computed: {
        ...mapState({
            selectedStandards: state => state.standards.items
        }),
    },
}
</script>
