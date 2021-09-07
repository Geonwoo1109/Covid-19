const scriptName = "Corona-19";

const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //자스키
Kakao.login('',''); //아디•비번

const Key = ""; //Api Key
const Site_1 = "https://api.corona-19.kr/korea/?serviceKey=";
const Site_2 = "https://api.corona-19.kr/korea/country/new/?serviceKey=";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if ((msg == ".자가진단" && sender == "방장봇") || msg == ".코로나") { //매일아침 방장봇이 명령어를 입력할 수 있도록 해주세요
    //자동으로 아침 몇시에 하는것도 있을라나?
    try {
      var Main_Info = JSON.parse(org.jsoup.Jsoup.connect(Site_1 + Key).ignoreContentType(true).get().text());
      replier.reply(JSON.stringify(Main_Info, null, 4));
      replier.reply("누적 사망자 수: " + Main_Info.TotalDeath
                   +nn + ""검사자 수: " + );
    } catch (e) {
      replier.reply(e+e.lineNumber);
    }
  }
  
}





Kakao.sendLink(room, {"link_ver" : "4.0",
                  "template_id" : 00000,
                  "template_args" : {
                    a: m[0],
                    b: m[1],
                    Img: m[2]
                 }
                 }, "custom");

} catch(e) {
  Api.reload("Corona-19");
  replier.reply("에러 내용: "+e+"");
}

}
} 


