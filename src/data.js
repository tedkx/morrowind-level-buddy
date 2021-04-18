const attributeData = ['Strength','Endurance','Agility','Speed','Personality','Intelligence','Willpower','Luck'];
const specializationData = ['Combat','Magic','Stealth'];

const skillData = [
	{ attribute: 'Strength', name: 'acrobatics', spec: 'Stealth'},
	{ attribute: 'Strength', name: 'armorer', spec: 'Combat'},
	{ attribute: 'Strength', name: 'axe', spec: 'Combat'},
	{ attribute: 'Strength', name: 'blunt-weapon', spec: 'Combat'},
	{ attribute: 'Strength', name: 'long-blade', spec: 'Combat'},
	{ attribute: 'Endurance', name: 'heavy-armor', spec: 'Combat' },
	{ attribute: 'Endurance', name: 'medium-armor', spec: 'Combat' },
	{ attribute: 'Endurance', name: 'spear', spec: 'Combat' },
	{ attribute: 'Agility', name: 'block', spec: 'Combat' },
	{ attribute: 'Agility', name: 'light-armor', spec: 'Stealth' },
	{ attribute: 'Agility', name: 'marksman', spec: 'Stealth' },
	{ attribute: 'Agility', name: 'sneak', spec: 'Stealth' },
	{ attribute: 'Speed', name: 'athletics', spec: 'Combat' },
	{ attribute: 'Speed', name: 'hand-to-hand', spec: 'Stealth' },
	{ attribute: 'Speed', name: 'short-blade', spec: 'Stealth' },
	{ attribute: 'Speed', name: 'unarmored', spec: 'Magic' },
	{ attribute: 'Personality', name: 'illusion', spec: 'Magic' },
	{ attribute: 'Personality', name: 'mercantile', spec: 'Stealth' },
	{ attribute: 'Personality', name: 'speechcraft', spec: 'Stealth' },
	{ attribute: 'Intelligence', name: 'alchemy', spec: 'Magic' },
	{ attribute: 'Intelligence', name: 'conjuration', spec: 'Magic' },
	{ attribute: 'Intelligence', name: 'enchant', spec: 'Magic' },
	{ attribute: 'Intelligence', name: 'security', spec: 'Stealth' },
	{ attribute: 'Willpower', name: 'alteration', spec: 'Magic' },
	{ attribute: 'Willpower', name: 'destruction', spec: 'Magic' },
	{ attribute: 'Willpower', name: 'mysticism', spec: 'Magic' },
	{ attribute: 'Willpower', name: 'restoration', spec: 'Magic' },
].map(s => ({ 
	...s, 
	label: s.name.split('-').map(part => part[0].toUpperCase() + part.substr(1)).join(' ') 
})).reduce((obj, skill) => {
		obj[skill.name] = skill;
		return obj;
	}, {});

export { attributeData, specializationData, skillData };