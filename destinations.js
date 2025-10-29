const dark = document.getElementById('darkmode');
const darkImg = dark.querySelector('img'); //img inside the btn

const log = document.getElementById('login');
const darklog = log.querySelector('img'); //img inside the btn

const reg = document.getElementById('signup');
const darkreg = reg.querySelector('img'); //img inside the btn

const home = document.getElementById('homenaw');
const darkhome = home.querySelector('img'); //img inside the btn

const book = document.getElementById('booknaw');
const darkbook = book.querySelector('img'); //img inside the btn

const save = document.getElementById('savenaw');
const darksave = save.querySelector('img'); //img inside the btn

const althomevar = document.getElementById('althome');
const althovevardark = althomevar.querySelector('img'); //img inside the btn

const altbookvar = document.getElementById('altbook');
const altbookvardark = altbookvar.querySelector('img'); //img inside the btn

const altlocvar = document.getElementById('altloc');
const altlocvardark = altlocvar.querySelector('img'); //img inside the btn

const loginunder = document.getElementById('login_under');
const darkloginunder = loginunder.querySelector('img'); //img inside the btn

const signupunder = document.getElementById('signup_under');
const darksignupunder = signupunder.querySelector('img'); //img inside the btn

const menuhanb = document.getElementById('act_hamb');
const darkmenuhanb = menuhanb.querySelector('img'); //img inside the btn

dark.addEventListener('click', () => {
  // toggle dark theme
  document.body.classList.toggle('dark-theme');

  // check if dark theme is active
  const isDark = document.body.classList.contains('dark-theme');

  // change image accordingly
  if (isDark) {
    darkImg.src = 'imgs/sunw.png';  //sun icon
    darkImg.alt = 'SunLight';

    darklog.src = 'imgs/loginw.png';  //sun icon
    darklog.alt = 'LogLight';

    darkreg.src = 'imgs/signupb.png';  //sun icon
    darkreg.alt = 'SignLight';

    darkhome.src = 'imgs/homeb.png';  //home icon
    darkhome.alt = 'HomeDark';

    darkbook.src = 'imgs/searchb.png';  //book icon
    darkbook.alt = 'BookDark';

    darksave.src = 'imgs/saveb.png';  //save icon
    darksave.alt = 'ArrwDark';

    althovevardark.src = 'imgs/homew.png';  //home icon
    althovevardark.alt = 'AltHomeLight';

    altbookvardark.src = 'imgs/searchw.png';  //book icon
    altbookvardark.alt = 'AltBookLight';

    altlocvardark.src = 'imgs/savew.png';  //save icon
    altlocvardark.alt = 'AltLocLight';

    darkloginunder.src = 'imgs/loginw.png';  //login icon
    darkloginunder.alt = 'LogunderWhite';

    darksignupunder.src = 'imgs/signupb.png';  //signup icon
    darksignupunder.alt = 'Signupunderwhite';

    darkmenuhanb.src = 'imgs/menuw.png';  //close icon
    darkmenuhanb.alt = 'menuWhite';
  } else {
    darkImg.src = 'imgs/moonb.png'; // switch back to moon
    darkImg.alt = 'MoonDark';

    darklog.src = 'imgs/loginb.png';  //switch back to black log
    darklog.alt = 'LogDark';

    darkreg.src = 'imgs/signupw.png';  //switch back to white signup
    darkreg.alt = 'RegDark';

    darkhome.src = 'imgs/homew.png';  //switch back to white home
    darkhome.alt = 'HomeDark';

    darkbook.src = 'imgs/searchw.png';  //switch back to white book
    darkbook.alt = 'BookDark';

    darksave.src = 'imgs/savew.png';  //switch back to white save
    darksave.alt = 'ArrwDark';

    althovevardark.src = 'imgs/homeb.png';  //switch back to black home
    althovevardark.alt = 'AltHomeDark';

    altbookvardark.src = 'imgs/searchb.png';  //switch back to black book
    altbookvardark.alt = 'AltBookDark';

    altlocvardark.src = 'imgs/saveb.png';  //switch back to black save
    altlocvardark.alt = 'AltLocDark';

    darkloginunder.src = 'imgs/loginb.png';  //switch back to black login
    darkloginunder.alt = 'LogunderBlack';

    darksignupunder.src = 'imgs/signupw.png';  //switch back to white signup
    darksignupunder.alt = 'SignupunderWhite';

    darkmenuhanb.src = 'imgs/menub.png';  //switch back to black menu
    darkmenuhanb.alt = 'menuBlack';
  }
});

const loginboxShadow = document.getElementById('loginboxShadow');
const login = document.getElementById('login');
const loginClosebtn = document.getElementById('loginClosebtn');

login.addEventListener('click', () => {
  document.body.classList.add('show');
  document.body.style.overflow = 'hidden';
});
loginClosebtn.addEventListener('click', () => {
  document.body.classList.remove('show');
  document.body.style.overflow = '';  
});

const signupboxShadow = document.getElementById('signupboxShadow');
const signup = document.getElementById('signup');
const signupClosebtn = document.getElementById('signupClosebtn');

signup.addEventListener('click', () => {
  document.body.classList.add('showsign');
  document.body.style.overflow = 'hidden';
});
signupClosebtn.addEventListener('click', () => {
  document.body.classList.remove('showsign');
  document.body.style.overflow = '';  
});

const loginboxShadow_under = document.getElementById('loginboxShadow');
const login_under = document.getElementById('login_under');
const loginClosebtn_under = document.getElementById('loginClosebtn');

login_under.addEventListener('click', () => {
  document.body.classList.add('show');
  document.body.style.overflow = 'hidden';
});
loginClosebtn_under.addEventListener('click', () => {
  document.body.classList.remove('show');
  document.body.style.overflow = '';  
});

const signupboxShadow_under = document.getElementById('signupboxShadow');
const signup_under = document.getElementById('signup_under');
const signupClosebtn_under = document.getElementById('signupClosebtn');

signup_under.addEventListener('click', () => {
  document.body.classList.add('showsign');
  document.body.style.overflow = 'hidden';
});
signupClosebtn.addEventListener('click', () => {
  document.body.classList.remove('showsign');
  document.body.style.overflow = '';  
});

const act_hamb = document.getElementById('act_hamb');
const switchclose = act_hamb.querySelector('img');

act_hamb.addEventListener('click', () => {
  // toggle the state
  document.body.classList.toggle('closeChange');

  // check if menu is closed/open after toggling
  const closed = document.body.classList.contains('closeChange');
});