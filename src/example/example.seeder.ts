import { Seeder } from '@/utils/torm-seed/seeder';
import { ExampleFactory } from '@/utils/torm-seed/example/example.factory';

export class ExampleSeeder extends Seeder {
  run() {
    new ExampleFactory().factory(15).create();
  }
}
