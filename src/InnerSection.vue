<template>
        <div id="inner-section">
            <div id="cell" v-for="obj in cells" >
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
                            'color': sectors[i].sector.bkg
                        }
                    }
                }
                this.cells.sort(function(a, b) {
                    return a.cell.number - b.cell.number;
                });
                console.log(this.cells);
            });
        },
        methods: {

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