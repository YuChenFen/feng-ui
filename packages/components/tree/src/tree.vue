<template>
    <ul class="feng-tree" :class="{ 'feng-tree-root__children': paddingLeft != 0 }" :style="{ paddingLeft: paddingLeft + 'px' }">
        <li v-for="node in data" :key="node.value" :style="`margin: 2px 0;`">
            <div class="feng-tree__node"
                :class="{ 'feng-tree__node--opened': node.state && node.state === 'opened', 'feng-tree__node--closed': node.state && node.state === 'closed' }"
                @click.stop="click($event, node)">
                <div class="feng-tree-before__node" :class="{ 'feng-tree-before__node--haschildren': node.children }">
                    <svg v-if="node.children" t="1712839323855" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="14804" width="16" height="16">
                        <path
                            d="M391.978667 343.893333A25.856 25.856 0 0 1 384 325.12a25.898667 25.898667 0 0 1 8.362667-18.645333A29.44 29.44 0 0 1 412.245333 298.666667a29.525333 29.525333 0 0 1 20.053334 7.509333l199.381333 186.922667A25.898667 25.898667 0 0 1 640 512c0 7.082667-2.986667 13.866667-8.32 18.901333l-199.424 186.922667a29.525333 29.525333 0 0 1-20.053333 7.509333 29.44 29.44 0 0 1-19.84-7.808 25.898667 25.898667 0 0 1-8.362667-18.688 25.856 25.856 0 0 1 7.978667-18.773333L571.306667 512 391.978667 343.893333z">
                        </path>
                    </svg>
                </div>
                <component v-if="node.component" :is="node.component"></component>
                <span>{{ node.text }}</span>
            </div>
            <tree v-if="node.children" :data="node.children" :padding-left="paddingLeftStep" :class="bem.b('children')"
                @click="attrs.onClick">
            </tree>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { createNamespace } from '@feng-ui/utils/create';
import { ref, useAttrs } from 'vue';
import { TreeNode, treeProps } from './tree';
defineOptions({ name: 'FengTree' });
const bem = createNamespace('tree');
const props = defineProps(treeProps);

props.data.forEach(node => {
    if (node.children && !node.hasOwnProperty('state')) {
        node.state = ref('closed');
    }
})

const attrs = useAttrs();

const click = (event: Event, node: TreeNode) => {
    if (node.state) {
        let nodeChildrens: HTMLElement = (event.currentTarget as HTMLElement)!.parentNode!.querySelector('.feng-tree-children')!;
        if (node.state === 'closed' && nodeChildrens) {
            node.state = 'opened';
            nodeChildrens.style.height = 'auto';
            let { height } = nodeChildrens.getBoundingClientRect();
            nodeChildrens.style.height = '0px';
            let animate = nodeChildrens.animate([
                {
                    height: '0px'
                },
                {
                    height: `${height}px`
                }
            ], {
                duration: 200
            })
            animate.onfinish = () => {
                nodeChildrens.style.height = '';
            }
        } else {
            node.state = 'closed';
            let { height } = nodeChildrens.getBoundingClientRect();
            let animate = nodeChildrens.animate([
                {
                    height: `${height}px`
                },
                {
                    height: 0
                }
            ], {
                duration: 200
            })
            animate.onfinish = () => {
                nodeChildrens.style.height = '';
            }
        }
    }
    if (typeof attrs.onClick === 'function') {
        attrs.onClick?.({ ...node });
    }
}
</script>