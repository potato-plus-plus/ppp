<script>
    export let factory = {};
    export let currencies = {};

    let costs = "";
    $: {
        if (factory.costs) {
            costs = Object.entries(factory.costs)
                .map((x) => x.join(": "))
                .join(", ");
        }
    }
</script>

<div class="wrapper-wrapper" on:click={() => factory.buy(currencies)}>
    <img src="/{factory.type}.svg" />
    <a class="wrapper" href="#">
        {factory.canUse ? factory.amount + "x" : ""}
        {factory.name} (<b>COSTS</b> | {costs}) {factory.canUse
            ? ""
            : "(LOCKED)"}
    </a>
</div>

<style>
    a {
        text-decoration: none;
    }
    .wrapper-wrapper {
        position: relative;
        margin: 16px;
        width: 128px;
        height: 128px;
    }
    .wrapper {
        background: var(--black);
        padding: 10px;
        color: var(--white);
        position: absolute;
        top: 100px;
        left: 100px;
        width: 200px;
        z-index: 2;
        font-family: monospace;
    }

    .wrapper-wrapper:hover .wrapper {
        display: block;
    }

    .wrapper-wrapper .wrapper {
        display: none;
    }
</style>
