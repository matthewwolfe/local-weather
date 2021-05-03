(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8632:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ee}});var n=t(5893),o=t(7748),a=t(809),i=t.n(a),c=t(2447),l=t(7294),s=t(2318);var u=function(){return(0,n.jsx)(o.Z,{p:5,children:(0,n.jsx)(s.Z,{variant:"h4",children:"Something went wrong. Either the API could not be reached, or permission to access location was not granted."})})},d=t(5477);var f=function(){return(0,n.jsx)(o.Z,{p:10,textAlign:"center",width:1,children:(0,n.jsx)(d.Z,{})})},p=(0,l.createContext)(null),h=(0,l.createContext)(null);var v={getItem:function(e){var r=window.localStorage.getItem(e);return r?JSON.parse(r):null},removeItem:function(e){window.localStorage.removeItem(e)},setItem:function(e,r){window.localStorage.setItem(e,JSON.stringify(r))}};function x(){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){navigator.geolocation.getCurrentPosition((function(r){var t=r.coords;v.setItem("coords",{latitude:t.latitude,longitude:t.longitude}),e(t)}),(function(e){r(e)}),{enableHighAccuracy:!0,maximumAge:0,timeout:5e3})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,r){return g.apply(this,arguments)}function g(){return(g=(0,c.Z)(i().mark((function e(r,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(null),t(null),e.prev=2,e.next=5,x();case 5:n=e.sent,r(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var y=function(e){var r=e.children,t=(0,l.useState)(null),o=t[0],a=t[1],i=(0,l.useState)(null),c=i[0],s=i[1];return(0,l.useEffect)((function(){var e=v.getItem("coords");e?a(e):j(a,s)}),[]),c?(0,n.jsx)(u,{}):o?(0,n.jsx)(p.Provider,{value:{coords:o,refreshCoords:function(){return j(a,s)}},children:r}):(0,n.jsx)(f,{})};var b=function(){return(0,l.useContext)(p)},w=t(5723),C=function(e){return fetch(e).then((function(e){return e.json()}))};var Z=function(e){var r=b().coords;return(0,w.ZP)(function(e,r){var t=r||{},n=t.latitude,o=t.longitude;return"".concat(e,"&geocode=").concat(n,"%2C").concat(o)}(e,r),C)},k="apiKey=6532d6454b8aa370768e63d6ba5a832e",S="https://api.weather.com/v3/wx/forecast",O="".concat(S,"/daily/10day?").concat(k,"&language=en-US&units=e&format=json"),M="".concat(S,"/hourly/10day?").concat(k,"&units=e&language=en-US&format=json"),P="https://locationiq.com/v1/reverse.php?key=".concat("pk.729a226af0a881a329ff8687423f5610","&format=json");var L=function(){var e=b().coords,r=(0,w.ZP)(function(e){var r=e||{},t=r.latitude,n=void 0===t?null:t,o=r.longitude,a=void 0===o?null:o;return"".concat(P,"&lat=").concat(n,"&lon=").concat(a)}(e),C,{onError:function(){v.removeItem("address")},onSuccess:function(e){var r=e.address;v.setItem("address",r)}}),t=r.data,n=r.error;return{data:t,error:n||t&&t.error,loading:!t&&!n}};var T=function(){return(0,l.useContext)(h)};var D=function(){var e=T().hourlyData;return(0,l.useMemo)((function(){return function(e){var r=e.cloudCover,t=e.dayOfWeek,n=e.relativeHumidity,o=e.precipChance,a=e.temperature,i=e.validTimeLocal,c=e.windSpeed,l=e.wxPhraseLong;return{cloudCover:r.slice(0,18),day:t[0],dayOfWeek:t.slice(0,18),precipChance:o.slice(0,18),relativeHumidity:n.slice(0,18),temperature:a.slice(0,18),validTimeLocal:i.slice(0,18),windSpeed:c[0],wxPhraseLong:l[0]}}(e)}),[e])},B=t(282);var H=function(e){var r=e.address,t=e.refreshCoords;return(0,n.jsxs)(o.Z,{display:"flex",flexDirection:["column-reverse","column-reverse","row"],justifyContent:"space-between",mb:6,children:[(0,n.jsx)(o.Z,{display:"flex",flexDirection:["column","row"],textAlign:["center","center","left"],children:(0,n.jsxs)(o.Z,{display:"flex",flexDirection:"column",children:[(0,n.jsxs)(s.Z,{variant:"h3",children:[(0,n.jsx)("span",{style:{fontWeight:200},children:"Weather"})," ",(0,n.jsx)("span",{style:{fontWeight:600},children:"Forecast"})]}),r&&(0,n.jsxs)(s.Z,{variant:"h6",children:[r.city,", ",r.state]})]})}),(0,n.jsx)(o.Z,{mb:[4,4,0],children:(0,n.jsx)(B.Z,{color:"primary",disableElevation:!0,fullWidth:!0,onClick:function(){return t()},variant:"outlined",children:"Refresh Location"})})]})};var _=function(){var e=b().refreshCoords,r=L().data;if(!r)return null;var t=r.address;return t?(0,n.jsx)(H,{address:t,refreshCoords:e}):null};var A=function(e){var r=e.day,t=e.narrative,a=e.temperatureMax,i=e.temperatureMin;return(0,n.jsxs)(o.Z,{display:"flex",pt:6,flexDirection:["column","column","row"],children:[(0,n.jsxs)(o.Z,{width:[1,1,2/3],children:[(0,n.jsx)(s.Z,{variant:"body1",children:r}),(0,n.jsx)(s.Z,{variant:"body2",children:t})]}),(0,n.jsxs)(o.Z,{display:["flex","flex","box"],mt:[4,4,0],width:[1,1,1/3],children:[(0,n.jsx)(o.Z,{width:[1,1,.5],textAlign:["left","left","center"],children:a&&(0,n.jsxs)(s.Z,{variant:"body1",children:[a,"\xb0F"]})}),(0,n.jsx)(o.Z,{width:[1,1,.5],textAlign:["left","left","center"],children:(0,n.jsxs)(s.Z,{variant:"body1",children:[i,"\xb0F"]})})]})]})};var E=function(e){var r=e.dayOfWeek,t=e.narrative,o=e.temperatureMax,a=e.temperatureMin;return(0,n.jsx)(n.Fragment,{children:r.slice(0,8).map((function(e,r){return(0,n.jsx)(A,{day:e,narrative:t[r],temperatureMax:o[r],temperatureMin:a[r]},r)}))})};var I=function(){var e=T().dailyData,r=e.dayOfWeek,t=e.narrative,o=e.temperatureMax,a=e.temperatureMin;return(0,n.jsx)(E,{dayOfWeek:r,narrative:t,temperatureMax:o,temperatureMin:a})};var W=function(){return(0,n.jsxs)(o.Z,{p:8,width:[1,1,.6],children:[(0,n.jsx)(_,{}),(0,n.jsx)(I,{})]})},N=t(6265),U=t(8882),F=t(1423),R=t(871);var z=function(e){var r=e.cloudCover,t=e.precipChance,o=e.relativeHumidity,a=e.validTimeLocal,i=(0,l.useMemo)((function(){return a.map((function(e){return new Date(e).toLocaleString("en-US",{hour:"numeric",minute:"2-digit"})}))}),[a]);return(0,n.jsx)(R.x1,{type:"line",data:{labels:i,datasets:[{backgroundColor:"#eeeeee",borderColor:"#eeeeee",data:r,fill:!1,label:"Cloud Cover",pointBackgroundColor:"#eeeeee",pointBorderColor:"#eeeeee",pointHoverBackgroundColor:"#eeeeee",pointHoverBorderColor:"#eeeeee",showLine:!0},{backgroundColor:"#55bae7",borderColor:"#55bae7",data:t,fill:!1,label:"Precipitation",pointBackgroundColor:"#55bae7",pointBorderColor:"#55bae7",pointHoverBackgroundColor:"#55bae7",pointHoverBorderColor:"#55bae7",showLine:!0},{backgroundColor:"#556be7",borderColor:"#556be7",data:o,fill:!1,label:"Humidity",pointBackgroundColor:"#556be7",pointBorderColor:"#556be7",pointHoverBackgroundColor:"#556be7",pointHoverBorderColor:"#556be7",showLine:!0}]},options:{maintainAspectRatio:!1,scales:{y:{suggestedMin:0,suggestedMax:100,ticks:{stepSize:10}}}}})},J=t(1385);var X,q=function(e){var r=e.temperature,t=e.validTimeLocal,o=(0,l.useMemo)((function(){return t.map((function(e){return new Date(e).toLocaleString("en-US",{hour:"numeric",minute:"2-digit"})}))}),[t]);return(0,n.jsx)(R.x1,{type:"line",data:{labels:o,datasets:[{backgroundColor:"#eeeeee",borderColor:"#eeeeee",data:r,fill:!1,label:"Temperature",pointBackgroundColor:"#eeeeee",pointBorderColor:"#eeeeee",pointHoverBackgroundColor:"#eeeeee",pointHoverBorderColor:"#eeeeee",showLine:!0}]},options:{maintainAspectRatio:!1,scales:{y:{suggestedMin:Math.min.apply(Math,(0,J.Z)(r))-5,suggestedMax:Math.max.apply(Math,(0,J.Z)(r))+5,ticks:{stepSize:2}}}}})};!function(e){e.Conditions="conditions",e.Temperature="temperature"}(X||(X={}));var K=function(e){var r=e.cloudCover,t=e.precipChance,a=e.relativeHumidity,i=e.selectedTab,c=e.setSelectedTab,l=e.temperature,u=e.validTimeLocal,d=e.windSpeed,f=e.wxPhraseLong,p=l[0];return(0,n.jsxs)(o.Z,{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",children:[(0,n.jsxs)(o.Z,{mt:10,children:[(0,n.jsxs)(o.Z,{textAlign:"center",mb:5,children:[(0,n.jsx)(s.Z,{variant:"h4",children:"Today"}),(0,n.jsx)(s.Z,{variant:"subtitle1",children:(new Date).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),(0,n.jsxs)(o.Z,{textAlign:"center",children:[(0,n.jsxs)(s.Z,{variant:"h1",children:[p,"\xb0"]}),(0,n.jsx)(s.Z,{variant:"h6",children:f}),(0,n.jsxs)(s.Z,{variant:"body2",children:["Wind: ",d,"mph"]})]})]}),(0,n.jsx)(o.Z,{display:"flex",justifyContent:"center",width:1,children:(0,n.jsxs)(U.Z,{value:i,onChange:function(e,r){c(r)},children:[(0,n.jsx)(F.Z,{label:"Conditions",value:"conditions"}),(0,n.jsx)(F.Z,{label:"Temperature",value:"temperature"})]})}),(0,n.jsxs)(o.Z,{height:"40vh",width:1,children:[i===X.Conditions&&(0,n.jsx)(z,{cloudCover:r,precipChance:t,relativeHumidity:a,validTimeLocal:u}),i===X.Temperature&&(0,n.jsx)(q,{temperature:l,validTimeLocal:u})]})]})};function G(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var Q=function(){var e=(0,l.useState)(X.Conditions),r=e[0],t=e[1],o=D();return(0,n.jsx)(K,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?G(Object(t),!0).forEach((function(r){(0,N.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({selectedTab:r,setSelectedTab:t},o))};var V=function(){return(0,n.jsx)(o.Z,{bgcolor:"#0e092b",color:"#fff",height:"100vh",p:8,width:[1,1,.4],children:(0,n.jsx)(Q,{})})};var Y=function(e){var r=e.children,t=Z(O),o=t.data,a=t.error,i=Z(M),c=i.data,l=i.error;return a||l?(0,n.jsx)(u,{}):o&&c?(0,n.jsx)(h.Provider,{value:{dailyData:o,hourlyData:c},children:r}):(0,n.jsx)(f,{})};var $=function(){return(0,n.jsx)(y,{children:(0,n.jsx)(Y,{children:(0,n.jsxs)(o.Z,{display:"flex",flexDirection:["column-reverse","column-reverse","row"],children:[(0,n.jsx)(W,{}),(0,n.jsx)(V,{})]})})})};var ee=function(){return(0,n.jsx)($,{})}},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8632)}])}},function(e){e.O(0,[774,570,62,809,161],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);