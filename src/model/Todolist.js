class Todolist {
  constructor(items) {
    this.items = items || [];
  }

  add(item) {
    this.items.push(item);
  }

  get(key) {
    let search = null;
    this.items.forEach((item) => {
      if(item.key == key) search = item;
    });
    return search;
  }

  update(item) {
    if(item) {
      const index = this.indexOf(item);
      if(index == -1) return false;

      let toUpdate = this.items[index];
      toUpdate.text = item.text;

      return true;
    }
    return false;
  }

  remove(item) {
    const elem = null;
    if(this.contains(item)) {
      elem = this.items[this.indexOf(item)];
      Array.removeAt(this.items, index);
    }
    return elem;
  }

  indexOf(item) {
    if(!item.key) return -1;
    return this.items.findIndex(i => i.key === item.key);
  }

  contains(item) {
    return this.items.findIndex(i => i.key === item.key) > -1;
  }
}

module.exports = Todolist;
