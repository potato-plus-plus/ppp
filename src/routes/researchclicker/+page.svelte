<script>
    let technologicalProgression = "Stone";

    import { Currency, Factory } from "$lib/clicker.js";
    import CurrencyItem from "$lib/CurrencyItem.svelte";
    import FactoryItem from "$lib/FactoryItem.svelte";

    let causeUpdate = () => {
        currencies = { ...currencies };
        upgrades = { ...upgrades };
        technology.stoneTools.invis = !(upgrades.scientist.amount > 9);
    };

    let currencies = {
        research: new Currency("TECH", causeUpdate, "research"),
        land: new Currency("LAND", causeUpdate, "land"),
        stone: new Currency("ROCK", causeUpdate, "stone"),
        wood: new Currency("WOOD", causeUpdate, "wood"),
        dirt: new Currency("DIRT", causeUpdate, "dirt"),
    };

    currencies.research.perClick = 1;
    currencies.stone.delay = 3000;

    let upgrades = {
        scientist: new Factory(
            "Scientist",
            {
                research: 15,
            },
            {
                research: {
                    perClick: 0,
                    delay: 1,
                    perDelay: 1,
                },
            },
            1.1,
            causeUpdate,
            false,
            "scientist"
        ),
        miner: new Factory(
            "Miner",
            {
                stone: 10,
            },
            {
                stone: {
                    perClick: 0,
                    delay: 1,
                    perDelay: 1,
                },
            },
            1.1,
            causeUpdate,
            false,
            "miner"
        ),
    };
    let technology = {
        rockfinding: new Factory(
            "Rock Finding",
            {
                research: 15,
            },
            {
                stone: {
                    perClick: 0.1,
                    delay: 1,
                    perDelay: 0,
                },
            },
            1.1,
            causeUpdate,
            true,
            "stone"
        ),
        stoneTools: new Factory(
            "Stone Tools",
            {
                research: 100,
                stone: 50,
            },
            {
                stone: {
                    perClick: 0.1,
                    delay: 1,
                    perDelay: 0,
                },
            },
            1.1,
            causeUpdate,
            true,
            "research"
        ),
    };
</script>

<h1>{technologicalProgression} Age</h1>
<a
    on:click={() => {
        for (let currency in currencies) {
            currencies[currency].click();
        }
    }}><img src="/research.svg" /></a
>
<p>Click to <b>Research</b></p>

<h2>Raw Resources</h2>

<section class="row">
    {#each Object.values(currencies) as currency}
        {#if !currency.invis}
            <CurrencyItem {currency} />
        {/if}
    {/each}
</section>

<h2>Generators</h2>

<section class="row">
    {#each Object.values(upgrades) as upgrade}
        {#if !upgrade.invis}
            <FactoryItem factory={upgrade} {currencies} />
        {/if}
    {/each}
</section>

<h2>Research</h2>

<section class="row">
    {#each Object.values(technology) as upgrade}
        {#if !upgrade.invis}
            <FactoryItem factory={upgrade} {currencies} />
        {/if}
    {/each}
</section>
