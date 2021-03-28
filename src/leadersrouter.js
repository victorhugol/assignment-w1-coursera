// implement get/post/put/delete
import { Router } from "express";

const leaderRouter = Router();

leaderRouter
  .route("/leaders/:leaderId")
  .all()
  .get((req, res) => {
    const { leaderId } = req.params;

    return res.send(`Will send details of the leader: ${leaderId} to you`);
  })
  .delete((req, res) => {
    const { leaderId } = req.params;

    return res.send(`Deleting leader: ${leaderId}`);
  })
  .put((req, res) => {
    const { name, description } = req.body;
    const { leaderId } = req.params;
    return res.send(
      `Updating the leader: ${leaderId} \nWill update leader : ${name} with details: ${description} `
    );
  })
  .post((req, res) => {
    const { leaderId } = req.params;

    return res.send(`Post operation not supported on /leaders/${leaderId}`);
  });

leaderRouter
  .route("/leaders")
  .all()
  .get((_, res) => {
    return res.send(`We will send all the leaders to you`);
  })
  .put((_, res) => {
    return res.send(`PUT operation not supported on /leaders`);
  })
  .post((req, res) => {
    const { name, description } = req.body;

    return res.send(
      `Will add leader : ${name} with details: ${description} `
    );
  });

export default leaderRouter;
