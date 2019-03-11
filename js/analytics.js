var _gaq = _gaq || [];

document.addEventListener('DOMContentLoaded', function(){
  checkIfCookiesAreAccepted();
});

function acceptCookies(){
  console.log('accept cookies');
  //Set cookie as accepted, hide banner, and run analytics
  document.cookie = 'metroGaAccepted=true';
  //Enable analytics
  window['ga-disable-UA-100197237-1'] = false;
  hideCookieRequest();
  runGoogleAnalytics();
}

function declineCookies(){
  //Set cookie as declined and hide cookie request
  document.cookie = 'metroGaAccepted=false';
  //Disable analytics
  window['ga-disable-UA-100197237-1'] = true;
  hideCookieRequest();
}

function checkIfCookiesAreAccepted(){
  //Check if cookies exist, and if accepted.
  if(document.cookie.split(';').filter((item)=> item.trim().startsWith('metroGaAccepted=')).length){
    if(document.cookie.split(';').filter((item)=> item.includes('metroGaAccepted=true')).length){
      //Cookie was allowed previously, use analytics
      hideCookieRequest();
      runGoogleAnalytics();
    }else{
      //Cookie was denied previously, don't use analytics
    }
  }else{
      //Cookie does not exist, request user for acceptance
      showCookieRequest();
  }
}

function showCookieRequest(){
  //If banner not exist, create banner. Else show it.
  if(!document.getElementById('cookie-banner') || document.getElementById('cookie-banner').length === 0){
    createBanner();
  }else{
    document.getElementById('cookie-banner').style.display = 'block';
  }
}

function hideCookieRequest(){
  //If banner exist, hide banner
  if(document.getElementById('cookie-banner')){
    document.getElementById('cookie-banner').style.display = 'none';
  }
}

function createBanner(){
  //Build cookie banner
  console.log('create banner');
  let banner = document.createElement('div');
  banner.id = 'cookie-banner';
  //Add buttons and texts with insertAdjacentHTML
  banner.insertAdjacentHTML('beforeend', '<div class="cookie-text">We use cookies to improve the experience on this website.</div>');
  banner.insertAdjacentHTML('beforeend', '<a href="#" onclick="acceptCookies()" class="cookies-btn-accept">Agree & proceed</a>');
  banner.insertAdjacentHTML('beforeend', '<a href="cookiepolicy.html" class="cookies-btn-more">More info</a>');
  banner.style.display = 'block';
  document.body.appendChild(banner);
}

function runGoogleAnalytics(){
  console.log('run analytics');
  // //Run Google analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-100197237-1');

  (function(){
    console.log('run ()');
    let ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=UA-100197237-1';

    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
}
