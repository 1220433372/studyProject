// 使用方法第一种
// setInterval(() => {
//     document.write("你好");
// }, 1000);

// 第二种

function mainJs(a,b) {
    //请在此处编写代码
    /***********Begin**********/
    var a,b,c;
    
      a = parseInt(a);
      b = parseInt(b);
      c = (a%b).toString();
     
    /*********End************/
        return a.toString()+b.toString()+c;
    }
    document.write(mainJs('23asdf','3as'));    