import { withInstall } from '@feng-ui/utils/withInstall';
import _Input from './src/input.vue';

const Input = withInstall(_Input);

export default Input;

export type { InputProps } from './src/input';

declare module "vue" {
    export interface GlobalComponents {
        FengInput: typeof Input;
    }
}