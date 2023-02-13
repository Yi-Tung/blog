
var gListType = [
  'brunch', 'dinner', 'dessert'
];


var gListOption = [
  'tasty', 'unknown'
];


var NO_PHONE = '從缺';


var gCityInfo = [
  ['Pingtung', '屏東'],
  ['Kaohsiung', '高雄'],
  ['Tainan', '臺南'],
//  ['Chiayi', '嘉義'],
  ['NewTaipei', '新北'],
  ['Taipei', '臺北']
];


var gTastyListInfo = [
  ['type:'+gListType[0], 'city:'+gCityInfo[1][0], 'length:1'],
  ['尋早早餐', '高雄市鳳山區合作街51號', '077190306'],
  ['type:'+gListType[1], 'city:'+gCityInfo[1][0], 'length:2'],
  ['Q比Kitchen', '高雄市新興區南海街16號', '07-222-7800'],
  ['橘葉 壽司、丼飯專門店', '高雄市苓雅區林泉街65號', '07-722-1812'],
  ['type:'+gListType[2], 'city:'+gCityInfo[1][0], 'length:4'],
  ['行事紅心粉圓', '高雄市苓雅區林泉街4號', '07-716-3710'],
  ['木木江鳥衣谷千層蛋糕', '高雄市前金區中一路270號', '07-261-3771'],
  ['東門茶樓', '高雄市鼓山區東門路445號', '07-555-3637'],
  ['流心', '高雄市左營區新上街183號', '0983-099-852'],
  ['冰屋x先生 Sensei', '高雄市三民區綏遠一街167巷40號', '07-331-8345'],

  ['type:'+gListType[1], 'city:'+gCityInfo[2][0], 'length:1'],
  ['食光鍋客', '台南市南區建南路27號', '06-222-0580'],
  ['type:'+gListType[2], 'city:'+gCityInfo[2][0], 'length:1'],
  ['幸の町 雪花冰專賣店', '台南市中西區海安路二段48號', '06-222-7185'],
  
  ['type:'+gListType[0], 'city:'+gCityInfo[3][0], 'length:4'],
  ['早個好地方', '新北市中和區安平路145巷18號', '02-2926-6147'],
  ['對味 The TASTE', '新北市中和區南山路81巷8弄2號', '02-2244-7898'],
  ['晨時', '新北市中和區中山路二段2巷45弄5號', '02-2245-6209'],
  ['蛋捏早午餐', '新北市中和區景安路167巷1號', NO_PHONE],
  ['type:'+gListType[1], 'city:'+gCityInfo[3][0], 'length:3'],
  ['樂漢堡美式餐廳LOVSS BURGER', '新北市板橋區漢生東路133號', '02-2955-3025'],
  ['白川麵場しらかわ', '新北市中和區圓通路1號', '0968-596-067'],
  ['Creative Pasta 創義麵', '新北市新店區民權路73號', '02-8919-3035'],

  ['type:'+gListType[1], 'city:'+gCityInfo[4][0], 'length:2'],
  ['柑橘Shinn - Soba', '台北市大安區仁愛路四段228-6號', '02-2755-6705'],
  ['BELLINI Pasta Pasta', '台北市信義區松壽路20號', '02-2758-6096'],
  ['type:'+gListType[2], 'city:'+gCityInfo[4][0], 'length:1'],
  ['KOKU café 榖珈琲', '台北市大安區大安路一段175巷6號', '02-2709-5799']
];


var gUnknownListInfo = [
  ['type:'+gListType[1], 'city:'+gCityInfo[0][0], 'length:1'],
  ['費奧納咖啡', '屏東縣屏東市民學路15巷38號', '08-721-5520'],

  ['type:'+gListType[1], 'city:'+gCityInfo[1][0], 'length:6'],
  ['三筋', '高雄市左營區富民路59號', '07-556-1777'],
  ['蘑菇ＣＵＲＲＹ咖 哩、豬排専門店もぐもぐタイム mogu mogu time', '高雄市前金區自強三路235巷7號', '0906-537-512'],
  ['龝田熟成咖哩', '高雄市前鎮區廣西路224號', '0974-282-736'],
  ['貳の食事(日料定食店)', '高雄市左營區自由二路217號', '07-550-7255'],
  ['沐瀧家拉麵屋', '高雄市三民區義華路294號', '0968-551-982'],
  ['【吉胤家】橫浜家系ラーメン', '高雄市三民區慶雲街105號', NO_PHONE],
  ['type:'+gListType[2], 'city:'+gCityInfo[1][0], 'length:3'],
  ['八德薏仁大王', '高雄市新興區八德一路167號', '07-238-8656'],
  ['猜心泡芙', '高雄市苓雅區泰順街60號', '0965-181-010'],
  ['朵莉甜廚 法式甜點專賣店', '高雄市苓雅區民權一路88號', '07-229-3666'],

  ['type:'+gListType[0], 'city:'+gCityInfo[3][0], 'length:1'],
  ['癈墟早午餐 Fresh brunch', '新北市中和區民有街49號', '02-2225-8979'],
  ['type:'+gListType[2], 'city:'+gCityInfo[3][0], 'length:1'],
  ['減點糖LessSugar', '新北市永和區保福路二段41號', '02-8231-7605'],

  ['type:'+gListType[0], 'city:'+gCityInfo[4][0], 'length:1'],
  ['Out of office 不在辦公室', '台北市信義區忠孝東路五段17-3號B1', '02-2760-0045'],
  ['type:'+gListType[1], 'city:'+gCityInfo[4][0], 'length:3'],
  ['二屋牡蠣拉麵', '103台北市大同區赤峰街35巷11號', NO_PHONE],
  ['伊禾白湯', '台北市信義區光復南路519巷9號', '02-8786-9669'],
  ['SECOND FLOOR CAFE 貳樓', '台北市大安區師大路24號', '02-2365-6222'],
  ['type:'+gListType[2], 'city:'+gCityInfo[4][0], 'length:3'],
  ['Wb house威布好食', '台北市大安區忠孝東路三段251巷7弄15號1樓','02-8773-5311'],
  ['Sweet Tooth', '台北市信義區光復南路421巷9號', '02-2758-9488'],
  ['CURISTA COFFEE奎士咖啡', '台北市信義區忠孝東路四段563號一樓', '02-2769-1668']
];

function getStoreHtml(type, option) {
  var storeInfo = null;
  switch(option) {
    case gListOption[0]:
      storeInfo = gTastyListInfo;
      break;
    case gListOption[1]:
      storeInfo = gUnknownListInfo;
      break;
    default:
      break;
  }

  var count;
  var str = '<div class="store-pannel">';
  for(var i=0;i<storeInfo.length;i++) {
    var buf = storeInfo[i];
    if( (buf[0].indexOf('type') !== -1) && (buf[0].split(':')[1] === type) ) {
      var curCityInfo = gCityInfo.filter(ele => ele[0]===buf[1].split(':')[1]).toString().split(',');
      str += `<div class="row">
                <div class="col-sm-12 store-header"><a data-toggle="collapse" href="#store-area-`+i+`" aria-expanded="true" aria-controls="store-area-`+i+`">`
           +    curCityInfo[1]
           +   `</a></div>
              </div>
              <div class="collapse" id="store-area-` + i + `">`;
      for(i=i+1, count=0;storeInfo[i]!==undefined && storeInfo[i][2].indexOf('length')===-1;i++, count++) {
        if(count%2==0) {
          str += '<div class="row">';
        }
        str += `<div class="col-sm-6 store-item">
                  <div class="store-header">
                    <a href="#" onClick="googleSearch('` + curCityInfo[1] + ' ' + storeInfo[i][0] + `')"><img src="../src/img/search.svg"></a>`
             +      storeInfo[i][0] 
             +   `</div>
                  <div>
                    <a href="#" onClick="cpToScrapbook('`+ storeInfo[i][1]  +`')"><img src="../src/img/copy.svg"></a>`
             +        storeInfo[i][1]
             +    `</div>
                  <div>
                    <a href="#"><img src="../src/img/phone.svg"></a>` 
             +      storeInfo[i][2] 
             +   `</div>
                </div>`;
        if(count%2==1) {
          str += '</div>';
        }
      }
      if(count%2==1) {
        str += '</div>';
      }
      str += '</div>';
      i--;
    }
  }
  str += '</div>';
  return str;
}

function googleSearch(para) {
  window.open('http://www.google.com/search?q=' + para);
}
