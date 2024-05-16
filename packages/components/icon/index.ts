import { withInstall } from '@feng-ui/utils/withInstall';
import _Icon from './src/icon.vue';

const Icon = withInstall(_Icon);

export default Icon;

export type { IconProps } from './src/icon';

declare module "vue" {
    export interface GlobalComponents {
        FengIcon: typeof Icon;
    }
  }