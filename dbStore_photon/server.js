console.log("Starting...");
var spark = require('spark');
spark.login({accessToken: '<place your token here>'});
// MySQL Connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'photon',
  password : 'photon',
  database : 'particle'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
console.log('connected as id ' + connection.threadId);
});
spark.getEventStream(false, 'mine', function(data) {
  console.log("Event: " + data.name + ':' + data.data);
  var query = connection.query('INSERT INTO cloud_data (name, data) values (?, ?)', [data.name, data.data], function(err, result) {
     if (err) {
         console.log('Error in ' + query.sql + err + JSON.stringify(result));
     }
  });
  console.log(query.sql);
});