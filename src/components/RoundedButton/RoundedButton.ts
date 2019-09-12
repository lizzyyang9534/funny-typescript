import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {

    }
})
export default class RoundedButton extends Vue {
    @Prop() text: string;
}