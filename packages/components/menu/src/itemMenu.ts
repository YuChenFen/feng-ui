import { ExtractPropTypes } from 'vue';

export const itemMenuProps = {
    // 是否显示
    show: {
        type: Boolean,
        required: true
    },
    // 选项列表
    options: {
        type: Array<any>,
        default: () => ([])
    },
    // 选项的高度
    optionHeight: {
        type: String,
        default: 'max-content'
    },
    // 选项键
    optionKey: {
        type: String,
        default: ''
    },
    // 位置
    position: {
        type: String,
        default: 'bottom'
    }
} as const;

export type ItemMenuProps = ExtractPropTypes<typeof itemMenuProps>;