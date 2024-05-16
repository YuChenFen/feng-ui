import { ExtractPropTypes } from 'vue';

interface HeaderData {
    text: string;
    prop: string;
}

export interface TableData {
    [key: string]: any;
}

export const tableProps = {
    /*
     * text: 显示文本
     * prop: 数据对应字段
     */
    headerData: {
        type: Array<HeaderData>,
        default: () => []
    },
    // 数据
    data: {
        type: Array<TableData>,
        default: () => []
    },
    // 高度
    height: {
        type: Number,
        default: 0
    },
    // 最小宽度，防止表格挤压变形
    minWidth: {
        type: Number,
        default: 0
    },
    rowKey: {
        type: String,
        default: ''
    }
} as const;

export type TableProps = ExtractPropTypes<typeof tableProps>;

