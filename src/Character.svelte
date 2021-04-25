<script>
	export const name = '';
	export const level = null;
	
	import Skill from './Skill.svelte';
	import Attribute from './Attribute.svelte';
	import LevelInfo from './LevelInfo.svelte';
	import { skillData } from './data';
	import { attributesOrder, character, skillIncreases, skillsOrder } from './stores';
	
	const onIncrement = skillName => character.increment(skillName);
	const onDecrement = skillName => character.decrement(skillName);
	
	const handlers = { onIncrement, onDecrement };
</script>

{#if $character}
	<LevelInfo />

	<hr />

	{#each $attributesOrder as attributeName}
		<Attribute
			increase={$skillIncreases[attributeName]}						 
			name={attributeName}
			value={$character.attributes[attributeName]} />
	{/each}
	
	<hr />

	{#each ['major','minor','other'] as type, i}
		{#each $skillsOrder[type] as skillName}
			<Skill {...skillData[skillName]} {...$character.skills[skillName]} {...handlers} />
		{/each}
		{#if i<2}
			<hr />
		{/if}
	{/each}
{/if}