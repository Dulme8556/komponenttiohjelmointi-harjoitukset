<script>
    
</script>

<style>
    .hakupalkki {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        border: 1px darkslategray solid;
        padding: 10px;
        width: 720px;
        height: 40px;
        background-color: #fff;
        border-radius: 4px;
        color: black;
        font-size: 20px;
        background-image: url("./src/kuvat/nuoli-oikealle.png");
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 700px 15px;
    }

    .hakupalkki:hover {
        border-color: blue;
        background-image: url("/src/kuvat/nuoli-oikealle-sininen.png");
    }

    .nuoli {
        width: 23px;
    }
</style>

<input type="text" class="hakupalkki" placeholder="Search" >