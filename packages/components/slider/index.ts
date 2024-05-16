import { withInstall } from '@feng-ui/utils/withInstall';
import _Slider from './src/slider.vue';

const Slider = withInstall(_Slider);

export default Slider;

export type { SliderProps } from './src/slider';

declare module "vue" {
    export interface GlobalComponents {
        FengSlider: typeof Slider;
    }
}