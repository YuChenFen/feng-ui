/**
 * 打开文件夹选择器
 * @returns root 文件列表
 */
async function OpenDirectoryPicker() {
    try {
        const dirHandle = await (window as any)?.showDirectoryPicker();
        const root: any = []
        await processHandler(dirHandle, root);
        return root;
    } catch (e) {
        return void 0;
    }
}

/**
 * 获取 dirHandle 下的所有文件
 * @param {dirHandle} handle 文件夹句柄
 * @param {Array} node 文件列表
 * @returns node 文件列表
 */
async function processHandler(handle: any, node: any) {
    if (handle.kind === 'file') {
        let file = await handle?.getFile();
        node.push({
            name: handle.name,
            kind: handle.kind,
            file: file
        });
    } else {
        let children: any = [];
        const iter = await handle.entries();
        for await (const entry of iter) {
            await processHandler(entry[1], children);
        }
        node.push({
            name: handle.name,
            kind: handle.kind,
            children: children
        });
    }
    return node;
}


export default OpenDirectoryPicker