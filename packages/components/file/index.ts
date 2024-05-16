import OpenFilePicker from "./src/openFilePicker";
import OpenDirectoryPicker from "./src/openDirectoryPicker";
import { Plugin } from "vue";

(OpenFilePicker as unknown as Plugin).install = (Vue: any) => {
    Vue.config.globalProperties.$FengOpenFilePicker = OpenFilePicker;
};
(OpenDirectoryPicker as unknown as Plugin).install = (Vue: any) => {
    Vue.config.globalProperties.$FengOpenDirectoryPicker = OpenDirectoryPicker;
};

export { OpenFilePicker, OpenDirectoryPicker };