import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateWorkerService from '@modules/workers/services/CreateWorkerService';
import ListWorkersService from '@modules/workers/services/ListWorkersService';

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

  public async show(request: Request, response: Response): Promise<Response> {
    const listWorkersService = container.resolve(ListWorkersService);

    const workers = listWorkersService.execute();

    return response.json(workers);
  }
}
