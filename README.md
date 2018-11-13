## checkcode 
[![NPM version](https://img.shields.io/npm/v/checkcode.svg?style=flat)](https://www.npmjs.com/package/checkcode)

A very small tool drawing check code, and support the IE 9

![checkcode](https://raw.githubusercontent.com/Yangfan2016/PicBed/master/Blog/draw-checkcode.gif)

### Installation
```bash
$ npm install checkcode
```
### Import
- ESM
```js
import CheckCode from 'checkcode';
```
- CommonJS
```js
var CheckCode = require('checkcode');
```
- CDN

```html
<script src="https://unpkg.com/checkcode/dist/CheckCode.min.js"></script>
```

### Quick Start
```js
// 初始化
var cc = new CheckCode("#canvas", {
    num: 4, // 验证码个数 
    lineNum: 5, // 干扰线个数
    dotNum: 20, // 干扰点个数
});
// 生成验证码
var res=cc.draw();// 返回验证码的文本内容
console.log(res);

```

### API

CheckCode(el[,config])

| params | memo | type | default |
| :----: | :--: | :--: | :-----: |
| el | The selector of your canvas element | string | -- |
| config | config | iConfig | -- |

iConfig

| params | memo | type | default |
| :----: | :--: | :--: | :-----: |
| num | The number of checkcode | number | 4 |
| lineNum | The number of interference lines | number | 5 |
| dotNum | The number of interference dots | number | 20 |

CheckCode#draw

| method | memo | return |
| :----: | :--: | :--: |
| draw | Drawing and returns the contents of the checkcode |string |

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT license
Copyright (c) 2018 yangfan2016 &lt;15234408101@163.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
built upon love by [docor](https://github.com/turingou/docor.git) v0.3.0
