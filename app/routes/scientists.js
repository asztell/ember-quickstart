import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default class ScientistsRoute extends Route {
  constructor() {
    super(...arguments);
    this.API_HOST =
      // getOwner(this).resolveRegistration('config:environment').APP.API_HOST;
      getOwner(this).resolveRegistration(
        'config:environment',
      ).EmberENV.API_HOST;
  }
  fetchScientists() {
    console.log(
      "getOwner(this).resolveRegistration('config:environment')",
      getOwner(this).resolveRegistration('config:environment'),
    );
    console.log('this.API_HOST', this.API_HOST);
    try {
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
    console.log(
      "getOwner(this).resolveRegistration('config:environment')",
      getOwner(this).resolveRegistration('config:environment'),
    );
    // const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    console.log(scientists);
    return scientists;
  }
}
