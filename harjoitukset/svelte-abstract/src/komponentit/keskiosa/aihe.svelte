<script>
    let { otsikko, teksti, url, kuva} = $props()
</script>

<style>
    a:hover {
        text-decoration: underline;
    }
    
    .aihe {
        display: flex;
        flex-direction: row;
        padding: 30px 10px;
    }

    .kuva {
        width: 83px;
        height: 83px;
        padding-right: 20px;
        margin-top: 1.33em;
    }

    .tiedot {
        display: flex;
        flex-direction: column;
    }

    .teksti {
        font-size: 17px;
    }

    .linkki {
        display: flex;
        flex-direction: row;
        color: #6670B0;
        padding-top: 20px;
    }

    .nuoli {
        width: 15px;
    }
</style>

<div class="aihe">
    <img src={kuva} alt="" class="kuva">
    <div class="tiedot">
        <h4>{otsikko}</h4>
        <div class="teksti">{teksti}</div>
        <a href={url} class="linkki">
            <div>learn more</div>
            <img src="./src/kuvat/nuoli-oikealle-taytetty.png" alt="" class="nuoli">
        </a>
    </div>
</div>