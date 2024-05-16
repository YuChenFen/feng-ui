import { ExtractPropTypes } from 'vue';

export const inputProps = {
    value: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    inputType: {
        type: String,
        default: 'text'
    },
    showClear: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: ''
    },
    focus: {
        type: Boolean,
        default: false
    }
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;