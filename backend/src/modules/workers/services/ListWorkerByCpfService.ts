import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';

import Worker from '../infra/typeorm/entities/Worker';
import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class ListWorkerByCpfService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(cpf: string): Promise<Worker> {
    const workers = await this.workersRepository.findByCPF(cpf);

    if (workers) {
      return workers;
    }

    throw new AppError('Worker does not exist or mistyped cpf');
  }
}

export default ListWorkerByCpfService;
