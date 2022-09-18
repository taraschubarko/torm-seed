import {Seeder} from "@/seeder";
import {ExampleFactory} from "@/example/example.factory";


export class ExampleSeeder extends Seeder {
  run() {
    new ExampleFactory().factory(15).create();
  }
}
