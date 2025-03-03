<script>
    import Hakupalkki from "./hakupalkki.svelte";
</script>

<style>
    .sininen-osa {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #dadbf1;
        padding: 50px;
        padding-bottom: 90px;
    }

    .teksti {
        font-size: 80px;
        font-weight: 500;
    }
</style>

<div class="sininen-osa">
    <h1 class="teksti">How can we help?</h1>
    <Hakupalkki />
</div>