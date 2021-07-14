const html = document.querySelector("#html");
const style = document.querySelector("#style");

let string = `/* 你好，我叫baker
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个黑白的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = ``; //用于转换特殊字符后存进新的字符串中显示
let n = 0; //变量n，用于循环判断截取字符串的长度。

let step = () => {
  setTimeout(() => {
    //判断逻辑，如字符串中有特殊字符，就转换一下。
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    //循环递归调用
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    n += 1;
    if (n < string.length) step();
    //滚动条自动置底
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
  }, 50);
};

step();
