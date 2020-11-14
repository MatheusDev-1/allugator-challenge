import Worker from '../infra/typeorm/entities/Worker';
import ICreateWorkerDTO from '../dtos/ICreateWorkerDTO';
import IFindAllWorkersDTO from '../dtos/IFindAllWorkersDTO';

export default interface IWorkersRepository {
  findAllWorkers({
    role,
    uf,
    status,
    createdDate,
  }: IFindAllWorkersDTO): Promise<Worker[]>;
  findByName(name: string): Promise<Worker | undefined>;
  findByCPF(cpf: string): Promise<Worker | undefined>;
  findByUF(uf: string): Promise<Worker[]>;
  groupByUf(): Promise<any>;
  deleteWorker(worker: Worker): Promise<any>;
  createWorker(data: ICreateWorkerDTO): Promise<Worker>;
  saveORM(user: Worker): Promise<Worker>;
}
