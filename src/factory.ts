export abstract class Factory{
    abstract get dataSource():any;
    abstract get model():any;

    constructor() {}

    abstract definition();

    async entity(){
        const ds = await this.dataSource;
        return ds.getRepository(this.model);
    }

    async create(count: number = 0){
        const entity = await this.entity();
        let res = [] || {};
        if(count > 0){
            for (let i = 0; i < count; i++) {
                res[i] = entity.save(this.definition());
            }
        }else {
            res = entity.save(this.definition());
        }
        return res;
    }
}
