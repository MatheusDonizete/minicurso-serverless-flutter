import * as azure from 'azure-storage';
import config from '../config';

export default class ImageService {
    referenceObject = {
        PartitionKey: {
            _: 'image',
        },
        RowKey: {
            _: (+new Date()).toString(),
        },
        description: {
            _: '',
        },
        url: {
            _: '',
        },
        dueDate: {
            _: new Date(),
        },
    };

    constructor() {}

    insert(data) {
        const values = Object.assign({}, this.referenceObject, data);
        const tableSvc = azure.createTableService(config.storeSecret);

        return new Promise((resolve, reject) => {
            tableSvc.createTableIfNotExists('imagesmetadata', function(
                error,
                result,
                response,
            ) {
                if (!!error) {
                    reject(error);
                    return;
                }

                tableSvc.insertEntity('imagesmetadata', values, function(
                    err,
                    result,
                    response,
                ) {
                    if (!!err) {
                        reject(err);
                        return;
                    }
                    console.log(result);
                    resolve(result);
                });
            });
        });
    }

    blobStore(image) {
        const blobService = azure.createBlobService(config.storeSecret);

        return new Promise((resolve, reject) => {
            blobService.createBlockBlobFromText(
                'imagesdata',
                image.name,
                image.buffer,
                {
                    contentType: image.type,
                } as any,
                err => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(true);
                },
            );
        });
    }

    public getAll(context): Promise<any> {
        const tableSvc = azure.createTableService(config.storeSecret);

        return new Promise((resolve, reject) => {
            tableSvc.createTableIfNotExists('imagesmetadata', function(
                error,
                result,
                response,
            ) {
                if (!!error) {
                    reject(error);
                    return;
                }
                const query = new azure.TableQuery();
                tableSvc.queryEntities('imagesmetadata', query, null, function(
                    error,
                    result,
                    response,
                ) {
                    if (!!error) {
                        reject(error);
                        return;
                    }

                    context.log(result);
                    resolve(result);
                });
            });
        });
    }
}
