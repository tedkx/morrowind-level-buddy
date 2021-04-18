import { derived, writable } from 'svelte/store';
import { attributeData, skillData } from './data';
import { localStorageKey } from './constants';

// import tempdata from './tempdata';
// const existingData = tempdata;

let existingData = null
try {
	existingData = JSON.parse(localStorage.getItem(localStorageKey));
	if(!existingData) console.warn('No character data found');
} catch(ex) {
	console.warn('Unparseable character data');
}

const { character: initialCharacterData, order: initialOrderData } = existingData || {};

const createCharacter = () => {
	const { set, subscribe, update } = writable(initialCharacterData);
	
	/** Expects up to 3 { name, value } objects representing leveling attribute and quantity */
	const levelUp = modifiedAttributes => update(currentCharacter => ({
		...currentCharacter,
		attributes: attributeData.reduce((obj, attributeName) => {
			const modified = modifiedAttributes.find(ma => ma.name === attributeName);
			obj[attributeName] = currentCharacter.attributes[attributeName] 
				+ (modified ? modified.value || 1 : 0);
			return obj;
		}, {}),
		level: currentCharacter.level + 1,
		skills: Object.keys(skillData).reduce((obj, name) => {
			const { current, ...skill } = currentCharacter.skills[name];
			obj[name] = { ...skill, initial: current, current };
			return obj;
		}, {})
	}));
	
	const increment = skillName => update(currentCharacter => {
		const { current, ...skill } = currentCharacter.skills[skillName];
		return {
			...currentCharacter,
			skills: {
				...currentCharacter.skills,
				[skillName]: { ...skill, current: current + 1 }
			}
		};
	});
																				
	const decrement = skillName => update(currentCharacter => {
		const { current, ...skill } = currentCharacter.skills[skillName];
		return {
			...currentCharacter,
			skills: {
				...currentCharacter.skills,
				[skillName]: { ...skill, current: current - 1 }
			}
		};
	});
	
	return {
		create: data => set(data),
		decrement,
		increment,
		levelUp,
		subscribe,
	}
}

const character = createCharacter();

const { attributes: initialAttributesOrder, ...initialSkillsOrder } = initialOrderData || {};
const attributesOrder = writable(initialAttributesOrder);
const skillsOrder = writable(initialSkillsOrder);

const skillIncreases = derived(
	character,
	$character => {
		if(!$character) return {};
		
		const attributeSkillCount = Object.values(skillData).reduce((obj, { attribute, name }) => {
			if(!obj[attribute]) obj[attribute] = 0;
			const { current, initial } = $character.skills[name];
			obj[attribute] += current - initial;
			return obj;
		}, {});
		
		Object.keys(attributeSkillCount).forEach(attributeName => {
			const value = attributeSkillCount[attributeName];
			attributeSkillCount[attributeName] = value >= 10 ? 5
				: value >= 8 ? 4
				: value >= 5 ? 3
				: value >= 1 ? 2
			 	: 0
		});
		
		return attributeSkillCount
	}
);

const levelProgress = derived(
	character,
	$character => {
		if(!$character) return 0;
		const sum = Object.values($character.skills)
			.reduce((acc, { current, initial, major, minor}) => {
				if((major || minor) && current > initial)
					acc += current - initial;
				return acc;
			}, 0);
		return Math.min(sum, 10);
	}
)

const modalComponent = writable(null);

export { attributesOrder, character, levelProgress, modalComponent, skillIncreases, skillsOrder };