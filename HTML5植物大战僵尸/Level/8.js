<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js"></script>oS.Init({PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine,oSnowPea,oChomper],ZName:[oZombie,oConeheadZombie,oBucketheadZombie],PicArr:function(){var a=oRepeater.prototype,b=a.PicArr;return["images/interface/background1.jpg",b[a.CardGif],b[a.NormalGif]]}(),backgroundImage:"images/interface/background1.jpg",CanSelectCard:1,LevelName:"关卡 1-8",LargeWaveFlag:{10:$("imgFlag1")},LoadMusic:function(){NewEle("oEmbed","embed","width:0;height:0",{src:"music/Look up at the.swf"},EDAll)}},{ArZ:[oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oConeheadZombie,oConeheadZombie,oBucketheadZombie],FlagNum:10,SumToZombie:{1:7,2:9,3:10,"default":10},FlagToSumNum:{a1:[3,5,9],a2:[1,2,3,10]},FlagToMonitor:{9:[ShowFinalWave,0]},FlagToEnd:function(){NewImg("imgSF","images/card/plants/Repeater.png","left:827px;top:525px",EDAll,{onclick:function(){GetNewCard(this,oRepeater,9)}});NewImg("PointerUD","images/interface/PointerDown.gif","top:490px;left:836px",EDAll)}});