import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import CreateWorkerService from './CreateWorkerService';
import ListWorkersService from './ListWorkersService';

let fakeWorkerRepository: FakeWorkerRepository;
let createWorker: CreateWorkerService;
let listWorkers: ListWorkersService;

describe('List workers', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();
    createWorker = new CreateWorkerService(fakeWorkerRepository);
    listWorkers = new ListWorkersService(fakeWorkerRepository);
  });

  it('should be able to list all workers', async () => {
    const worker = await createWorker.execute({
      name: 'Juninho Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Desenvolvedor',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    const allWorkers = await listWorkers.execute();

    expect(allWorkers).toEqual([worker]);
  });
});
