import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class DeleteWorkerService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(cpf: string): Promise<any> {
    const worker = await this.workersRepository.findByCPF(cpf);
    console.log(worker);

    if (worker) {
      this.workersRepository.deleteWorker(worker);
    }
  }
}

export default DeleteWorkerService;
