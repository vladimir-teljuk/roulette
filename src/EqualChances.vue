<template>
    <div id="equal-chances">
        <div class=equal-chance id="1to18"><p>1<br>TO<br>18</p></div>
        <div class=equal-chance id="even"><p>E<br>V<br>E<br>N</p></div>
        <div class=equal-chance id="red"><p></p></div>
        <div class=equal-chance id="black"><p></p></div>
        <div class=equal-chance id="odd"><p>O<br>D<br>D</p></div>
        <div class=equal-chance id="19to36"><p>19<br>TO<br>36</p></div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
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