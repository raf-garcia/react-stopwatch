(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(19)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(8),r=a.n(s),l=(a(15),a(16),a(2)),o=a(3),c=a(5),p=a(4),u=a(1),m=a(6),h=(a(17),function(t){var e,a,n,s,r,l=t.initialStart,o=t.isRunning,c=t.start,p=t.stop,u=t.reset,m=t.addLap;return l?(e="Lap",r=!0,a="Start",s=c):o?(e="Lap",n=m,r=!1,a="Stop",s=p):(e="Reset",n=u,a="Start",s=c),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"lap",onClick:n,disabled:r},e),i.a.createElement("button",{className:a.toLowerCase(),onClick:s},a))}),d=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props,e=t.lap,a=t.lapNum;return i.a.createElement("li",{className:"lap-item"},i.a.createElement("span",null,"Lap ".concat(a)," "),i.a.createElement("span",null,e))}}]),e}(n.Component),f=function(t){return t<10?"0"+t:t.toString()},v=function(t){var e=Math.floor(t/10%100),a=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60);return"".concat(f(n),":").concat(f(a),".").concat(f(e))},E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).state={},a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t,e=this.props,a=e.laps,n=e.firstLapTimeElapsed;return t=0===parseInt(n)?null:i.a.createElement("li",{className:"lap-item"},i.a.createElement("span",null,"Lap ".concat(a.length+1)," "),i.a.createElement("span",null,v(n))),i.a.createElement("div",{style:{height:"25vh"}},i.a.createElement("ul",{className:"lap-list"},t,a.map(function(t,e,a){return i.a.createElement(d,{key:e,lap:t,lapNum:a.length-e})})))}}]),e}(n.Component),b=(a(18),function(){return{initialStart:!0,isRunning:!1,startTime:0,stopTime:0,timeElapsed:0,laps:[],lapStartTime:0,lapTimeElapsed:0}}),S=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).state=b(),a.intervalId=null,a.start=a.start.bind(Object(u.a)(a)),a.stop=a.stop.bind(Object(u.a)(a)),a.reset=a.reset.bind(Object(u.a)(a)),a.addLapToList=a.addLapToList.bind(Object(u.a)(a)),a}return Object(m.a)(e,t),Object(o.a)(e,[{key:"firstStart",value:function(){this.setState({startTime:Date.now(),lapStartTime:Date.now(),initialStart:!1})}},{key:"start",value:function(){var t=this,e=Date.now()-this.state.stopTime;this.state.initialStart?this.firstStart():this.setState({startTime:this.state.startTime+e,lapStartTime:this.state.lapStartTime+e}),this.intervalId=setInterval(function(){t.setState({isRunning:!0,timeElapsed:Date.now()-t.state.startTime,lapTimeElapsed:Date.now()-t.state.lapStartTime})},1)}},{key:"stop",value:function(){clearInterval(this.intervalId),this.setState({isRunning:!1,stopTime:Date.now()})}},{key:"reset",value:function(){this.setState(b())}},{key:"addLapToList",value:function(){this.state.laps.unshift(v(this.state.lapTimeElapsed)),this.setState({lapStartTime:Date.now(),laps:this.state.laps})}},{key:"render",value:function(){var t=this.state,e=t.initialStart,a=t.isRunning;return i.a.createElement("div",{className:"main-stopwatch"},i.a.createElement("h1",{className:"main-header"},"Stopwatch"),i.a.createElement("h1",{className:"main-time"},v(this.state.timeElapsed)),i.a.createElement(h,{initialStart:e,isRunning:a,start:this.start,stop:this.stop,reset:this.reset,addLap:this.addLapToList}),i.a.createElement(E,{laps:this.state.laps,firstLapTimeElapsed:this.state.lapTimeElapsed}))}}]),e}(n.Component);var T=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.aeb92ff1.chunk.js.map