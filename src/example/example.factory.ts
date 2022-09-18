// @ts-ignore
import { getDataSource } from '@/config/typeorm.config';
import {Factory} from "@/factory";
import {ExampleEntity} from "@/example/example.entity";


export class ExampleFactory extends Factory<ExampleEntity> {
  get dataSource(): any {
    return getDataSource();
  }

  get model(): any {
    return ExampleEntity;
  }

  definition() {
    return new ExampleEntity();
  }
}
