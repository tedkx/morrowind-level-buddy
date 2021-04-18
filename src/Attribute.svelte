<script>
	export let increase;
	export let name;
	export let value;
</script>

<style>
	.container { display: flex; margin-top: 6px; }
	.name { flex-grow: 1; }
	.value { font-weight: bold; width: 65px }
	.spacer { width: 94px }
	.diff { color: var(--increase-color) }
</style>

<div class="container">
	<div class="name">
		{name}
	</div> 
	<div class="value">
		{value}
		{#if increase}
		<span class="diff">
			(+{ increase})
		</span>
		{/if}
	</div>
	<div class="spacer"></div>
</div>