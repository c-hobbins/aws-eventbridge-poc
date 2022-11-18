
//const docClient = new DynamoDBClient();

exports.processEvent = async (event) => {
    
    // All console.info/log statements are written to CloudWatch
    console.info('ONTARIO event handler...');
    console.info('************************');
    console.info('Received event:', JSON.stringify(event));

    const response = {
        statusCode: 200,
        body: JSON.stringify('OK'),
    };
    return response;
}