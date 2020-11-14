import IWorkersRepository from '@modules/workers/repositories/IWorkersRepository';
import ICreateUserDTO from '@modules/workers/dtos/ICreateWorkerDTO';
import { v4 as uuid_v4 } from 'uuid';

import IFindAllWorkersDTO from '@modules/workers/dtos/IFindAllWorkersDTO';
import Worker from '../../infra/typeorm/entities/Worker';

class FakeWorkerRepository implements IWorkersRepository {
  private workers: Worker[] = [];

  public async findAllWorkers(data: IFindAllWorkersDTO): Promise<Worker[]> {
    if (Object.keys(data).length >= 1) {
      const queriedWorkers = this.workers.filter(
        worker =>
          worker.createdDate === data.createdDate ||
          worker.role === data.role ||
          worker.status === data.status ||
          worker.uf === data.uf ||
          (worker.salary >= Number(data.minSalary) &&
            worker.salary <= Number(data.maxSalary)),
      );

      return queriedWorkers;
    }

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

  public async groupByUf(): Promise<any> {
    const listUf = Array.from(new Set(this.workers.map(worker => worker.uf)));

    const grouped = listUf.map(uf => ({
      UF: uf,
      quantity: this.workers.filter(worker => worker.uf === uf).length,
      workers: this.workers.filter(worker => worker.uf === uf),
    }));

    return grouped;
  }

  public async deleteWorker(worker: Worker): Promise<any> {
    const toDeleteIndex = await this.workers.indexOf(worker);

    return this.workers.splice(toDeleteIndex, 1);
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
