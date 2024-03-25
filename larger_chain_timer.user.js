// ==UserScript==
// @name         Larger chain timer
// @namespace    annosz.torn-usercripts.larger-chain-timer
// @version      1.0
// @description  Make chain timer bigger for better visibility
// @author       Annosz [2896714]
// @match        https://www.torn.com/*
// @updateURL    https://github.com/Annosz/torn-userscripts/raw/main/larger_chain_timer.user.js
// @downloadURL  https://github.com/Annosz/torn-userscripts/raw/main/larger_chain_timer.user.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torn.com
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements(".speed___dFP2B", actionFunction);

function actionFunction(jNode) {
    'use strict';

    const barStats = document.querySelector(".bar-stats___E_LqA");
    const timeLeft = document.querySelector(".bar-timeleft___B9RGV");
    const speed = document.querySelector(".speed___dFP2B");
    const tickList = document.querySelector(".tick-list___McObN");

    barStats.style.display = "block";
    timeLeft.style.fontSize = "60px";
    timeLeft.style.height = "62px";
    speed.style.top = "unset";
    tickList.style.height = "8px";
};
