import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateWorkerService from '@modules/workers/services/CreateWorkerService';

export default class WorkersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { createdDate, role, cpf, name, uf, salary, status } = request.body;

    const createWorker = container.resolve(CreateWorkerService);

    const worker = await createWorker.execute({
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
    const createWorker = container.resolve(CreateWorkerService);

    
  }
}
