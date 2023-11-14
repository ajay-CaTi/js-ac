// PROCEss:- OBJECT provide info about , and control over the current NODEJS Process.

// Process.argv:-- return any aray contain the command-line arguements passed when NOdejs process was launch

// PROCESS.ARGV

let n = 5;
for (let i = 0; i < n; i++) {
  console.log(i);
}
console.log("BYE");

console.log(process.argv);

let argv = process.argv;

for (let i = 2; i < argv.length; i++) {
  console.log(argv[i]);
}

// HOW TO EXPORT

// module.exports.a = "hhffhf";

// module.exports=a;
