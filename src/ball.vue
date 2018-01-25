<template>
    <div>
        <div id="ball-container" v-bind:style="{ transform: 'rotate('+ rotate +'rad)'}">
            <div id="ball"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rotate: 0,
                angle: 0
            }
        },
        created: function () {
            this.$root.$on('clickEvent', () => {
                this.rotate -= Math.random() * 36 + 20;
                this.angle = (Math.PI * 2) + (this.rotate % (Math.PI * 2));
                this.$emit('relativeAngle', this.angle);
                return false;
            });
        },
        methods: {

        }
    }
</script>

<style scoped>

    #ball-container {
        position: absolute;
        top: 15px;
        left: 140px;
        width: 20px;
        height: 270px;
        transition-duration: 7s;
        transition-timing-function: ease-in-out;
    }
    #ball {
        margin: 0px 5px 0 5px;
        width: 7px;
        height: 7px;
        border-radius: 7px;
        border: 1px solid black;
        background-color: white;

    }
</style>