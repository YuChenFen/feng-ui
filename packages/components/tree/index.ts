import { withInstall } from '@feng-ui/utils/withInstall';
import _Tree from './src/tree.vue';

const Tree = withInstall(_Tree);

export default Tree;

export type { TreeProps } from './src/tree';

declare module "vue" {
    export interface GlobalComponents {
        FengTree: typeof Tree;
    }
  }