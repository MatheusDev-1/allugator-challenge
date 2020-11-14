import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Worker from '../infra/typeorm/entities/Worker';
import ICreateWorkerDTO from '../dtos/ICreateWorkerDTO';
import IWorkersRepository from '../repositories/IWorkersRepository';

@injectable()
class CreateWorkerService {
  constructor(
    @inject('workersRepository')
    private workersRepository: IWorkersRepository,
  ) {}

  public async execute({
    createdDate,
    role,
    cpf,
    name,
    uf,
    salary,
    status,
    minSalary,
    maxSalary,
  }: ICreateWorkerDTO): Promise<Worker | undefined> {
    const workerExistenceByCPF = await this.workersRepository.findByCPF(cpf);

    if (workerExistenceByCPF) {
      const updateWorker = await this.workersRepository.createWorker(
        workerExistenceByCPF,
      );
      return updateWorker;
    }
    const worker = await this.workersRepository.createWorker({
      createdDate,
      role,
      cpf,
      name,
      uf,
      salary,
      status,
      minSalary,
      maxSalary,
    });

    return worker;
  }
}

export default CreateWorkerService;
