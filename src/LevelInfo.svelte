<script>
    import { character, levelingPotential } from './stores';
</script>

<style>
    .container {
        display: flex;
        flex-wrap: nowrap;
    }
    .container > div {
        border-right: solid 1px var(--light-color);
        margin-right: 8px;
        padding-right: 8px;
        white-space: nowrap;
    }
</style>

<div class="container">
    <div>Level: {$character.level}</div>
    <div>Max Attrs Level Per 2: {$levelingPotential.maxPer2AchievedOnLevel}</div>
    <div>Per 3 {$levelingPotential.maxPer3AchievedOnLevel}</div>
</div>