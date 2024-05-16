<template>
    <div :class="bem.b()">
        <div v-for="item in options" :key="item[optionKey]" class="feng-list-menu__item"
            :class="{ 'feng-list-menu__item--highlight': item[optionKey] === highlightItem }" @click="click(item)">
            <component :is="item.component"></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { listMenuProps } from './listMenu';
defineOptions({ name: 'FengListMenu' });
const bem = createNamespace('list-menu');
const props = defineProps(listMenuProps);

const emits = defineEmits(['update:highlightItem', 'change'])
const click = (item: any) => {
    if (item[props.optionKey] === props.highlightItem) {
        return;
    }
    emits('update:highlightItem', item[props.optionKey]);
    emits('change', item);
}

</script>
