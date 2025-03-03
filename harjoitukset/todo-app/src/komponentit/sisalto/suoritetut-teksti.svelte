<script>
    import { getContext } from "svelte";

    let tehtavat = getContext('tehtavat')
</script>

<style>

</style>

<h2 id="list-heading">
    {tehtavat.tehtavat.filter((todo) => todo.completed).length} out of {tehtavat.tehtavat.length} items completed
</h2>