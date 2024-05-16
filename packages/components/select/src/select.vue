<template>
    <div :style="style">
        <div :class="bem.b()" @click.stop="show" :style="{ width: width ? '100%' : 'max-content' }">
            <div style="flex: 1;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{ defaultSelected }}
            </div>
            <span :class="bem.b('down')">
                <svg ref="svgRef" t="1700911295607" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2416">
                    <path
                        d="M763.904 407.552l-209.92 264.192c-16.896 21.504-49.664 21.504-67.072 0L276.48 407.552c-22.016-28.16-2.048-69.632 33.792-69.632h420.352c35.84 0 55.808 41.472 33.28 69.632z"
                        fill="#666666" p-id="2417"></path>
                </svg>
            </span>
        </div>
        <transition name="feng-select-options-animation">
            <div v-show="isShowOptions" :class="bem.b('options')">
                <div v-if="options.length === 0" :class="bem.b('option')" :style="{ 'height': `${optionHeight}px` }">
                    <div :class="bem.be('option', 'label')">
                        NOT DATA
                    </div>
                </div>
                <div v-for="option in options" :key="option.toString()" class="feng-select-option"
                    :class="{ 'feng-select-options--selected': option === defaultSelected }" @click.stop="change(option)"
                    :style="{ 'height': `${optionHeight}px` }">
                    <div :class="bem.be('option', 'label')">
                        {{ label ? option[label] : option }}
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref, watch } from 'vue';
import { selectProps } from './select';

defineOptions({ name: 'FengSelect' })
const bem = createNamespace('select');
const props = defineProps(selectProps);

const style = {
    fontSize: props.fontSize,
    height: props.optionHeight + 'px',
    width: props.width + 'px'
}
const emits = defineEmits(['change'])
const isShowOptions = ref(false);
const svgRef = ref(null);
watch(isShowOptions, (val) => {
    if (val) {
        if (svgRef.value) {
            (svgRef.value as HTMLElement).style.transform = 'rotate(180deg)';
        }
        // 如果点击就关闭 addEventListener 事件 函数 捕获阶段
        document.addEventListener('click', closeOptions, true);
        // 如果右键其他地方关闭这次的上下文菜单栏
        document.addEventListener('contextmenu', closeOptions, true);

    } else {
        if (svgRef.value) {
            (svgRef.value as HTMLElement).style.transform = 'rotate(0deg)';
        }
        document.removeEventListener('click', closeOptions);
        document.removeEventListener('contextmenu', closeOptions);
    }
})

const closeOptions = () => {
    isShowOptions.value = false;
}

function show(e: Event) {
    e.stopPropagation();
    isShowOptions.value = !isShowOptions.value;
}

function change(option: Object) {
    closeOptions()
    emits('change', option)
}
</script>