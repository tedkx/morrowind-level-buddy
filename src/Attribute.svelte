<script>
	export let increase;
	export let name;
	export let value;
</script>

<style>
	.container { display: flex; margin-top: 6px; }
	.name { flex-grow: 1; }
	.value { font-weight: bold; width: 65px; }
	.diff { color: var(--increase-color); }
	.spacer { width: 94px; }
	.spacer span { margin-left: 12px; }
</style>

<div class="container">
	<div class="name">
		{name}
	</div> 
	<div class="value">
		{value}
		{#if increase && increase.multiplier}
		<span class="diff">
			(x{ increase.multiplier})
		</span>
		{/if}
	</div>
	<div class="spacer">
		{#if increase && increase.total}
			<span>+{increase.total}</span>
		{/if}
	</div>
</div>