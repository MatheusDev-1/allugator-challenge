import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateWorkerService from '@modules/workers/services/CreateWorkerService';
import DeleteWorkerService from '@modules/workers/services/DeleteWorkerService';
import ListWorkersService from '@modules/workers/services/ListWorkersService';
import ListWorkerByNameService from '@modules/workers/services/ListWorkerByNameService';
import ImportCsvService from '@modules/workers/services/ImportCsvService';

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
    const { createdDate, role, uf, status } = request.query;

    let where = {};

    if (createdDate) {
      Object.assign(where, { createdDate });
    }
    if (role) {
      Object.assign(where, { role });
    }
    if (uf) {
      Object.assign(where, { uf });
    }
    if (status) {
      Object.assign(where, { status });
    }

    console.log(where);

    const listWorkersService = container.resolve(ListWorkersService);

    const workers = await listWorkersService.execute(where);

    return response.json(workers);
  }

  public async showByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name } = request.body;

    const listWorkerByNameService = container.resolve(ListWorkerByNameService);

    const workers = await listWorkerByNameService.execute(name);

    return response.json(workers);
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

    deleteService.execute(cpf);

    return response.json({ error: false, message: 'worker data deleted' });
  }
}
