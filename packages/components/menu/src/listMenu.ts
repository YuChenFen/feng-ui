import { ExtractPropTypes } from 'vue';

export const listMenuProps = {
    highlightItem: {
        default: ''
    },
    options: {
        type: Array<any>,
        default: () => []
    },
    // 选项键
    optionKey: {
        type: String,
        required: true,
        default: ''
    },
} as const;

export type ListMenuProps = ExtractPropTypes<typeof listMenuProps>;