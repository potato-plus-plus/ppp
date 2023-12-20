<h2>
    <a href="https://discord.gg/53DkvQnn9M">Discord</a>
</h2>

<slot />

<style>
    :global(:root) {
        --black: rgb(15, 15, 15);
        --gray: rgb(54, 53, 61);
        --light-gray: rgb(142, 170, 192);
        --white: rgb(240, 246, 253);
        --teal: rgb(27, 28, 36);
        color: var(--white);

        font-family: sans-serif;
    }

    :global(a) {
        color: var(--light-gray);
    }

    :global(body) {
        background: var(--teal);
        min-height: 100vh;

        display: flex;
        align-items: center;
        flex-direction: column;
    }

    :global(.row, .left) {
        display: flex;
        justify-content: start;
        flex-direction: column;
        width: 50vw;
        min-width: 350px;
    }

    :global(.row) {
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    :global(img) {
        width: 128px;
        height: 128px;
    }

    :global(p) {
        margin: 10px;
    }

    h2 a {
        text-decoration: none;
    }
</style>
