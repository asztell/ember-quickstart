import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default class ScientistsRoute extends Route {
  constructor() {
    super(...arguments);
    this.API_HOST =
      getOwner(this).resolveRegistration(
        'config:environment',
      ).EmberENV.API_HOST;
  }

  async fetchScientists() {
    try {
      return await fetch(`${this.API_HOST}/api/scientists`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } catch (error) {
      return [];
    }
  }

  model() {
    return this.fetchScientists();
  }
}
