import { Seeder } from '@/utils/torm-seed/seeder';
import { ExampleSeeder } from '@/utils/torm-seed/example/example.seeder';

export class ExampleDatabaseSeeder extends Seeder {
  run() {
    //this.call(new CustomSeeder());
    this.call(new ExampleSeeder());
  }
}
