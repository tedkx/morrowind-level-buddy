<script>
    export let text;
</script>

<style>
	.container {
		font-weight: bold;
		position: relative;
		text-align: center;
	}
	.container::before {
		background-image: url('../bar-bg.jpg');
		background-position: center top;
		background-repeat: repeat-x;
		background-size: contain;
		bottom: 0;
		content: ' ';
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 0;
	}
	.text-wrap {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	.text {
		background-color: rgba(0, 0, 0, 0.9);
		color: var(--main-color);
		margin: 2px 0;
		padding: 2px 0 4px;
		position: relative;
		width: 70px;
		z-index: 2;
	}
	.bottom,.top {
		background-image: url('../bar-bg.jpg');
		background-repeat: repeat-x;
		height: 4px;
        position: relative;
        z-index: 1;
	}
	.bottom { border-top: solid 1px #000 }
	.top { border-bottom: solid 1px #000 }
</style>

<div class="container">
	<div class="top"></div>
    <slot></slot>
	<div class="text-wrap">
		<div class="text">{text}</div>
	</div>
	<div class="bottom"></div>
</div>