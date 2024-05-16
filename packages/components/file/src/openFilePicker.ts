/**
 * 
 * @param {Array} types 文件类型，仅在compatible为false时生效，默认为空数组
 * @param {Boolean} compatible 是否采用兼容模式，默认为true
 * @returns File
 */
async function OpenFilePicker(types = [], compatible = true) {
    try {
        if (!compatible) {
            const [fileHandle] = await (window as any)?.showOpenFilePicker({
                types: types,
                multiple: false
            });

            return await fileHandle?.getFile();
        }
        let inputElement = document.createElement("input");
        inputElement.id = `file-input-${Number(Math.random().toString().substr(3, 10) + Date.now()).toString(36)}`;
        inputElement.type = "file";
        inputElement.style.display = "none";
        inputElement.multiple = false;
        inputElement.click();

        return await new Promise((resolve, reject) => {
            let _isSelected = false
            const changeEvent = () => {
                const file = inputElement.files![0];
                if (file) {
                    _isSelected = true;
                    resolve(file);
                }
                reject(void 0);
            }
            const focusEvent = (event: Event) => {
                setTimeout(() => {
                    if (event.target?.constructor === Window) {
                        if (!_isSelected) {
                            reject(void 0);
                        }
                    }
                }, 300)
            }
            inputElement.addEventListener("change", changeEvent, { once: true });
            window.addEventListener("focus", focusEvent, { once: true });
        });
    } catch {
        return void 0;
    }
}

export default OpenFilePicker