<template>
    <div>
        <button id="spin" v-on:click="$root.$emit('clickEvent')">Spin</button>
    </div>
    
</template>

<script>
    export default {


    }
</script>

<style scoped>
    #spin {
        margin-top: 10px;
        margin-left: 20px;
    }

</style>