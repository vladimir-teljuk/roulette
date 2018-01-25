<template>
    <div>
        <sectors id="circle" v-bind:style="{ transform: 'rotate('+ rotateCircle +'rad)' }"></sectors>
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
                var a = this.rotateCircle % (Math.PI * 2);
                //console.log('rotateCircle = ' + a);
                return false;
            });
        },
        methods: {

        }
    }
</script>

<style scoped>
    #circle {
        margin: 20px;
        width: 300px;
        height: 300px;
        border-radius: 300px;
        overflow: hidden;
        transition-duration: 15s;
        transition-timing-function: ease-in-out;
    }

</style>