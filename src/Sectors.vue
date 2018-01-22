<template>
    <div>
        <div id="sector" v-for="(obj, index) in createSectors()"
             v-bind:style="{ transform: 'rotate('+ obj.sector.grad +'rad)', borderTopColor: obj.sector.bkg }">
            <p>{{obj.sector.number}}</p>
            <ball v-if="index === r"></ball>

        </div>
    </div>
</template>

<script>
    import ball from "./ball";

    export default {
        components: {
            ball
        },
        data() {
            return {
                numbers: ['0', '32', '15', '19', ' 4', '21', ' 2', '25', '17', '34', ' 6', '27', '13', '36', '11', '30',
                    ' 8', '23', '10', ' 5', '24', '16', '33', ' 1', '20', '14', ' 3', ' 9', '22', '18', '29', ' 7', '28',
                    '12', '35', ' 3', '26'],
                sectors: [],
                r: undefined
            }
        },
        created: function () {
            this.$root.$on('clickEvent', () => {
                this.r = Math.floor(Math.random() * 36);
                console.log(this.sectors[this.r]);
                return this.r
            });
        },
        methods: {
            createSectors() {
                var grad = 0;
                var color;
                for (var i = 0; i < 37; i++) {
                    if (i === 0) {
                        color = 'green';
                    } else if ((i % 2) === 0) {
                        color = 'red';
                    } else {
                        color = 'black';
                    }
                    this.sectors[i] = {
                        sector: {
                            'number': this.numbers[i],
                            'grad': grad,
                            'bkg': color
                        }
                    }
                    grad += 0.1698;
                }
                return this.sectors
            }

        }
    }

</script>

<style scoped>
#sector {
    width: 20.5px;
    height: 270px;
    margin: 0px 137px 0px 137px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 30px solid;
    position: absolute;

}
    #sector p {
        margin: 0;
        height: 27px;
        margin-top: -27.5px;
        color: white;
        font-size: small;
        text-align: center;

    }
</style>