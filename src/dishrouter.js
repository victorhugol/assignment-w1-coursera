// implement get/post/put/delete
import { Router } from "express";

const dishRouter = Router();

dishRouter
  .route("/dishes/:dishId")
  .all()
  .get((req, res) => {
    const { dishId } = req.params;

    return res.send(`Will send details of the dish: ${dishId} to you`);
  })
  .post((req, res) => {
    const { dishId } = req.params;

    return res.send(`Post operation not supported on /dishes/${dishId}`);
  })
  .put((req, res) => {
    const { dishId } = req.params;
    const { name, description } = req.body;

    return res.send(
      `Updating the dish: ${dishId} \n Will update the dish: ${name} with details: ${description} `
    );
  })
  .delete((req, res) => {
    const { dishId } = req.params;

    return res.send(`Deleting dish: ${dishId}`);
  });

export default dishRouter;
