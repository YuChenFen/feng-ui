<template>
    <div :class="bem.b()" :position="position">
        <slot></slot>
        <transition name="feng-item-menu-options-animation">
            <div v-show="show" :class="bem.b('options')">
                <div v-if="options.length === 0" :class="bem.b('option')" :style="{ height: optionHeight }">
                    <div :class="bem.be('option', 'label')">
                        NOT DATA
                    </div>
                </div>
                <div v-for="option in options " :key="optionKey ? option[optionKey] : option">
                    <template v-if="option.items">
                        <item-menu v-model:show="option.showItems.value" :options="option.items"
                            :option-height="optionHeight" :option-key="optionKey" position="child" @change="change"
                            :style="{ height: optionHeight }">
                            <div :class="bem.b('option')" @mouseenter="showChild(option.showItems)"
                                :style="{ height: optionHeight }">
                                <component :is="option.icon ? option.icon : 'p'"></component>
                                <div :class="bem.be('option', 'label')">
                                    {{ option.text }}
                                </div>
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.91 12.75"
                                    fill="rgb(var(--app-color))">
                                    <path class="cls-1"
                                        d="M.37,12.75c-.1,0-.19-.04-.27-.11-.15-.15-.15-.38,0-.53L5.84,6.38,.11,.64C-.04,.49-.04,.26,.11,.11,.26-.04,.49-.04,.64,.11L6.91,6.38,.64,12.64c-.07,.07-.17,.11-.27,.11Z" />
                                </svg>
                            </div>
                        </item-menu>
                    </template>
                    <div v-else :class="bem.b('option')" @click.stop="change(option)" @mouseenter="closeChild"
                        :style="{ height: optionHeight }">
                        <component :is="option.icon ? option.icon : 'p'"></component>
                        <div :class="bem.be('option', 'label')">
                            {{ option.text }}
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref, watch } from 'vue';
import { itemMenuProps } from './itemMenu';
defineOptions({ name: 'FengItemMenu' })
const bem = createNamespace('item-menu');
const props = defineProps(itemMenuProps)

const emits = defineEmits(['update:show', 'change'])
props.options.forEach(element => {
    if (element.items) {
        element.showItems = ref(false);
    }
});
watch(() => props.show, (val) => {
    if (val) {
        // 如果点击就关闭 addEventListener 事件 函数 捕获阶段
        document.addEventListener('click', closeOptions, true);
        // 如果右键其他地方关闭这次的上下文菜单栏
        document.addEventListener('contextmenu', closeOptions, true);

    } else {
        document.removeEventListener('click', closeOptions);
        document.removeEventListener('contextmenu', closeOptions);
    }
})
const closeOptions = () => {
    emits('update:show', false);
}
const change = (option: any) => {
    emits('change', option);
}

let currentChildShowItems = void 0;
const showChild = (showItems: any) => {
    showItems.value = true
    currentChildShowItems = showItems;
}
const closeChild = () => {
    if (currentChildShowItems) {
        (currentChildShowItems as any).value = false
    }
}
</script>

<style scoped></style>