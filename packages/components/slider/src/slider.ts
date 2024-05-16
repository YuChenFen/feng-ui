import { ExtractPropTypes } from 'vue';

export const sliderProps = {
    value: {
        type: Number,
        default: 0
    },
    width: {
        type: Number,
        default: 130
    },
    showTips: {
        type: Boolean,
        default: false
    }
} as const;

export type SliderProps = ExtractPropTypes<typeof sliderProps>;

