<template>
	<div id="app">
		<Dog />
		<ColorPicker />
		<RoundedButton text="Bark!" />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Dog from "./components/Dog/Dog.vue";
	import ColorPicker from "./components/ColorPicker/ColorPicker.vue";
	import RoundedButton from "./components/RoundedButton/RoundedButton.vue";

	@Component({
		components: {
			Dog,
			ColorPicker,
			RoundedButton
		}
	})
	export default class App extends Vue {}
</script>

<style lang="scss">
	body {
		margin: 0;
	}

	#app {
    padding: 2rem;
	}
</style>
