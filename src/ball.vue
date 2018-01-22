<template>
    <div id="ball-container" v-bind:style="{ transform: 'rotate('+ 0 +'rad)' }">
        <div id="ball"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rotate: 0
            }
        }
    }
</script>

<style scoped>
    #ball-container {
        z-index: 1;
        height: 240px;
        transition: 5s;
        transition-timing-function: ease-in-out;

    }

    #ball {
        margin: -12px 7px 0 6px;
        width: 7px;
        height: 7px;
        border-radius: 9999px;
        overflow: hidden;
        border: 1px solid black;
        background-color: white;
        text-align: center;
        transition: 5s;
        transition-timing-function: ease-in-out;
    }
</style>