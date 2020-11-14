import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateWorkerService from '@modules/workers/services/CreateWorkerService';
import ListWorkersService from '@modules/workers/services/ListWorkersService';
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
    const listWorkersService = container.resolve(ListWorkersService);

    const workers = await listWorkersService.execute();

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
}
