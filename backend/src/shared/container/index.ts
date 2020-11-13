import { container } from 'tsyringe';

import IWorkersRepository from '@modules/workers/repositories/IWorkersRepository';
import WorkersRepository from '@modules/workers/infra/typeorm/repositories/WorkersRepository';

container.registerSingleton<IWorkersRepository>(
  'workersRepository',
  WorkersRepository,
);
