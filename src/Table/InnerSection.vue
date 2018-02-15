<template>
    <div id="inner-section">
        <div id="zero" @click="choiceNumber()">
            <p>{{zero.text}}</p>
        </div>
        <div id="cell" @click="choiceNumber(index)" v-for="(obj, index) in cells"
             v-bind:style="{ background: obj.cell.colorBkg }">
            <p v-bind:style="{ backgroundColor: obj.cell.color }">{{ obj.cell.number }}</p>
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                cells: [],
                zero: {
                    id: 'zero',
                    text: '0',
                    selectedZero: false
                }
            }
        },
        beforeCreate() {
            this.$root.$on('sectorsForGrid', sectors => {
                for (var i = 1; i <= 36; i++) {
                    this.cells[i - 1] = {
                        cell: {
                            'number': sectors[i].sector.number,
                            'color': sectors[i].sector.bkg,
                            'selectedNumber': false,
                            'colorBkg': 'transparent'
                        }
                    }
                }
                this.cells.sort(function (a, b) {
                    return a.cell.number - b.cell.number;
                });
            });
            return  this.cells;
        },
        methods: {
            choiceNumber(i) {
                var x = event.pageX - 600;
                var y = event.pageY - 215;
                if (-5 < x && x < 5 && 6 < y && y < 26) {
                    console.log(x, y);
                    this.cells[i].cell.colorBkg = 'aqua';
                    this.cells[i+1].cell.colorBkg = 'aqua';
                    this.cells[i+2].cell.colorBkg = 'aqua';
                    this.cells[i].cell.selectedNumber = true;
                    this.cells[i+1].cell.selectedNumber = true;
                    this.cells[i+2].cell.selectedNumber = true;

                    console.log(this.cells[i].cell);
                    console.log(this.cells[i+1].cell);
                    console.log(this.cells[i+2].cell);
                }
            }
        }
    }
</script>

<style scoped>
    #inner-section {
        display: inline-block;
        width: 150px;
        height: 445px;
    }

    #inner-section:hover {
        cursor: pointer;

    }

    #cell {
        width: 48px;
        height: 32px;
        border: yellow 1px solid;
        display: inline-block;
    }

    #cell:hover {
        background-color: aqua;
    }

    #cell p {
        position: relative;
        margin: auto;
        color: white;
        top: 7px;
        height: 20px;
        width: 36px;
        border-radius: 18px/10px;
        text-align: center;
    }

    #zero {
        display: inline-block;
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