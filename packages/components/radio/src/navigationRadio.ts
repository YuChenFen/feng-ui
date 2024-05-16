import { ExtractPropTypes } from 'vue';

export const navigationRadioProps = {
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

export type NavigationRadioProps = ExtractPropTypes<typeof navigationRadioProps>;