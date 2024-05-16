<template>
    <div :class="bem.b()" :style="inputStyle">
        <input ref="inputRef" :type="inputType" :value="value" @change="change" @input="input"
            :placeholder="placeholder" :style="{ 'padding-right': showClear ? '' : '15px' }" v-bind="attrs">
        <div :class="bem.b('container')">
            <div v-if="showClear" :style="{ visibility: value ? 'revert-layer' : 'hidden' }" :class="bem.e('clear')"
                @click.stop="clear">
                <svg t="1709375294946" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="1614">
                    <path
                        d="M217.82708 851.418089m-22.627417-22.627417l0 0q-22.627417-22.627417 0-45.254834l588.312842-588.312842q22.627417-22.627417 45.254834 0l0 0q22.627417 22.627417 0 45.254834l-588.312842 588.312842q-22.627417 22.627417-45.254834 0Z"
                        p-id="1615"></path>
                    <path
                        d="M172.572246 217.850413m22.627417-22.627417l0 0q22.627417-22.627417 45.254834 0l588.312842 588.312842q22.627417 22.627417 0 45.254834l0 0q-22.627417 22.627417-45.254834 0l-588.312842-588.312842q-22.627417-22.627417 0-45.254834Z"
                        p-id="1616"></path>
                </svg>
            </div>
        </div>
        <div :class="bem.e('underline')"></div>
        <slot name="suffix">
        </slot>
    </div>

</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref, useAttrs, onMounted } from 'vue';
import { inputProps } from "./input";

defineOptions({ name: 'FengInput' });
const bem = createNamespace('input');

const props = defineProps(inputProps);
const attrs = useAttrs();
const emits = defineEmits(['update:value', 'change', 'input']);
const inputRef = ref<HTMLInputElement | null>(null);

const inputStyle = {
    width: props.width,
}

const change = (e: Event) => {
    emits('update:value', (e.target as HTMLInputElement).value);
    emits('change', (e.target as HTMLInputElement).value);
}
const input = (e: Event) => {
    emits('update:value', (e.target as HTMLInputElement).value);
    emits('input', (e.target as HTMLInputElement).value);
}
const clear = () => {
    emits('update:value', '');
    emits('change', '');
}

onMounted(() => {
    if (props.focus) {
        inputRef.value!.focus();
    }
})
</script>