import { ExtractPropTypes } from 'vue';

export const codeCardProps = {
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '100%'
    },
    value: {
        default: {}
    }
} as const;

export type CodeCardProps = ExtractPropTypes<typeof codeCardProps>;