<script>
    import Napit from "./napit.svelte";
    import Tiedot from "./tiedot.svelte";
    import HeaderSpan from "./header-span.svelte";

    const ikoniMenu = "./src/kuvat/menu-ikoni.svg"
    const ikoniSulje = "./src/kuvat/sulje-ikoni.svg"

    let valikko_nakyy = $state(false);
    let haku_nakyy = $state(false);
    let valikkokuva = $derived(valikko_nakyy ? ikoniSulje : ikoniMenu);

    function valikko_span() {
        valikko_nakyy = !valikko_nakyy;
    }

    function haku_span() {
        haku_nakyy = !haku_nakyy;
    }
</script>

<style>
    span {
        display: none;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: black;
        padding: 27px 30px;
        align-items: center;
    }

    .tiedot {
        padding: 0 40px;
    }

    .napit {
        padding: 0 40px;
    }

    .kuva__valikko {
        padding: 3px;
        filter: brightness(0) saturate(100%) invert(99%) sepia(6%)
        saturate(70%) hue-rotate(326deg) brightness(112%) contrast(100%);
    }

    .valikko {
        display: none;
        padding-right: 50px;
    }

    .valikko:hover {
        cursor: pointer;
    }

    .kuva__haku {
        padding: 3px;
        filter: brightness(0) saturate(100%) invert(99%) sepia(6%)
        saturate(70%) hue-rotate(326deg) brightness(112%) contrast(100%);
    }

    .kuva__haku:hover {
        min-width: 30px;
        min-height: 30px;
    }

    @media (max-width: 1200px) {
        .napit {
            display: none;
        }

        .valikko {
            display: flex;
            justify-content: end;
            height: 33px;
            width: 33px;
        }
    }

    .valikko--auki {
        display: flex;
        justify-content: center;
    }

    .haku--auki {
        display: flex;
    }
</style>

<div class="header">
    <div class="tiedot">
        <Tiedot />
    </div>
    <div class="napit">
        <Napit />
    </div>
    <div class="valikko">
        <img src="./src/kuvat/hakupalkin-ikoni.svg" alt="" class="kuva__haku" onclick={haku_span}/>
        <span class={haku_nakyy ? "haku--auki" : "haku--kiinni"}>
            <HeaderSpan spanTyyli="haku" funktio="{haku_span}"/>
        </span>
        <img src={valikkokuva} alt="" class="kuva__valikko" onclick={valikko_span} />
        <span class={valikko_nakyy ? "valikko--auki" : "valikko--kiinni"}>
            <HeaderSpan spanTyyli="valikko" />
        </span>
    </div>
</div>