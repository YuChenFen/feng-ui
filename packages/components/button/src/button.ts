import { ExtractPropTypes } from 'vue';

export const buttonProps = {
    text: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;