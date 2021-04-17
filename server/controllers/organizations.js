const Organization = require("../models").Organization;

module.exports = {
  create(req, res) {
        return Organization
            .create({
                name: req.body.name
            })
            .then(Organization => res.status(201).send(Organization))
            .catch(error => res.status(400).send(error));
    },
};
