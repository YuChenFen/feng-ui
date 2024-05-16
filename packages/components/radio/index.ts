import { withInstall } from '@feng-ui/utils/withInstall';
import _Radio from './src/radio.vue';
import _NavigationRadio from './src/navigationRadio.vue';

const Radio = withInstall(_Radio);
const NavigationRadio = withInstall(_NavigationRadio);

export { Radio, NavigationRadio };

export type { RadioProps } from './src/radio';
export type { NavigationRadioProps } from './src/navigationRadio';

declare module "vue" {
    export interface GlobalComponents {
        FengRadio: typeof Radio;
        FengNavigationRadio: typeof NavigationRadio;
    }
}