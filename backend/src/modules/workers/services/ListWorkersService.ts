import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Worker from '../infra/typeorm/entities/Worker';
import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class ListWorkersService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(): Promise<Worker[]> {
    const workers = await this.workersRepository.findAllWorkers();

    return workers;
  }
}

export default ListWorkersService;
