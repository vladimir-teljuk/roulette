<template>
    <div id="dozens">
        <div id="dozen" v-for="(dozen, index) in dozens" @click="placeBet(index)">
            <p>{{dozen.dozen.number}}<br><br>12</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labels: ['1st','2nd','3rd'],
                dozens: []
            }
        },
        created() {
            for (var i = 0; i <= 2; i++) {
                this.dozens[i] = {
                    dozen: {
                        'number': this.labels[i],
                        'selectedDozen': false
                    }
                }
            }
        },
        methods: {
            placeBet(i) {
                event.currentTarget.style.backgroundColor = 'blue';
                this.dozens[i].dozen.selectedDozen = true;
                console.log(this.dozens[i].dozen);
            }
        }
    }
</script>

<style scoped>
    #dozens {
        margin-left: 10px;
        display: inline-block;
        width: 38px;
        vertical-align: bottom;
    }
    #dozen {
        height: 134px;
        width: 35px;
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