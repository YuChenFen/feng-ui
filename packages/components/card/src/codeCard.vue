<template>
    <div :class="bem.b()" :style="{ 'width': width, 'height': height }">
        <header>
            <div :class="bem.be('header', 'right')">
                <div style="background-color: #ff6057;" @click.stop="emits('red')"></div>
                <div style="background-color: #ffbd2f;" @click.stop="emits('yellow')"></div>
                <div style="background-color: #28c93f;" @click.stop="emits('green')"></div>
            </div>
            <slot name="header-title" :value="value"></slot>
        </header>
        <main :class="bem.b('main')">
            <slot name="main" :value="value"></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { codeCardProps } from './codeCard';
defineOptions({ name: 'FengCodeCard' });
const bem = createNamespace('code-card');
const props = defineProps(codeCardProps);

const emits = defineEmits(['red', 'green', 'yellow'])
</script>
