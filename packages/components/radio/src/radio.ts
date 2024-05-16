import { ExtractPropTypes } from 'vue';

export const radioProps = {
    group: {
        type: Array<string>,
        required: false,
        default: () => []
    },
    value: {
        type: String,
        required: false,
        default: ''
    }
} as const;

export type RadioProps = ExtractPropTypes<typeof radioProps>;