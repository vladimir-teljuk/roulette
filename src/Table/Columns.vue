<template>
    <div id="columns">
        <div id="column" v-for="(column, index) in columns" @click="placeBet(index)">
            <p>{{column.column.number}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labels: ['1st','2nd','3rd'],
                columns: []
            }
        },
        created() {
            for (var i = 0; i <= 2; i++) {
                this.columns[i] = {
                    column: {
                        'number': this.labels[i],
                        'selectedColumn': false
                    }
                }
            }
        },
        methods: {
            placeBet(i) {
                event.currentTarget.style.backgroundColor = 'blue';
                this.columns[i].column.selectedColumn = true;
                console.log(this.columns[i].column);
            }
        }

    }
</script>

<style scoped>
    #columns {
        margin-top: 10px;
        display: inline-block;
        height: 35px;
    }

    #column {
        width: 48px;
        height: 32px;
        border: yellow 1px solid;
        display: inline-block;
    }

    #column p {
        text-align: center;
        position: relative;
        top: 7px;
        color: white;
    }

</style>