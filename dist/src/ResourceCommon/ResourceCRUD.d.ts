import { Resource } from '../Resource';
import { IResourceMethod } from '../Declarations';
export declare abstract class ResourceCRUD<TQuery, TShort, TFull> extends Resource {
    query: IResourceMethod<TQuery, TShort[]>;
    get: IResourceMethod<{
        id: any;
    }, TFull>;
    save: IResourceMethod<TFull, TFull>;
    update: IResourceMethod<TFull, TFull>;
    remove: IResourceMethod<{
        id: any;
    }, any>;
    create(data: TFull, callback?: (res: TFull) => any): Promise<TFull>;
}
