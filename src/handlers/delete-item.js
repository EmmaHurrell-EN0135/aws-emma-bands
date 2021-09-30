// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to delete an item
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.TABLE_NAME;

/**
 * A simple example includes a HTTP delete method to delete one item in a DynamoDB table.
 */
exports.deleteItemHandler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        throw new Error(`deleteMethod only accepts DELETE method, you tried: ${event.httpMethod} method.`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Delete id from pathParameters from APIGateway because of `/{band_id}` at template.yml
     const band_id = event.pathParameters.band_id;
  
    

    // Deletes an item
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
    var params = {
        TableName : tableName,
        Key: { band_id : band_id}
    };

  const data = await docClient.delete(params).promise();
  const item = data.Item;
 
  const response = {
    statusCode: 200,
    body: JSON.stringify(item)
  };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}