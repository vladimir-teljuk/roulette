<template>
    <div id="spin">
        <button v-on:click="$root.$emit('clickEvent')">Spin</button>
    </div>
    
</template>

<script>
    export default {


    }
</script>

<style scoped>
    #spin {
        position: relative;
        top: -300px;
        left: 100px;
        width: 40px;
        height: 18px;
    }

</style>