<template>
	<div class="form-group">
		<label v-if="label" :for="id">{{ label }}</label>
		<select
			type="text"
			@input="updateValue"
			:value="value"
			v-bind="$attrs"
			:id="id"
		>
			<option value>--Select--</option>
			<option
				v-for="(option, index) in options"
				:key="index"
				:value="option"
				:selected="option === value"
			>
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		options: {
			type: Array,
			required: true
		},
		label: {
			type: String,
			default: ''
		},
		value: [String, Number],
		id: [String, Number]
	},
	methods: {
		updateValue(event) {
			this.$emit('input', event.target.value);
		}
	}
};
</script>

<style></style>
