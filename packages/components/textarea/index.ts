import { withInstall } from '@feng-ui/utils/withInstall';
import _Textarea from './src/textarea.vue';

const Textarea = withInstall(_Textarea);

export default Textarea;

export type { TextareaProps } from './src/textarea';

declare module "vue" {
    export interface GlobalComponents {
        FengTextarea: typeof Textarea;
    }
}