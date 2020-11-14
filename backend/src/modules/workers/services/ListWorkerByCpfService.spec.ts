import AppError from '../../../shared/errors/AppError';
import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import CreateWorkerService from './CreateWorkerService';
import ListWorkerByCpfService from './ListWorkerByCpfService';

let fakeWorkerRepository: FakeWorkerRepository;
let createWorker: CreateWorkerService;
let listWorkerByCpf: ListWorkerByCpfService;

describe('List worker by cpf', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();
    createWorker = new CreateWorkerService(fakeWorkerRepository);
    listWorkerByCpf = new ListWorkerByCpfService(fakeWorkerRepository);
  });

  it('should be able to list worker by cpf', async () => {
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
      const workerByCpf = await listWorkerByCpf.execute(worker.cpf);

      expect(workerByCpf).toEqual(worker);
    }
  });

  it('should not be able to list worker by cpf if worker does not exist', async () => {
    await expect(listWorkerByCpf.execute('John Doe')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
