const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.body;e.addEventListener("click",(()=>{timerId=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(timerId),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.4a8ba3f7.js.map
