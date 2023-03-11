const mainMenu = document.querySelectorAll('.menu_main');

mainMenu.forEach(element => {
  const links = element.querySelectorAll('.menu__link');
  const menus = element.querySelectorAll('.menu_sub');
  
  links.forEach((element) => {
    element.addEventListener('click', (evt) => {
      const parent = element.closest('.menu__item');
      const currentMenu = parent.querySelector('.menu_sub');
      
      menus.forEach(elem => {
        if(elem !== currentMenu) {
          elem.classList.remove('menu_active');
        }
      });

      if (parent.children.length > 1) {
        evt.preventDefault();
        currentMenu.classList.toggle('menu_active');
      };
    });
  });

});

