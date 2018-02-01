<template>
    <div id="dozens">
        <div id="dozen" v-for="dozen in dozens">
            <p>{{dozen}}<br><br>12</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dozens: ['1st','2nd','3rd']
            }
        }
    }
</script>

<style scoped>
    #dozens {
        position: relative;
        top: -452px;
        left: 160px;
        width: 35px;
        height: 406px;

    }
    #dozen {
        height: 134px;
        width: 35px;
        text-align: center;
        border: yellow 1px solid;
        display: inline-block;
    }

    #dozen p {
        text-align: center;
        position: relative;
        top: 40px;
        color: white;
    }
</style>