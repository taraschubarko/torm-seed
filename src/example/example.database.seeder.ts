import {Seeder} from "@/seeder";
import {ExampleSeeder} from "@/example/example.seeder";

export class ExampleDatabaseSeeder extends Seeder {
  run() {
    //this.call(new CustomSeeder());
    this.call(new ExampleSeeder());
  }
}
