let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `/* 你好，我叫XXX
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/
#yinyang{
   border: 1px solid;
   width: 200px;
   height: 200px;
}
/* 接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
**/
#yinyang{
   border-radius: 50%;
   box-shadow: 0 0 5px rgba(0,0,0,0.5);
   border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#yinyang {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#yinyang::before{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(255,255,255);
    border: 40px solid rgb(0,0,0);
}
#yinyang::after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(0,0,0);
    border: 40px solid rgb(255,255,255);
}
`

let string2 = ''
let n = 0
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 = string2 + '<br>'
        } else if (string[n] === ' ') {
            string2 = string2 + '&nbsp'
        } else {
            string2 = string2 + string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 10)
}
step()