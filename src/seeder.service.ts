import { Injectable } from '@nestjs/common';
// @ts-ignore
import { DatabaseSeeder } from '@/database/seeds/database.seeder';
// @ts-ignore
import { getDataSource } from '@/config/typeorm.config';
import {createFile} from "@/storage.helper";


@Injectable()
export class SeederService {
  async run(): Promise<any> {
    new DatabaseSeeder().run();
  }

  async refresh() {
    try {
      const connection = await getDataSource();
      const entities = connection.entityMetadatas;
      const tableNames = entities
        .map((entity) => `"${entity.tableName}"`)
        .join(', ');
      await connection.query(
        `TRUNCATE ${tableNames} RESTART IDENTITY CASCADE;`,
      );
      console.log('\x1b[35m', '[AUTH SERVICE DATABASE]: Clean', '\x1b[0m');
      return true;
    } catch (error) {
      throw new Error(`ERROR: Cleaning test database: ${error}`);
    }
  }

  async makeSeederFile(filename: string) {
    const filePath = `database/seeds`;
    const fileName = `${filename}.seeder.ts`;
    await createFile(filePath, fileName, 'csv');
    console.log(fileName);
  }
}
