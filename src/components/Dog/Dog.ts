import { color } from '@/enum/color';
import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from 'vuex-class';
import { IState } from '@/store';
import DogSvg from '../../assets/Dog_silhouette.svg';

@Component({
    components: {
        DogSvg
    }
})
export default class Dog extends Vue {
    @State((state: IState) => state.isBark) isBark: boolean;
    @State((state: IState) => state.color) _color: color;
    text: string = "汪";

    get color(): string {
        return color[this._color];
    }
}