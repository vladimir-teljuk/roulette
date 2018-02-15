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

        width: 40px;
        height: 18px;
    }

</style>