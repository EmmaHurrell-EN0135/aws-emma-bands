const  AWS  =  require("aws-sdk"); //need AWS to run
AWS.config.update({  region:   "eu-west-1"  }); //set region
const  dynamodb  =  new  AWS.DynamoDB.DocumentClient();
const  tableName  =  "emma_bands"; //table name

let params = {
    TableName: tableName,
    Item: {
        band_id: "3",
        band_name: "Aerosmith",
        music_genre: "Rock/Pop",
        num_one_hits: 12,
        num_members: 5

    }
};

let params2 = {

    TableName: tableName,
    Item: {
        band_id: "4",
        band_name: "Queen",
        music_genre: "Rock/Pop",
        num_one_hits: 18,
        num_members: 4
    }
};

async function addBand() {

    try {
        let params = {
            Item: {
                "band_id": band_id,
                "band_name": band_name,
            }
        };

        let result = await dynamodb.put(params).promise();
        return result;

    }
    catch (err) {
        console.log(err)
    }
};

async function addBand()

          let result = null;
          try{
                //the result variable will await for scan to complete
          let result = await dynamodb.put({ TableName: tableName }).promise()
          return results;

          }
          catch (err) {
                console.log(err);
          }
     

// dynamodb.put(params, error => { // scan may run before put is finished. that could be why the new table entry isnt displayed to screen.
//     // handle potential errors
//     if (error) {
//         console.error(error);
//         return;
//     }
// });

// dynamodb.scan({  TableName:  tableName  },   (error,  result)  =>  { //read all data in your db table
      
//     if  (error)  {     
//         console.error(error);
//         return;   
//     }   
//     console.log(result.Items); // display new item to screen
// }
// });

// let paramsForQuery = { // query the table and use the partition key band_id to query
//     TableName: tableName,
//     Key: {
//         band_id: "2"
//     }
// }
// //get table id 3 and display to screen
// dynamodb.get(paramsForQuery, (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     else {
//         console.log("Got an item!");
//         console.log(result);
//     }
// });

// //delete item from table
// function deleteBand(band_id) {
//     dynamodb.delete(paramsForQuery, (err, result) => {

//         if (err) {
//             console.log(err);
//             return;
//         }
//         else {
//             console.log("Band id 4 has been deleted from table");
//         }


//     });
// }

// //using promises
// dynamodb.scan({  TableName:  tableName  }).promise()
//     .then(result => console.log(result.Items))
//     .catch(err => console.log(err));

// // using async / await
// async function completeTableScan() {
//     let result = null;
//     try {
//         result = await dynamodb.scan({  TableName:  tableName  }).promise();
//         console.log(result.Items);
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
// var docClient = new AWS.DynamoDB.DocumentClient()

// var band_name = "Kings of Leon";
// var num_members = "4";

// // Update the item, unconditionally,

// var params = {
//     TableName: tableName,
//     Key: {
//         "band_name": band_name,
//         "num_members": num_members,

//     },
//     UpdateExpression: "set info.num_one_hits = :rating, info.genre=:p",
//     ExpressionAttributeValues: {
//         "num_one_hits": 10,
//         ":p": "Rock",

//     },
//     ReturnValues: "UPDATED_NEW"
// };

// console.log("Updating the item...");

// docClient.update(params, function(err, data) {
//     if (err) {
//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
//     }
//     else {
//         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });

async function getCharacterByID(charID) {
    let character = null;
    let paramsForQuery = {
        TableName: tableName,
        Key: {
            character_id: charID
        }
    }
    try {
        character = await dynamodb.get(paramsForQuery).promise()
    }
    catch (err) {
        console.log(err);
    }
    return character;
}

async function runFunctions() {
    console.log(await getCharacterByID('Aragorn'));
}

runFunctions();