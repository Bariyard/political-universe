(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{7877:function(e,t,o){"use strict";o.r(t);var r=o(5893),n=o(7294),i=o(7229);let a=e=>{let{series:t}=e,[o,a]=(0,n.useState)(!1),[s,f]=(0,n.useState)({chart:{type:"area",group:"category",height:200,toolbar:{show:!1},selection:{enabled:!1},parentHeightOffset:0,zoom:{enabled:!1},animations:{enabled:!0,speed:432,dynamicAnimation:{enabled:!0,speed:432}},events:{}},noData:{text:"Loading..."},grid:{show:!1},colors:["#60C1AF","#F92D46"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},fill:{type:"solid",opacity:1},legend:{show:!1,position:"top",horizontalAlign:"left"},xaxis:{position:"top",type:"category",categories:["54","55","56","57","58","59","60","61","62","63","64","65"],labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,showDuplicates:!1,trim:!1,minHeight:void 0,maxHeight:120,style:{fontSize:"12px",fontFamily:"IBM Plex Sans Thai, sans-serif",fontWeight:700},offsetX:0,offsetY:3,format:void 0,formatter:e=>String(e-2500)},axisBorder:{show:!0,color:"white",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"white",height:6,offsetX:0,offsetY:0},group:{groups:[],style:{colors:["white"],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,formatter:void 0,offsetY:0}},yaxis:{show:!1}});return(0,r.jsx)("div",{id:"chart-box4",className:"w-[600px] my-auto",children:(0,r.jsx)(i.Z,{id:"apex-chart-box4",height:130,type:"area",options:s,series:t})})};t.default=a},2703:function(e,t,o){"use strict";var r=o(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,i,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return o.PropTypes=o,o}},5697:function(e,t,o){e.exports=o(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7229:function(e,t,o){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=u(o(5927)),s=o(7294),f=u(s),c=u(o(5697));function u(e){return e&&e.__esModule?e:{default:e}}window.ApexCharts=a.default;var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var o=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return f.default.createRef?o.chartRef=f.default.createRef():o.setRef=function(e){return o.chartRef=e},o.chart=null,o}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(e,s.Component),i(e,[{key:"render",value:function(){var e=this.props,t=(e.type,e.height,e.width,e.series,e.options,function(e,t){var o={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}(e,["type","height","width","series","options"]));return f.default.createElement("div",n({ref:f.default.createRef?this.chartRef:this.setRef},t))}},{key:"componentDidMount",value:function(){var e=f.default.createRef?this.chartRef.current:this.chartRef;this.chart=new a.default(e,this.getConfig()),this.chart.render()}},{key:"getConfig",value:function(){var e=this.props,t=e.type,o=e.height,r=e.width,n=e.series,i=e.options;return this.extend(i,{chart:{type:t,height:o,width:r},series:n})}},{key:"isObject",value:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)&&null!=e}},{key:"extend",value:function(e,t){var o=this;"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var t=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}return t});var r=Object.assign({},e);return this.isObject(e)&&this.isObject(t)&&Object.keys(t).forEach(function(n){var i,a;o.isObject(t[n])&&n in e?r[n]=o.extend(e[n],t[n]):Object.assign(r,(i={},a=t[n],n in i?Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[n]=a,i))}),r}},{key:"componentDidUpdate",value:function(e){if(!this.chart)return null;var t=this.props,o=t.options,r=t.series,n=t.height,i=t.width,a=JSON.stringify(e.options),s=JSON.stringify(e.series),f=JSON.stringify(o),c=JSON.stringify(r);a===f&&s===c&&n===e.height&&i===e.width||(s===c?this.chart.updateOptions(this.getConfig()):a===f&&n===e.height&&i===e.width?this.chart.updateSeries(r):this.chart.updateOptions(this.getConfig()))}},{key:"componentWillUnmount",value:function(){this.chart&&"function"==typeof this.chart.destroy&&this.chart.destroy()}}]),e}();(t.Z=l).propTypes={type:c.default.string.isRequired,width:c.default.any,height:c.default.any,series:c.default.array.isRequired,options:c.default.object.isRequired},l.defaultProps={type:"line",width:"100%",height:"auto"}}}]);