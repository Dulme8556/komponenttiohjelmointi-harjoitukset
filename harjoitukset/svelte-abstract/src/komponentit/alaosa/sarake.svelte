<script>
    import Osiot from "./osiot.svelte";
    import VirallinenOsio from "./virallinen-osio.svelte";

</script>

<style>
    .sarake {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 80px;
    }
</style>

<div class="sarake">
    <Osiot />
    <VirallinenOsio />
</div>