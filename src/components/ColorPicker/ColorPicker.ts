import { actionName } from '@/store';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { color } from "@/enum/color";
import { Action } from 'vuex-class';

@Component({
    components: {

    }
})
export default class ColorPicker extends Vue {
    @Action(actionName.changeColorOfDog) private _changeColor: (color: color) => void;

    get colors(): color[] {
        return Object.keys(color)
            .filter((x => !isNaN(+x)))
            .map((c: string) => {
                return color[c];
            });
    }

    changeColor(clickedColor: string) {
        this._changeColor(color[clickedColor]);
    }
}
