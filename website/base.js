const DEFAULT_COPYRIGHT = 'Copyright © 2022 Tung. All rights reserved.';
const DEFAULT_AUTHOR = 'Tung';
const DEFAULT_TITLE = 'Tung\'s blog';
const DEFAULT_ICON_FILENAME = 'logo.png';
const DEFAULT_IMG_PATH = '../src/img/';

function getCopyrightHtml() {
  return DEFAULT_COPYRIGHT;
}

function common() {
  setMeta();
  setWebsiteFavicon(DEFAULT_IMG_PATH, DEFAULT_ICON_FILENAME);
  setWebsiteTitle(DEFAULT_TITLE);
}

function setMeta() {
  setAuthor(DEFAULT_AUTHOR);
  setCopyright(DEFAULT_COPYRIGHT);
}

function setAuthor(cus_author) {
  var link = document.createElement('meta');
  link.name = 'author';
  link.content = cus_author;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function setCopyright(cus_copyright) {
  var link = document.createElement('meta');
  link.name = 'copyright';
  link.content = cus_copyright;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function setWebsiteFavicon(cus_path, cus_icon_filename) {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = cus_path + cus_icon_filename;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function setWebsiteTitle(cus_title) {
  var link = document.createElement('title');
  link.innerHTML = cus_title;
  document.getElementsByTagName('head')[0].appendChild(link);
}

/**for the function about clipboard*******************************************************/

function cpToScrapbook(text) {
  var buf = document.createElement('input');
  document.body.appendChild(buf);
  buf.value = text;
  buf.select();
  document.execCommand('copy');
  document.body.removeChild(buf);
}

/**customed navbar************************************************************************/

var gActiveNavbarItem = undefined;

function getNavbarHtml() {
  var str = 
  `<div class="navbar navbar-dark navbar-expand-md sticky-top full-height">
     <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
       <span class="navbar-toggler-icon"></span>
     </button>

     <div id="navbarContent" class="collapse navbar-collapse">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item"><a href="#" onClick="navItemClickEvent('profile')" class="nav-link"><img src="../src/img/person.svg" id="navbarImg_profile"></a></li>
         <li class="nav-item"><a href="#" class="nav-link" onClick="navItemClickEvent('restaurant')"><img src="../src/img/restaurant.svg" id="navbarImg_restaurant"></a></li>
         <li class="nav-item"><a href="#" class="nav-link" onClick="navItemClickEvent('collections')"><img src="../src/img/collections.svg" id="navbarImg_collections"></a></li>
         <li class="nav-item"><a href="#" class="nav-link" onClick="navItemClickEvent('mail')" data-toggle="tooltip" data-placement="bottom" title="複製信箱"><img src="../src/img/mail.svg"></a></li>
       </ul>
     </div>
   </div>`;
   return str;
}

function navItemClickEvent(type) {
  switch(type) {
    case 'profile':
      setActiveNavbarItem('profile');
      location.href = 'profile.html';
      break;
    case 'restaurant':
      setActiveNavbarItem('restaurant');
      location.href = 'restaurant.html';
      break;
    case 'collections':
      setActiveNavbarItem('collections');
      break;
    case 'mail':
      cpToScrapbook('toDream1225@gmail.com');
      break;
    default:
      break;
  }
}

function setActiveNavbarItem(tag) {
  if(gActiveNavbarItem!==undefined) {
    gActiveNavbarItem.classList.remove('active');
  }
  var item = document.getElementById('navbarImg_'+tag);
  item.classList.add('active');
  gActiveNavbarItem = item;
}

/**for button group***********************************************************************/

var gActiveBtnGroupBtn = undefined;

function setActiveBtnGroupBtn(id) {
  if(gActiveBtnGroupBtn !== undefined) {
    gActiveBtnGroupBtn.classList.remove('activeTabBtn');
  }
  var item = document.getElementById(id);
  item.classList.add('activeTabBtn');
  gActiveBtnGroupBtn = item;
}

/**for profile.html***********************************************************************/

const gAboutMe = [
  '關於我', 
  '我的爸爸跟媽媽，自我年幼之時，便開了間早餐店，我跟哥哥在閒暇之餘會一起去店裡幫忙，雖然我們都是幫忙一些相對簡單的事務，不過卻見識各種待人處事的方式，也同時培養出我察言觀色的習慣，而在平常的生活中，他們也經常利用身邊的大小事情對我進行機會教育，也因此培養出我對各事物的聯想力。我的哥哥，目前是一位職業軍人，雖然在同個家庭出生也共同成長，我們的選擇卻截然不同，不過也因此讓我學會尊重每個人的選擇及想法，小時候的我們感情十分要好，即便有時會產生摩擦，但我仍然喜歡跟在他身邊，因為喜歡，所以不輕易放棄。我的家庭，總是會支持我去做我認為對的事情，所以當遇到困難時，我便會想盡辦法來解決，不希望辜負支持著我的人，即便遇到挫敗，我仍會再次振作。'
];

const gAboutMe_title = [
  '(家庭背景)',
  '(求學經歷)'
];

const gAboutMenu = [
  ['學歷', 'length:3'],
  ['國立屏東大學 資訊工程碩士', '2020/07'],
  ['國立屏東大學 資訊工程學士', '2018/06'],
  ['私立中山高級工商職業學校', '2014/06'],
  
  ['證照', 'length:4'],
  ['TQC+ 程式語言', ''],
  ['TQC+ 物件導向程式語言', ''],
  ['丙級工業電子技術士', ''],
  ['丙級電腦軟體應用技術士', '']
];


const gExpMenu = [  // [item name, period, hyperlink switch]
  ['工作經歷', 'length:1', false],
  ['惠通科技股份有限公司 軟體工程師', '2022/01 ~ 2022/08', true],

  ['求學經歷', 'length:9', false],
  ['物聯網開發實作工作坊', '2021/06', false],
  ['第十八屆數位生活科技研討會', '2018/06', false],
  ['第二屆屏大創意黑客松競賽', '2018/06', false],
  ['屏大資訊學院實務專題成果競賽', '2018/02', false],
  ['APP校內成果發表會', '2017/10', false],
  ['行動多媒體成果發表會', '2017/10', false],
  ['創意APP競賽', '2017/10', false],
  ['育華興業股份有限公司 實習生', '2017/06 ~ 2017/08', true],
  ['第一屆屏大創意黑客松競賽', '2017/05', false],

  ['實務經歷', 'length:5', false],
  ['全國高中職專題競賽網站建置', '2020/10 ~ 2020/12', false],
  ['雙十連假親子體驗營隊之網頁問答遊戲', '2020/08 ~ 2020/09', false],
  ['稅務觀念宣導遊戲網頁版開發', '2019/05 ~ 2019/11', false],
  ['稅務知識小尖兵比賽活動之體驗遊戲', '2019/09 ~ 2018/11', false],
  ['阿緱手遊之稅務謎城遊戲建置', '2018/04 ~ 2018/12', false]
];
const gExpLink = [ // [hyperlink string, target]
  ['惠通科技股份有限公司', 'https://www.korenix.com/en/about/index.aspx?kind=3'],
  ['育華興業股份有限公司', 'http://www.yiuhwa.com.tw/page/about/index.aspx?kind=3&lang=TW']
];

const gPortfolioPath = '../src/portfolio/';
const gPortfolioMenu = [
  [gPortfolioPath+'monkeyGame/img_1.jpg', '阿緱手遊之稅務謎城'],
  [gPortfolioPath+'doubleTenGame/img_1.jpg', '雙十連假親子體驗營隊之網頁問答遊戲'],
  [gPortfolioPath+'taxConceptGame/img_1.jpg', '稅務觀念宣導遊戲'],
  [gPortfolioPath+'openEyes/img_1.jpg', '睜大你的眼'],
  [gPortfolioPath+'sportManager/img_1.jpg', '運動管理員'],
  [gPortfolioPath+'sendAlertMsgSystem/img_1.jpg', '異常警報訊息發送系統']
];
const gPortfolioPic = [
  ['monkeyGame', 'img_', 13],
  ['doubleTenGame', 'img_', 5],
  ['taxConceptGame', 'img_', 7],
  ['openEyes', 'img_', 3],
  ['sportManager', 'img_', 9],
  ['sendAlertMsgSystem', 'img_', 5]
];

function getAboutHtml() {
  var str = `<section>
               <h2>` + gAboutMe[0] + `</h2>`
	  +   `<span class="padding-4">`
	  +     gAboutMe_title[0]
	  +   `</span>`
          +   `<article class="padding-4">`
	  +      `<p>`
          +        gAboutMe[1]
	  +      `</p>`
          + `  </article>`
          + `</section>`;

   for(var i=0;i<gAboutMenu.length;i++) {
     var buf = gAboutMenu[i];
     if(buf[1].indexOf('length') !== -1) {
       str += `<section>
                 <h2>` + buf[0] + `</h2>
                 <div class="customed-list-group-pannel">
                   <ul class="list-group">`;
       for(i=i+1;gAboutMenu[i]!==undefined && gAboutMenu[i][1].indexOf('length')===-1;i++) {
         str += `    <li class="list-group-item customed-list-group-item">`
              +        gAboutMenu[i][0]
              + `      <span class="badge float-right">`
              +          gAboutMenu[i][1]
              + `      </span>`
              + `    </li>`;
       }
       str += `    </ul>
                 </div>
               </section>`;
       i--;
     }
  }
  return str;
}

function getExpHtml() {
  var str = '';
  for(var i=0, j=0;i<gExpMenu.length;i++) {
    var buf = gExpMenu[i];
    if(buf[1].indexOf('length') !== -1) {
      str += `<section>
                <h2>` + buf[0] + `</h2>  
                <div class="customed-list-group-pannel">  
                  <ul class="list-group">`;
      for(i=i+1;gExpMenu[i]!==undefined &&  gExpMenu[i][1].indexOf('length')===-1;i++) {
        var itemHtml = gExpMenu[i][0];

        if(gExpMenu[i][2]) {
	  var linkInfo = gExpLink[j++];
	  var itemName = gExpMenu[i][0].replace(linkInfo[0], '');
	  itemHtml = `<a href="` + linkInfo[1]  +  `" class="cus-link">`
	           +    linkInfo[0]
		   + `</a>`
		   + itemName;
	}

        str += `    <li class="list-group-item customed-list-group-item">`
             +        itemHtml
             + `      <span class="badge float-right">` 
             +          gExpMenu[i][1] 
             + `      </span>
                    </li>`;
      }
      str += `    </ul>  
                </div>
              </section>`;
      i--;
    }
  }
  return str;
}

function getPortfolioHtml() {
  const COL_MAX_NUM = 3;
  var str = `<section><h2>作品展示區</h2>`;
  for(var i=0;i<gPortfolioMenu.length;i++) {
    if((i%COL_MAX_NUM)===0) {
      str += `<div class="row">`;
    }
    str += 
      `<div class="col-sm-4">
         <figure class="showpiece">
           <a href="#" onClick="portfolioClickEvent('` + i + `')">
             <img class="showcaseImg rounded-circle" src="` + gPortfolioMenu[i][0] + `" />
           </a>
           <figcaption class="showcaseTxt">` + gPortfolioMenu[i][1] + `</figcaption>
         </figure>
       </div>`;
    if((i%COL_MAX_NUM)===(COL_MAX_NUM-1)) {
      str += `</div>`;
    }
  }
  str += `</section>`;
  return str;
}

function portfolioClickEvent(index) {
  var tag = gPortfolioPic[index][0];
  var ecTag = btoa(tag); // encode by Base 64
if(false)
  location.href = 'portfolio.html?portfolioTag=' + ecTag;
}

function getUrlPara(url, goal) {
  var objUrl = new URL(url);
  return objUrl.searchParams.get(goal);
}
