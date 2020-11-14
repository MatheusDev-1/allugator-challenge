import csvParse from 'csv-parse';
import fs from 'fs';
import { getCustomRepository } from 'typeorm';
import WorkersRepository from '../infra/typeorm/repositories/WorkersRepository';

interface CSVWorkersDTO {
  createdDate: string;
  role: string;
  cpf: string;
  name: string;
  uf: string;
  salary: number;
  status: string;
}

class ImportCSV {
  public async execute(filePath: string) {
    const workersRepository = getCustomRepository(WorkersRepository);
    const workersReadstream = fs.createReadStream(filePath);

    const workers: CSVWorkersDTO[] = [];

    const parserConfig = csvParse({
      from_line: 2,
      delimiter: ';',
    });

    const parseCSV = workersReadstream.pipe(parserConfig);

    parseCSV.on('data', async line => {
      const [createdDate, role, cpf, name, uf, salary, status] = line.map(
        (cell: string | number) => cell,
      );

      if (!createdDate || !role || !cpf || !name || !uf || !salary || !status)
        return;

      workers.push({ createdDate, role, cpf, name, uf, salary, status });
    });

    await new Promise(resolve => parseCSV.on('end', resolve));

    const newWorkers = await workersRepository.create(
      workers.map(worker => ({
        createdDate: worker.createdDate,
        role: worker.role,
        cpf: worker.cpf,
        name: worker.name,
        uf: worker.uf,
        salary: worker.salary,
        status: worker.status,
      })),
    );

    await workersRepository.save(newWorkers);

    return workers;
  }
}

export default ImportCSV;
