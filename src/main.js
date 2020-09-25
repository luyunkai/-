let html = document.querySelector('#html');
let style = document.querySelector('#style')
let str = `/*
*你好,我叫陆云凯
*接下来我要在页面上制作一个八卦图
*首先把圆画出来
**/ 
#div1{
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    animation: name 1.2s linear infinite;
}
/*添加阴鱼*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*添加阳鱼*/
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%,
    rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*旋转*/
@keyframes name {
    0% {
      transform: rotate(360deg);
    }
  }
/*完成*/
`;
let str2 = ''
let n = 0;
let step = () => {
    setTimeout(() => {
        if (str[n] === '\n') {
            str2 += '<br>'
        } else if (str[n] === ' ') {
            str2 += '&nbsp'
        } else {
            str2 += str[n]
        }
        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < str.length - 1) {
            n += 1;
            step();
        }
    }, 30);
}
step();