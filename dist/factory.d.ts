export declare abstract class Factory<Entity> {
    abstract readonly dataSource: any;
    abstract readonly model: any;
    count: number;
    params: EntityProperty<Entity>;
    paramsMany: EntityProperty<Entity>[];
    abstract definition(): any;
    entity(): Promise<any>;
    factory(count?: number): this;
    overrideParams(params?: EntityProperty<Entity>): this;
    overrideParamsMany(paramsMany: EntityProperty<Entity>[]): this;
    create(): any[];
    createMany(): any[];
    connection(): Promise<any>;
}
export declare type EntityProperty<Entity> = {
    [Property in keyof Entity]?: Entity[Property];
};
