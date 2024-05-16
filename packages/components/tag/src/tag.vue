<template>
    <div class="feng-tag" :class="{ 'feng-tag--select': select }" @click.stop="click">
        <div :class="bem.b('content')">
            <slot></slot>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref } from 'vue';
import { tagProps } from './tag';
defineOptions({ name: 'FengTag' });

const bem = createNamespace('tag');

const props = defineProps(tagProps);
const emits = defineEmits(['update:select', 'change']);
const select = ref(props.select);
function click(e: MouseEvent) {
    select.value = !select.value;
    emits('update:select', select.value);
    emits('change', select.value);
}
</script>
