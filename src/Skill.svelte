<script>
	export let current;
	export let initial;
	export let name;
	export let label;
	export let onIncrement;
	export let onDecrement;
 	export let attribute;
	export let major;major;
	export let minor;minor;
	export let spec;spec;

	let attr = attribute.substr(0, 3).toUpperCase();
	if(attr === 'SPE') attr = 'SPD';
</script>

<style>
	button { font-size: 22px; font-weight: bold; line-height: 32px; margin: 0 0 0 12px; padding: 0 0 3px 0; width: 35px; }
	.container { align-items: center; display: flex; margin-bottom: 12px }
	.label { flex-grow: 1 }
	.attr { margin-right: 13px; opacity: 0.6; }
	.value { font-weight: bold; width: 65px; }
	.diff { color: var(--increase-color) }
</style>

<div class="container">
	<span class="label" title={name}>{label}</span>
	<div class="attr">{attr}</div>
	<div class="value">
		{ current }
		{#if current > initial}
		<span class="diff">
			(+{ current - initial})
		</span>
		{/if}
	</div>
	<button disabled={current === initial} on:click={() => onDecrement(name)}>-</button>
	<button on:click={() => onIncrement(name)}>+</button>
</div>