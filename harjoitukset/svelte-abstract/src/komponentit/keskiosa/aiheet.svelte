<script>
    import Aihe from "./aihe.svelte";

    let vasen = [
        {otsikko: "Branches", teksti: "Abstract Branches lets you manage, version, and document your designs in one place.", url: "#", kuva: "./src/kuvat/branches.png"},
        {otsikko: "Manage organizations, teams, and projects", teksti: "Use Abstract organizations, teams, and projects to organize your people and your work.", url: "#", kuva: "./src/kuvat/icon-organizations.png"},
        {otsikko: "Authenticate to Abstract", teksti: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.", url: "#", kuva: "./src/kuvat/icon-authenticate.png"}
    ]

    let oikea = [
        {otsikko: "Manage your account", teksti: "Configure your account settings, such as your email, profile details, and password.", url: "#", kuva: "./src/kuvat/manage-account.png"},
        {otsikko: "Manage billing", teksti: "Change subscriptions and payment details.", url: "#", kuva: "./src/kuvat/icon-billing.png"},
        {otsikko: "Abstract support", teksti: "Get in touch with a human.", url: "#", kuva: "./src/kuvat/icon-comment.png"}
    ]
</script>

<style>
    .tiedot {
        display: flex;
        padding: 80px 150px;
    }

    .tiedotvasen {
        display: flex;
        flex-direction: column;
        padding-right: 10px;
    }

    .tiedotoikea {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="tiedot">
    <div class="tiedotvasen">
        {#each vasen as tieto}
            <Aihe otsikko={tieto.otsikko} teksti={tieto.teksti} url={tieto.url} kuva={tieto.kuva}/>
        {/each}
    </div>
    
    <div class="tiedotoikea">
        {#each oikea as tieto}
            <Aihe otsikko={tieto.otsikko} teksti={tieto.teksti} url={tieto.url} kuva={tieto.kuva}/>
        {/each}
    </div>
</div>