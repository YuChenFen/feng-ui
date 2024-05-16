<template>
    <div>
        <input :class="bem.b()" type="checkbox" :checked="value" @change="change">
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { switchProps } from './switch';
defineOptions({ name: 'FengSwitch' });
const bem = createNamespace('switch');
const props = defineProps(switchProps);

const emit = defineEmits(['update:value', 'change']);
function change(e: Event) {
    emit('update:value', (e.target as HTMLInputElement).checked)
    emit('change', (e.target as HTMLInputElement).checked)
}

</script>
