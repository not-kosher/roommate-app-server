const Charge = require('../db/models/Charge');

module.exports = {
  getCharges: (req, res) => {
    // res.send(req.params.houseId)
    Charge.findAll({ where: { houseId: parseInt(req.params.houseId) } })
      .then(charges => res.send(charges))
      .catch(err => res.status(500).send(err));
  },

  createCharge: (req, res) => {
    Charge.findOrCreate({ where: req.body })
      .then(result => res.send(result))
      .catch(err => res.status(500).send(err));
  },

  deleteChargesForBill: (req, res) => {
    Charge.findAll({ where: { billId: parseInt(req.params.billId) } })
      .then((results) => {
        if (results) {
          results.forEach(charge => charge.destroy());
        }
        res.send(200);
      })
      .catch(err => res.status(500).send(err));
  },

  markAsPaid: (req, res) => {
    Charge.findOne({ where: { id: parseInt(req.params.chargeId) } })
      .then((charge) => {
        if (charge) {
          charge.destroy();
        }
        res.send(200);
      })
      .catch(err => res.status(500).send(err));
  },
};
