import { ExtractPropTypes } from 'vue';

export const iconProps = {
    name: String
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;