import AppError from '../../../shared/errors/AppError';
import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import CreateWorkerService from './CreateWorkerService';
import ListWorkerByNameService from './ListWorkerByNameService';

let fakeWorkerRepository: FakeWorkerRepository;
let createWorker: CreateWorkerService;
let listWorkerByName: ListWorkerByNameService;

describe('List worker by name', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();
    createWorker = new CreateWorkerService(fakeWorkerRepository);
    listWorkerByName = new ListWorkerByNameService(fakeWorkerRepository);
  });

  it('should be able to list worker by name', async () => {
    const worker = await createWorker.execute({
      name: 'Aninha Alligator',
      salary: 9000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Desenvolvedora',
      createdDate: '13/11/2020',
      uf: 'DF',
    });

    if (worker) {
      const workerByName = await listWorkerByName.execute(worker.name);

      expect(workerByName).toEqual(worker);
    }
  });

  it('should not be able to list worker by name if worker does not exist', async () => {
    await expect(listWorkerByName.execute('John Doe')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
