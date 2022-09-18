import { Factory } from "@/factory";
import { ExampleEntity } from "@/example/example.entity";
export declare class ExampleFactory extends Factory<ExampleEntity> {
    readonly dataSource: any;
    readonly model: any;
    definition(): ExampleEntity;
}
