const Project = require('../models').Project;

module.exports = {
    create(req, res) {

        return Project
        .create({
                title: req.body.title,
                organizationId: req.params.orgId,
            })
            .then(Project => res.status(201).send(Project))
            .catch(error => res.status(400).send(error));
    },
};
