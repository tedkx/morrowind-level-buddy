<script>
    export let increase;
    export let name;
    export let onSelect;
    export let selected;
    export let value;

    const handleSelect = () => onSelect(name);
</script>

<style>
    div { 
        align-items: center;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
        margin-top: 6px;
        padding: 6px 8px;
        transition: all .25 ease;
    }
    div:hover { 
        background: var(--main-color);
        color: #000;
    }
    div > span { display: block; }
    .selected { 
        background: var(--main-color);
        box-shadow: 0 0 10px 3px var(--light-color);
        color: #000;
    }
    .name { flex-grow: 1 }
    .value { font-weight: bold; width: 65px; }
    .diff { color: var(--increase-color) }
</style>

<div class:selected={selected} on:click={handleSelect}>
    <span class="name">{name}</span>
    <span class="value">{value}
        {#if increase}
            <span class="diff">
                {#if increase.multiplier}
                    (+{increase.multiplier})
                {/if}
            </span>
        {/if}
    </span>
</div>