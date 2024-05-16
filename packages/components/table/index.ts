import { withInstall } from '@feng-ui/utils/withInstall';
import _Table from './src/table.vue';

const Table = withInstall(_Table);

export default Table;

export type { TableProps } from './src/table';

declare module "vue" {
    export interface GlobalComponents {
        FengTable: typeof Table;
    }
}