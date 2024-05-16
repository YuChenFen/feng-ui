import { ExtractPropTypes } from 'vue';

export const tagProps = {
    // 按钮文本
    text: {
        type: String,
        required: true,
        default: ''
    },
    // 值
    select: {
        type: Boolean,
        required: true,
        default: false
    }
} as const;

export type TagProps = ExtractPropTypes<typeof tagProps>;