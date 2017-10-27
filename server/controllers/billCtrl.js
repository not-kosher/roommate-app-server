const Bill = require('../db/models/Bill.js');

module.exports = {
  getBills: (req, res) => {
    Bill.findAll({ where: { houseId: parseInt(req.params.houseId) } })
      .then(bills => res.send(bills))
      .catch(err => res.status(500).send(err));
  },

  createBill: (req, res) => {
    Bill.findOrCreate({ where: req.body })
      .then(bill => res.send(bill))
      .catch(err => res.status(500).send(err));
  },

  deleteBill: (req, res) => {
    Bill.findOne({ where: { id: parseInt(req.params.billId) } })
      .then((bill) => {
        if (bill) {
          bill.destroy();
        }
        res.status(200).send(bill);
      })
      .catch(err => res.status(500).send(err));
  },

  editBill: (req, res) => {
    Bill.findOne({ where: { id: parseInt(req.params.billId) } })
      .then((bill) => {
        if (bill) {
          bill.updateAttributes(req.body);
        }
        res.send(200);
      })
      .catch(err => res.status(500).send(err));
  },

};
