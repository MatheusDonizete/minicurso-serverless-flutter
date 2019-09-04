import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import ImageService from "../services/image.service";
import RecognitionService from "../services/recognition.service";
import config from "../config";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const imageService = new ImageService();
    const request = RecognitionService.createRequest(config.cognitiveSecret);

    const buffer = req.body.image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const isImageValid = await imageService.blobStore({
        type: buffer[1],
        buffer: new Buffer(buffer[2], 'base64'),
        name: req.body.name
    });
    if (!isImageValid) {
        context.res = {
            status: 400,
            body: 'Envie uma imagem Válida'
        };
        return;
    }

    const { adult, description } = await request({
        method: 'POST',
        visualFeatures: ['Description', 'Adult'],
        data: {
            url: `${process.env.BLOB_URL}${req.body.name}`
        }
    });

    if (adult.isAdultContent) {
        context.res = {
            status: 400,
            body: 'Imagem recusada por conter conteúdo impróprio'
        };
        return;
    }

    imageService.insert({
        url: {
            '_': `${config.blobURL}${req.body.name}`
        },
        description: {
            '_': description.captions[0] ? description.captions[0].text : description.tags[0]
        },
    }).then(value => {
        context.res = {
            body: value
        }
    });
};

export default httpTrigger;
