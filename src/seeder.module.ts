import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { SeederService } from './seeder.service';
import { SeederCommand } from './seeder.command';

@Module({
  imports: [CommandModule],
  providers: [SeederCommand, SeederService],
})
export class SeederModule {}
