let nos = [1,2,3,4,5];
console.log("Initially nos are:", nos);
nos.shift();
console.log("Nos after shift:", nos);
nos.unshift(1);
console.log("Nos after unshift:" , nos);
nos.splice(3,2);
console.log("Nos after splice deletion:", nos);
//insert elements in between using slpice
nos.splice(2,2,7,8);
console.log("Nos after splice addition:", nos);
f=(1.0,"d","e","f");
console.log("Values after addition",f);
g= ["x","y","z"];
g.splice(1,2,"a","b","c");
console.log("values after addition", g);