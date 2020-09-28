import { observable, computed, action } from 'mobx';

class CounterStore {
  @observable firstName = 'Dan';

  @observable age = 23;

  @computed get nickname() {
    return `${this.firstName}_${this.age}`;
  }

  @action decrease = () => {
    this.age -= 1;
  };

  @action increase = () => {
    this.age += 1;
  };
}

// export default observable({
//   firstName: 'Dan',
//   age: 23,

//   get nickname() {
//     return `${this.firstName}_${this.age}`;
//   },

//   decrease () {
//     this.age -= 1;
//   },

//   increase () {
//     this.age += 1;
//   },
// });

export default new CounterStore();
