import { h, render, ref, VNode } from 'vue'
import message from './message.vue';
import messageBox from './messageBox.vue'

const div = document.createElement('div');
document.body.appendChild(div);
const messageArr = ref<VNode[]>([]);

div.style.position = 'fixed';
div.style.top = '30px';
div.style.right = '0';
div.style.padding = '5px 10px';
div.style.maxHeight = 'calc(100vh - 10px)';
div.style.overflow = 'hidden';
div.style.zIndex = '9999';

function getMessageIndex(id: number) {
    for (let i = 0; i < messageArr.value.length; i++) {
        if ((messageArr.value[i] as any).props.id == id) {
            return i;
        }
    }
}

interface MassageType {
    id: number;
    duration: number;
    close: () => void;
}
let id = 0;
export default function Message(object: MassageType) {
    if (id == 0) {
        let vnode = h(messageBox, { messageArr } as any, undefined);
        render(vnode, div);
    }
    // render(null, div);
    object.id = id++;
    object.close = () => {
        let index = getMessageIndex(object.id);
        messageArr.value.splice(index!, 1);
        // vnode = h(messageBox, null, () => messageArr);
        // render(vnode, div);
    }
    if (object.duration) {
        setTimeout(() => {
            object.close();
        }, object.duration);
    }
    messageArr.value.push(h(message, object as any, undefined));
}