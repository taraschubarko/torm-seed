export abstract class Factory<Entity> {
  abstract get dataSource(): any;
  abstract get model(): any;

  public count: number;
  public params: EntityProperty<Entity> = {};
  public paramsMany: EntityProperty<Entity>[];

  abstract definition();

  async entity() {
    const ds = await this.dataSource;
    return ds.getRepository(this.model);
  }

  public factory(count = 1) {
    this.count = count;
    return this;
  }

  public overrideParams(params: EntityProperty<Entity> = {}) {
    this.params = params;
    return this;
  }
  public overrideParamsMany(paramsMany: EntityProperty<Entity>[]) {
    this.paramsMany = paramsMany;
    return this;
  }

  public create(): any[] {
    let res = [];
    if (
      Object.keys(this.definition()).length ||
      Object.keys(this.params).length
    ) {
      res = [...Array(this.count).keys()].map(async () => {
        const entity = await this.entity();
        const definition = this.definition();
        if (Object.keys(this.params).length) {
          for (const key in this.params) {
            if (this.params.hasOwnProperty(key)) {
              definition[key] = this.params[key];
            }
          }
        }
        return await entity.save(definition);
      });
      console.log(
        '\x1b[36m%s\x1b[0m',
        `${this.model.name} Factory seeder is complete!`,
      );
    } else {
      console.error('\x1b[41m', '!!! No data to create !!!', '\x1b[0m');
    }
    return res;
  }

  public createMany(): any[] {
    const res = [];
    if (this.paramsMany.length) {
      new Promise(async (resolve) => {
        const arr = [];
        for (const value of this.paramsMany) {
          const entity = await this.entity();
          arr.push(await entity.save(value));
        }
        resolve(arr);
      });
      console.log(
        '\x1b[36m%s\x1b[0m',
        `${this.model.name} Factory seeder is complete!`,
      );
    } else {
      console.error('\x1b[41m', '!!! No data to create !!!', '\x1b[0m');
    }
    return res;
  }

  public async connection() {
    return await this.dataSource;
  }
}

export type EntityProperty<Entity> = {
  [Property in keyof Entity]?: Entity[Property];
};
