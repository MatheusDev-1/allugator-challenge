export default interface ICreateWorkerDTO {
  createdDate?: string;
  role: string;
  cpf: string;
  name: string;
  uf: string;
  salary: number;
  status: string;
  minSalary?: number;
  maxSalary?: number;
}
