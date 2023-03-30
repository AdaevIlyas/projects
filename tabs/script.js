document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__text'),
    tabsBtn = document.querySelectorAll('.tab');

  showTab();

  function showTab(i = 1) {
    tabs.forEach(tab => tab.classList.remove('tabs__text-active'));
    tabs[i].classList.add('tabs__text-active');

    tabsBtn.forEach(btn => btn.classList.remove('tab-active'));
    tabsBtn[i].classList.add('tab-active');
  }

  tabsBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      showTab(i);
    });
  });
});