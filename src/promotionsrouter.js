// implement get/post/put/delete
import { Router } from "express";

const promotionsRouter = Router();

promotionsRouter
  .route("/promotions/:promotionsId")
  .all()

  .delete((req, res) => {
    const { promotionsId } = req.params;

    return res.send(`Deleting promotions: ${promotionsId}`);
  })
  .put((req, res) => {
    const { name, description } = req.body;
    const { promotionsId } = req.params;
    return res.send(
      `Updating the promotion: ${promotionsId} \nWill update promotion : ${name} with details: ${description} `
    );
  });

promotionsRouter
  .route("/promotions")
  .all()
  .get((_,res) => {
    return res.send(`We will send all promotions to you`);
  })
  .put((_,res) => {
    return res.send(`PUT operation not supported on /promotions`);
  })
  .post((req, res) => {
    const { name, description } = req.body;

    return res.send(
      `Will add promotion : ${name} with details: ${description} `
    );
  });

export default promotionsRouter;
