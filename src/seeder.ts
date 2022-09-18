export abstract class Seeder {
  abstract run();

  public call(seed: any): any {
    console.log(
      '\x1b[42m',
      `${seed.constructor.name} ---is running`,
      '\x1b[0m',
    );
    return seed.run();
  }
}
