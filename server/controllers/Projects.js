const Project = require("../models").Project;
const Task = require("../models").Task;

module.exports = {
  create(req, res) {
    return Project.create({
      title: req.body.title,
      organizationId: req.params.orgId,
    })
      .then((Project) => res.status(201).send(Project))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Project.findAll({
      include: [
        {
          model: Task,
        },
      ],
      order: [
        ["createdAt", "DESC"],
        [{ model: Task }, "createdAt", "ASC"],
      ],
    })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Project.find({
      where: {
        id: req.params.projectId,
      },
    })
      .then((project) => {
        if (!project) {
          return res.status(404).send({
            message: "Project Not Found",
          });
        }

        return project
          .update({
            title: req.body.title || project.title,
          })
          .then((updatedProject) => res.status(200).send(updatedProject))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Project.find({
      where: {
        id: req.params.projectId || project.projectId,
      },
    })
      .then((project) => {
        if (!project) {
          return res.status(404).send({
            message: "Project Not Found",
          });
        }

        return project
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
