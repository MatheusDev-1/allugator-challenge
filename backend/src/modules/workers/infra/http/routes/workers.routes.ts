import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import WorkersController from '../controllers/WorkersController';

const workersRouter = Router();
const workersController = new WorkersController();

workersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      cpf: Joi.string().required(),
      createdDate: Joi.date(),
      role: Joi.string(),
      uf: Joi.string(),
      salary: Joi.number(),
      status: Joi.string(),
    },
  }),
  workersController.create,
);

export default workersRouter;
