import { ExtractPropTypes } from 'vue';

export const checkboxProps = {
    value: {
        type: Boolean,
        default: false
    },
    // 按钮文本
    text: {
        type: String,
        default: ''
    }
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;