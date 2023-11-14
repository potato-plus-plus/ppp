<script>
    import { numString } from "$lib/util.js";

    export let currency = {};
</script>

<div class="wrapper">
    <img src="/{currency.type}.svg" />
    <span class="amount bottom right">{numString(currency.amount)}X</span>
    <span class="amount bottom">{numString(currency.perClick)}/1CLK</span>
    <span class="amount"
        >{numString(currency.perDelay)}/{numString(
            currency.delay / 1000
        )}SEC</span
    >
    <span class="amount right">{currency.name}</span>
</div>

<style>
    .amount {
        position: absolute;
        font-weight: bold;
        font-family: monospace;
        text-align: left;

        width: 128px;
        height: 128px;

        left: 0;
        top: 0;

        font-size: 0.9em;

        filter: drop-shadow(1.5px 1.5px 0 var(--black));
    }

    .right {
        text-align: right;
        justify-content: end;
    }

    .bottom {
        display: flex;
        align-items: end;
    }

    .wrapper {
        position: relative;
        margin: 16px;
    }
</style>
