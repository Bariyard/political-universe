(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{6866:function(t,e,a){"use strict";a.r(e);var r=a(5893),s=a(3640),i=a(7294),o=a(7229);e.default=t=>{let{step:e}=t;const[a,n]=(0,i.useState)([]),l=(0,i.useRef)(null),c=(0,i.useCallback)((async()=>{const t=await s.gyn("".concat("https://wevisdemo.github.io").concat("/political-universe","/data/analysed/viz4-[format2]sum-all-positive-negative-event.csv"),s.rA8);let e=[],a=[];t.map((t=>{let{year:r,positive:s,negative:i}=t;e.push({x:r,y:s}),a.push({x:r,y:i})})),n([{name:"positive",data:e},{name:"negative",data:a}])}),[]);(0,i.useEffect)((()=>{c()}),[c]);const[h,f]=(0,i.useState)({chart:{type:"area",height:385,toolbar:{show:!1},selection:{enabled:!1},parentHeightOffset:0,zoom:{enabled:!1},animations:{enabled:!0,speed:432,dynamicAnimation:{enabled:!0,speed:432}},events:{updated:(t,e)=>{console.log(e);const a=s.Ys("#apexcharts".concat(e.globals.chartID));Number(a.select(".apexcharts-inner").attr("transform").split(",")[1].replace(")",""));a.select(".apexcharts-xaxis").attr("transform","translate(0, ".concat(.5*(e.globals.gridHeight+e.globals.xAxisLabelsHeight)-3,")")),a.select(".apexcharts-inner").append("use").attr("xlink:href","#".concat(a.select(".apexcharts-xaxis").attr("id"))),a.selectAll(".apexcharts-xaxis-label").nodes().map((t=>{const e=s.Ys(t),r=a.select(".apexcharts-xaxis-texts-g").insert("g","text").attr("transform","translate(0,0)");r.append("rect").attr("transform","translate(-9,0)").attr("x",e.attr("x")).attr("y",Number(e.attr("y"))-12).attr("rx","2").attr("ry","2").attr("width","".concat(18)).attr("height","".concat(15)).attr("fill","#FFFFFF"),r.append("use").attr("xlink:href","#".concat(e.attr("id")))})),a.select(".apexcharts-xaxis").insert("line","g").attr("class","xAxis dashed").style("stroke","white").style("stroke-width","2px").attr("class","dashed").attr("x1",0).attr("y1","-12").attr("x2","".concat(e.globals.gridWidth)).attr("y2","-12");const r=s.BYU([54,65],[e.globals.translateXAxisX,e.globals.gridWidth]),i=a.select(".apexcharts-inner");i.append("line").style("stroke","white").style("stroke-width","2px").attr("class","dashed").attr("x1",r(54)).attr("y1",0).attr("x2",r(54)).attr("y2",e.globals.gridHeight),i.append("line").style("stroke","white").style("stroke-width","2px").attr("class","dashed").attr("x1",r(57)).attr("y1",0).attr("x2",r(57)).attr("y2",e.globals.gridHeight),i.append("svg:image").attr("xlink:href","".concat("https://wevisdemo.github.io","/political-universe/design_assets/03_main_viz/pm_01_label.svg")).attr("width",49).attr("height",94).attr("x",r(54)-24.5).attr("y",-70.5),i.append("svg:image").attr("xlink:href","".concat("https://wevisdemo.github.io","/political-universe/design_assets/03_main_viz/pm_02_label.svg")).attr("width",49).attr("height",94).attr("x",r(57)-25.5).attr("y",-70.5),i.append("svg:image").attr("xlink:href","".concat("https://wevisdemo.github.io","/political-universe/design_assets/03_main_viz/pm_01-range.svg")).attr("width",73).attr("height",48).attr("x",r(55)-36.5).attr("y",.5*e.globals.xAxisLabelsHeight),i.append("svg:image").attr("xlink:href","".concat("https://wevisdemo.github.io","/political-universe/design_assets/03_main_viz/pm_02-range.svg")).attr("width",r(65)-r(57)).attr("height",24).attr("x",r(56.1)).attr("y",e.globals.xAxisLabelsHeight);const o=a.select(".apexcharts-svg");o.append("svg:image").attr("xlink:href","".concat("https://wevisdemo.github.io","/political-universe/design_assets/03_main_viz/legend.svg")).attr("width",56).attr("height",176).attr("x",.5*e.globals.translateY-28).attr("y",e.globals.translateX+.5*(e.globals.gridHeight-176)),o.append("line").style("stroke","white").style("stroke-width","2px").attr("class","dashed").attr("x1",5).attr("y1",e.globals.translateX+.5*e.globals.gridHeight).attr("x2",e.globals.translateY).attr("y2",e.globals.translateX+.5*e.globals.gridHeight)}}},noData:{text:"Loading..."},grid:{show:!1,padding:{top:60,left:100,bottom:20,right:10}},colors:["#60C1AF","#F92D46"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},fill:{type:"solid",opacity:1},legend:{show:!1,position:"top",horizontalAlign:"left"},xaxis:{position:"top",type:"category",categories:["54","55","56","57","58","59","60","61","62","63","64","65"],labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,showDuplicates:!1,trim:!1,minHeight:void 0,maxHeight:120,style:{fontSize:"12px",fontFamily:"IBM Plex Sans Thai, sans-serif",fontWeight:700},offsetX:0,offsetY:3,format:void 0,formatter:t=>String(t-2500)},axisBorder:{show:!0,color:"white",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"white",height:6,offsetX:0,offsetY:0},group:{groups:[],style:{colors:["white"],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,formatter:void 0,offsetY:0}},yaxis:{min:-500,max:500,opposite:!0,axisBorder:{show:!0,color:"white",offsetX:0,offsetY:0},axisTicks:{show:!0,color:"white",width:5,offsetX:0,offsetY:0},labels:{show:!0,align:"left",minWidth:0,maxWidth:160,style:{colors:["white"],fontSize:"12px",fontFamily:"IBM Plex Sans Thai, sans-serif",fontWeight:700,cssClass:"apexcharts-yaxis-label"},offsetX:-10,offsetY:0,rotate:0,formatter:t=>String(Math.abs(t))},title:{text:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c",rotate:-90,offsetX:-5,offsetY:0,style:{color:"white",fontSize:"12px",fontFamily:"IBM Plex Sans Thai, sans-serif",fontWeight:700,cssClass:"apexcharts-yaxis-title"}}}});return(0,i.useEffect)((()=>{switch(e){case 0:f((t=>({...t,colors:["#FFFFFF15","#FFFFFF15"]})));break;case 1:f((t=>({...t,colors:["#ffffffd1","#FFFFFFd1"]})));break;case 2:f((t=>({...t,colors:["#60C1AF","#F92D46"]})));break;case 5:f((t=>({...t,colors:["#FFFFFF15","#FFFFFF15","#60C1AF","#F92D46"]})))}}),[e]),(0,r.jsx)("div",{id:"chart",className:"w-[600px] my-auto",children:(0,r.jsx)(o.Z,{id:"apex-chart",type:"area",height:400,options:h,series:a,ref:l})})}},2703:function(t,e,a){"use strict";var r=a(414);function s(){}function i(){}i.resetWarningCache=s,t.exports=function(){function t(t,e,a,s,i,o){if(o!==r){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:s};return a.PropTypes=a,a}},5697:function(t,e,a){t.exports=a(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7229:function(t,e,a){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},i=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),o=h(a(5927)),n=a(7294),l=h(n),c=h(a(5697));function h(t){return t&&t.__esModule?t:{default:t}}window.ApexCharts=o.default;var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.default.createRef?a.chartRef=l.default.createRef():a.setRef=function(t){return a.chartRef=t},a.chart=null,a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,n.Component),i(t,[{key:"render",value:function(){var t=this.props,e=(t.type,t.height,t.width,t.series,t.options,function(t,e){var a={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r]);return a}(t,["type","height","width","series","options"]));return l.default.createElement("div",s({ref:l.default.createRef?this.chartRef:this.setRef},e))}},{key:"componentDidMount",value:function(){var t=l.default.createRef?this.chartRef.current:this.chartRef;this.chart=new o.default(t,this.getConfig()),this.chart.render()}},{key:"getConfig",value:function(){var t=this.props,e=t.type,a=t.height,r=t.width,s=t.series,i=t.options,o={chart:{type:e,height:a,width:r},series:s};return this.extend(i,o)}},{key:"isObject",value:function(t){return t&&"object"===(void 0===t?"undefined":r(t))&&!Array.isArray(t)&&null!=t}},{key:"extend",value:function(t,e){var a=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),a=1;a<arguments.length;a++){var r=arguments[a];if(null!=r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e});var r=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s){a.isObject(e[s])&&s in t?r[s]=a.extend(t[s],e[s]):Object.assign(r,function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({},s,e[s]))})),r}},{key:"componentDidUpdate",value:function(t){if(!this.chart)return null;var e=this.props,a=e.options,r=e.series,s=e.height,i=e.width,o=JSON.stringify(t.options),n=JSON.stringify(t.series),l=JSON.stringify(a),c=JSON.stringify(r);o===l&&n===c&&s===t.height&&i===t.width||(n===c?this.chart.updateOptions(this.getConfig()):o===l&&s===t.height&&i===t.width?this.chart.updateSeries(r):this.chart.updateOptions(this.getConfig()))}},{key:"componentWillUnmount",value:function(){this.chart&&"function"==typeof this.chart.destroy&&this.chart.destroy()}}]),t}();(e.Z=f).propTypes={type:c.default.string.isRequired,width:c.default.any,height:c.default.any,series:c.default.array.isRequired,options:c.default.object.isRequired},f.defaultProps={type:"line",width:"100%",height:"auto"}}}]);