/*const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()
*/

function navbar() {
   if(document.getElementById('navbar').style.width=='200px'){
       document.getElementById('navbar').style.visibility = 'hidden';
        document.getElementById('navbar').style.width = 0;
       
       document.getElementById('navbtn').style.paddingTop = "40";
       document.getElementById('navbtn').style.height = "auto";
       document.getElementById('navbtn').style.backgroundColor = "transparent";
       document.getElementById('navbtn').style.textAlign = "left";
       document.getElementById('navbtn').style.paddingLeft = "40";
       document.getElementById('navbtn').innerHTML = "Menu";
   } else {
       document.getElementById('navbar').style.visibility = 'visible';
        document.getElementById('navbar').style.width = '200px';
       
       document.getElementById('navbtn').style.paddingTop = "40";
       document.getElementById('navbtn').style.height = "auto";
       document.getElementById('navbtn').style.verticalAlign = "bottom";
       document.getElementById('navbtn').style.backgroundColor = "#8878b0";
       document.getElementById('navbtn').style.textAlign = "left";
       document.getElementById('navbtn').style.paddingLeft = "20";
       document.getElementById('navbtn').innerHTML = "Close";
   }
}