(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ade":function(e,t,n){"use strict";n("b61f")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"w-full flex"};function a(e,t,n,a,o,s){var i=Object(r["y"])("AppHeader"),u=Object(r["y"])("router-view"),l=Object(r["y"])("LoginModal");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])("div",c,[Object(r["i"])(u)]),(Object(r["s"])(),Object(r["f"])(r["b"],{to:"body"},[Object(r["i"])(l)]))],64)}var o={class:"w-full bg-gradient-to-r \r\n from-gray-900 to-blue-400\r\n text-white px-4 py-2"};function s(e,t,n,c,a,s){var i=Object(r["y"])("router-link");return Object(r["s"])(),Object(r["f"])("nav",o,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(a.list,(function(e){return Object(r["s"])(),Object(r["f"])(i,{key:e.to,class:"mx-2",to:e.to},{default:Object(r["F"])((function(){return[Object(r["h"])(Object(r["B"])(e.title),1)]})),_:2},1032,["to"])})),128)),s.isLoggedIn?(Object(r["s"])(),Object(r["f"])("button",{key:0,class:"mx-2",onClick:t[1]||(t[1]=function(){return s.logout&&s.logout.apply(s,arguments)})},"Logout")):(Object(r["s"])(),Object(r["f"])("button",{key:1,class:"mx-2",onClick:t[2]||(t[2]=function(){return s.openLogin&&s.openLogin.apply(s,arguments)})}," Login "))])}var i=n("260b"),u=(n("ea7b"),n("66ce"),{apiKey:"AIzaSyBKRZnszgamx1DHiJga6gBKwpd1uT4xdko",authDomain:"vue3-aa11b.firebaseapp.com",projectId:"vue3-aa11b",storageBucket:"vue3-aa11b.appspot.com",messagingSenderId:"459972772616",appId:"1:459972772616:web:890b81fb3397866e5c62bd"});i["a"].initializeApp(u);var l=i["a"].database(),d=l.ref("chats"),b=i["a"],f={data:function(){return{list:[{title:"DcHeroes",to:"/dc-heroes"},{title:"Calender",to:"/calender"},{title:"Markdown",to:"/markdown"},{title:"OrgChart",to:"/orgchart"},{title:"Slider",to:"/slider"},{title:"Calculator",to:"/calculator"},{title:"Modal",to:"/reuseable-modal"},{title:"Chat",to:"/chat"},{title:"User Crud",to:"/user-crud"},{title:"Tensorflow",to:"/tensorflow"}]}},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn}},methods:{logout:function(){b.auth().signOut()},openLogin:function(){this.$store.commit("setLoginModal",!0)}}};f.render=s;var p=f,O={key:0},j={class:"absolute inset-0"},h={class:"flex h-full"},m={class:"z-30 m-auto bg-white p-2 rounded shadow w-1/3"},v={class:"p-2 border "},g=Object(r["i"])("h1",{class:"text-2xl text-center"},"Login",-1),w=Object(r["i"])("p",{class:"my-3 text-center"},"Or",-1),y={class:"my-4"},x=Object(r["i"])("label",null,"Email or Username",-1),k={class:"my-4"},C=Object(r["i"])("label",null,"Password",-1),M={class:"my-4"},L={type:"submit",class:"w-full rounded shadow-md bg-gradient-to-r from-indigo-600 to-yellow-300 text-white p-2"},D={key:0},R={key:1};function I(e,t,n,c,a,o){var s=Object(r["y"])("GoogleLogin");return o.isLoginOpen?(Object(r["s"])(),Object(r["f"])("div",O,[Object(r["i"])("section",{onClick:t[1]||(t[1]=function(){return o.close&&o.close.apply(o,arguments)}),class:"z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"}),Object(r["i"])("div",j,[Object(r["i"])("div",h,[Object(r["i"])("div",m,[Object(r["i"])("div",v,[g,Object(r["i"])(s,{onCloseLoginFromGoogle:o.close},null,8,["onCloseLoginFromGoogle"]),w,Object(r["i"])("form",{class:"p-2 my-2",onSubmit:t[4]||(t[4]=Object(r["I"])((function(){return o.submit&&o.submit.apply(o,arguments)}),["prevent"]))},[Object(r["i"])("div",y,[x,Object(r["G"])(Object(r["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.email=e}),class:"rounded shadow p-2 w-full",placeholder:"Enter your email or username",ref:"emailRef"},null,512),[[r["D"],a.email]])]),Object(r["i"])("div",k,[C,Object(r["G"])(Object(r["i"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.password=t}),class:"rounded shadow p-2 w-full",type:"password",placeholder:"Enter password"},null,512),[[r["D"],e.password]])]),Object(r["i"])("div",M,[Object(r["i"])("button",L,[a.isLoading?(Object(r["s"])(),Object(r["f"])("span",R," ⏳ ")):(Object(r["s"])(),Object(r["f"])("span",D,"Login"))])])],32)])])])])])):Object(r["g"])("",!0)}var U={class:"mt-5 text-center"};function S(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("section",U,[Object(r["i"])("button",{class:"border px-2 rounded",onClick:t[1]||(t[1]=function(){return o.loginwithGoogle&&o.loginwithGoogle.apply(o,arguments)})}," Login With Google ")])}var _={methods:{loginwithGoogle:function(){var e=this,t=new b.auth.GoogleAuthProvider;b.auth().signInWithPopup(t).then((function(){e.$emit("close-login-from-google")}))}}};_.render=S;var B=_,A={components:{GoogleLogin:B},computed:{isLoginOpen:function(){return this.$store.state.isLoginOpen}},data:function(){return{email:"",passowrd:"",isLoading:!1}},mounted:function(){},methods:{submit:function(){var e=this;this.isLoading=!0,b.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){e.email="",e.password="",e.isLoading=!1,e.close()})).catch((function(t){console.log(t),e.isLoading=!1}))},close:function(){this.$store.commit("setLoginModal",!1)}}};A.render=I;var H=A,T={mounted:function(){var e=this;b.auth().onAuthStateChanged((function(t){t?(e.$store.commit("setIsLoggedIn",!0),e.$store.commit("setLoginModal",!1),e.$store.commit("setAuthUser",t)):(e.$store.commit("setIsLoggedIn",!1),e.$store.commit("setAuthUser",{}))}))},components:{AppHeader:p,LoginModal:H}};T.render=a;var F=T,G=(n("7d05"),n("6c02")),N=(n("b0c0"),{class:"m-auto"}),E={class:"text-2xl text-center"},P=Object(r["i"])("button",{class:"border rounded bg-gradient-to-r \r\n        from-gray-700 to-yellow-100",type:"submit"}," Add Hero ",-1);function $(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",N,[Object(r["i"])("h1",E,"Dc Heroes "+Object(r["B"])(c.heroesCount),1),Object(r["i"])("ul",null,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(c.dcHeroes,(function(e,t){return Object(r["s"])(),Object(r["f"])("li",{class:"flex justify-between",key:t},[Object(r["i"])("div",null,Object(r["B"])(e.name),1),Object(r["i"])("button",{onClick:function(e){return c.remove(t)}},"x",8,["onClick"])])})),128))]),Object(r["i"])("form",{class:"mt-10",onSubmit:t[2]||(t[2]=Object(r["I"])((function(){return c.addHero&&c.addHero.apply(c,arguments)}),["prevent"]))},[Object(r["G"])(Object(r["i"])("input",{class:"border rounded","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newHero=e}),placeholder:"Hero Name Here...",ref:"newHeroRef"},null,512),[[r["D"],c.newHero,void 0,{trim:!0}]]),P],32)])}n("4de4");var z={setup:function(){var e=Object(r["v"])(""),t=Object(r["v"])(""),n=Object(r["v"])([{name:"SuperGirl"},{name:"Ej"},{name:"Aquaman"},{name:"Batman"},{name:"Flash"},{name:"Superman"}]);Object(r["q"])((function(){e.value.focus()}));var c=Object(r["d"])({get:function(){return n.value.length}});function a(e){n.value=n.value.filter((function(t,n){return n!=e}))}function o(){""!==t.value&&(n.value.unshift({name:t.value}),t.value="")}return{dcHeroes:n,newHero:t,remove:a,addHero:o,newHeroRef:e,heroesCount:c}}};z.render=$;var V=z,Y={class:"m-auto bg-gray-900 py-2 px-5 my-12 rounded"},q=Object(r["i"])("h1",{class:"text-2xl my-2 text-center"},"Vue Calender",-1),W={class:"mx-2 flex justify-between"},K={class:"font-bold"},J={class:"flex my-2"},Z={class:"flex flex-wrap"},X={class:"flex justify-between my-4"};function Q(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",Y,[q,Object(r["i"])("section",W,[Object(r["i"])("h2",K,Object(r["B"])(o.currentMonthName)+" "+Object(r["B"])(a.currentYear),1)]),Object(r["i"])("section",J,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(a.days,(function(e){return Object(r["s"])(),Object(r["f"])("p",{class:"text-center",style:{width:"14.28%"},key:e},Object(r["B"])(e),1)})),128))]),Object(r["i"])("section",Z,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.startDay(),(function(e){return Object(r["s"])(),Object(r["f"])("p",{class:"text-center",style:{width:"14.28%"},key:e})})),128)),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.daysInMonth(),(function(e){return Object(r["s"])(),Object(r["f"])("p",{class:["text-center",o.currentDateClass(e)],style:{width:"14.28%"},key:e},Object(r["B"])(e),3)})),128))]),Object(r["i"])("section",X,[Object(r["i"])("button",{class:"px-2 border-rounded bg-indigo-500 rounded",onClick:t[1]||(t[1]=function(){return o.prev&&o.prev.apply(o,arguments)})},"Prev"),Object(r["i"])("button",{class:"px-2 border-rounded bg-indigo-400 rounded",onClick:t[2]||(t[2]=function(){return o.next&&o.next.apply(o,arguments)})},"Next")])])}var ee={data:function(){return{currentDate:(new Date).getUTCDate(),currentMonth:(new Date).getMonth(),currentYear:(new Date).getFullYear(),days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},methods:{daysInMonth:function(){return new Date(this.currentYear,this.currentMonth+1,0).getDate()},startDay:function(){return new Date(this.currentYear,this.currentMonth,1).getDay()},next:function(){11===this.currentMonth?(this.currentMonth=0,this.currentYear++):this.currentMonth++},prev:function(){0===this.currentMonth?(this.currentMonth=11,this.currentYear--):this.currentMonth--},currentDateClass:function(e){var t=new Date(this.currentYear,this.currentMonth,e).toDateString(),n=(new Date).toDateString();return t===n?"text-yellow-600":""}},computed:{currentMonthName:function(){return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"})}}};ee.render=Q;var te=ee,ne=n("72e0"),re=n.n(ne),ce={class:"m-auto w-full h-full bg-gray-700 object-contain"},ae=Object(r["i"])("h1",{class:"text-center"},"Welcome to my Vue3... 💖 💐",-1),oe=Object(r["i"])("div",{class:"flex flex-wrap justify-center"},[Object(r["i"])("img",{src:re.a,alt:"cloud",crossorigin:"anonymous"})],-1);function se(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",ce,[ae,oe])}var ie={};ie.render=se;var ue=ie,le={class:"flex flex-wrap w-full"},de=Object(r["i"])("h1",{class:"w-full text-center text-3xl my-4"},"Markdown App",-1),be={class:"flex m-auto w-10/12 h-screen"},fe={class:"w-1/2 border"};function pe(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",le,[de,Object(r["i"])("section",be,[Object(r["i"])("article",fe,[Object(r["i"])("textarea",{class:"w-full h-full",value:a.text,onInput:t[1]||(t[1]=function(){return o.update&&o.update.apply(o,arguments)}),ref:"markDownRef"},null,40,["value"])]),Object(r["i"])("article",{class:"w-1/2 border bg-gray-300",innerHTML:o.markedText},null,8,["innerHTML"])])])}var Oe=n("0e54"),je=n.n(Oe);function he(){var e=Object(r["v"])("");function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;clearTimeout(e),this.timeout=setTimeout(t,n)}return t}var me={data:function(){return{text:"",debounce:""}},mounted:function(){this.debounce=he(),this.$refs.markDownRef.focus()},computed:{markedText:function(){return je()(this.text)}},methods:{update:function(e){var t=this,n=function(){return t.text=e.target.value};this.debounce(n,500)}}};me.render=pe;var ve=me,ge={class:"m-auto flex rounded justify-center py-20 px-9 bg-gray-600 w-full h-full absolute"},we={class:"bg-yellow-300"};function ye(e,t,n,c,a,o){var s=Object(r["y"])("OrganizationChart");return Object(r["s"])(),Object(r["f"])("div",ge,[Object(r["i"])(s,{value:a.data},{default:Object(r["F"])((function(e){return[Object(r["i"])("span",we,Object(r["B"])(e.node.data.label),1)]})),_:1},8,["value"])])}var xe=n("b025"),ke=(n("e1ae"),{name:"Org Chart",data:function(){return{data:{key:"0",data:{label:"F.C. Barcelona"},children:[{key:"0_0",data:{label:"Manchester United"},children:[{key:"0_0_0",data:{label:"Chelsea F.C."}},{key:"0_0_1",data:{label:"Arsenal F.C."}}]},{key:"0_1",data:{label:"Real Madrid"},children:[{key:"0_1_0",data:{label:"Bayern Munich"}},{key:"0_1_1",data:{label:"Liverpool F.C."}}]}]}}},return:{OrganizationChart:xe["a"]}});ke.render=ye;var Ce=ke,Me={class:"flex flex-wrap w-full relative"},Le={class:"w-full",style:{height:"340px"}},De={class:"absolute bottom-0 w-full flex justify-center"};function Re(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",Me,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(a.sliders,(function(e,t){return Object(r["s"])(),Object(r["f"])("div",{class:"absolute w-full",key:e},[Object(r["i"])(r["c"],{name:"fade"},{default:Object(r["F"])((function(){return[a.currentSlide==t?(Object(r["s"])(),Object(r["f"])("div",{key:0,class:e,style:{height:"350px"}},null,2)):Object(r["g"])("",!0)]})),_:2},1024)])})),128)),Object(r["i"])("div",Le,[Object(r["i"])("div",De,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(a.sliders,(function(e,t){return Object(r["s"])(),Object(r["f"])("div",{key:e,onClick:function(e){return o.makeActive(t)},class:[a.currentSlide==t?"bg-gray-700":"bg-gray-300","w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"]},null,10,["onClick"])})),128))])])])}var Ie={data:function(){return{currentSlide:1,sliders:["bg-pink-300","bg-yellow-400","bg-indigo-500"],interval:"",isTitleShowing:!1}},methods:{makeActive:function(e){this.currentSlide=e}},mounted:function(){var e=this;this.interval=setInterval((function(){e.currentSlide=2===e.currentSlide?0:e.currentSlide+1}),2e3)},beforeUnmount:function(){clearInterval(this.interval)}};n("0ade");Ie.render=Re;var Ue=Ie,Se={class:"bg-black text-white w-full h-screen overflow-hidden"},_e={class:"flex w-full"},Be={class:"m-auto"},Ae=Object(r["i"])("h1",{class:"text-2xl py-2 text-center"},"Calculator",-1),He={class:"text-3xl text-right mt-10 w-32 h-20 overflow-x-hidden",style:{direction:"rtl"}},Te={class:"h-10"},Fe={key:0},Ge={class:"grid grid-cols-4 gap-1"};function Ne(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("div",Se,[Object(r["i"])("section",_e,[Object(r["i"])("div",Be,[Ae,Object(r["i"])("p",He,Object(r["B"])(c.currentNum),1),Object(r["i"])("div",Te,[c.selectedOperation?(Object(r["s"])(),Object(r["f"])("small",Fe,Object(r["B"])(c.prevNum)+" "+Object(r["B"])(c.selectedOperation)+" "+Object(r["B"])(c.currentNum),1)):Object(r["g"])("",!0)]),Object(r["i"])("div",Ge,[Object(r["i"])("button",{onClick:t[1]||(t[1]=function(e){return c.pressed("1")}),class:"p-2 w-10 h10 border rounded shadow"}," 1 "),Object(r["i"])("button",{onClick:t[2]||(t[2]=function(e){return c.pressed("2")}),class:"p-2 w-10 h10 border rounded shadow"}," 2 "),Object(r["i"])("button",{onClick:t[3]||(t[3]=function(e){return c.pressed("3")}),class:"p-2 w-10 h10 border rounded shadow"}," 3 "),Object(r["i"])("button",{onClick:t[4]||(t[4]=function(e){return c.pressed("+")}),class:"p-2 w-10 h10 border rounded shadow"}," + "),Object(r["i"])("button",{onClick:t[5]||(t[5]=function(e){return c.pressed("4")}),class:"p-2 w-10 h10 border rounded shadow"}," 4 "),Object(r["i"])("button",{onClick:t[6]||(t[6]=function(e){return c.pressed("5")}),class:"p-2 w-10 h10 border rounded shadow"}," 5 "),Object(r["i"])("button",{onClick:t[7]||(t[7]=function(e){return c.pressed("6")}),class:"p-2 w-10 h10 border rounded shadow"}," 6 "),Object(r["i"])("button",{onClick:t[8]||(t[8]=function(e){return c.pressed("-")}),class:"p-2 w-10 h10 border rounded shadow"}," - "),Object(r["i"])("button",{onClick:t[9]||(t[9]=function(e){return c.pressed("7")}),class:"p-2 w-10 h10 border rounded shadow"}," 7 "),Object(r["i"])("button",{onClick:t[10]||(t[10]=function(e){return c.pressed("8")}),class:"p-2 w-10 h10 border rounded shadow"}," 8 "),Object(r["i"])("button",{onClick:t[11]||(t[11]=function(e){return c.pressed("9")}),class:"p-2 w-10 h10 border rounded shadow"}," 9 "),Object(r["i"])("button",{onClick:t[12]||(t[12]=function(e){return c.pressed("*")}),class:"p-2 w-10 h10 border rounded shadow"}," * "),Object(r["i"])("button",{onClick:t[13]||(t[13]=function(e){return c.pressed("c")}),class:"p-2 h10 border rounded shadow"}," C "),Object(r["i"])("button",{onClick:t[14]||(t[14]=function(e){return c.pressed("0")}),class:"p-2 h10 border rounded shadow"}," 0 "),Object(r["i"])("button",{onClick:t[15]||(t[15]=function(e){return c.pressed("=")}),class:"p-2 w-10 h10 border rounded shadow"}," = "),Object(r["i"])("button",{onClick:t[16]||(t[16]=function(e){return c.pressed("/")}),class:"p-2 w-10 h10 border rounded shadow"}," / ")])])])])}n("caad");function Ee(e,t){Object(r["q"])((function(){return window.addEventListener(e,t)})),Object(r["r"])((function(){return window.removeEventListener(e,t)}))}var Pe={setup:function(){var e=["+","-","*","/"],t=["1","2","3","4","5","6","7","8","9","0"],n=Object(r["v"])(""),c=Object(r["v"])(""),a=Object(r["v"])("");function o(n){"="===n||"Enter"===n?u():"c"===n?p():e.includes(n)?i(n):t.includes(n)&&s(n)}function s(e){n.value=n.value+e}function i(e){u(),c.value=n.value,n.value="",a.value=e}function u(){"*"===a.value?l():"/"===a.value?d():"+"===a.value?b():"-"===a.value&&f(),c.value="",a.value=""}function l(){n.value=c.value*n.value}function d(){n.value=c.value/n.value}function b(){n.value=+c.value+ +n.value}function f(){n.value=c.value-n.value}var p=function(){return n.value=""},O=function(e){return o(e.key)};return Ee("keydown",O),{currentNum:n,pressed:o,selectedOperation:a,prevNum:c}}};Pe.render=Ne;var $e=Pe,ze={class:"flex w-full flex-wrap"},Ve={class:" bg-black text-white w-full h-screen"},Ye=Object(r["i"])("h1",{class:"text-2xl my-5"},"Reuseable Modal",-1),qe=Object(r["h"])("Red Modal"),We=Object(r["i"])("p",null,"Hey there! This is slot, slotting. 😉",-1),Ke=Object(r["h"])("Black Modal"),Je=Object(r["i"])("p",null,"🏄‍♀️",-1);function Ze(e,t,n,c,a,o){var s=Object(r["y"])("Modal");return Object(r["s"])(),Object(r["f"])("section",ze,[Object(r["i"])("div",Ve,[Ye,c.isRedModalOpen?(Object(r["s"])(),Object(r["f"])(s,{key:0,onClose:t[1]||(t[1]=function(e){return c.isRedModalOpen=!1})},{title:Object(r["F"])((function(){return[qe]})),body:Object(r["F"])((function(){return[We]})),_:1})):Object(r["g"])("",!0),Object(r["i"])("button",{class:"border rounded px-2 mx-4 bg-yellow-300 text-white",onClick:t[2]||(t[2]=function(e){return c.isRedModalOpen=!0})}," Red Modal "),c.isBlackModalOpen?(Object(r["s"])(),Object(r["f"])(s,{key:1,onClose:t[3]||(t[3]=function(e){return c.isBlackModalOpen=!1})},{title:Object(r["F"])((function(){return[Ke]})),body:Object(r["F"])((function(){return[Je]})),_:1})):Object(r["g"])("",!0),Object(r["i"])("button",{class:"border rounded px-2 mx-4 bg-yellow-300 text-white",onClick:t[4]||(t[4]=function(e){return c.isBlackModalOpen=!0})}," Black Modal ")])])}var Xe={class:"absolute inset-0"},Qe={class:"flex h-full"},et={class:"z-30 m-auto bg-white p-2 rounded shadow w-1/3"},tt={class:"p-2 border"},nt={class:"text-2xl"};function rt(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("section",{onClick:t[1]||(t[1]=function(){return c.close&&c.close.apply(c,arguments)}),class:"z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"}),Object(r["i"])("div",Xe,[Object(r["i"])("div",Qe,[Object(r["i"])("div",et,[Object(r["i"])("div",tt,[Object(r["i"])("h1",nt,[Object(r["x"])(e.$slots,"title")]),Object(r["i"])("main",null,[Object(r["x"])(e.$slots,"body")])])])])])],64)}var ct={setup:function(e,t){var n=t.emit;function r(){n("close")}return{close:r}}};ct.render=rt;var at=ct,ot={components:{Modal:at},setup:function(){var e=Object(r["v"])(!1),t=Object(r["v"])(!1);return{isRedModalOpen:e,isBlackModalOpen:t}}};ot.render=Ze;var st=ot,it={class:"flex w-full"},ut={class:"m-auto"},lt={class:"mt-10"},dt=Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",{class:"px-4 py-2 border"},"ID"),Object(r["i"])("th",{class:"px-4 py-2 border"},"Avatar"),Object(r["i"])("th",{class:"px-4 py-2 border"},"Name"),Object(r["i"])("th",{class:"px-4 py-2 border"},"Email"),Object(r["i"])("th",{class:"px-4 py-2 border"},"Actions")])],-1),bt={class:"border px-4 py-2"},ft={class:"border px-4 py-2"},pt={class:"border px-4 py-2"},Ot={class:"border px-4 py-2"},jt={class:"border px-4 py-2"},ht={class:"flex justify-between"};function mt(e,t,n,c,a,o){var s=Object(r["y"])("Create");return Object(r["s"])(),Object(r["f"])("section",it,[Object(r["i"])("div",ut,[Object(r["i"])("div",lt,[Object(r["i"])(s,{onNewUserAdded:c.addUser},null,8,["onNewUserAdded"]),Object(r["i"])("table",null,[dt,Object(r["i"])("tbody",null,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(c.state.users,(function(e){return Object(r["s"])(),Object(r["f"])("tr",{key:e.id},[Object(r["i"])("td",bt,Object(r["B"])(e._id),1),Object(r["i"])("td",ft,[Object(r["i"])("img",{src:e.avatar,alt:e.first_name,width:"50",class:"rounded-full"},null,8,["src","alt"])]),Object(r["i"])("td",pt,Object(r["B"])(e.name),1),Object(r["i"])("td",Ot,Object(r["B"])(e.email),1),Object(r["i"])("td",jt,[Object(r["i"])("button",{class:"px-2 py-1 bg-red-400 rounded text-white",onClick:function(t){return c.destroy(e._id)}}," Delete ",8,["onClick"])])])})),128))])]),Object(r["i"])("div",ht,[Object(r["i"])("button",{class:["px-3 py-2 border rounded ",1===c.state.users.page?"bg-gray-100":"hover:shadow"],onClick:t[1]||(t[1]=function(){return c.prev&&c.prev.apply(c,arguments)}),disabled:1===c.state.users.page}," Prev ",10,["disabled"]),Object(r["i"])("button",{class:["px-3 py-2 border rounded",c.state.users.page===c.state.users.total_pages?"bg-gray-100":"hover:shadow"],onClick:t[2]||(t[2]=function(){return c.next&&c.next.apply(c,arguments)}),disabled:c.state.users.page===c.state.users.total_pages}," Next ",10,["disabled"])])])])])}n("96cf");var vt=n("1da1"),gt=n("bc3a"),wt=n.n(gt);wt.a.defaults.baseURL="https://crudcrud.com/api/f93eae1aaf384cc595ac4b8dc92c1cae";var yt=wt.a,xt=Object(r["h"])(" Add New User "),kt={class:"p-2"},Ct=Object(r["i"])("label",null,"Name",-1),Mt={class:"p-2"},Lt=Object(r["i"])("label",null,"Email",-1),Dt={class:"p-2"},Rt=Object(r["i"])("label",null,"Avatar",-1),It=Object(r["i"])("div",{class:"p-2"},[Object(r["i"])("input",{class:"w-full p-2 rounded border hover:bg-gray-300",type:"submit",value:"Create"})],-1);function Ut(e,t,n,c,a,o){var s=Object(r["y"])("Modal");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("button",{class:"px-2 py-1 border rounded my-4",onClick:t[1]||(t[1]=function(e){return c.isModalOpen=!0})}," Add User "),(Object(r["s"])(),Object(r["f"])(r["b"],{to:"body"},[c.isModalOpen?(Object(r["s"])(),Object(r["f"])(s,{key:0,onClose:t[6]||(t[6]=function(e){return c.isModalOpen=!1})},{title:Object(r["F"])((function(){return[xt]})),body:Object(r["F"])((function(){return[Object(r["i"])("form",{onSubmit:t[5]||(t[5]=Object(r["I"])((function(){return c.submit&&c.submit.apply(c,arguments)}),["prevent"]))},[Object(r["i"])("div",kt,[Ct,Object(r["G"])(Object(r["i"])("input",{class:"w-full p-2 rounded border",placeholder:"User Name","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.state.form.name=e})},null,512),[[r["D"],c.state.form.name]])]),Object(r["i"])("div",Mt,[Lt,Object(r["G"])(Object(r["i"])("input",{class:"w-full p-2 rounded border",placeholder:"User Email",type:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.state.form.email=e})},null,512),[[r["D"],c.state.form.email]])]),Object(r["i"])("div",Dt,[Rt,Object(r["G"])(Object(r["i"])("input",{class:"w-full p-2 rounded border",placeholder:"Avatar Url",type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.state.form.avatar=e})},null,512),[[r["D"],c.state.form.avatar]])]),It],32)]})),_:1})):Object(r["g"])("",!0)]))],64)}var St={components:{Modal:at},setup:function(e,t){var n=t.emit,c=Object(r["v"])(!1),a=Object(r["u"])({form:{name:"",email:"",avatar:""}});function o(){return s.apply(this,arguments)}function s(){return s=Object(vt["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,yt.post("/users",a.form);case 2:t=e.sent,r=t.data,n("new-user-added",r),a.form.name="",a.form.email="",a.form.avatar="",c.value=!1;case 9:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}return{isModalOpen:c,submit:o,state:a}}};St.render=Ut;var _t=St,Bt={components:{Create:_t},setup:function(){var e=Object(r["u"])({users:[]});function t(){return n.apply(this,arguments)}function n(){return n=Object(vt["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.get("/users?page=2");case 2:n=t.sent,r=n.data,e.users=r;case 5:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}function c(){return a.apply(this,arguments)}function a(){return a=Object(vt["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.get("/users?page=1");case 2:n=t.sent,r=n.data,e.users=r;case 5:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function o(e){return s.apply(this,arguments)}function s(){return s=Object(vt["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.delete("/users/".concat(n));case 2:e.users=e.users.filter((function(e){return e._id!==n}));case 3:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function i(t){e.users.push(t)}return Object(r["q"])(Object(vt["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.get("/users");case 2:n=t.sent,r=n.data,e.users=r;case 5:case"end":return t.stop()}}),t)})))),{state:e,next:t,prev:c,destroy:o,addUser:i}}};Bt.render=mt;var At=Bt,Ht={class:"flex w-full"},Tt={class:"m-auto w-full flex flex-wrap justify-center bg-pink-400 h-screen"},Ft=Object(r["i"])("h1",{class:"text-center text-3xl my-4 w-full"},"Real Time Chat",-1),Gt={class:"border rounded-lg w-10/12 md:w-4/12"},Nt={class:"h-64 p-2"},Et={class:"h-8 p-2"};function Pt(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("section",Ht,[Object(r["i"])("div",Tt,[Ft,Object(r["i"])("div",Gt,[Object(r["i"])("div",Nt,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(c.state.chats,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e.message,class:["w-full",e.userId===c.userId?"text-right":"text-left"]},Object(r["B"])(e.message),3)})),128))]),Object(r["i"])("div",Et,[Object(r["G"])(Object(r["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.state.message=e}),placeholder:"Start Typing...",class:"p-1 border rounded shadow w-full",onKeydown:t[2]||(t[2]=Object(r["H"])((function(){return c.addMessage&&c.addMessage.apply(c,arguments)}),["enter"]))},null,544),[[r["D"],c.state.message]])])])])])}var $t=n("5530"),zt=n("5502"),Vt={setup:function(){var e=Object(r["u"])({chats:[],message:""}),t=Object(zt["b"])(),n=Object(r["d"])((function(){return t.state.authUser.uid}));function c(){var t=d.push();t.set({userId:n.value,message:e.message}),e.message=""}return Object(r["q"])(Object(vt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:d.on("child_added",(function(t){e.chats.push(Object($t["a"])({key:t.key},t.val()))}));case 1:case"end":return t.stop()}}),t)})))),{state:e,addMessage:c,userId:n}}};Vt.render=Pt;var Yt=Vt,qt={class:"flex w-full"},Wt={class:"m-auto bg-black text-white w-full h-screen"},Kt={class:"mt-10"},Jt=Object(r["i"])("div",{class:"text-center w-full"},[Object(r["i"])("h1",{class:"text-2xl mt-4"},"Tensorflow Object Detection"),Object(r["i"])("small",null,"Try with cellphone only")],-1),Zt={class:"flex flex-wrap justify-center my-2"},Xt={class:"w-full flex justify-center"},Qt={key:1,class:"flex justify-between"},en={ref:" videoRef",autoplay:"true",width:"100"},tn={class:"flex flex-wrap justify-center"},nn={ref:"imgRef",src:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60",width:"200",crossorigin:"anonymous"},rn={class:"w-full text-center my-4"},cn={key:0},an={key:1},on={key:0};function sn(e,t,n,c,a,o){return Object(r["s"])(),Object(r["f"])("section",qt,[Object(r["i"])("div",Wt,[Object(r["i"])("div",Kt,[Jt,Object(r["i"])("div",Zt,[Object(r["i"])("div",Xt,[c.isStreaming?(Object(r["s"])(),Object(r["f"])("div",Qt,[Object(r["i"])("button",{onClick:t[2]||(t[2]=function(){return c.closeCamera&&c.closeCamera.apply(c,arguments)}),class:"w-30 rounded bg-gradient-to-r from-pink-500 to-yellow-300 text-white px-2 py-1 shadow-md "}," Close Camera "),Object(r["i"])("button",{onClick:t[3]||(t[3]=function(){return c.snapshot&&c.snapshot.apply(c,arguments)}),class:"w-30 rounded bg-gradient-to-r from-pink-500 to-yellow-300 text-white px-2 py-1 shadow-md "}," Snapshot ")])):(Object(r["s"])(),Object(r["f"])("button",{key:0,onClick:t[1]||(t[1]=function(){return c.openCamera&&c.openCamera.apply(c,arguments)}),class:"w-30 rounded bg-gradient-to-r from-gray-500 to-black text-white px-2 py-1 shadow-md "}," Open Camera "))]),Object(r["i"])("video",en,null,512)]),Object(r["i"])("div",tn,[Object(r["i"])("img",nn,null,512),Object(r["i"])("div",rn,[Object(r["i"])("button",{onClick:t[4]||(t[4]=function(){return c.detect&&c.detect.apply(c,arguments)}),class:"w-30 rounded bg-gradient-to-r from-purple-500 to-blue-600 text-white p-2 shadow-md "},[c.isLoading?(Object(r["s"])(),Object(r["f"])("span",cn,"Loading...")):(Object(r["s"])(),Object(r["f"])("span",an,"Detect Object"))]),c.result.length>0?(Object(r["s"])(),Object(r["f"])("div",on,[Object(r["i"])("p",null,Object(r["B"])(c.result[0].class),1)])):Object(r["g"])("",!0)])])])])])}n("d81d");n("8b1d"),n("ee7d");var un=n("0cff"),ln={setup:function(){var e=Object(r["v"])(""),t=Object(r["v"])(""),n=Object(r["v"])(!1),c=Object(r["v"])(!1),a=Object(r["v"])([]);function o(){return s.apply(this,arguments)}function s(){return s=Object(vt["a"])(regeneratorRuntime.mark((function t(){var r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.value,n.value=!0,t.next=4,un.load();case 4:return c=t.sent,t.next=7,c.detect(r);case 7:o=t.sent,a.value=o,n.value=!1;case 10:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function i(){return u.apply(this,arguments)}function u(){return u=Object(vt["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!navigator.mediaDevices.getUserMedia){e.next=7;break}return e.next=3,navigator.mediaDevices.enumerateDevices();case 3:n=e.sent,r=n.filter((function(e){return"videoinput"===e.kind})),a=r[0].deviceId,navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:a}}}).then((function(e){c.value=!0,t.value.srcObject=e}));case 7:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){var e=t.value.srcObject,n=e.getTracks();n.map((function(e){return e.stop()})),c.value=!1}function d(){var n=document.createElement("canvas"),r=n.getContext("2d");r.drawImage(t.value,0,0,200,200);var c=n.toDataURL("image/png");e.value.setAttribute("src",c)}return{imgRef:e,result:a,detect:o,snapshot:d,isLoading:n,openCamera:i,videoRef:t,isStreaming:c,closeCamera:l}}};ln.render=sn;var dn=ln,bn=Object(zt["a"])({state:function(){return{isLoggedIn:!1,authUser:{},isLoginOpen:!1}},mutations:{setIsLoggedIn:function(e,t){e.isLoggedIn=t},setAuthUser:function(e,t){e.authUser=t},setLoginModal:function(e,t){e.isLoginOpen=t}}}),fn=bn,pn=[{path:"/",component:ue},{path:"/dc-heroes",component:V},{path:"/calender",component:te},{path:"/markdown",component:ve},{path:"/orgchart",component:Ce,meta:{middleware:"auth"}},{path:"/slider",component:Ue},{path:"/calculator",component:$e,meta:{middleware:"auth"}},{path:"/reuseable-modal",component:st},{path:"/chat",component:Yt,meta:{middleware:"auth"}},{path:"/user-crud",component:At},{path:"/tensorflow",component:dn}],On=Object(G["a"])({history:Object(G["b"])(),routes:pn});On.beforeEach((function(e,t,r){if(e.meta.middleware){var c=n("7129")("./".concat(e.meta.middleware));c?c.default(r,fn):r()}else r()}));var jn=On,hn=n("9319"),mn=(n("098b"),Object(r["e"])(F));mn.use(jn),mn.use(fn),mn.mount("#app"),mn.use(hn["a"]),mn.component("OrganizationChart",xe["a"])},7129:function(e,t,n){var r={"./auth":"efbe","./auth.js":"efbe"};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=a,e.exports=c,c.id="7129"},"72e0":function(e,t,n){e.exports=n.p+"img/cloud.7bdd8f80.webp"},"7d05":function(e,t,n){},b61f:function(e,t,n){},efbe:function(e,t,n){"use strict";n.r(t),t["default"]=function(e,t){t.state.isLoggedIn?e():(e("/"),t.commit("setLoginModal",!0))}}});
//# sourceMappingURL=app.a7e6ec98.js.map