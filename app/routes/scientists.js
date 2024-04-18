import Route from '@ember/routing/route';
import Ember from 'ember';

// const API_HOST = 'http://localhost:4000';
export default class ScientistsRoute extends Route {
  constructor() {
    super(...arguments);
    console.log('Ember', Ember);
    this.API_HOST =
      // Ember.ENV.EmberENV.API_HOST;
      Ember.getOwner(this).resolveRegistration(
        'config:environment',
      ).APP.API_HOST;
  }
  fetchScientists() {
    console.log('this.API_HOST', this.API_HOST);
    try {
      // TODO use https://singular-capybara-ee9a1c.netlify.app/scientists
      // return fetch('http://localhost:4000/api/scientists', {
      return fetch(`${this.API_HOST}/api/scientists`, {
        // method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        //   // 'Acess-Control-Allow-Origin': 'no-cors',
        // },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } catch (error) {
      console.error('fetch localhost:4000/scientists error', error);
      return [];
    }
  }
  async model() {
    const scientists = await this.fetchScientists();
    console.log(scientists);
    return scientists;
  }
}
