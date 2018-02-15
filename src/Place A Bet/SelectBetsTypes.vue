<template>
    <div v-if="showType">
        <p> Selected a bet type: </p>
        <button id="bet-type">Straight Up</button>
        <button>Split</button>
        <button>Street</button>
        <button>Corner</button>
        <button>Column</button>
        <button>Dozen</button>
        <button>Equal chance</button>


    </div>
    
</template>

<script>

    export default {
        data() {
            return {
                betInfo: '',
                showType: false
            }
        }

    }
</script>

<style scoped>

</style>