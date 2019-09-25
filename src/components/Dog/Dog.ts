import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from 'vuex-class';
import { IState } from '@/store';

@Component
export default class Dog extends Vue {
    @State((state: IState) => state.isBark) isBark: boolean;
    text: string = "汪";
}