var fs = require("fs");  //fs = file-system

if (!fs.existsSync("./data")) { // Can't write if(!fs.exists("./data")) because will return true all the time because it is async and thus won't wait till the check complete and will alwasy enter the if.
	fs.mkdirSync("./data"); // Can write fs.mkdir("./data"); but won't be good because it is async, so if file will be written before directory is created - it will crash.
}

// writeFile and writeFileAsync writes string to a file and overrides the previous file.

// Async writing, thus we can't be sure what will be written exactly:
fs.writeFile("./data/myWriteFile.txt", "Hello All!");
fs.writeFile("./data/myWriteFile.txt", "This is the second line");
fs.writeFile("./data/myWriteFile.txt", "bye bye...");

// Sync writing, thus will write only the last line:
fs.writeFileSync("./data/myWriteFileSync.txt", "Hello All!");
fs.writeFileSync("./data/myWriteFileSync.txt", "This is the second line");
fs.writeFileSync("./data/myWriteFileSync.txt", "bye bye...");

// Async appending, thus will add each line:
fs.appendFile("./data/myAppendFile.txt", "Hello All!");
fs.appendFile("./data/myAppendFile.txt", "This is the second line");
fs.appendFile("./data/myAppendFile.txt", "bye bye...");

// Sync appending, thus will add each line:
fs.appendFileSync("./data/myAppendFileSync.txt", "Hello All!");
fs.appendFileSync("./data/myAppendFileSync.txt", "This is the second line");
fs.appendFileSync("./data/myAppendFileSync.txt", "bye bye...");


// Writing JSON:
var p = {
	firstName: "Bob",
	lastName: "Alice"
};
fs.writeFile("./data/person.json", JSON.stringify(p));


// Writing JSON:
var s = {
	firstName: "Bob",
	lastName: "Alice",
	grade: 100,
	toString: function(){
		return `${this.firstName} ${this.lastName} ${this.grade}`;
	}
};
fs.writeFile("./data/student.json", s);

// Note: writing p as is will write the string "[object Object]"