<script>
	import LevelBar from './LevelBar.svelte';
	import Character from './Character.svelte';
	import ModalContent from './LevelUp/ModalContent.svelte';
	import Modal from 'svelte-simple-modal';
	import { attributesOrder, character, skillsOrder } from './stores';
	import { localStorageKey } from './constants';

	const autoSave = true;

	$: {
		if(autoSave && $character && $attributesOrder && $skillsOrder)
			localStorage.setItem(localStorageKey, JSON.stringify({
				character: $character,
				order: {
					attributes: $attributesOrder,
					...$skillsOrder
				}
			}));
	}
</script>

<style>
	:global(:root){
		--increase-color: #494;
		--light-color: #BAAA91;
		--main-color: #BA9859;
	}
	:global(html, body) { 
		color: var(--main-color);
		font-family: 'MedievalSharp', cursive;
		padding: 0; 
	}
	:global(button, button:active, button:focus) {
		background-color: rgba(0,0,0,0.9);
		border-color: var(--main-color);
		border-width: 2px;
		color: var(--main-color);
		cursor: pointer;
		font-family: Verdana, sans-serif;
		padding-top: 0.3em;
	}
	:global(button[disabled]) {
		background-color: rgba(128,128,128,0.7);
		border-color: var(--light-color);
		color: var(--light-color);
	}
	:global(hr) { 
		background-image: url('../bar-bg.jpg');
		border: 0;
		height: 3px;
	}

	.container { 
		padding: 45px 12px 12px;
		position: relative;
	}
	.container::before {
		background-image: url('../bg.jpg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 0;
		content: ' ';
		left: 0;
		opacity: 0.1;
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
	}
	.container::after {
		background-color: rgba(0, 0, 0, 0.88);
		bottom: 0;
		content: ' ';
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
	}
</style>

<div class="container">
	<LevelBar />
	<Character />
	<Modal>
		<ModalContent />
	</Modal> 
</div>