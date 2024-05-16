import { withInstall } from '@feng-ui/utils/withInstall';
import _Tag from './src/tag.vue';

const Tag = withInstall(_Tag);

export default Tag;

export type { TagProps } from './src/tag';

declare module "vue" {
    export interface GlobalComponents {
        FengTag: typeof Tag;
    }
}