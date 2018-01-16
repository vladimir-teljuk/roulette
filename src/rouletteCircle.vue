<template>
    <div id="circle">
        <sectors></sectors>
    </div>
</template>

<script>
    import sectors from "./Sectors";


    export default {
        components: {
            sectors
        }
    }
</script>

<style scoped>
    #circle {
        width: 300px;
        height: 300px;
        border-radius: 9999px;
        overflow: hidden;
    }
</style>