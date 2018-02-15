<template>
    <div id="roulette-table">
        <inner-section></inner-section>
        <dozens></dozens>
        <equal-chances></equal-chances>

        <columns></columns>
    </div>
</template>

<script>
    import innerSection from "./InnerSection";
    import Columns from "./Columns";
    import Dozens from "./Dozens";
    import EqualChances from "./EqualChances";


    export default {
        components: {
            innerSection,
            Columns,
            Dozens,
            EqualChances
        }

    }
</script>

<style scoped>
    #roulette-table {
        width: 244px;
        height: 490px;
        position: relative;
        left: 430px;
        top: -220px;
    }
</style>