$(".dropdown-trigger").dropdown();
const menu = document.querySelector('.sidenav');
M.Sidenav.init(menu, {});
$('.dropdown-trigger').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );