<template>
    <div :class="bem.b('group')">
        <label :class="bem.b('button')" v-for="item in group" :key="item">
            <input type="radio" :name="inputName" :id="item" :value="item" :checked="value === item"
                @change="change(item)" />
            <span :class="bem.e('label')" :for="item">
                <span :class="bem.e('inner')"></span>
            </span>
            <p>{{ item }}</p>
        </label>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { radioProps } from './radio';
defineOptions({ name: 'FengRadio' });
const props = defineProps(radioProps);

const bem = createNamespace('radio');

const inputName = Number(Math.random().toString().substr(3, 10) + Date.now()).toString(36);
const emits = defineEmits(['update:value', 'change']);

function change(item: string) {
    emits('update:value', item);
    emits('change', item);
}

</script>