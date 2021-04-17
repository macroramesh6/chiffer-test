const Task = require('../models').Task;

module.exports = {
    create(req, res) {
        return Task
        .create({
                content: req.body.content,
                complete: 0,
                organizationId: req.params.orgId,
                projectId: req.params.projectId,
            })
            .then(Task => res.status(201).send(Task))
            .catch(error => res.status(400).send(error));
    },
};
