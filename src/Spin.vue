<template>
    <div>
        <button v-on:click="clickEvent()">Spin</button>
    </div>
    
</template>

<script>
    import { bus } from './bus.js';


    export default {
        methods: {
            clickEvent() {
                bus.$emit('clickEvent');
            }
        }

    }
</script>

<style scoped>

</style>