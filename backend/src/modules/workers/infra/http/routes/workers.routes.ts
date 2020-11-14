import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../../config/upload';

import WorkersController from '../controllers/WorkersController';

const workersRouter = Router();
const workersController = new WorkersController();
const upload = multer(uploadConfig);

workersRouter.get('/', workersController.index);
workersRouter.post('/import', upload.single('file'), workersController.import);
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
