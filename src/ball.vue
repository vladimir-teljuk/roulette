<template>
        <div id="ball" v-if="grad"></div>
</template>

<script>
    import { bus } from './bus.js';


    export default {
        data() {
            return {
                grad: false

            }
        },
        mounted() {
                bus.$on('clickEvent', function() {
                    this.grad = !this.grad
                    console.log(this.grad)
                    return this.grad
                })
            }
    }
</script>

<style scoped>
    #ball {
        margin: 20px 0px 0px 146px;
        width: 7px;
        height: 7px;
        position: absolute;
        border-radius: 9999px;
        overflow: hidden;
        border: 1px solid black;
        background-color: white;

    }
</style>