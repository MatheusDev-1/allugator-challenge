import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';
import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class ListWorkerByCpfService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(): Promise<any> {
    const workers = await this.workersRepository.groupByUf();

    return workers;
  }
}

export default ListWorkerByCpfService;
