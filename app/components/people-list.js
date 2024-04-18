import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  showPerson(person, second) {
    alert(
      `The person's name is ${person} and this is the second argument: ${second}`,
    );
  }
}
