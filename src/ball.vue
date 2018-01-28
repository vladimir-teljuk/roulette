<template>
    <div>
        <div id="ball-container" v-bind:style="{ transform: 'rotate('+ rotate +'rad)', transitionDuration: sec + 's' }">
            <div id="ball"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rotate: 0,
                angle: 0,
                sector: 0,
                sec: 0
            }
        },
        created: function () {
            this.$root.$on('clickEvent', () => {
                    this.rotate = 0;
                    this.sec = 0;
                    setTimeout(() => {
                        this.sec = 7;
                        this.sector = Math.floor(Math.random() * 36);
                        this.rotate -= (2 * Math.PI * Math.floor(Math.random() * 15 + 10) - this.sector * 0.1698);
                        this.$emit('relativeAngle', this.sector);
                    }, 100);
                return false;
            });
        },
        methods: {}
    }
</script>

<style scoped>

    #ball-container {
        position: absolute;
        top: 15px;
        left: 140px;
        width: 20px;
        height: 270px;
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