import { withInstall } from '@feng-ui/utils/withInstall';
import _Switch from './src/switch.vue';

const Switch = withInstall(_Switch);

export default Switch;

export type { SwitchProps } from './src/switch';

declare module "vue" {
    export interface GlobalComponents {
        FengSwitch: typeof Switch;
    }
}