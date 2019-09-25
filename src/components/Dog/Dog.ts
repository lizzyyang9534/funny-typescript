import { Component, Prop, Vue } from "vue-property-decorator";
import DogSvg from '../../assets/Dog_silhouette.svg';

@Component({
    components: {
        DogSvg
    }
})
export default class Dog extends Vue {
}