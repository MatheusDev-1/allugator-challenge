import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workers')
class Worker {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  createdDate?: string;

  @Column()
  role: string;

  @Column()
  cpf: number;

  @Column()
  name: string;

  @Column()
  uf: string;

  @Column()
  salary: number;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Worker;
