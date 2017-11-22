module.exports = {
  read(req, res, list) {
    return res.send(list.items);
  },

  readItem(req, res, list) {
    if(req.params.id === undefined) {
      return res.status(405).send();
    }

    const item = list.get(req.params.id);
    if(!item) {
      return res.status(405).send();
    }

    return res.send(item)
  },

  delete(req, res, list) {
    res.send("Not implemented!")
  },

  update(req, res, list) {
    if(req.params.id === undefined) {
      return res.status(405).send();
    }

    const text = req.query.text;
    const item = list.get(req.params.id);
    if(!item || !text) {
      return res.status(405).send();
    }

    item.text = text;
    return res.status(200).send()
  },

  create(req, res, list) {
    res.send("Not implemented!")
  }
}
