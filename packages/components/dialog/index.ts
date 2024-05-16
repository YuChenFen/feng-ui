import { withInstall } from '@feng-ui/utils/withInstall';
import _Dialog from './src/dialog.vue';

const Dialog = withInstall(_Dialog);

export default Dialog;

export type { DialogProps } from './src/dialog';

declare module "vue" {
    export interface GlobalComponents {
        FengDialog: typeof Dialog;
    }
  }