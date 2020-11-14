import { getRepository, Repository, Between, EntityRepository } from 'typeorm';

import IWorkersRepository from '@modules/workers/repositories/IWorkersRepository';
import ICreateWorkerDTO from '@modules/workers/dtos/ICreateWorkerDTO';
import IFindAllWorkersDTO from '@modules/workers/dtos/IFindAllWorkersDTO';

import Worker from '../entities/Worker';

@EntityRepository(Worker)
class WorkersRepository
  extends Repository<Worker>
  implements IWorkersRepository {
  private ormRepository: Repository<Worker>;

  constructor() {
    super();
    this.ormRepository = getRepository(Worker);
  }

  public async findAllWorkers(data: IFindAllWorkersDTO): Promise<Worker[]> {
    const allWorkers = await this.ormRepository.find({
      where: data,
    });

    return allWorkers;
  }

  public async createWorker({
    name,
    cpf,
    salary,
    role,
    uf,
    status = 'ATIVO',
    createdDate = new Date().toLocaleDateString(),
  }: ICreateWorkerDTO): Promise<Worker> {
    const newWorker = await this.ormRepository.create({
      name,
      cpf,
      salary,
      status,
      role,
      uf,
      createdDate,
    });

    await this.saveORM(newWorker);

    return newWorker;
  }

  public async findByCPF(cpf: string): Promise<Worker | undefined> {
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

  public async saveORM(worker: Worker): Promise<Worker> {
    return this.ormRepository.save(worker);
  }
}

export default WorkersRepository;
