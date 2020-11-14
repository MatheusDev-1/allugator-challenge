import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Worker from '../infra/typeorm/entities/Worker';
import IWorkersRepository from '../repositories/IWorkersRepository';
import IFindAllWorkersDTO from '../dtos/IFindAllWorkersDTO';

@injectable()
class ListWorkersService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute(data: IFindAllWorkersDTO): Promise<Worker[]> {
    const workers = await this.workersRepository.findAllWorkers(data);

    const { minSalary, maxSalary } = data;

    if (minSalary && maxSalary) {
      const minWageWorkers = workers.filter(
        worker =>
          Number(worker.salary) >= Number(minSalary) &&
          Number(worker.salary) <= Number(maxSalary),
      );

      return minWageWorkers;
    }

    return workers;
  }
}

export default ListWorkersService;
