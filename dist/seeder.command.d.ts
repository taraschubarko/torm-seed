import { SeederService } from './seeder.service';
export declare class SeederCommand {
    private readonly seederService;
    constructor(seederService: SeederService);
    create(): Promise<any>;
    refresh(): Promise<boolean>;
    makeSeederFile(filename: string): Promise<void>;
}
