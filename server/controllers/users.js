const bcrypt = require('bcrypt');
const User = require('../models').User;

module.exports = {
  create(req, res) {

    // audit
    if (!req.body.email || !req.body.password) {
      return res.status(400).send()
    }

    // password hash
    const passwordHash = bcrypt.hashSync(req.body.password, 8);

    return User
      .create({
        email: req.body.email,
        organizationId: req.params.orgId,
        password: passwordHash,
      })
      .then(User => res.status(201).send(User))
      .catch(error => res.status(400).send(error));
  },
};
