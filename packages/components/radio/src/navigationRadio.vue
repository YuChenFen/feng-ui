<template>
    <div :class="bem.b()">
        <div :class="bem.b('container')">
            <template v-for="item in group" :key="item">
                <input type="radio" :name="inputName" :id="inputName + item" :checked="item === value"
                    @change="change(item)" :value="item">
                <label :class="bem.be('container', 'tab')" :for="inputName + item">{{ item }}</label>
            </template>
            <span :style="{ left: `${left}px` }" :class="bem.e('glider')"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref, watch } from 'vue';
import { navigationRadioProps } from './navigationRadio';
defineOptions({ name: 'FengNavigationRadio' });
const bem = createNamespace('navigation-radio');

const props = defineProps(navigationRadioProps);
const emits = defineEmits(['update:value', 'change']);

const inputName = Number(Math.random().toString().substr(3, 10) + Date.now()).toString(36)
const left = ref(2);
const width = 105;
function indexItem(e: string) {
    let index = props.group.indexOf(e);
    left.value = 2 + index * width;
}
indexItem(props.value);
watch(() => props.value, indexItem);
const change = (item: string) => {
    emits('update:value', item);
    emits('change', item);
}
</script>