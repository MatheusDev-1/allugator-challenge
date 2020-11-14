import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../../config/upload';

import WorkersController from '../controllers/WorkersController';

const workersRouter = Router();
const workersController = new WorkersController();
const upload = multer(uploadConfig);

workersRouter.get('/', workersController.index);
workersRouter.delete('/:cpf', workersController.delete);
workersRouter.post('/import', upload.single('file'), workersController.import);
workersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().max(256),
      cpf: Joi.string().required().max(11),
      createdDate: Joi.date(),
      role: Joi.string(),
      uf: Joi.string().max(2),
      salary: Joi.number(),
      status: Joi.string(),
    },
  }),
  workersController.create,
);

export default workersRouter;
