import FakeWorkerRepository from '../repositories/fakes/FakeWorkerRepository';
import ListGroupedWorkersByUfService from './ListGroupedWorkersByUfService';

let fakeWorkerRepository: FakeWorkerRepository;
let listGroupedWorkersByUf: ListGroupedWorkersByUfService;

describe('List workers by uf', () => {
  beforeEach(() => {
    fakeWorkerRepository = new FakeWorkerRepository();
    listGroupedWorkersByUf = new ListGroupedWorkersByUfService(
      fakeWorkerRepository,
    );
  });

  it('should be able to list workers grouped by uf', async () => {
    const workerByCpf = await listGroupedWorkersByUf.execute();

    expect(workerByCpf).toBeTruthy();
  });
});
