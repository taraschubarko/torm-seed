import { getDataSource } from '@/config/typeorm.config';
import { Factory } from '@/utils/torm-seed/factory';
import { ExampleEntity } from '@/utils/torm-seed/example/example.entity';

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
