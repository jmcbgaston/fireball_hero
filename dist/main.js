!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){const a=i(1);function s(){const e=document.querySelector(".shield-hero-game");new a(e)}function l(){const e=document.getElementById("sound-button"),t=document.getElementById("audio");"playing"===e.value?(e.value="muted",t.pause(),console.log("pause")):"muted"===e.value&&(e.value="playing",t.play(),console.log("playing"))}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("start-button").addEventListener("click",s);document.getElementById("sound-button").addEventListener("click",l);const e=document.getElementById("start-button");e&&(window.setInterval(()=>{e.innerHTML=""},500),window.setInterval(()=>{e.innerHTML="-- Start --"},1e3))})},function(e,t,i){const a=i(2);class s{constructor(e){this.element=e,this.board="",this.gameStarted=!1,this.fireball1="",this.fireball2="",this.fireball3="",this.fireball4="",this.fireballCoordinates=[this.fireball1.id,this.fireball2.id,this.fireball3.id,this.fireball4.id],this.intervals="",this.clear="",this.setupGame=this.setupGame.bind(this),this.handleScore=this.handleScore.bind(this),this.waves=0,this.handleMove=this.handleMove.bind(this),this.isGameOver=this.isGameOver.bind(this),this.updateClasses=this.updateClasses.bind(this),this.createShieldedCharacter=this.createShieldedCharacter.bind(this),this.generateFireballs=this.generateFireballs.bind(this),this.animateFireball1=this.animateFireball1.bind(this),this.animateFireball2=this.animateFireball2.bind(this),this.animateFireball3=this.animateFireball3.bind(this),this.animateFireball4=this.animateFireball4.bind(this),this.resetGame=this.resetGame.bind(this),this.removeClasses=this.removeClasses.bind(this),this.removeFireballs=this.removeFireballs.bind(this),this.play=this.play.bind(this),this.stop=this.stop.bind(this),this.pause=this.pause.bind(this),this.audio=document.getElementById("audio"),this.setupGame(),window.addEventListener("keydown",this.handleMove)}setupGame(){this.board=new a,this.intervals="",this.clear="";let e="";for(let t=0;t<this.board.grid.length;t++){e+="<ul>";for(let i=0;i<this.board.grid.length;i++){let a=[t,i],s=t,l=i;e+=3===s&&4===l?`<li id=${a} class="character"><canvas id='canvas-character'></canvas></li>`:3===s&&3===l?`<li id=${a} class="shield"><canvas id='canvas-shield'></canvas></li>`:`<li id=${a}><canvas></canvas></li>`}e+="</ul>"}this.element.innerHTML=e,this.handleScore(),this.createCanvasShield(),this.createCanvasCharacter()}handleScore(){document.getElementById("game-detail-score").innerHTML="Waves Survived: "+this.waves}createCanvasCharacter(){const e=document.getElementById("canvas-character");e.width=100,e.height=100;const t=e.getContext("2d");t.fillStyle="white",t.fillRect(8,8,80,80)}createCanvasShield(){const e=document.getElementById("canvas-shield");e.width=100,e.height=100;const t=e.getContext("2d"),i=new Image;i.onload=()=>{t.drawImage(i,8,8,80,80)},i.src="./images/shield.png"}createShieldedCharacter(){let e=[this.board.character.positionX,this.board.character.positionY],t=document.getElementById(e);t.classList.add("shielded-character"),t.firstElementChild.id="canvas-shielded-character",this.board.character.shield=this.board.shield,this.createCanvasShieldedCharacter(),this.generateFireballs()}createCanvasShieldedCharacter(){const e=document.getElementById("canvas-shielded-character");e.width=100,e.height=100;const t=e.getContext("2d");t.fillStyle="blue",t.fillRect(8,8,80,80)}handleMove(e){let t;e.preventDefault,"N"===s.KEYS[e.keyCode]&&(t=this.board.character.positionX-1,t>0&&t<7&&(this.board.character.positionX=t,this.isGameOver()||this.updateClasses())),"S"===s.KEYS[e.keyCode]&&(t=this.board.character.positionX+1,t>0&&t<7&&(this.board.character.positionX=t,this.isGameOver()||this.updateClasses())),"E"===s.KEYS[e.keyCode]&&(t=this.board.character.positionY+1,t>0&&t<7&&(this.board.character.positionY=t,this.isGameOver()||this.updateClasses())),"W"===s.KEYS[e.keyCode]&&(t=this.board.character.positionY-1,t>0&&t<7&&(this.board.character.positionY=t,this.isGameOver()||this.updateClasses()))}updateClasses(){this.removeClasses();let e=[this.board.character.positionX,this.board.character.positionY],t=[this.board.shield.positionX,this.board.shield.positionY],i=document.getElementById(e),a=document.getElementById(t);JSON.stringify(e)===JSON.stringify(t)&&(this.board.character.shielded=!0),!1===this.board.character.shielded?this.updateCharAndShield(i,a):this.createShieldedCharacter()}updateCharAndShield(e,t){e.classList.add("character"),t.classList.add("shield"),e.firstElementChild.id="canvas-character",t.firstElementChild.id="canvas-shield",this.createCanvasCharacter(),this.createCanvasShield()}reroll(e){let t=Math.floor(7*Math.random(0))+1;return t===e?this.reroll(e):t}generateFireballs(){this.play();if("muted"===document.getElementById("sound-button").value&&this.pause(),!this.gameStarted){this.gameStarted=!0;let e=Math.floor(7*Math.random())+1,t=Math.floor(7*Math.random())+1,i=Math.floor(7*Math.random())+1,a=Math.floor(7*Math.random())+1,s=[e,t,i,a];for(let e=0;e<s.length;e++)for(let t=0;t<s.length;t++)e!==t&&s[e]===s[t]&&(s[e]=this.reroll(s[e]));e=s[0],t=s[1],i=s[2],a=s[3];let l=[0,e],r=document.getElementById(l).firstElementChild;r.id=l,this.fireball1=r,this.createCanvasFireball(r);let n=[t,0],h=document.getElementById(n).firstElementChild;h.id=n,this.fireball2=h,this.createCanvasFireball(h);let d=[7,i],o=document.getElementById(d).firstElementChild;o.id=d,this.fireball3=o,this.createCanvasFireball(o);let c=[a,7],b=document.getElementById(c).firstElementChild;b.id=c,this.fireball4=b,this.createCanvasFireball(b),this.intervals=window.setInterval(()=>{console.log("intervals"),"7"===this.fireball1.id.split(",")[0]||"7"===this.fireball2.id.split(",")[1]||"0"===this.fireball3.id.split(",")[0]||"0"===this.fireball4.id.split(",")[1]?(document.querySelectorAll("canvas").forEach(e=>{e.id!==this.fireball1.id&&e.id!==this.fireball2.id&&e.id!==this.fireball3.id&&e.id!==this.fireball4.id||(e.id="",e.getContext("2d").clearRect(0,0,100,100))}),this.gameStarted=!1,this.waves=this.waves+1,this.generateFireballs()):(this.handleScore(),this.fireball1&&this.fireball2&&this.fireball3&&this.fireball4&&(this.animateFireball1(),this.animateFireball2(),this.animateFireball3(),this.animateFireball4()))},400),this.clear=window.setInterval(()=>{console.log("clear"),window.clearInterval(this.intervals)},3200)}}createCanvasFireball(e){e.width=100,e.height=100;const t=e.getContext("2d"),i=new Image;i.onload=()=>{t.drawImage(i,8,8,80,80)},this.fireball1===e?i.src="./images/top.png":this.fireball2===e?i.src="./images/left.png":this.fireball3===e?i.src="./images/bottom.png":this.fireball4===e&&(i.src="./images/right.png")}animateFireball1(){let e=this.fireball1.id.split(","),t=[parseInt(e[0])+1,parseInt(e[1])],i=document.getElementById(t).firstElementChild;i.id=t,this.fireball1.getContext("2d").clearRect(0,0,100,100),this.fireball1=i,this.isGameOver()||this.createCanvasFireball(i)}animateFireball2(){let e=this.fireball2.id.split(","),t=[parseInt(e[0]),parseInt(e[1])+1],i=document.getElementById(t).firstElementChild;i.id=t,this.fireball2.getContext("2d").clearRect(0,0,100,100),this.fireball2=i,this.isGameOver()||this.createCanvasFireball(i)}animateFireball3(){let e=this.fireball3.id.split(","),t=[parseInt(e[0])-1,parseInt(e[1])],i=document.getElementById(t).firstElementChild;i.id=t,this.fireball3.getContext("2d").clearRect(0,0,100,100),this.fireball3=i,this.isGameOver()||this.createCanvasFireball(i)}animateFireball4(){let e=this.fireball4.id.split(","),t=[parseInt(e[0]),parseInt(e[1])-1],i=document.getElementById(t).firstElementChild;i.id=t,this.fireball4.getContext("2d").clearRect(0,0,100,100),this.fireball4=i,this.isGameOver()||this.createCanvasFireball(i)}isGameOver(){let e=this.board.character.positionX,t=this.board.character.positionY;if(this.fireball1.id!==`${e},${t}`&&this.fireball2.id!==`${e},${t}`&&this.fireball3.id!==`${e},${t}`&&this.fireball4.id!==`${e},${t}`)return!1;this.resetGame(),alert("Game Over!!")}resetGame(){this.waves=0,this.gameStarted=!1,window.clearInterval(this.intervals),window.clearInterval(this.clear),this.stop(),this.removeClasses(),this.removeFireballs(),this.setupGame()}removeClasses(){return document.querySelectorAll("li").forEach(e=>{(e.classList.contains("character")||e.classList.contains("shield")||e.classList.contains("shielded-character"))&&(e.classList.remove("character"),e.classList.remove("shield"),e.classList.remove("shield-character"))}),document.querySelectorAll("canvas").forEach(e=>{e.id!==this.fireball1.id&&e.id!==this.fireball2.id&&e.id!==this.fireball3.id&&e.id!==this.fireball4.id&&(e.id="",e.getContext("2d").clearRect(0,0,100,100))}),!0}removeFireballs(){return document.querySelectorAll("canvas").forEach(e=>{e.id!==this.fireball1.id&&e.id!==this.fireball2.id&&e.id!==this.fireball3.id&&e.id!==this.fireball4.id||(e.id="",e.getContext("2d").clearRect(0,0,100,100))}),this.fireball1="",this.fireball2="",this.fireball3="",this.fireball4="",!0}play(){this.audio.play()}stop(){this.audio.currentTime=0,this.audio.pause()}pause(){this.audio.pause()}}s.KEYS={37:"W",38:"N",39:"E",40:"S"},e.exports=s},function(e,t,i){const a=i(3),s=i(4);e.exports=class{constructor(){this.grid=new Array(8),this.character=new a,this.shield=new s}}},function(e,t){e.exports=class{constructor(){this.shielded=!1,this.shield=null,this.positionX=3,this.positionY=4}}},function(e,t){e.exports=class{constructor(){this.health=1,this.isBroken=!1,this.positionX=3,this.positionY=3}damage(){this.health,0===this.health&&(this.isBroken=!0)}}}]);