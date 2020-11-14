import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../../config/upload';

import WorkersController from '../controllers/WorkersController';

const workersRouter = Router();
const workersController = new WorkersController();
const upload = multer(uploadConfig);

workersRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      createdDate: Joi.string(),
      role: Joi.string().max(256),
      minSalary: Joi.number(),
      maxSalary: Joi.number(),
      uf: Joi.string().max(2),
      status: Joi.string(),
    },
  }),
  workersController.index,
);

workersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().max(256),
      cpf: Joi.string().required().max(11),
      createdDate: Joi.string(),
      role: Joi.string(),
      uf: Joi.string().max(2),
      salary: Joi.number(),
      status: Joi.string(),
    },
  }),
  workersController.create,
);

workersRouter.get('/groupedByUf', workersController.indexByUf);

workersRouter.post('/import', upload.single('file'), workersController.import);
workersRouter.get('/searchByName', workersController.searchByName);
workersRouter.get('/searchByCPF', workersController.searchByCPF);
workersRouter.delete('/:cpf', workersController.delete);

export default workersRouter;
