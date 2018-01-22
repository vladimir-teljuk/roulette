<template>
    <transition name="fade">
        <div id="circle" v-bind:style="{ transform: 'rotate('+ rotate +'rad)' }">
            <sectors></sectors>
        </div>
    </transition>
</template>

<script>
    import sectors from "./Sectors";


    export default {
        components: {
            sectors
        },
        data() {
            return {
                rotate: 0,
            }
        },
        created: function () {
            this.$root.$on('clickEvent', () => {
                this.rotate += Math.random() * 17 + 9.71;

                return false;
            });
        }
    }
</script>

<style scoped>
    #circle {
        width: 300px;
        height: 300px;
        border-radius: 9999px;
        overflow: hidden;
        transition: 5s;
        transition-timing-function: ease-in-out;
    }

</style>