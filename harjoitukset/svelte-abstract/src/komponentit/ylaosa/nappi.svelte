<script>
    let { teksti, url, vari, reunat="0" } = $props()
</script>

<style>
    .nappi {
        border-radius: 8px;
        min-width: 100px;
        min-height: 40px;
        color: #fff;
        font-size: 20px;
        padding: 15px 30px;
    }
</style>

<a href={url}>
    <button class="nappi" style="background-color: {vari}; border: {reunat}px solid white;" >
        {teksti}
    </button>
</a>