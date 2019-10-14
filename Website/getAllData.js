function getData() {
    let allData = [];
    AWS.config.region = "eu-west-2";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "eu-west-2:912588ea-f1b9-46cd-90e6-1c5461f44353"
    });
    let docClient = new AWS.DynamoDB.DocumentClient();
    var params = { TableName: "EzQz" };
    docClient.scan(params, onScan);
    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table");
        } else {
            console.log("Table scan succeeded.");
            data.Items.forEach(function(item) {
                allData.push(item)
            });
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }         
            makeAllStats(allData);
        }
    }
}

function getDataForQ() {
    let allData = [];
    AWS.config.region = "eu-west-2";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "eu-west-2:912588ea-f1b9-46cd-90e6-1c5461f44353"
    });
    let docClient = new AWS.DynamoDB.DocumentClient();
    var params = { TableName: "EzQz" };
    docClient.scan(params, onScan);
    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table");
        } else {
            console.log("Table scan succeeded.");
            data.Items.forEach(function(item) {
                allData.push(item)
            });
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }         
            queueStats(allData);
        }
    }
}

