import IWorkersRepository from '@modules/workers/repositories/IWorkersRepository';
import ICreateUserDTO from '@modules/workers/dtos/ICreateWorkerDTO';
import IFindAllWorkersDTO from '@modules/workers/dtos/IFindAllWorkersDTO';

import { uuid } from 'uuidv4';
import Worker from '../../infra/typeorm/entities/Worker';

class FakeWorkerRepository implements IWorkersRepository {
  private workers: Worker[] = [];

  public async findAllProviders({
    role,
    uf,
    status,
  }: IFindAllWorkersDTO): Promise<Worker[]> {
    let { workers } = this;

    workers = this.workers.filter(
      worker =>
        worker.role === role || worker.uf === uf || worker.status === status,
    );

    return workers;
  }

  public async findByCPF(cpf: number): Promise<Worker | undefined> {
    const findUser = this.workers.find(worker => worker.cpf === cpf);

    return findUser;
  }

  public async findByName(name: string): Promise<Worker | undefined> {
    const findUser = this.workers.find(worker => worker.name === name);

    return findUser;
  }

  public async findByDate(date: string): Promise<Worker | undefined> {
    const findUser = this.workers.find(worker => worker.date === date);

    return findUser;
  }

  public async create(workerData: ICreateUserDTO): Promise<Worker> {
    const worker = new Worker();

    Object.assign(worker, { id: uuid() }, workerData);

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

  public async save(worker: Worker): Promise<Worker> {
    const findIndex = this.workers.findIndex(
      findWorker => findWorker.cpf === worker.cpf,
    );

    this.workers[findIndex] = worker;

    return worker;
  }
}

export default FakeWorkerRepository;
