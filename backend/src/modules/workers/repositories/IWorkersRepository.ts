import Worker from '../infra/typeorm/entities/Worker';
import ICreateWorkerDTO from '../dtos/ICreateWorkerDTO';
import IFindAllWorkersDTO from '../dtos/IFindAllWorkersDTO';

export default interface IWorkersRepository {
  findAllWorkers(data: IFindAllWorkersDTO): Promise<Worker[]>;
  findByName(name: string): Promise<Worker | undefined>;
  findByCPF(cpf: number): Promise<Worker | undefined>;
  findByRole(role: string): Promise<Worker[]>;
  findByDate(date: string): Promise<Worker[]>;
  findByUF(uf: string): Promise<Worker[]>;
  findBySalary(minSalary: number, maxSalary: number): Promise<Worker[]>;
  create(data: ICreateWorkerDTO): Promise<Worker>;
  save(user: Worker): Promise<Worker>;
}
