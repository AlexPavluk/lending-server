import Router from "express";
import postController from "./postController.js";

const router = new Router();

router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getOne);
router.post('/posts', postController.create);

router.put('/posts', postController.update);
router.delete('/posts/:id', postController.delete);

export default router;