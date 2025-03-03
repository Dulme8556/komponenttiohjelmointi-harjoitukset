<script>
    let { otsikko, sisältö, valiotsikko, alaosa} = $props()
</script>

<style>
    a:hover {
        text-decoration: underline;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding-bottom: 5px;
    }

    h3 {
        margin-bottom: 3px;
    }

    .osio {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .valiotsikko {
        margin-bottom: 0;
        padding-bottom: 5px;
    }
</style>

<div class="osio">
    <h3>{otsikko}</h3>
    <ul>
        {#each sisältö as s}
            <li><a href="#">{s}</a></li>
        {/each}
        <h4 class="valiotsikko">{valiotsikko}</h4>
        <a href="#">{alaosa}</a>
    </ul>
</div>