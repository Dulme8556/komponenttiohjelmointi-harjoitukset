<script>
    import Tieto from "./tieto.svelte";
</script>

<style>
    .tiedot {
        display: flex;
        flex-direction: row;
        font-size: 25px;
        text-transform: capitalize;
    }

    .eka {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
    }

    .eka:hover {
        color: gray;
        transition: color .3s;
    }

    .viiva {
        color: white;
        padding-left: 10px;
    }

    .toka {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #fff;
    }

    .toka:hover {
        text-decoration: underline;
    }
</style>

<div class="tiedot">
    <div class="eka">
        <Tieto teksti="abstract" url="#" kuva="./src/kuvat/kuva.png" />
    </div>
    <div class="viiva">|</div>
    <div class="toka">
        <Tieto teksti="help center" url="#" />
    </div>
</div>