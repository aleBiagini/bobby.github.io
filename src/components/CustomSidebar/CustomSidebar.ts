import { defineComponent, onMounted } from "vue";
import router from '../../router/index';
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CustomSidebar",
  setup() {
    const router = useRouter();

    return {
      routes: router.getRoutes()
    };
  },
});
