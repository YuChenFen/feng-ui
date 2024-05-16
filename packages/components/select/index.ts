import { withInstall } from '@feng-ui/utils/withInstall';
import _Select from './src/select.vue';

const Select = withInstall(_Select);

export default Select;

export type { SelectProps } from './src/select';

declare module "vue" {
    export interface GlobalComponents {
        FengSelect: typeof Select;
    }
}