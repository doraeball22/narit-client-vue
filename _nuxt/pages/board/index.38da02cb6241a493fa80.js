webpackJsonp([29],{BG9Y:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"white-wrapper"},[o("div",{staticClass:"content-wrapper"},[o("h2",[e._v("เลือกคณะกรรมการ")]),o("div",{staticClass:"row"},[o("input",{staticClass:"narit-input width-70",attrs:{type:"text"}}),o("nuxt-link",{staticClass:"left-auto",attrs:{to:"/board/create"}},[o("button",{staticClass:"primary-button"},[e._v("เพิ่มคณะกรรมการ")])])],1),o("div",{staticClass:"row"},[o("table",{staticClass:"narit-table"},[e._m(0),o("tbody",e._l(e.mockData,function(t,r){return o("tr",{key:r},[o("td",[e._v(e._s(t.name))]),o("td",[o("ion-icon",{attrs:{name:"eye"}})],1),o("td",[o("nuxt-link",{attrs:{to:t.urlTo}},[o("ion-icon",{attrs:{name:"create"}})],1)],1)])}))])])])])};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("ชื่อคณะ")]),t("th",[this._v("รายนามคณะกรรมการ")]),t("th",[this._v("แก้ไข")])])])}]};t.a=a},LEoA:function(e,t,o){"use strict";t.a={layout:"sidebarMain",data:function(){return{mockData:[{name:"คณะกรรมการสถาบันวิจัยดาราศาสตร์แห่งชาติ",urlTo:"/board/000001"},{name:"คณะกรรมการองค์การดาราศาสตร์",urlTo:"/board/000001"}]}}}},"Q/rQ":function(e,t,o){(e.exports=o("FZ+f")(!1)).push([e.i,'.white-wrapper[data-v-37e83c00]{width:100%;min-height:100vh;background-color:#fff}.grey-wrapper[data-v-37e83c00]{min-width:100%;min-height:100vh;background-color:#eee}.content-wrapper[data-v-37e83c00]{min-height:100vh;padding:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.yellow-button[data-v-37e83c00]{background-color:#eeb719;color:#fff;min-width:200px;height:60px;border:none;border-radius:3px;font-size:16px;cursor:pointer}.yellow-button[data-v-37e83c00]:disabled{cursor:no-drop;background-color:#eee}.yellow-button[data-v-37e83c00]:disabled:hover{background-color:#ddac19}.yellow-button[data-v-37e83c00]:hover{background-color:green}.primary-button[data-v-37e83c00]{background-color:#5481e6;color:#fff;min-width:200px;height:60px;border:none;border-radius:3px;font-size:16px;cursor:pointer}.primary-button[data-v-37e83c00]:disabled{cursor:no-drop;background-color:#eee}.primary-button[data-v-37e83c00]:disabled:hover{background-color:#eee}.primary-button[data-v-37e83c00]:hover{background-color:#426fd4}.success-button[data-v-37e83c00]{background-color:#98cb4a;color:#fff;min-width:200px;height:60px;border:none;border-radius:3px;font-size:16px;cursor:pointer}.success-button[data-v-37e83c00]:disabled{cursor:no-drop;background-color:#eee}.success-button[data-v-37e83c00]:disabled:hover{background-color:#eee}.success-button[data-v-37e83c00]:hover{background-color:green}.white-button[data-v-37e83c00]{background-color:#fff;color:#5481e6;min-width:200px;height:60px;border:1px solid #5481e6;border-radius:3px;font-size:16px;cursor:pointer}.white-button[data-v-37e83c00]:disabled{cursor:no-drop;background-color:#eee}.white-button[data-v-37e83c00]:disabled:hover,.white-button[data-v-37e83c00]:hover{background-color:#eee}.debug[data-v-37e83c00]{position:fixed;right:100px;top:10px;background-color:#eee;border:1px solid #969696;color:#000;min-height:800px;width:300px;padding:20px}.narit-input[data-v-37e83c00]{height:48px;width:100%;border:1px solid #969696;border-radius:3px;padding:10px;font-size:16px}.narit-input[data-v-37e83c00]:disabled{background-color:inherit;border:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}.file-wrapper[data-v-37e83c00]{position:relative;cursor:pointer}input[type=file][data-v-37e83c00]{opacity:0;position:absolute;width:100%;height:100%;cursor:pointer}.checkbox-wrapper[data-v-37e83c00]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.checkbox-wrapper .container[data-v-37e83c00]{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox-wrapper .container input[data-v-37e83c00]{position:absolute;opacity:0;cursor:pointer}.checkbox-wrapper .checkmark[data-v-37e83c00]{position:absolute;top:0;left:0;height:25px;width:25px;border:.5px solid #d0c6c6;border-radius:2px;background-color:#eee}.checkbox-wrapper .container:hover input~.checkmark[data-v-37e83c00]{background-color:#ccc}.checkbox-wrapper .container input:checked~.checkmark[data-v-37e83c00]{background-color:#2196f3}.checkbox-wrapper .checkmark[data-v-37e83c00]:after{content:"";position:absolute;display:none}.checkbox-wrapper .container input:checked~.checkmark[data-v-37e83c00]:after{display:block}.checkbox-wrapper .container .checkmark[data-v-37e83c00]:after{left:7px;top:2px;width:9px;height:16px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.table-wrapper[data-v-37e83c00]{position:relative;overflow:auto;width:100%}.narit-table[data-v-37e83c00]{width:100%;border-collapse:collapse}.narit-table th[data-v-37e83c00]{background-color:#e7eeff;text-align:left;padding:20px}.narit-table td[data-v-37e83c00]{background-color:#f2f2f2;border-bottom:1px solid #c1c1c1;padding:14px}.small-font[data-v-37e83c00]{font-size:14px}.tab-group[data-v-37e83c00]{border-bottom:1px solid #5481e6;width:106%;margin-left:-30px;padding-left:40px}.tab-group[data-v-37e83c00],.tab-row[data-v-37e83c00]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.tab-row .tab[data-v-37e83c00]{min-width:150px;padding:10px;text-align:center;font-size:15px;border:1px solid #d4d3d3;border-bottom:none;background-color:#fff;cursor:pointer}.tab-row .tab[data-v-37e83c00]:not(:first-child),.tab-row .tab[data-v-37e83c00] :not(:last-child){border-left:none}.tab-row .tab[data-v-37e83c00]:hover{background-color:#cccbcb}.tab-row .tab.active[data-v-37e83c00]{background-color:#5481e6;color:#fff}.left-auto[data-v-37e83c00]{margin-left:auto}.center-auto[data-v-37e83c00]{margin:0 auto}.top-auto[data-v-37e83c00]{margin-top:auto}.radio-wrapper[data-v-37e83c00]{height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.radio-wrapper>p[data-v-37e83c00]{cursor:pointer;margin-left:20px}.radio-dot[data-v-37e83c00]{width:25px;height:25px;border-radius:50%;border:1px solid #000;position:relative;cursor:pointer}.radio-dot.active[data-v-37e83c00]:before{content:"";width:15px;height:15px;position:absolute;top:4px;left:4px;border-radius:50%;background-color:#5481e6}ion-icon[data-v-37e83c00]{font-size:26px}.row[data-v-37e83c00]{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.width-70[data-v-37e83c00]{width:72%}a[data-v-37e83c00]{color:inherit}',""])},Rxw9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("LEoA"),a=o("BG9Y"),i=!1;var c=function(e){i||o("nrIA")},n=o("VU/8")(r.a,a.a,!1,c,"data-v-37e83c00",null);n.options.__file="pages/board/index.vue",t.default=n.exports},nrIA:function(e,t,o){var r=o("Q/rQ");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o("rjj0")("f8ecca36",r,!1,{sourceMap:!1})}});