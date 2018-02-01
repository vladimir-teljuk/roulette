<template>
    <div id="zero">
        <p>0</p>
    </div>
</template>

<script>
    export default {
        name: "zero-on-table"
    }
</script>

<style scoped>
    #zero {
        position: relative;
        width: 148px;
        height: 35px;
        border: yellow 1px solid;
        border-radius: 20px 20px 0 0;

    }
    #zero p {
        width: 46px;
        height: auto;
        color: white;
        text-align: center;
        position: relative;
        margin: auto;
        top: 7px;
        border: white 1px solid;
        border-radius: 23px / 9px;
    }

</style>