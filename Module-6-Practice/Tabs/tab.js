const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
function handleTabBtnClick(e) {
    tabPanels.forEach(panel => {
        // hide all tab panels
        panel.hidden = true;
    })
    tabBtns.forEach(tab => {
        // mark all tabs as unselected
        tab.setAttribute('aria-selected', false);
    })
    // mark this tab as selected
    e.target.setAttribute('aria-selected', true);
    // find the assocaited tabPanel and show it
    const id = e.target.id;
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;
    // use the find method
    const tabPanel = tabPanels.find(panel => {
      if(panel.getAttribute('aria-labelledby') === id) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }
    })
    console.log(tabPanel)


}

tabBtns.forEach(button => button.addEventListener('click', handleTabBtnClick))