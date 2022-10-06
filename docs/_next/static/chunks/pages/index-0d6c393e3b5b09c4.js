(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4945:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4854)}])},4854:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return $}});var t=n(1527),o=n(896),i=n(7135),a=n(1962),l=n(4254),c=n(959),s=n(8815),u=n(234);var d=function(){return(0,t.jsx)(s.Z,{p:5,children:(0,t.jsx)(u.Z,{level:4,children:"Something went wrong. Either the API could not be reached, or permission to access location was not granted."})})},h=(0,c.createContext)(null),p=(0,c.createContext)(null);var f={getItem:function(e){var r=window.localStorage.getItem(e);return r?JSON.parse(r):null},removeItem:function(e){window.localStorage.removeItem(e)},setItem:function(e,r){window.localStorage.setItem(e,JSON.stringify(r))}};function v(){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((function(){return(0,l.__generator)(this,(function(e){return[2,new Promise((function(e,r){navigator.geolocation.getCurrentPosition((function(r){var n=r.coords;f.setItem("coords",{latitude:n.latitude,longitude:n.longitude}),e(n)}),(function(e){r(e)}),{enableHighAccuracy:!0,maximumAge:0,timeout:5e3})}))]}))}))).apply(this,arguments)}function m(e,r){return j.apply(this,arguments)}function j(){return(j=(0,i.Z)((function(e,r){var n,t;return(0,l.__generator)(this,(function(o){switch(o.label){case 0:e(null),r(null),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,v()];case 2:return n=o.sent(),e(n),[3,4];case 3:return t=o.sent(),(0,a.Z)(t,Error)&&r(t),[3,4];case 4:return[2]}}))}))).apply(this,arguments)}var C=function(e){var r=e.children,n=(0,c.useState)(null),o=n[0],i=n[1],a=(0,c.useState)(null),l=a[0],s=a[1];return(0,c.useEffect)((function(){var e=f.getItem("coords");e?i(e):m(i,s)}),[]),l?(0,t.jsx)(d,{}):o?(0,t.jsx)(h.Provider,{value:{coords:o,refreshCoords:function(){return m(i,s)}},children:r}):null},g=n(9426);var b=function(){return(0,c.useContext)(h)},y=n(6747),Z=function(e){return fetch(e).then((function(e){return e.json()}))};var w=function(e){var r=b().coords;return(0,y.ZP)(function(e,r){var n=r||{},t=n.latitude,o=n.longitude;return"".concat(e,"&geocode=").concat(t,"%2C").concat(o)}(e,r),Z)},k="apiKey=6532d6454b8aa370768e63d6ba5a832e",S="https://api.weather.com/v3/wx/forecast",T="".concat(S,"/daily/10day?").concat(k,"&language=en-US&units=e&format=json"),M="".concat(S,"/hourly/10day?").concat(k,"&units=e&language=en-US&format=json"),L="https://locationiq.com/v1/reverse.php?key=".concat("pk.729a226af0a881a329ff8687423f5610","&format=json");var B=function(){var e=b().coords,r=(0,y.ZP)(function(e){var r=e||{},n=r.latitude,t=void 0===n?null:n,o=r.longitude,i=void 0===o?null:o;return"".concat(L,"&lat=").concat(t,"&lon=").concat(i)}(e),Z,{onError:function(){f.removeItem("address")},onSuccess:function(e){var r=e.address;f.setItem("address",r)}}),n=r.data,t=r.error;return{data:n,error:t||n&&n.error,loading:!n&&!t}};var _=function(){return(0,c.useContext)(p)};var H=function(){var e=_().hourlyData;return(0,c.useMemo)((function(){return function(e){var r=e.cloudCover,n=e.dayOfWeek,t=e.relativeHumidity,o=e.precipChance,i=e.temperature,a=e.validTimeLocal,l=e.windSpeed,c=e.wxPhraseLong;return{cloudCover:r.slice(0,18),day:n[0],dayOfWeek:n.slice(0,18),precipChance:o.slice(0,18),relativeHumidity:t.slice(0,18),temperature:i.slice(0,18),validTimeLocal:a.slice(0,18),windSpeed:l[0],wxPhraseLong:c[0]}}(e)}),[e])},P=n(347);var D=function(e){var r=e.address,n=e.refreshCoords;return(0,t.jsxs)(g.Z,{justifyContent:"space-between",mb:6,children:[(0,t.jsxs)(g.Z,{flexDirection:"column",children:[(0,t.jsxs)(u.Z,{level:3,children:[(0,t.jsx)("span",{style:{fontWeight:200},children:"Weather"})," ",(0,t.jsx)("span",{style:{fontWeight:600},children:"Forecast"})]}),r&&(0,t.jsxs)(u.Z,{level:6,children:[r.city,", ",r.state]})]}),(0,t.jsx)(g.Z,{mb:4,children:(0,t.jsx)(P.Z,{color:"primary",onClick:function(){return n()},variant:"outlined",children:"Refresh Location"})})]})};var I=function(){var e=b().refreshCoords,r=B().data;if(!r)return null;var n=r.address;return n?(0,t.jsx)(D,{address:n,refreshCoords:e}):null},E=n(6276);var O=function(e){var r=e.day,n=e.narrative,i=e.temperatureMax,a=e.temperatureMin;return(0,t.jsxs)(o.Z,{style:{paddingTop:24},children:[(0,t.jsx)(o.Z.Col,{span:{mobile:12,tablet:12,desktop:8},children:(0,t.jsxs)(g.Z,{flexDirection:"column",children:[(0,t.jsx)(E.Z,{children:r}),(0,t.jsx)(E.Z,{children:n})]})}),(0,t.jsx)(o.Z.Col,{span:{mobile:12,tablet:12,desktop:4},children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(o.Z.Col,{span:6,children:(0,t.jsx)(g.Z,{justifyContent:"center",children:i&&(0,t.jsxs)(E.Z,{children:[i,"\xb0F"]})})}),(0,t.jsx)(o.Z.Col,{span:6,children:(0,t.jsx)(g.Z,{justifyContent:"flex-end",children:(0,t.jsxs)(E.Z,{children:[a,"\xb0F"]})})})]})})]})};var W=function(e){var r=e.dayOfWeek,n=e.narrative,o=e.temperatureMax,i=e.temperatureMin;return(0,t.jsx)(t.Fragment,{children:r.slice(0,8).map((function(e,r){return(0,t.jsx)(O,{day:e,narrative:n[r],temperatureMax:o[r],temperatureMin:i[r]},r)}))})};var A=function(){var e=_().dailyData,r=e.dayOfWeek,n=e.narrative,o=e.temperatureMax,i=e.temperatureMin;return(0,t.jsx)(W,{dayOfWeek:r,narrative:n,temperatureMax:o,temperatureMin:i})};var N=function(){return(0,t.jsx)(o.Z.Col,{span:{mobile:12,tablet:12,desktop:7},children:(0,t.jsxs)(g.Z,{flexDirection:"column",p:8,children:[(0,t.jsx)(I,{}),(0,t.jsx)(A,{})]})})},U=n(9447),F=n(8712),R=n(2530);var z=function(e){var r=e.cloudCover,n=e.precipChance,o=e.relativeHumidity,i=e.validTimeLocal,a=(0,c.useMemo)((function(){return i.map((function(e){return new Date(e).toLocaleString("en-US",{hour:"numeric",minute:"2-digit"})}))}),[i]);return(0,t.jsx)(R.x1,{data:{labels:a,datasets:[{backgroundColor:"#eeeeee",borderColor:"#eeeeee",data:r,fill:!1,label:"Cloud Cover",pointBackgroundColor:"#eeeeee",pointBorderColor:"#eeeeee",pointHoverBackgroundColor:"#eeeeee",pointHoverBorderColor:"#eeeeee",showLine:!0},{backgroundColor:"#55bae7",borderColor:"#55bae7",data:n,fill:!1,label:"Precipitation",pointBackgroundColor:"#55bae7",pointBorderColor:"#55bae7",pointHoverBackgroundColor:"#55bae7",pointHoverBorderColor:"#55bae7",showLine:!0},{backgroundColor:"#556be7",borderColor:"#556be7",data:o,fill:!1,label:"Humidity",pointBackgroundColor:"#556be7",pointBorderColor:"#556be7",pointHoverBackgroundColor:"#556be7",pointHoverBorderColor:"#556be7",showLine:!0}]},options:{maintainAspectRatio:!1,scales:{y:{suggestedMin:0,suggestedMax:100,ticks:{stepSize:10}}}}})},J=n(4417);var X,q=function(e){var r,n,o=e.temperature,i=e.validTimeLocal,a=(0,c.useMemo)((function(){return i.map((function(e){return new Date(e).toLocaleString("en-US",{hour:"numeric",minute:"2-digit"})}))}),[i]);return(0,t.jsx)(R.x1,{data:{labels:a,datasets:[{backgroundColor:"#eeeeee",borderColor:"#eeeeee",data:o,fill:!1,label:"Temperature",pointBackgroundColor:"#eeeeee",pointBorderColor:"#eeeeee",pointHoverBackgroundColor:"#eeeeee",pointHoverBorderColor:"#eeeeee",showLine:!0}]},options:{maintainAspectRatio:!1,scales:{y:{suggestedMin:(r=Math).min.apply(r,(0,J.Z)(o))-5,suggestedMax:(n=Math).max.apply(n,(0,J.Z)(o))+5,ticks:{stepSize:2}}}}})};!function(e){e.Conditions="conditions",e.Temperature="temperature"}(X||(X={}));var K=function(e){var r=e.cloudCover,n=e.precipChance,o=e.relativeHumidity,i=e.selectedTab,a=e.setSelectedTab,l=e.temperature,c=e.validTimeLocal,d=e.windSpeed,h=e.wxPhraseLong,p=l[0];return(0,t.jsxs)(g.Z,{flexDirection:"column",justifyContent:"space-between",p:8,style:{height:"calc(100% - 64px)"},children:[(0,t.jsxs)(s.Z,{mt:10,children:[(0,t.jsxs)(s.Z,{mb:5,style:{textAlign:"center"},children:[(0,t.jsx)(u.Z,{color:"white",level:4,children:"Today"}),(0,t.jsx)(E.Z,{color:"white",children:(new Date).toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),(0,t.jsxs)(s.Z,{style:{textAlign:"center"},children:[(0,t.jsxs)(u.Z,{color:"white",level:1,children:[p,"\xb0"]}),(0,t.jsx)(u.Z,{color:"white",level:6,children:h}),(0,t.jsxs)(E.Z,{color:"white",children:["Wind: ",d,"mph"]})]})]}),(0,t.jsx)(g.Z,{justifyContent:"center",style:{width:"100%"},children:(0,t.jsxs)(F.Z,{children:[(0,t.jsx)(F.Z.Tab,{active:i===X.Conditions,onClick:function(){return a(X.Conditions)},children:(0,t.jsx)(E.Z,{color:"white",children:"Conditions"})}),(0,t.jsx)(F.Z.Tab,{active:i===X.Temperature,onClick:function(){return a(X.Temperature)},children:(0,t.jsx)(E.Z,{color:"white",children:"Temperature"})})]})}),(0,t.jsxs)(s.Z,{style:{height:"40vh",width:"100%"},children:[i===X.Conditions&&(0,t.jsx)(z,{cloudCover:r,precipChance:n,relativeHumidity:o,validTimeLocal:c}),i===X.Temperature&&(0,t.jsx)(q,{temperature:l,validTimeLocal:c})]})]})};var G=function(){var e=(0,c.useState)(X.Conditions),r=e[0],n=e[1],o=H();return(0,t.jsx)(K,(0,U.Z)({selectedTab:r,setSelectedTab:n},o))};var Q=function(){return(0,t.jsx)(o.Z.Col,{span:{mobile:12,tablet:12,desktop:5},children:(0,t.jsx)(s.Z,{style:{backgroundColor:"#0e092b",color:"#fff",height:"100vh"},children:(0,t.jsx)(G,{})})})};var V=function(e){var r=e.children,n=w(T),o=n.data,i=n.error,a=w(M),l=a.data,c=a.error;return i||c?(0,t.jsx)(d,{}):o&&l?(0,t.jsx)(p.Provider,{value:{dailyData:o,hourlyData:l},children:r}):null};var Y=function(){return(0,t.jsx)(C,{children:(0,t.jsx)(V,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(N,{}),(0,t.jsx)(Q,{})]})})})};var $=function(){return(0,t.jsx)(Y,{})}}},function(e){e.O(0,[108,774,888,179],(function(){return r=4945,e(e.s=r);var r}));var r=e.O();_N_E=r}]);