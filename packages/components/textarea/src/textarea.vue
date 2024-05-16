<template>
    <div :class="bem.b()" :style="{ width: width, height: height }">
        <textarea :style="{ fontSize: fontSize }" :value="value" :placeholder="placeholder" @input="input"
            @change="change" @keydown="keydown"></textarea>
        <div :class="bem.e('underline')"></div>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { nextTick } from 'vue';
import { textareaProps } from './textarea';
defineOptions({ name: 'FengTextarea' });

const bem = createNamespace('textarea');
const props = defineProps(textareaProps);

const emits = defineEmits(["update:value", "input", "change"]);

const input = (e: Event) => {
    emits('update:value', (e.target as HTMLInputElement).value);
    emits('input', (e.target as HTMLInputElement).value);
}
const change = (e: Event) => {
    emits('update:value', (e.target as HTMLInputElement).value);
    emits('change', (e.target as HTMLInputElement).value);
}

const keydown = (e: KeyboardEvent) => {
    if (e.keyCode === 9) {
        e.preventDefault();
        let indent = "    ";
        let start = (e.target as HTMLInputElement).selectionStart!;
        let end = (e.target as HTMLInputElement).selectionEnd!;
        let selected = window?.getSelection()?.toString();
        selected = indent + selected?.replace(/\n/g, '\n' + indent);
        emits('update:value', (e.target as HTMLInputElement).value.substring(0, start) + selected + (e.target as HTMLInputElement).value.substring(end));
        nextTick(() => {
            (e.target as HTMLInputElement).setSelectionRange(start + indent.length, start + (selected as string).length);
        })
    }
}
</script>