import { withInstall } from '@feng-ui/utils/withInstall';
import _Checkbox from './src/checkbox.vue';

const Checkbox = withInstall(_Checkbox);

export default Checkbox;

export type { CheckboxProps } from './src/checkbox';

declare module "vue" {
    export interface GlobalComponents {
        FengCheckbox: typeof Checkbox;
    }
}