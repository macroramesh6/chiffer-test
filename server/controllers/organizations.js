const Organization = require("../models").Organization;
const User = require("../models").User;
const Project = require("../models").Project;

module.exports = {
  create(req, res) {
        return Organization
            .create({
                name: req.body.name
            })
            .then(Organization => res.status(201).send(Organization))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Organization.findAll({
          include: [
            // {
            //   model: User,
            // },
            // {
            //   model: Project,
            // },
          ],
          order: [
            ["createdAt", "DESC"],
          ],
        })
          .then((orgs) => res.status(200).send(orgs))
          .catch((error) => res.status(400).send(error));
      },
      update(req, res) {
        return Organization.find({
          where: {
            id: req.params.orgId,
          },
        })
          .then((organization) => {
            if (!organization) {
              return res.status(404).send({
                message: "Organization Not Found",
              });
            }
    
            return organization
              .update({
                name: req.body.name || organization.name,
              })
              .then((updatedProject) => res.status(200).send(updatedProject))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
    
      destroy(req, res) {
        return Organization.find({
          where: {
            id: req.params.orgId || organization.orgId,
          },
        })
          .then((organization) => {
            if (!organization) {
              return res.status(404).send({
                message: "Organization Not Found",
              });
            }
    
            return organization
              .destroy()
              .then(() => res.status(204).send())
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },    
};
