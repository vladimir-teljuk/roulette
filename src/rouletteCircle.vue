<template>
    <div id="circle" v-bind:style="{ transform: 'rotate('+ rotateCircle +'rad)' }">
        <sectors></sectors>
    </div>
</template>

<script>
    import sectors from "./Sectors";



    export default {
        components: {
            sectors
        },
        data() {
            return {
                rotateCircle: 0
            }
        },
        created: function () {
            this.$root.$on('clickEvent', () => {
                this.rotateCircle += Math.random() * 17 + 9.71;
                return false;
            });
        },
        methods: {

        }
    }
</script>

<style scoped>
    #circle {
        position: relative;
        top: 100px;
        left: 30px;
        width: 300px;
        height: 300px;
        border-radius: 300px;
        overflow: hidden;
        transition-duration: 15s;
        transition-timing-function: ease-in-out;
    }

</style>