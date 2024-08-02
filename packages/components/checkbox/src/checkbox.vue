<template>
    <div :class="bem.b()">
        <label :class="bem.b('container')">
            <input name="dummy" type="checkbox" @click.stop="change($event)" :checked="value">
            <span :class="bem.b('checkmark')"></span>
        </label>
        <p>
            {{ text }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { checkboxProps } from "./checkbox";
defineOptions({ name: 'FengCheckbox' });

const bem = createNamespace('checkbox');

const props = defineProps(checkboxProps)
const emits = defineEmits(['update:value', 'change'])
const change = (e: Event) => {
    emits('update:value', (e.target as HTMLInputElement).checked);
    emits('change', (e.target as HTMLInputElement).checked);
}
</script>
