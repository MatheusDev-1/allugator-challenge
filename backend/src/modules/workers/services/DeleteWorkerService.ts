import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';

import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class DeleteWorkerService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(cpf: string): Promise<any> {
    const worker = await this.workersRepository.findByCPF(cpf);

    if (!worker) {
      throw new AppError('Worker not found or mistyped');
    }
    await this.workersRepository.deleteWorker(worker);
  }
}

export default DeleteWorkerService;
