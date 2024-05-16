import { ExtractPropTypes } from 'vue';

export interface TreeNode {
    value: string | number;
    label: string;
    text?: string;
    state?: any;
    component?: any;
    children?: TreeNode[];   
}

export const treeProps = {
    data: {
        type: Array<TreeNode>,
        default: () => []
    },
    paddingLeft: {
        type: Number,
        default: 0
    },
    paddingLeftStep: {
        type: Number,
        default: 16
    }
} as const;

export type TreeProps = ExtractPropTypes<typeof treeProps>;