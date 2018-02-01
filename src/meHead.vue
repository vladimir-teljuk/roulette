<template>
    <div id="head">
        {{d}}
    </div>
</template>

<script>
    export default {
       data: function() {
           return {
               d: 'Roulette'
           }
       }
   }
</script>

<style scoped>
    #head {
        width: 7%;
        margin: 0px auto 0 auto;
        font: 150% sans-serif;
        color: #477625;
        padding-top: 20px;
    }
</style>
