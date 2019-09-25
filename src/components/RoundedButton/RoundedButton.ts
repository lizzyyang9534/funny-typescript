import { Component, Prop, Vue } from "vue-property-decorator";
import { actionName } from "@/store";
import { State, Action } from "vuex-class";

@Component({
    components: {

    }
})
export default class RoundedButton extends Vue {
    @Prop() text: string;
    @Action(actionName.bark) bark: () => void;
}