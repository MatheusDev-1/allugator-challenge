import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import CreateWorkerService from './CreateWorkerService';
import DeleteWorkerService from './DeleteWorkerService';
import ListWorkersService from './ListWorkersService';

let fakeWorkerRepository: FakeWorkerRepository;
let listWorkers: ListWorkersService;
let createWorker: CreateWorkerService;
let deleteWorker: DeleteWorkerService;

describe('Delete worker by cpf', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();
    listWorkers = new ListWorkersService(fakeWorkerRepository);
    createWorker = new CreateWorkerService(fakeWorkerRepository);
    deleteWorker = new DeleteWorkerService(fakeWorkerRepository);
  });

  it('should be able to delete worker by its cpf', async () => {
    const firstWorker = await createWorker.execute({
      name: 'Aninha Alligator',
      salary: 9000,
      cpf: '32439637882',
      status: 'ATIVO',
      role: 'Desenvolvedora',
      createdDate: '13/11/2020',
      uf: 'DF',
    });

    const secondWorker = await createWorker.execute({
      name: 'Lucas Alligator',
      salary: 1000,
      cpf: '159263489',
      status: 'ATIVO',
      role: 'Desenvolvedor',
      createdDate: '13/11/2020',
      uf: 'DF',
    });

    if (firstWorker) {
      await deleteWorker.execute(firstWorker.cpf);

      const workers = await listWorkers.execute({});

      expect(workers).toEqual([secondWorker]);
    }
  });
});
