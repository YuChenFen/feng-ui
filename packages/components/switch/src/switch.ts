import { ExtractPropTypes } from 'vue';

export const switchProps = {
    value: {
        type: Boolean,
        default: false
    }
} as const;

export type SwitchProps = ExtractPropTypes<typeof switchProps>;

