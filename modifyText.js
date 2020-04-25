// ==UserScript==
// @name         文字内容修改器-可以伪装成名人发微博等等恶搞。
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @updateURL         https://raw.githubusercontent.com/taoyuancun123/modifyText/master/modifyText.js
// @downloadURL       https://raw.githubusercontent.com/taoyuancun123/modifyText/master/modifyText.js
// @homepageURL       https://github.com/taoyuancun123/modifyText/blob/master/modifyText.js
// @supportURL        https://github.com/taoyuancun123/modifyText/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //test change 
    // Your code here...
    document.body.addEventListener("dblclick",modifyText);

    function modifyText(e){

        console.log(e.target);
        if(e.target.hasChildNodes()){
                    if(e.target.childNodes[0].nodeName!="TEXTAREA"){

                        e.target.insertAdjacentHTML("afterBegin",`<textarea class="test1"></textarea>`);
                        document.getElementsByClassName("test1")[0].value=e.target.innerText;

                        document.getElementsByClassName("test1")[0].style.width=e.target.clientWidth>300?e.target.clientWidth+"px":"300px";
                        document.getElementsByClassName("test1")[0].style.height=e.target.clientHeight>50?e.target.clientHeight+"px":"50px";
                        document.getElementsByClassName("test1")[0].focus();
                        //e.target.innerText="";
                        document.getElementsByClassName("test1")[0].addEventListener("blur",function(e1){
                           console.log(e1.target);
                           e.target.innerText=e1.target.value;
                            //e1.target.remove();
                       });
                    }
           }
    event.preventDefault();
    }
})();
