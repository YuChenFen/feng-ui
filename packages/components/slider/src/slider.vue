<template>
    <div :class="bem.b()" style="position: relative;">
        <input type="range" :value="value" @change="change($event)" @input="input($event)"
            :style="`background-size: ${value}%;width: ${width}px;`" />
        <span :class="bem.e('tips')" :style="`left: ${getTipsLeft(value)}px`" v-if="showTips">
            <p>{{ value }}</p>
        </span>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref } from 'vue';
import { sliderProps } from "./slider";

defineOptions({ name: "FengSlider" })

const bem = createNamespace('slider');

const props = defineProps(sliderProps);
const value = ref(props.value);
const emits = defineEmits(['update:value', 'change']);
function change(e: Event) {
    emits('update:value', Number((e.target as HTMLInputElement).value));
    emits('change', Number((e.target as HTMLInputElement).value));
}
function input(e: Event) {
    value.value = Number((e.target as HTMLInputElement).value)
}
function getTipsLeft(value: number) {
    return ((props.width - 18) * value / 100) - 9;
}
</script>