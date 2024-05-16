<template>
    <span :class="bem.b()" v-html="svg"></span>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { iconProps } from './icon';
import { ref } from 'vue';

defineOptions({
    name: 'FengIcon'
})

const bem = createNamespace('icon');
const props = defineProps(iconProps);
const svg = ref('');

const modules = import.meta.glob("../svg/**.svg");
modules[`../svg/${props.name}.svg`]().then((module: any) => module.default).then(url => {
    fetch(url).then(res => res.text()).then(text => {
        svg.value = text;
    })
})
</script>