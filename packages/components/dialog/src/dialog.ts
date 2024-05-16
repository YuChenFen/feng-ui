import { ExtractPropTypes } from 'vue';

export const dialogProps = {
    open: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: '80%'
    }
} as const;

export type DialogProps = ExtractPropTypes<typeof dialogProps>;