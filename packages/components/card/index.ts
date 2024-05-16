import { withInstall } from '@feng-ui/utils/withInstall';
import _CodeCard from './src/codeCard.vue';

const CodeCard = withInstall(_CodeCard);

export default CodeCard;

export type { CodeCardProps } from './src/codeCard';

declare module "vue" {
    export interface GlobalComponents {
        FengCodeCard: typeof CodeCard;
    }
}