import { ExtractPropTypes } from 'vue';

interface Option {
    [key: string]: string | number; // 或者其他合适的类型
}

export const selectProps = {
    // 全部选项
    options: {
        type: Array<Option>,
        required: false,
        default: []
    },
    // 如果 options 为 object 时，label 为显示的属性名
    label: {
        type: String,
        required: false,
        default: ''
    },
    // 默认选中的选项
    defaultSelected: {
        required: false,
        default: void 0
    },
    // 选项的宽度
    width: {
        type: Number,
        required: false,
        default: 0
    },
    // 选项的高度
    optionHeight: {
        type: Number,
        required: false,
        default: 30
    },
    // 选项的字体大小
    fontSize: {
        type: String,
        required: false,
        default: '14px'
    }
} as const;

export type SelectProps = ExtractPropTypes<typeof selectProps>;