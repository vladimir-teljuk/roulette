<template>
    <div id="roulette-table">
        <zero-on-table></zero-on-table>
        <inner-section></inner-section>
        <columns></columns>
        <dozens></dozens>
        <equal-chances></equal-chances>
    </div>
    
</template>

<script>
    import innerSection from "./InnerSection";
    import zeroOnTable from "./zeroOnTable";
    import Columns from "./Columns";
    import Dozens from "./Dozens";
    import EqualChances from "./EqualChances"

    export default {
        components: {
            innerSection,
            zeroOnTable,
            Columns,
            Dozens,
            EqualChances

        }

    }
</script>

<style scoped>
    #roulette-table {
        width: 218px;
        height: 488px;
        position: relative;
        left: 430px;
        top: -250px;

    }
</style>