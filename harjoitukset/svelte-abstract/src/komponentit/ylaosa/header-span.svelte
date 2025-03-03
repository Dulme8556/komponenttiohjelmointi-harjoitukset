<script>
    let { spanTyyli, funktio } = $props();
</script>

<style>
    a {
        text-decoration: none;
    }

    .valikko_sisalto {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 25px;

        position: absolute;
        top: 88px;
        background-color: #000000;
        border-top: 1px gray solid;
        width:100%; 
        height:240px; 
        z-index:999;
        left: 0;
        right: 0;
    }

    .submit_request {
        display: flex;
        align-content: center;
        border-bottom: 1px gray solid;
        padding: 20px 187px;
    }

    .submit_request:hover {
        color: gray;
        transition: color .3s;
    }

    .sign_in {
        display: flex;
        align-content: center;
        padding: 20px 100px;
    }

    .sign_in:hover {
        color: gray;
        transition: color .3s;
    }

    .haku_sisalto {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        padding: 0 77px;
        position: absolute;
        height: 93px; 
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
    }

    .hakupalkki {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        border: 1px black solid;
        padding: 10px 15px;
        width: 950px;
        height: 32px;
        background-color: #fff;
        border-radius: 4px;
        color: black;
        text-transform: capitalize;
        font-size: 20px;
    }

    .sulje_nappi {
        display: flex;
        margin-left: 10px;
        font-weight: 700;
        font-size: 20px;
        border: none;
        background: transparent;
    }

    .sulje_nappi:hover {
        font-size: 25px;
    }
</style>

{#if spanTyyli == "valikko"}
    <div class="valikko_sisalto">
        <a href="#" class="submit_request">Submit a request</a>
        <a href="#" class="sign_in">Sign in</a>
    </div>
    {:else if (spanTyyli == "haku")}
        <div class="haku_sisalto">
            <input type="text" class="hakupalkki" placeholder="search" >
            <button onclick={funktio} class="sulje_nappi">x</button>
        </div>
    {:else}
{/if}