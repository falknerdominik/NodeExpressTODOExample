class Todolist {
  constructor(items) {
    this.items = items || [];
    this.top = items.length;
  }

  get(key) {
    let searchResult = null;
    this.items.forEach((item) => {
      if(item.key === key) searchResult = item;
    });
    return searchResult;
  }

  add(item) {
    const key = ++this.top;
    item.key = key.toString();
    this.items.push(item);
  }

  remove(item) {
    if(this.contains(item)) {
      const beforeLength = this.items.length;
      this.items = this.items.filter((i) => {
        return i.key != item.key;
      })
      return beforeLength > this.items.length;
    }
    return false;
  }

  update(item) {
    if(item != null && item.key != null && item.text != null) {
      const index = this.indexOf(item);
      if(index === -1) return false;

      let toUpdate = this.items[index];
      toUpdate.text = item.text;

      return true;
    }

    return false;
  }

  indexOf(item) {
    if(item == null && item.key == null) return -1;
    return this.items.findIndex(i => i.key === item.key);
  }

  contains(item) {
    return this.indexOf(item) > -1;
  }
}

module.exports = Todolist;

