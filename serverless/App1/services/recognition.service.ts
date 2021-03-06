import * as https from 'https';

export default class RecognitionService {
    public static createRequest(apiKey) {
        const options = ({ data, params, method }) => ({
            hostname: 'brazilsouth.api.cognitive.microsoft.com',
            port: 443,
            path: `/vision/v1.0/analyze?visualFeatures=${params.join(',')}`,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                'Ocp-Apim-Subscription-Key': apiKey,
            },
        });

        return (params: any): Promise<any> => {
            /**
             * Params format example = {
             * data: {
             *   url: 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000'
             * },
             * method: 'GET' | 'POST' | 'PUT' | 'DELETE',
             * visualFeatures: ['Description', 'Adult'],
             * headers: {}
             * }
             */
            const data = JSON.stringify(params.data);
            const { method, visualFeatures } = params;

            const opts = options({
                data,
                method,
                params: visualFeatures,
            });

            return new Promise((resolve, reject) => {
                const req = https.request(opts, res => {
                    console.log(`statusCode: ${res.statusCode}`);
                    res.on('data', result => {
                        console.log(result.toString('utf8'));
                        resolve(JSON.parse(result.toString('utf8')));
                    });
                });

                req.on('error', error => {
                    console.error(error.toString());
                    reject(error);
                });

                req.write(data);
                req.end();
            });
        };
    }
}
