<script>
	import LevelUpDialog from './LevelUp/Dialog.svelte'
	import TitleBar from './TitleBar.svelte'
	import { levelProgress, modalComponent } from './stores';
	const showLevelUpScreen = () => modalComponent.set(LevelUpDialog);
	
	$: transform = `transform: translateX(${$levelProgress * 10}%)`;
</script>

<style>
	.container {
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
	}
	.background {
		background-color: rgba(255, 255, 255, 0.5);
		bottom: 0;
		left: 0;
		position: absolute;
		top: 0;
		transition: all .25s ease;
		width: 100%;
		z-index: 0;
	}
	.level-up-button {
		font-family: 'MedievalSharp', cursive;
		font-size: 14px;
		padding: 0.3rem 0.3rem 0.2rem;
		position: absolute;
		right: 5px;
		top: 5px;
		z-index: 0;
	}
</style>

<div class="container">
	<TitleBar text={`${$levelProgress} / 10`}>
		<div class="background" style={transform}></div>
		{#if true}
			<button class="level-up-button" 
				on:click={showLevelUpScreen}>
					Level Up
			</button>
		{/if}
	</TitleBar>
</div>