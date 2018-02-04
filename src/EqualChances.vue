<template>
    <div id="equal-chances">
        <div class=equal-chance v-for="(equalChance, index) in equalChances" @click="placeBet(index)"
             v-bind:id="equalChance.equalChance.id"><p v-html="equalChance.equalChance.text"></p></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                equalChances: []
            }
        },
        created() {
            this.equalChances[0] = { equalChance: { id: '1to18', text: '1<br>TO<br>18', selectedEqual: false } };
            this.equalChances[1] = { equalChance: { id: 'even', text: 'E<br>V<br>E<br>N', selectedEqual: false } };
            this.equalChances[2] = { equalChance: { id: 'red', text: '', selectedEqual: false } };
            this.equalChances[3] = { equalChance: { id: 'black', text: '', selectedEqual: false } };
            this.equalChances[4] = { equalChance: { id: 'odd', text: 'O<br>D<br>D', selectedEqual: false } };
            this.equalChances[5] = { equalChance: { id: 'even', text: 'E<br>V<br>E<br>N', selectedEqual: false  } };

        },
        methods: {
            placeBet(i) {
                event.currentTarget.style.backgroundColor = 'blue';
                this.equalChances[i].equalChance.selectedEqual = true;
                console.log(this.equalChances[i].equalChance);
            }
        }
    }
</script>

<style scoped>
    #equal-chances {
        position: relative;
        top: -858px;
        left: 196px;
        width: 35px;
        height: 406px;
    }

    .equal-chance {
        height: 66px;
        width: 35px;
        text-align: center;
        border: yellow 1px solid;
    }

    .equal-chance p {
        font-size: 0.8em;
        color: white;
        position: relative;
        top: 10px;
    }

    #even p {
        top: 2px;
    }

    #red p, #black p {
        top: 13px;
        left: 7px;
        height: 40px;
        width: 20px;
        border-radius: 10px/20px;
        background-color: black;
    }

    #red p {
        background-color: red;
    }
</style>