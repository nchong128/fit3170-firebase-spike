let reader = require("buffered-reader");
var DataReader = reader.DataReader;

new DataReader ("data.txt", { encoding: "utf8" })
		.on ("error", function (error){
			console.log (error);
		})
		.on ("line", function (line, nextByteOffset){
			console.log(line);
		})
		.on ("end", function (){
		})
		.read ();