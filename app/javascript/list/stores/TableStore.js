import { observable, computed, action } from 'mobx';

class TableStore {
  @observable devsList = [
    { name: 'Jack', points: 12 },
    { name: 'Max', points: 10 },
    { name: 'Leo', points: 8 },
  ];

  @observable filter = '';

  @computed get totalSum() {
    return this.devsList.reduce((acc, { points }) => acc + points, 0);
  }

  @computed get topPerformer() {
    const maxPoints = Math.max(...this.devsList.map(({ points }) => points));
    return this.devsList.find(({ points }) => points === maxPoints);
  }

  @computed get filteredDevs() {
    const pattern = new RegExp(this.filter, 'i');
    return this.devsList.filter(({ name }) => !this.filter || pattern.test(name));
  }

  @action clearList = () => {
    this.devsList = [];
  };

  @action addDeveloper = (dev) => {
    this.devsList.push(dev);
  };

  @action updateFilter = (value) => {
    this.filter = value;
  };
}

// decorate(TableStore, {
//   devsList: observable,
//   totalSum: computed,
//   topPerformer: computed,
//   clearList: action,
//   addDeveloper: action,
//   filter: observable,
//   updateFilter: action,
// });

export default new TableStore();
