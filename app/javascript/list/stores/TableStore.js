import { observable, computed, action, decorate } from 'mobx';

class TableStore {
  devsList = [
    { name: 'Jack', points: 12 },
    { name: 'Max', points: 10 },
    { name: 'Leo', points: 8 },
  ];

  filter = '';

  get totalSum() {
    return this.devsList.reduce((acc, { points }) => acc + points, 0);
  }

  get topPerformer() {
    const maxPoints = Math.max(...this.devsList.map(({ points }) => points));
    return this.devsList.find(({ points }) => points === maxPoints);
  }

  get filteredDevs() {
    const pattern = new RegExp(this.filter, 'i');
    return this.devsList.filter(({ name }) => pattern.test(name));
  }

  clearList = () => {
    this.devsList = [];
  };

  addDeveloper = (dev) => {
    this.devsList.push(dev);
  };

  updateFilter = (e) => {
    const { target: { value } } = e;
    this.filter = value;
  };
}

decorate(TableStore, {
  devsList: observable,
  filter: observable,

  totalSum: computed,
  topPerformer: computed,
  filteredDevs: computed,

  clearList: action,
  addDeveloper: action,
  updateFilter: action,
});

export default new TableStore();
