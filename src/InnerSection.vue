<template>
    <div id="inner-section">
        <div id="cell" v-for="(obj, index) in cells" @click="placeBet(index)">
            <p v-bind:style="{ backgroundColor: obj.cell.color }">{{ obj.cell.number }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cells: []
            }
        },
        created() {
            this.$root.$on('sectorsForGrid', sectors => {
                for (var i = 1; i <= 36; i++) {
                    this.cells[i - 1] = {
                        cell: {
                            'number': sectors[i].sector.number,
                            'color': sectors[i].sector.bkg,
                            'selectedNumber': false
                        }
                    }
                }
                this.cells.sort(function (a, b) {
                    return a.cell.number - b.cell.number;
                });
            });
        },
        methods: {
            placeBet(i) {
                event.currentTarget.style.backgroundColor = 'blue';
                this.cells[i].cell.selectedNumber = true;
                console.log(this.cells[i].cell);
            }

        }

    }
</script>

<style scoped>
    #inner-section {
        width: 150px;
        height: 408px;
    }

    #cell {
        width: 48px;
        height: 32px;
        border: yellow 1px solid;
        display: inline-block;
    }

    #cell:hover {
        cursor: pointer;
    }

    #cell p {
        position: relative;
        margin: auto;
        top: 7px;
        color: white;
        height: auto;
        width: 36px;
        border-radius: 18px / 10px;
        text-align: center;
    }


</style>