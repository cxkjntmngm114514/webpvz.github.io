(function(){var f=oS.LvlVar,m=f.ImZombie,l=unescape(m.T),q=m.C,o=m.ID,p=m.UN,a=m.hp,d=m.zp,h=m.cp,b=m.SNum,j={"01":oPeashooter,"02":oSunFlower,"04":oWallNut,"05":oPotatoMine,"06":oSnowPea,"07":oChomper,"08":oRepeater,"09":oPuffShroom,11:oFumeShroom,14:oScaredyShroom,18:oSquash,19:oThreepeater,22:oSpikeweed,23:oTorchwood,24:oTallNut,29:oSplitPea,30:oStarfruit,37:oGarlic},g=[],e=[],n=[],s=0,k=q.length,c=0,r;do{e.push(q.substr(s,1));r=Number(q.substr(s+1,1));r>c&&(c=r);n.push(r);g.push(j[q.substr(s+2,2)]);s+=4}while(s<k);oS.Init({PName:g,ZName:[oImp,oZombie,oConeheadZombie,oPoleVaultingZombie,oBucketheadZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oBackupDancer],PicArr:["images/interface/background2.jpg","images/interface/trophy.png","images/interface/Stripe.png"],backgroundImage:"images/interface/background2.jpg",SunNum:b,BrainsNum:5,ProduceSun:false,CardKind:1,DKind:0,LevelName:"解谜对战："+(l||"[无标题游戏]"),LvlEName:"GetImZombieCreateGame",LoadMusic:"Mountains",StartGameMusic:"Mountains",ArP:{ArC:[1,c],ArR:[1,5]},RiddleAutoGrow:function(){var t=g.length;while(t--){CustomSpecial(g[t],e[t],n[t],1)}t=6;while(--t){CustomSpecial(oBrains,t,0)}NewImg("iStripe","images/interface/Stripe.png","left:"+(GetX1X2(c+1)[0]-11)+"px;top:65px",EDAll)},LvlClearFunc:function(){oS.ScrollScreen=oS.LvlVar.ScrollScreen;delete oS.LvlVar.ScrollScreen},StartGame:function(){oP.Monitor();BeginCool();SetVisible($("dFlagMeter"),$("dFlagMeterContent"))},LoadAccess:function(i){oS.LvlVar.ScrollScreen=oS.ScrollScreen;$("tGround").style.left="-115px";ClearChild($("JSPVZAjax"));NewEle("JSPVZAjax","script",0,{src:$User.Server.DataURL+"asp/GetImZombieCreateGameVNumAdd.asp?id="+o,type:"text/javascript"},document.body);window.frames.fRiddleAlreadyCreateGame.SearchLvl();oS.RiddleAutoGrow();SetStyle($("dTop"),{left:"105px",top:0,visibility:"visible"});innerText(ESSunNum,oS.SunNum);oS.ScrollScreen=function(){$("tGround").style.left=0;ClearChild($("dButton1"),$("dButton2"),$("dButton3"));(function(){(EDAll.scrollLeft+=25)<500?oSym.addTask(2,arguments.callee,[]):SetVisible($("dMenu"),$("dSelectCard"),$("dCardList"))})()};(function(){NewEle("dPJ","div","position:absolute;left:230px;top:0;width:460px;height:50px;z-index:19",{innerHTML:'<button class="jhp" style="width:140px;height:50px"><span>'+a+'</span><BR>灰常好,值得一玩</button><button class="jhp" style="width:140px;height:50px;margin-left:10px"><span>'+d+'</span><BR>还可以,中规中矩</button><button class="jhp" style="width:140px;height:50px;margin-left:10px"><span>'+h+"</span><BR>无聊死,给我消失</button>"},EDAll);var t=function(w){if($User.Visitor.UserName=="游客"){alert("注册用户方可投票");return}ClearChild($("JSPVZAjax"));NewEle("JSPVZAjax","script",0,{src:$User.Server.DataURL+"asp/ImZombieCreateGameVote.asp?id="+o+"&Vote="+w,type:"text/javascript"},document.body);var y=$("dPJ"),z=y.childNodes,x=z.length,A;while(x--){A=z[x];A.disabled="disabled";A.style.color="#e0e0e0"}},u=$("dPJ").childNodes;u[0].onclick=function(){t(0)};u[1].onclick=function(){t(1)};u[2].onclick=function(){t(2)}})();NewEle("dButton1","button","position:absolute;left:650px;top:510px;width:100px;height:35px;z-index:255",{innerHTML:"开始挑战",onclick:function(){i(0)}},EDAll);NewEle("dButton2","button","position:absolute;left:760px;top:510px;width:100px;height:35px;z-index:255",{innerHTML:"不玩这个",onclick:function(){SelectModal(0);HiddenOptions();SetBlock($("dSurface"),$("iSurfaceBackground"));ShowRiddleGame()}},EDAll);($User.Visitor.UserName==p||$User.Visitor.UserAuthority==255)&&NewEle("dButton3","button","position:absolute;left:650px;top:450px;width:100px;height:35px;z-index:255;color:blue;font-weight:bold",{innerHTML:"删除本关",onclick:function(){if(confirm("你确定要删除这个关卡？一旦删除无法恢复！")){var t;if((t=prompt("输入删除的理由\n未输入则默认为空",""))!=null){$("dButton3").innerHTML="正在删除";$("dButton3").disabled="disabled";$("dButton3").style.color="gray";ClearChild($("JSPVZAjax"));NewEle("JSPVZAjax","script",0,{src:$User.Server.DataURL+"asp/ImZombieCreateGameDel.asp?R="+escape(t)+"&GID="+o,type:"text/javascript"},document.body)}}}},EDAll)}},{FlagToEnd:function(){var i=$User;i.isAuthorWebsite&&(ClearChild($("JSPVZAjax")),NewEle("JSPVZAjax","script",0,{src:$User.Server.DataURL+"asp/GetImZombieCreateGameFNumAdd.asp?id="+o+"&N="+ArPCard.SelNum+"&S="+oS.SunNum+"&T="+(oSym.Now-oS.StartTime),type:"text/javascript"},document.body));NewImg("imgSF","images/interface/trophy.png","left:417px;top:233px;z-index:255",EDAll,{onclick:function(){window.frames.fRiddleAlreadyCreateGame.SearchLvl();PlayAudio("winmusic");SelectModal(0);HiddenOptions();SetBlock($("dSurface"),$("iSurfaceBackground"));ShowNameDiv()}})}},{AutoSelectCard:function(){var v=oS.ArCard,u=-1,t=v.length-1;while(++u<t){SelectCard(v[u].prototype.EName)}}})})();