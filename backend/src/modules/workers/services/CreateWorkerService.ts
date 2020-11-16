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
  }: ICreateWorkerDTO): Promise<Worker | undefined> {
    const workerExists = await this.workersRepository.findByCPF(cpf);

    if (workerExists) {
      workerExists.name = name;
      workerExists.salary = salary;
      workerExists.uf = uf;
      workerExists.role = role;

      this.workersRepository.saveORM(workerExists);
    }
    const worker = await this.workersRepository.createWorker({
      createdDate,
      role,
      cpf,
      name,
      uf,
      salary,
      status,
    });

    return worker;
  }
}

export default CreateWorkerService;
