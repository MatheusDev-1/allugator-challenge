import { getRepository, Repository, Between } from 'typeorm';

import IWorkersRepository from '@modules/workers/repositories/IWorkersRepository';
import IFindAllWorkersDTO from '@modules/workers/dtos/IFindAllWorkersDTO';
import ICreateWorkerDTO from '@modules/workers/dtos/ICreateWorkerDTO';

import Worker from '../entities/Worker';

class WorkersRepository implements IWorkersRepository {
  private ormRepository: Repository<Worker>;

  constructor() {
    this.ormRepository = getRepository(Worker);
  }

  public async findAllWorkers({
    role,
    status,
    uf,
  }: IFindAllWorkersDTO): Promise<Worker[]> {
    if (role || status || uf) {
      const queriedWorkers = await this.ormRepository.find({
        where: { role, status, uf },
      });

      return queriedWorkers;
    }
    const allWorkers = await this.ormRepository.find();

    return allWorkers;
  }

  public async create({
    name,
    cpf,
    salary,
    status,
    role,
    uf,
    createdDate,
  }: ICreateWorkerDTO): Promise<Worker> {
    const newWorker = await this.ormRepository.create({
      name,
      cpf,
      salary,
      status: 'ATIVO',
      role,
      uf,
      createdDate: String(new Date().toLocaleDateString()),
    });

    console.log(newWorker);

    await this.ormRepository.save(newWorker);

    return newWorker;
  }

  public async findByCPF(cpf: number): Promise<Worker | undefined> {
    const worker = await this.ormRepository.findOne({ where: { cpf } });

    return worker;
  }

  public async findByDate(createdDate: string): Promise<Worker[]> {
    const workers = await this.ormRepository.find({ where: { createdDate } });
    return workers;
  }

  public async findByName(name: string): Promise<Worker | undefined> {
    const worker = await this.ormRepository.findOne(name);

    return worker;
  }

  public async findByRole(role: string): Promise<Worker[]> {
    const worker = await this.ormRepository.find({ where: { role } });

    return worker;
  }

  public async findByUF(uf: string): Promise<Worker[]> {
    const workersByUF = await this.ormRepository.find({
      where: { uf },
    });

    return workersByUF;
  }

  public async findBySalary(
    minSalary: number,
    maxSalary: number,
  ): Promise<Worker[]> {
    const worker = await this.ormRepository.find({
      salary: Between(minSalary, maxSalary),
    });

    return worker;
  }

  public async save(worker: Worker): Promise<Worker> {
    return this.ormRepository.save(worker);
  }
}

export default WorkersRepository;
