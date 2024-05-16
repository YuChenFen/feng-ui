// block 代码块
// element 元素
// modifier 装饰

/**
 *
 * @param prefixName 前缀名
 * @param blockName 代码块名
 * @param elementName 元素名
 * @param modifierName 装饰符名
 * @returns {string} 样式名
 */
function _bem(prefixName: string, blockName: string, elementName: string, modifierName: string): string {
    if (blockName) {
        prefixName += `-${blockName}`;
    }
    if (elementName) {
        prefixName += `__${elementName}`;
    }
    if (modifierName) {
        prefixName += `--${modifierName}`;
    }
    return prefixName;
}

/**
 *
 * @param prefixName 前缀
 * @returns {b, e, m, be, bm, em, bem}
 */
function createBEM(prefixName: string): any {
    const b = (blockName: string = '') => _bem(prefixName, blockName, "", "");

    const e = (elementName: string = '') =>
        elementName ? _bem(prefixName, "", elementName, "") : "";

    const m = (modifierName: string = '') =>
        modifierName ? _bem(prefixName, "", "", modifierName) : "";

    const be = (blockName: string = '', elementName: string = '') =>
        blockName && elementName
            ? _bem(prefixName, blockName, elementName, "")
            : "";
    const bm = (blockName: string = '', modifierName: string = '') =>
        blockName && modifierName
            ? _bem(prefixName, blockName, "", modifierName)
            : "";
    const em = (elementName: string = '', modifierName: string = '') =>
        elementName && modifierName
            ? _bem(prefixName, "", elementName, modifierName)
            : "";
    const bem = (blockName: string = '', elementName: string = '', modifierName: string = '') =>
        blockName && elementName && modifierName
            ? _bem(prefixName, blockName, elementName, modifierName)
            : "";
    const is = (name: string = '', state: string | boolean) => (state ? `is-${name}` : "");
    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is,
    };
}

export function createNamespace(name: string) {
    const prefixName = `feng-${name}`;
    return createBEM(prefixName);
}


