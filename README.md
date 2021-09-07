# globStudy
learn node-glob

# [glob](https://github.com/isaacs/node-glob)

通过通配符的方式匹配文件路径

### 1】异步回调的方式

```js
var glob = require("glob").Glob;
new glob("dist/**/*", { 
  nodir: true, //不匹配文件夹
  cwd: process.cwd() //当前终端进程运行的路径
}, (err, found) => {
  console.log(err, found);//null [ 'dist/css/asd.z', 'dist/ins.ks', 'dist/sada.js' ]
});
```

```js
var glob = require("glob");
glob("dist/**/*", { nodir: true, cwd: process.cwd() }, (err, found) => {
  console.log(err, found);//null [ 'dist/css/asd.z', 'dist/ins.ks', 'dist/sada.js' ]
});
```

### 2】同步的方式

```js
var glob = require("glob").Glob;
console.log(1);
const { found } = new glob("dist/**/*", {
  sync: true,
  nodir: true,
  cwd: process.cwd(),
});
console.log(found);
console.log(2);
//1
//[ 'dist/css/asd.z', 'dist/ins.ks', 'dist/sada.js' ]
//2
```

```js
var glob = require("glob");
console.log(1);
const found = glob.sync("dist/**/*", {
  nodir: true,
  cwd: process.cwd(),
});
console.log(found);
console.log(2);
```

# [glob匹配模式](https://blog.csdn.net/guang_s/article/details/90379694)

| **匹配符**                   | **说明**                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| *                            | 匹配文件路径中的0个或多个字符，但不会匹配 / ，除非 / 出现在末尾 |
| **                           | 匹配路径中的0个或多个目录及其子目录                          |
| ?                            | 匹配文件路径中的一个字符，不匹配 /                           |
| !                            | 出现在规则的开头，表示取反。即匹配不命中后面规则的文件       |
| []                           | 匹配方括号中出现的字符中的任意一个                           |
| {}                           | 可以让多个规则用 , 逗号分隔，起到或者的作用                  |
| {n1..n3}                     | 匹配n1到n3之间的整数                                         |
| !(pattern\|pattern\|pattern) | 匹配任何与括号中给定的任一模式都不匹配的                     |
| ?(pattern\|pattern\|pattern) | 匹配括号中给定的任一模式0次或1次                             |
| +(pattern\|pattern\|pattern) | 匹配括号中给定的任一模式至少1次                              |
| *(pattern\|pattern\|pattern) | 匹配括号中给定的任一模式0次或多次                            |
| @(pattern\|pattern\|pattern) | 匹配括号中给定的任一模式1次                                  |

练习：

在`index.js`中练习

```js
|-node_modules
|       |-...
|
|-index.js
|-index1.js
|-package-lock.json
|-package.json
```



```js
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

```

