parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Sv+0":[function(require,module,exports) {
!function(){var t=d3.scaleLinear().domain([0,100]).range([0,400]),n=d3.scaleOrdinal().range(["#e5f5f9","#99d8c9","#2ca25f"]);d3.select("#chart2").attr("width",400).attr("height",200).selectAll("rect").data([{name:"Blahstia",continent:"North America",gdp:40},{name:"Bleers",continent:"Europe",gdp:12},{name:"Blolo",continent:"Antarctica",gdp:35},{name:"Blurben",continent:"North America",gdp:90}]).attr("width",function(n){return t(n.gdp)}).attr("height",50).attr("fill",function(t){return n(t.continent)})}();
},{}]},{},["Sv+0"], null)
//# sourceMappingURL=/d3-project/02-chart.43eabdb7.map