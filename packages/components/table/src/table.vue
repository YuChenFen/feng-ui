<template>
    <div :class="bem.b()" :style="{ height: `${height}px`, 'min-width': `${minWidth}px` }">
        <table>
            <!-- <colgroup>
            </colgroup> -->
            <thead>
                <tr>
                    <th v-for="header in headerData" :key="header.prop">
                        <div>{{ header.text }}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in data" :key="rowKey ? row[rowKey] : row">
                    <td v-for="header in headerData" :key="header.prop">
                        <div>{{ row[header.prop] }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { tableProps } from './table';
defineOptions({ name: 'FengTable' });
const props = defineProps(tableProps);
const bem = createNamespace('table');
</script>