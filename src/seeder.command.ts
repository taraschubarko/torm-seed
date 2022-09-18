import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { getDataSource } from '@/config/typeorm.config';

@Injectable()
export class SeederCommand {
  constructor(private readonly seederService: SeederService) {}

  @Command({
    command: 'seed:run',
    describe: 'seed a run',
  })
  async create() {
    return this.seederService.run();
  }

  @Command({
    command: 'seed:refresh',
    describe: 'refresh seed',
  })
  async refresh() {
    return this.seederService.refresh();
  }

  @Command({
    command: 'seed:make <filename>',
    describe: 'make seeder file',
  })
  async makeSeederFile(
    @Positional({
      name: 'filename',
      describe: 'the name file',
      type: 'string',
    })
    filename: string,
  ) {
    return this.seederService.makeSeederFile(filename);
  }
}
