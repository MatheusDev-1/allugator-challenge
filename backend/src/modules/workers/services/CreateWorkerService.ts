import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import Worker from '../infra/typeorm/entities/Worker';
import IWorkersRepository from '../repositories/IWorkersRepository';

interface Request {
  role: string;
  cpf: string;
  name: string;
  uf: string;
  salary: number;
  status: string;
  createdDate: string;
}

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
  }: Request): Promise<Worker | undefined> {
    const workerExistenceByCPF = await this.workersRepository.findByCPF(cpf);

    if (workerExistenceByCPF) {
      const updateWorker = await this.workersRepository.create(
        workerExistenceByCPF,
      );
      return updateWorker;
    }
    const worker = await this.workersRepository.create({
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
