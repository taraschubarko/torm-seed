export declare class SeederService {
    run(): Promise<any>;
    refresh(): Promise<boolean>;
    makeSeederFile(filename: string): Promise<void>;
}
