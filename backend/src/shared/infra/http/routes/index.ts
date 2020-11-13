import { Router } from 'express';
import workersRouter from '@modules/workers/infra/http/routes/workers.routes';

const routes = Router();

routes.use('/workers', workersRouter);

export default routes;
