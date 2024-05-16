<template>
    <button class="feng-button" :class="{ 'feng-button--disabled': disabled }" @click.stop="click">
        <div :class="bem.e('icon')">
            <slot>
            </slot>
        </div>
        <p>{{ text }}</p>
    </button>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { buttonProps } from './button';

defineOptions({ name: 'FengButton' });

const bem = createNamespace('button');

const props = defineProps(buttonProps);
const emits = defineEmits(['click']);

function click(e: Event) {
    if (!props.disabled) {
        emits('click', e);
    }
}
</script>