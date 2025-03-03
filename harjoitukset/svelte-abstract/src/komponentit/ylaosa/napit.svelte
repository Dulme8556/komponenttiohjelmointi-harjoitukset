<script>
    import Nappi from "./nappi.svelte";

    let napit = [
        { teksti: "Submit a request", url: "#", vari: "#1A1A1A", reunat: "1"},
        { teksti: "Sign in", url: "#", vari: "#4C5FD5", reunat: "0"}
    ]
</script>

<style>
    .kaikkinapit {
        display: flex;
        flex-direction: row;
    }

    .napit {
        padding-left: 15px;
    }
</style>

<div class="kaikkinapit">
    {#each napit as nappi}
    <div class="napit">
        <Nappi teksti={nappi.teksti} url={nappi.url} vari={nappi.vari} reunat={nappi.reunat}/>
    </div>
    {/each}
</div>