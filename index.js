const glob = require("glob");

//*匹配该路径段中0个或多个任意字符
console.log(glob.sync("*"));
//[ 'index.js', 'index1.js', 'node_modules', 'package-lock.json', 'package.json' ]

console.log(glob.sync("*/"));
//[ 'node_modules/' ]

console.log(glob.sync("/*"));
//[ 'C:\\$Recycle.Bin', 'C:\\$SysReset', ... ]

console.log(glob.sync("***"));
//[ 'index.js', 'index1.js', 'node_modules', 'package-lock.json', 'package.json' ]

console.log(glob.sync("****"));
//[ 'index.js', 'index1.js', 'node_modules', 'package-lock.json', 'package.json' ]

//**匹配路径中的0个或多个目录及其子目录
console.log(glob.sync("**"));
//[ 'index.js', 'index1.js', 'node_modules', 'node_modules/balanced-match', ..., 'package-lock.json', 'package.json' ]

//?匹配文件路径中的一个字符，不匹配 /
console.log(glob.sync("index.j?"));
//[ 'index.js' ]

console.log(glob.sync("?????.js"));
//[ 'index.js' ]

//?出现在规则的开头，表示取反。即匹配不命中后面规则的文件
console.log(glob.sync("!(index.j?)"));
//[ 'index1.js', 'node_modules', 'package-lock.json', 'package.json' ]

//[m-n]匹配方括号中出现的字符中的任意一个
console.log(glob.sync("index[0-100].js"));
//[ 'index1.js' ]

//{}可以让多个规则用,逗号分隔，起到或者的作用
console.log(glob.sync("p{ackage-lock.json,ackage.json,*}"));
//[ 'package-lock.json', 'package.json' ]
