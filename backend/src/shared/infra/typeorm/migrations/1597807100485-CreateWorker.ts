import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1597807100485 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isUnique: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'varchar',
          },
          {
            name: 'salary',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'uf',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'createdDate',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workers');
  }
}
