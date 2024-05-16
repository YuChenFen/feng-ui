import { Plugin } from "vue";
import components from "./components";

const FengUI = {
    install(Vue: any) {
        components.forEach((component: Plugin) => {
            Vue.use(component);
        });
    },
};

export default FengUI;
export * from "./components";