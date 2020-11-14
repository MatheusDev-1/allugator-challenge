import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';

import Worker from '../infra/typeorm/entities/Worker';
import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class ListWorkerByNameService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(name: string): Promise<Worker> {
    const workers = await this.workersRepository.findByName(name);

    if (workers) {
      return workers;
    }

    throw new AppError('Worker does not exist or mistyped name');
  }
}

export default ListWorkerByNameService;
