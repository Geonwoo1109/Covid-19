const scriptName = "Corona-19";

const Key = "JXMNbPIupmCFDt7HsikqVg24hRoyxjcSB";
const Site_1 = "https://api.corona-19.kr/korea/?serviceKey=";
const Site_2 = "https://api.corona-19.kr/korea/country/new/?serviceKey=";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if ((msg == ".자가진단" && sender == "방장봇") || msg == ".코로나") {
    try {
      var Main_Info = JSON.stringify(JSON.parse(org.jsoup.Jsoup.connect(Site_1 + Key).ignoreContentType(true).get().text()),null,4);
      replier.reply(Main_Info);
    } catch (e) {
      replier.reply(e+e.lineNumber);
    }
  }
  
}
/*


const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init('3ec83a6de844b575e244d3b3b5af0ad0'); //자스키
Kakao.login('ckrgksqns333@gmail.com','wlsWkckrgksqns123'); //아디•비번

var m = [];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {


if (msg.startsWith(".카링 ")) {
  m = msg.substr(4).split("+");
  try {
    //replier.reply(m);
    
Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 45883,
                  "template_args" : {
                    a: m[0],
                    b: m[1],
                    Img: m[2]
                 }
                 }, "custom");

} catch(e) {
  Api.reload("KakaoLink_Img");
  replier.reply(e);
}

}
} 

*/
