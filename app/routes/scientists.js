import Route from '@ember/routing/route';
import ENV from 'ember-quickstart/config/environment';

export default class ScientistsRoute extends Route {
  async fetchScientists() {
    const { API_HOST } = ENV.EmberENV;
    try {
      return await fetch(`${API_HOST}/api/scientists`)
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
