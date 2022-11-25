
exports.getEmailAddr = async (event) => {
    
    // All log statements are written to CloudWatch
    console.info('Received request for email. Event body:', JSON.stringify(event));
   
    // Get id from pathParameters from APIGateway because of `/{id}` at template.yaml
    const id = event.pathParameters.id;
    
    let response = {};

    try{
        //const result = await docClient.scan(params).promise();
        const result = { personId: id, emailAddress: "fakeemail@snailmail.net"};
        response.statusCode = 200;
        response.body = JSON.stringify(result);
    }
    catch(e){
        console.info(e);
        console.error(`Failed trying to get email address for ${id}. Error ${e}`);
        response.statusCode = 500;
        response.body = JSON.stringify({"msg": "FAILED"});
    }
   
    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
  }
