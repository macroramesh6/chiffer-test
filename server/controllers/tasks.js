const Task = require("../models").Task;
const Project = require("../models").Project;

module.exports = {
  create(req, res) {
    return Task.create({
      content: req.body.content,
      organizationId: req.params.orgId,
      projectId: req.params.projectId,
    })
      .then((Task) => res.status(201).send(Task))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Task.findAll({
      // include: [
      //   {
      //     model: Project,
      //   },
      // ],
      order: [
        ["createdAt", "DESC"],
        // [{ model: Project }, "createdAt", "ASC"],
      ],
    })
      .then((todos) => res.status(200).send(todos))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Task.find({
      where: {
        projectId: req.params.projectId,
      },
    })
      .then((task) => {
        if (!task) {
          return res.status(404).send({
            message: "Task Not Found",
          });
        }

        return task
          .update({
            content: req.body.content || task.content,
            complete: req.body.complete || task.complete,
          })
          .then((updatedTodoItem) => res.status(200).send(updatedTodoItem))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Task.find({
      where: {
        projectId: req.params.projectId || task.projectId,
        id: req.params.taskId || task.taskId,
      },
    })
      .then((task) => {
        if (!task) {
          return res.status(404).send({
            message: "Task Not Found",
          });
        }

        return task
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
