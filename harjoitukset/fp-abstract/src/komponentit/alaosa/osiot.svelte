<script>
    import Osio from "./osio.svelte";
    import VirallinenOsio from "./virallinen-osio.svelte";

    let osiot = [
        {otsikko: "abstract", sisältö: ["branches"]},
        {otsikko: "resources", sisältö: ["blog", "help center", "release notes", "status"]},
        {otsikko: "community", sisältö: ["twitter", "linkedin", "facebook", "dribbble", "podcast"]},
        {otsikko: "company", sisältö: ["about us", "careers", "legal"], valiotsikko: "contact us", alaosa: "info@abstract.com"}
        ]
</script>

<style>
    .sarake {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 25px 75px;
    }
</style>

<div class="sarake">
    {#each osiot as o}
        <Osio otsikko={o.otsikko} sisältö={o.sisältö} valiotsikko={o.valiotsikko} alaosa={o.alaosa}/>
    {/each}

    <VirallinenOsio />
</div>