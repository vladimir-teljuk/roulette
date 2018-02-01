<template>
    <div id="columns">
        <div id="column" v-for="column in columns">
            <p>{{column}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: ['1st','2nd','3rd']
            }
        }

    }
</script>

<style scoped>
    #columns {
        position: relative;
    }
    #column {
        margin-top: 10px;
        width: 48px;
        height: 32px;
        border: yellow 1px solid;
        display: inline-block;
    }
    #column p {
        text-align: center;
        position: relative;
        top: 7px;
        color: white;
    }

</style>