import AppError from '@shared/errors/AppError';
import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import CreateWorkerService from './CreateWorkerService';

let fakeWorkerRepository: FakeWorkerRepository;
let createWorker: CreateWorkerService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();

    createWorker = new CreateWorkerService(fakeWorkerRepository);
  });

  it('should be able to create a new worker', async () => {
    const worker = await createWorker.execute({
      name: 'Juninho Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Desenvolvedor',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    expect(worker).toHaveProperty('cpf');
    expect(worker).toHaveProperty('name');
  });

  it('should not be able to create two workers with the same CPF', async () => {
    await await createWorker.execute({
      name: 'Juninho Alligator',
      salary: 3000,
      cpf: '12345678909',
      status: 'ATIVO',
      role: 'Desenvolvedor',
      createdDate: '12/11/2020',
      uf: 'DF',
    });

    expect(
      createWorker.execute({
        name: 'Maria Alligator',
        salary: 8000,
        cpf: '12345678909',
        status: 'ATIVO',
        role: 'Designer',
        createdDate: '08/11/2020',
        uf: 'SP',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
