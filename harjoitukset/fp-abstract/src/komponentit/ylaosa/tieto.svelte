<script>
    let { teksti, url, kuva="" } = $props()
</script>

<style>
    a {
        text-decoration: none;
    }
    .linkki {
        display: flex;
        flex-direction: row;
    }

    .kuva {
        padding-right: 10px;
    }
</style>

<a href={url} class="linkki">
    <img src={kuva} alt="" class="kuva">
    <div>{teksti}</div>
</a>