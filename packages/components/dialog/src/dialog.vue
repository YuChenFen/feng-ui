<template>
    <teleport to="body">
        <dialog ref="dialog" :class="bem.b()" :style="{ width: width }">
            <slot name="body"></slot>
            <footer>
                <slot name="footer">
                    <div :class="bem.be('footer', 'wrapper')">
                        <button :class="[bem.be('footer', 'button'), bem.be('footer', 'sure')]" @click.stop="ok">
                            <p>确认</p>
                        </button>
                        <button :class="[bem.be('footer', 'button'), bem.be('footer', 'cancel')]" @click.stop="no">
                            <p>取消</p>
                        </button>
                    </div>
                </slot>
            </footer>
        </dialog>
    </teleport>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref, watch, onMounted } from 'vue';
import { dialogProps } from './dialog';
defineOptions({ name: 'FengDialog' })
const bem = createNamespace('dialog');

const props = defineProps(dialogProps);
const emits = defineEmits(['update:open', 'ok', 'no']);
const dialog = ref(null);
function setOpen() {
    if (dialog.value) {
        if (props.open) {
            (dialog.value as HTMLDialogElement).showModal();
            document.body.style.overflow = 'hidden';

        } else {
            (dialog.value as HTMLDialogElement).close();
            document.body.style.overflow = 'auto';
        }
    }
};
watch(() => props.open, setOpen, { immediate: true, deep: true });

const close = () => {
    emits('update:open', false);
}
function ok() {
    emits('ok');
    close();
}
function no() {
    emits('no');
    close();
}

onMounted(() => {
    setOpen()
})

</script>