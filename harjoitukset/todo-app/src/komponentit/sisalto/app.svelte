<script>
    import { setContext } from "svelte";
    import LisaaUusi from "./lisaa-uusi.svelte";
    import Tehtavat from "./tehtavat.svelte";
    import Valikot from "./valikot.svelte";

    let tehtavat = $state({
        tehtavat: [],
        suoritetut: [],
        tehtavienMaara:0, 
        suoritettujenMaara:0
    })

    let filtteri = $state({
        filter: "all",
        filterTodos: ""
    });

    setContext('tehtavat', tehtavat)
    setContext('filtteri', filtteri);
</script>

<style>

</style>

<div class="todoapp stack-large">
    <LisaaUusi />
    <Valikot />
    <Tehtavat />
</div>