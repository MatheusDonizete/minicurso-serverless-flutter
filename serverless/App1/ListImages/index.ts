import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import ImageService from "../services/image.service";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('process started');
    const imService = new ImageService();
    const values = await imService.getAll(context);
    context.log('Values from storage: ', JSON.stringify(values, null, 2));
    context.res = {
        body: values.entries
    };
};

export default httpTrigger;
