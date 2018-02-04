<template>
    <div id="zero" @click="placeBet()">
        <p>{{zero.text}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                zero: {
                    id: 'zero',
                    text: '0',
                    selectedZero: false
                }
            }
        },
        methods: {
            placeBet() {
                event.currentTarget.style.backgroundColor = 'blue';
                this.zero.selectedZero = true;
                console.log(this.zero);
            }
        }

    }
</script>

<style scoped>
    #zero {
        position: relative;
        width: 148px;
        height: 35px;
        border: yellow 1px solid;
        border-radius: 20px 20px 0 0;

    }

    #zero p {
        width: 46px;
        height: auto;
        color: white;
        text-align: center;
        position: relative;
        margin: auto;
        top: 7px;
        border: white 1px solid;
        border-radius: 23px / 9px;
    }

</style>