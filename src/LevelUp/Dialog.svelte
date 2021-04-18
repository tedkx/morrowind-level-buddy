<script>
    export let onClose;

    import AttributeSelector from './AttributeSelector.svelte';
    import TitleBar from '../TitleBar.svelte';
    import { attributesOrder, character, modalComponent, skillIncreases } from '../stores';

    let selectedAttributes = [];

    const initialLevel = $character.level;

    const onSubmit = () => {
        if(selectedAttributes.length) 
            character.levelUp(selectedAttributes.map(attrName => ({
                name: attrName,
                value: $skillIncreases[attrName]
            })));
    };
    const handleSelect = attributeName => {
        const alreadySelected = selectedAttributes.indexOf(attributeName) >= 0;
        if(!alreadySelected && selectedAttributes.length >= 3) return;
        selectedAttributes = alreadySelected
            ? selectedAttributes.filter(attr => attr !== attributeName)
            : [...selectedAttributes, attributeName];
    }

    $: {
        if(initialLevel !== $character.level)
            onClose();
    }
</script>

<style>
    .content-wrap {
        background-image: url('../bar-bg.jpg');
        padding: 0 3px 3px 3px;
    }
    .content {
        background-color: rgba(0, 0, 0, 0.9);
        border-top: none;
        color: var(--main-color);
        padding: 12px 12px 0 12px;
    }
    .attributes-wrap {
        display: flex;
        flex-wrap: wrap;
    }
    .attribute {
        flex-grow: 1;
        flex-basis: 0;
        min-width: 34%;
    }
    .footer {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 18px;
        padding: 0 7px 8px;
    }
    button {
        font-family: 'MedievalSharp', cursive;
		padding: 0.3rem 0.3rem 0.2rem;
    }
</style>
  
<div class="container">
    <TitleBar text="Level Up" />
    <div class="content-wrap">
        <div class="content">
            <div class="attributes-wrap">
                {#each $attributesOrder as attributeName}
                    <div class="attribute">
                        <AttributeSelector
                            increase={$skillIncreases[attributeName]}
                            onSelect={handleSelect}
                            name={attributeName}
                            selected={selectedAttributes.indexOf(attributeName) >= 0}
                            value={$character.attributes[attributeName]} />
                    </div>
                {/each}
            </div>

            <div class="footer">
                <button on:click={onClose}>
                    Cancel
                </button>
                <button disabled={selectedAttributes.length < 3} on:click={onSubmit}>
                    Okay
                </button>
            </div>
        </div>
    </div>
</div>