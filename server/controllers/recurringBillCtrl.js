const RecurringBill = require('../db/models/RecurringBill');

module.exports = {
  getRecurringBills: (req, res) => {
    RecurringBill.findAll({ where: { houseId: parseInt(req.params.houseId) } })
      .then(recurringBills => res.send(recurringBills))
      .catch(err => res.status(500).send(err));
  },

  createRecurringBill: (req, res) => {
    RecurringBill.findOrCreate({ where: req.body })
      .then(recurringBill => res.send(recurringBill))
      .catch(err => res.status(500).send(err));
  },

  deleteRecurringBill: (req, res) => {
    RecurringBill.findOne({ where: { id: parseInt(req.params.billId) } })
      .then((bill) => {
        if (bill) {
          bill.destroy();
        }
        res.send(200);
      })
      .catch(err => res.status(500).send(err));
  },

  editRecurringBill: (req, res) => {
    RecurringBill.findOne({ where: { id: parseInt(req.params.billId) } })
      .then((bill) => {
        if (bill) {
          bill.updateAttributes(req.body);
        }
        res.send(200);
      })
      .catch(err => res.status(500).send(err));
  },
};
