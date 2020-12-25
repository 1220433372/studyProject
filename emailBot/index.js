//引入第三方模块
const nodemailer = require("nodemailer");

// 导入axios
const { default: Axios } = require("axios");
function getHoneyedWords() {
  var url = "https://chp.shadiao.app/api.php";
  //获取这个接口的信息
  return Axios.get(url);
}
//获取彩虹屁
// getHoneyedWords().then((res) => {
//   console.log(res.data);
//   //发送邮件
//   sendMail("1220433372@qq.com", res.data);
// });

// 创建发送邮件的对象
function sendMail(mail, code) {
  let transporter = nodemailer.createTransport({
    //node_modules/nodemailer/lib/well-known/services.json  查看相关的配置，进行修改，如果使用qq邮箱，就查看qq邮箱的相关配置
    host: "smtp.qq.com",
    port: 465, //端口号为465时，值为true，其他为false
    secure: true,
    auth: {
      //发送者邮箱
      user: mail,
      //邮箱---设置--账户--POP3/SMTP服务---开启---获取stmp授权码
      pass: "rmxkftgpzxzgiigh", //pass 不是邮箱账户的密码而是stmp的授权码（必须是相应邮箱的stmp授权码）
    },
  });
  // 邮件的相关信息
  let msg = {
    //发送者邮箱
    from: mail, //接收者邮箱，多个邮箱用逗号间隔
    to: "2243278628@qq.com", //邮件标题
    subject: "亲爱的宝贝老婆",
    // text: code, //文件内容，发送文件是text格式或者html格式，二者只能选择一个
    html: `<h2>${code}</h2>`, // html body
  };

  // 发送邮件
  transporter.sendMail(msg, (err, res) => {
    console.log(err);
    console.log(res);
  });
}

// 定时任务
const schedule = require("node-schedule");
//每天下午5点21分发送
schedule.scheduleJob({ hour: 17, minute: 21 }, function () {
  console.log("启动任务:" + new Date());
  getHoneyedWords().then((res) => {
    console.log(res.data);
    sendMail("1220433372@qq.com", res.data);
  });
});
