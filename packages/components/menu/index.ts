import { withInstall } from '@feng-ui/utils/withInstall';
import _itemMenu from './src/itemMenu.vue';
import _listMenu from './src/listMenu.vue';

const itemMenu = withInstall(_itemMenu);
const listMenu = withInstall(_listMenu);

export { itemMenu, listMenu };

export type { ItemMenuProps } from './src/itemMenu';

declare module "vue" {
    export interface GlobalComponents {
        FengItemMenu: typeof itemMenu;
        FengListMenu: typeof listMenu;
    }
}