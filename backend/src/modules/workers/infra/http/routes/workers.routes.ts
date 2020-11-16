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
      name: Joi.string().optional().allow('').max(256),
      cpf: Joi.string().optional().allow('').max(11),
      createdDate: Joi.string().optional().allow(''),
      role: Joi.string().max(256).optional().allow(''),
      minSalary: Joi.number().optional().allow(''),
      maxSalary: Joi.number().optional().allow(''),
      uf: Joi.string().optional().allow(''),
      status: Joi.string().optional().allow(''),
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
      role: Joi.string().optional().allow('').default(''),
      uf: Joi.string().optional().allow('').default(''),
      salary: Joi.number().optional().default(0),
      status: Joi.string(),
    },
  }),
  workersController.create,
);

workersRouter.get('/groupedByUf', workersController.indexByUf);

workersRouter.post('/import', upload.single('file'), workersController.import);
workersRouter.delete('/:cpf', workersController.delete);

export default workersRouter;
