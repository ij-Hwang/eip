addEventListener('load', e => {
  const navi = document.querySelector('#gnb');
  const subTitle = document.querySelector('.subTitle').textContent;
  const eduMenu = document.querySelector('#eduMenu');
  const currentlast = ['last', 'last', 'last', 'last', 'last', 'last', 'last', 'last'];
  switch (subTitle) {
    case 'ExampleTest':
      currentlast[0] = 'current';
      break;
    case '단답_100':
      currentlast[1] = 'current';
      break;
    case '프로그래밍1':
      currentlast[2] = 'current';
      break;
    case '프로그래밍2':
      currentlast[3] = 'current';
      break;
    case '2021_1회':
      currentlast[4] = 'current';
      break;
    case '2021_2회':
      currentlast[5] = 'current';
      break;
    case '2020_ALL':
      currentlast[6] = 'current';
      break;
    case '에듀_문제풀이':
      currentlast[7] = 'current';
      eduMenu.innerHTML = `<ul style="width: 1200px">
      <li class="t_menu_guestbook"><a href="edu_EX1.html">1장</a></li>
      <li class="t_menu_guestbook"><a href="">2장</a></li>
      <li class="t_menu_guestbook"><a href="">3장</a></li>
      <li class="t_menu_guestbook"><a href="">4장</a></li>
      <li class="t_menu_guestbook"><a href="">5장</a></li>
      <li class="t_menu_guestbook"><a href="">6장</a></li>
      <li class="t_menu_guestbook"><a href="">7장</a></li>
      <li class="t_menu_guestbook"><a href="">8장</a></li>
      <li class="t_menu_guestbook"><a href="edu_EX9.html">9장</a></li>
      <li class="t_menu_guestbook"><a href="edu_EX10.html">10장</a></li>
      <li class="t_menu_guestbook"><a href="edu_EX1112.html">11-12장</a></li>
      </ul>`;
      break;
    default:
      alert('error');
      break;
  }
  navi.innerHTML = `<ul style="width: 1200px">
      <li class="t_menu_home first ${currentlast[0]}"><a href="40PreTTT.html">40제</a></li>
      <li class="t_menu_guestbook ${currentlast[1]}"><a href="100.html">단답_100</a></li>
      <li class="t_menu_guestbook ${currentlast[2]}"><a href="code1.html">프로그래밍1</a></li>
      <li class="t_menu_guestbook ${currentlast[3]}"><a href="code2.html">프로그래밍2</a></li>
      <li class="t_menu_guestbook ${currentlast[4]}"><a href="2021_EX1.html">2021_1회</a></li>
      <li class="t_menu_guestbook ${currentlast[5]}"><a href="2021_EX2.html">2021_2회</a></li>
      <li class="t_menu_guestbook ${currentlast[6]}"><a href="2020_EX.html">2020_ALL</a></li>
      <li class="t_menu_guestbook ${currentlast[7]}"><a href="edu_EX1.html">에듀_문제풀이</a></li>
      </ul>`;
});
