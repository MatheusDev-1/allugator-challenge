import { getRepository, Repository, EntityRepository } from 'typeorm';

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

  public async findByName(name: string): Promise<Worker | undefined> {
    const worker = await this.ormRepository.findOne({ where: { name }});

    return worker;
  }

  public async findByUF(uf: string): Promise<Worker[]> {
    const workersByUF = await this.ormRepository.find({
      where: { uf },
    });

    return workersByUF;
  }

  public async groupByUf(): Promise<any> {
    const workersByUF = await this.findAllWorkers({});

    const listUf = Array.from(new Set(workersByUF.map(worker => worker.uf)));

    const grouped = listUf.map(uf => ({
      UF: uf,
      quantity: workersByUF.filter(worker => worker.uf === uf).length,
      workers: workersByUF.filter(worker => worker.uf === uf),
    }));

    return grouped;
  }

  public async deleteWorker(worker: Worker): Promise<any> {
    this.ormRepository.remove(worker);
  }

  public async saveORM(worker: Worker): Promise<Worker> {
    return this.ormRepository.save(worker);
  }
}

export default WorkersRepository;
