const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');


function handleTabBtnClick(e) {
    console.log(e.target)
}

tabBtns.forEach(button => button.addEventListener('click', handleTabBtnClick))