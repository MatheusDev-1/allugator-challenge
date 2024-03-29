import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateWorkerService from '@modules/workers/services/CreateWorkerService';
import DeleteWorkerService from '@modules/workers/services/DeleteWorkerService';
import ListWorkersService from '@modules/workers/services/ListWorkersService';
import ListGroupedWorkersByUfService from '@modules/workers/services/ListGroupedWorkersByUfService';
import ImportCsvService from '@modules/workers/services/ImportCsvService';
import { Between, Like } from 'typeorm';

export default class WorkersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { createdDate, role, cpf, name, uf, salary, status } = request.body;

    const createWorkerService = container.resolve(CreateWorkerService);

    const worker = await createWorkerService.execute({
      createdDate,
      role,
      cpf,
      name,
      uf,
      salary,
      status,
    });

    return response.json(worker);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const {
      name,
      cpf,
      createdDate,
      role,
      uf,
      status,
      minSalary,
      maxSalary,
    } = request.query;

    let where = {};

    if (createdDate) {
      Object.assign(where, { createdDate: Like(`%${createdDate}%`) });
    }
    if (role) {
      Object.assign(where, { role: Like(`%${role}%`) });
    }
    if (uf) {
      Object.assign(where, { uf: Like(`%${uf}%`) });
    }
    if (status) {
      Object.assign(where, { status: Like(`%${status}%`) });
    }

    if (minSalary && maxSalary) {
      Object.assign(where, { salary: Between(minSalary, maxSalary) });
    }

    if (name) {
      Object.assign(where, { name: Like(`%${name}%`) });
    }

    if (cpf) {
      Object.assign(where, { cpf: Like(`%${cpf}%`) });
    }

    const listWorkersService = container.resolve(ListWorkersService);

    const workers = await listWorkersService.execute(where);

    return response.json(workers);
  }

  public async indexByUf(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const groupByUfService = container.resolve(ListGroupedWorkersByUfService);

    const groupedWorkersByUf = await groupByUfService.execute();

    return response.json(groupedWorkersByUf);
  }

  public async import(request: Request, response: Response): Promise<Response> {
    const importCsvService = new ImportCsvService();

    await importCsvService.execute(request.file.path);

    return response.json({
      error: false,
      message: 'Workers data imported sucessfuly on PostgreSQL',
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const deleteService = container.resolve(DeleteWorkerService);

    await deleteService.execute(cpf);

    return response.json({ message: 'Worker data deleted' });
  }
}
