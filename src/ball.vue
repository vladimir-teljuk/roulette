<template>
    <div>
        <div id="ball" v-if="grad"></div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                grad: false
            };
        },
        created: function() {
                    this.$root.$on('clickEvent', () => {
                    this.grad = !this.grad;
                    console.log(this.grad)
                });
            }
    }
</script>

<style scoped>

    #ball {
        width: 7px;
        height: 7px;
        position: absolute;
        border-radius: 9999px;
        overflow: hidden;
        border: 1px solid black;
        background-color: white;
    }
</style>