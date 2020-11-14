import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import CreateWorkerService from './CreateWorkerService';
import ListWorkersService from './ListWorkersService';

let fakeWorkerRepository: FakeWorkerRepository;
let createWorker: CreateWorkerService;
let listWorkers: ListWorkersService;

describe('List all workers with and query parameters', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();
    createWorker = new CreateWorkerService(fakeWorkerRepository);
    listWorkers = new ListWorkersService(fakeWorkerRepository);
  });

  it('should be able to list all workers', async () => {
    const firstWorker = await createWorker.execute({
      name: 'Juninho Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Desenvolvedor',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    const secondWorker = await createWorker.execute({
      name: 'Octavio Alligator',
      salary: 8954,
      cpf: '321654987',
      status: 'ATIVO',
      role: 'CEO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const thirdWorker = await createWorker.execute({
      name: 'Julia Alligator',
      salary: 3000,
      cpf: '15923459786',
      status: 'ATIVO',
      role: 'PO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const allWorkers = await listWorkers.execute({});

    expect(allWorkers).toEqual([firstWorker, secondWorker, thirdWorker]);
  });

  it('should be able to list by role', async () => {
    const firstWorker = await createWorker.execute({
      name: 'Mario Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    await createWorker.execute({
      name: 'Janaina Alligator',
      salary: 8954,
      cpf: '321654987',
      status: 'ATIVO',
      role: 'CEO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const thirdWorker = await createWorker.execute({
      name: 'Julia Alligator',
      salary: 3000,
      cpf: '15923459786',
      status: 'ATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const allWorkers = await listWorkers.execute({
      role: 'Business',
    });

    expect(allWorkers).toEqual([firstWorker, thirdWorker]);
  });

  it('should be able to list by status', async () => {
    const firstWorker = await createWorker.execute({
      name: 'Mario Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    const secondWorker = await createWorker.execute({
      name: 'Janaina Alligator',
      salary: 8954,
      cpf: '321654987',
      status: 'ATIVO',
      role: 'CEO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    await createWorker.execute({
      name: 'Julia Alligator',
      salary: 3000,
      cpf: '15923459786',
      status: 'INATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const allWorkers = await listWorkers.execute({
      status: 'ATIVO',
    });

    expect(allWorkers).toEqual([firstWorker, secondWorker]);
  });

  it('should be able to list by created date', async () => {
    await createWorker.execute({
      name: 'Mario Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    await createWorker.execute({
      name: 'Janaina Alligator',
      salary: 8954,
      cpf: '321654987',
      status: 'ATIVO',
      role: 'CEO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const thirdWorker = await createWorker.execute({
      name: 'Julia Alligator',
      salary: 3000,
      cpf: '15923459786',
      status: 'INATIVO',
      role: 'Business',
      createdDate: '10/11/2020',
      uf: 'SP',
    });

    const allWorkers = await listWorkers.execute({
      createdDate: '10/11/2020',
    });

    expect(allWorkers).toEqual([thirdWorker]);
  });

  it('should be able to list by uf', async () => {
    await createWorker.execute({
      name: 'Mario Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    const secondWorker = await createWorker.execute({
      name: 'Janaina Alligator',
      salary: 8954,
      cpf: '321654987',
      status: 'ATIVO',
      role: 'CEO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const thirdWorker = await createWorker.execute({
      name: 'Julia Alligator',
      salary: 3000,
      cpf: '15923459786',
      status: 'INATIVO',
      role: 'Business',
      createdDate: '10/11/2020',
      uf: 'SP',
    });

    const allWorkers = await listWorkers.execute({
      uf: 'SP',
    });

    expect(allWorkers).toEqual([secondWorker, thirdWorker]);
  });

  it('should be able to list workers by salary range', async () => {
    await createWorker.execute({
      name: 'Dantas Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Business',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    const secondWorker = await createWorker.execute({
      name: 'Márcia Alligator',
      salary: 4000,
      cpf: '321654987',
      status: 'ATIVO',
      role: 'CEO',
      createdDate: '12/11/2020',
      uf: 'SP',
    });

    const allWorkers = await listWorkers.execute({
      minSalary: 4000,
      maxSalary: 9000,
    });

    expect(allWorkers).toEqual([secondWorker]);
  });
});
