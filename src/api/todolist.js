
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
    if(req.params.id === undefined) {
      return res.status(404).send();
    }

    if(!list.remove({ 'key': req.params.id })) {
      return res.status(400).send();
    }

    return res.send();
  },

  update(req, res, list) {
    if(req.params.id === undefined) {
      return res.status(400).send();
    }

    const text = req.query.text;
    const item = list.get(req.params.id);
    if(item == null && item.key == null || text == undefined) {
      return res.status(400).send();
    }

    if(text.length == 0) {
      return res.status(400).send();
    }
    item.text = text;
    return res.status(200).send()
  },


  create(req, res, list) {
    const text = req.query.text;

    if(text != null) {
      // key is a placeholder and will be 
      //set by the list iteself
      list.add({'key': '0', 'text': text});
      return res.status(200).send();
    }
    return res.status(400).send();
  },
}
