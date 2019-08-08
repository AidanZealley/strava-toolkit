import connectAccount from './src/connect-account'

export default async function(stravaToolkit) {

    await connectAccount(stravaToolkit);

    return;

}