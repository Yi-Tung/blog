var MY_COPYRIGHT = 'Copyright © 2022 Tung. All rights reserved.';

function getCopyrightHtml() {
  return MY_COPYRIGHT;
}

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
  '......'
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

const gExpMenu = [
  ['工作經歷', 'length:1'],
  ['惠通科技股份有限公司 軟體工程師', '2022/01 ~ 2022/08'],

  ['求學經歷', 'length:9'],
  ['物聯網開發實作工作坊', '2021/06'],
  ['第十八屆數位生活科技研討會', '2018/06'],
  ['第二屆屏大創意黑客松競賽', '2018/06'],
  ['屏大資訊學院實務專題成果競賽', '2018/02'],
  ['APP校內成果發表會', '2017/10'],
  ['行動多媒體成果發表會', '2017/10'],
  ['創意APP競賽', '2017/10'],
  ['校外實習', '2017/06 ~ 2017/08'],
  ['第一屆屏大創意黑客松競賽', '2017/05'],

  ['實務經歷', 'length:5'],
  ['全國高中職專題競賽網站建置', '2020/10 ~ 2020/12'],
  ['雙十連假親子體驗營隊之網頁問答遊戲', '2020/08 ~ 2020/09'],
  ['稅務觀念宣導遊戲網頁版開發', '2019/05 ~ 2019/11'],
  ['稅務知識小尖兵比賽活動之體驗遊戲', '2019/09 ~ 2018/11'],
  ['阿緱手遊之稅務謎城遊戲建置', '2018/04 ~ 2018/12']
];

const gPortfolioPath = '../src/portfolio/';
const gPortfolioMenu = [
  [gPortfolioPath+'monkeyGame/animation.jpg', '阿緱手遊之稅務謎城'],
  [gPortfolioPath+'doubleTenGame/opening.jpg', '雙十連假親子體驗營隊之網頁問答遊戲'],
  [gPortfolioPath+'taxConceptGame/group.jpg', '稅務觀念宣導遊戲'],
  [gPortfolioPath+'openEyes/camera.jpg', '睜大你的眼'],
  [gPortfolioPath+'sportManager/circuit.jpg', '運動管理員'],
  [gPortfolioPath+'sendAlertMsgSystem/connectionUI.jpg', '異常警報訊息發送系統']
];

function getAboutHtml() {
  var str = `<section>
               <h2>` + gAboutMe[0] + `</h2>
               <article class="padding-2">`
          +        gAboutMe[1]
          + `  </article>
             </section>`;

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
  for(var i=0;i<gExpMenu.length;i++) {
    var buf = gExpMenu[i];
    if(buf[1].indexOf('length') !== -1) {
      str += `<section>
                <h2>` + buf[0] + `</h2>  
                <div class="customed-list-group-pannel">  
                  <ul class="list-group">`;
      for(i=i+1;gExpMenu[i]!==undefined &&  gExpMenu[i][1].indexOf('length')===-1;i++) {
        str += `    <li class="list-group-item customed-list-group-item">`
             +        gExpMenu[i][0] 
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
  var name = gPortfolioMenu[index][1];
  //alert(name);
}
