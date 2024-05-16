import { ExtractPropTypes } from 'vue';

export const textareaProps = {
    value: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '100%'
    },
    fontSize: {
        type: String,
        default: '1em'
    },
    placeholder: {
        type: String,
        default: ''
    }
} as const;

export type TextareaProps = ExtractPropTypes<typeof textareaProps>;