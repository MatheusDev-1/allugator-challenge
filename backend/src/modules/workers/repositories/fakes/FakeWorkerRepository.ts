import IWorkersRepository from '@modules/workers/repositories/IWorkersRepository';
import ICreateUserDTO from '@modules/workers/dtos/ICreateWorkerDTO';
import { v4 as uuid_v4 } from 'uuid';

import Worker from '../../infra/typeorm/entities/Worker';

class FakeWorkerRepository implements IWorkersRepository {
  private workers: Worker[] = [];

  public async findAllWorkers(): Promise<Worker[]> {
    return this.workers;
  }

  public async findByCPF(cpf: string): Promise<Worker | undefined> {
    const findWorker = this.workers.find(worker => worker.cpf === cpf);

    return findWorker;
  }

  public async findByName(name: string): Promise<Worker | undefined> {
    const findWorker = this.workers.find(worker => worker.name === name);

    return findWorker;
  }

  public async findByDate(createdDate: string): Promise<Worker[]> {
    const findWorker = this.workers.filter(
      worker => worker.createdDate === createdDate,
    );

    return findWorker;
  }

  public async findByRole(role: string): Promise<Worker[]> {
    const findWorker = this.workers.filter(worker => worker.role === role);

    return findWorker;
  }

  public async createWorker(workerData: ICreateUserDTO): Promise<Worker> {
    const worker = new Worker();

    Object.assign(worker, { id: uuid_v4() }, workerData);

    this.workers.push(worker);

    return worker;
  }

  public async findByUF(uf: string): Promise<Worker[]> {
    const workersByUF = this.workers.filter(worker => worker.uf === uf);

    return workersByUF;
  }

  public async findBySalary(
    minSalary: number,
    maxSalary: number,
  ): Promise<Worker[]> {
    const workersBySalary = this.workers.filter(
      worker => worker.salary >= minSalary && worker.salary <= maxSalary,
    );

    return workersBySalary;
  }

  public async saveORM(worker: Worker): Promise<Worker> {
    const findIndex = this.workers.findIndex(
      findWorker => findWorker.cpf === worker.cpf,
    );

    this.workers[findIndex] = worker;

    return worker;
  }
}

export default FakeWorkerRepository;
