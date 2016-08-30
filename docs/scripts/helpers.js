'use strict';

/* global hexo */

hexo.extend.helper.register('guide_toc', function() {
  const toc = this.site.data.guide_toc;
  let menu = '<ul>';

  for (const title in toc) {
    const url = toc[title];
    if (typeof url === 'string') {
      menu += `<li><a href="${url}">${title}</a></li>`;
    } else {
      let subMenu = '';
      for (const subTitle in toc[title]) {
        const url = toc[title][subTitle];
        subMenu += `<li><a href="${url}">${subTitle}</a></li>`;
      }
      menu += `<li><a href="#">${title}</a><ul>${subMenu}</ul></li>`;
    }
  }

  menu += '</ul>';
  return menu;
});

hexo.extend.helper.register('menu_link', function() {
  const menus = [
    'guide',
    'api',
    // 'plugins',
    'release',
  ];

  let links = '';
  for (const menu of menus) {
    const content = this.__(`menu.${menu}`);
    let link = `/${menu}`;
    if (menu === 'guide' && this.page.lang !== 'en') {
      link = '/' + this.page.lang + link;
    }
    console.log(menu, link);
    links += `<li><a href="${link}" alt="${content}">${content}</a></li>`;
  }

  return links;
});
