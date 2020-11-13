import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

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
    console.log(cpf);
    console.log(workerExistenceByCPF);

    if (workerExistenceByCPF) {
      throw new AppError('CPF already used by another worker');
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
