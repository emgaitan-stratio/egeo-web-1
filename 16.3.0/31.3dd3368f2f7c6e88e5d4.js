(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"A+os":function(e,t,n){"use strict";n.r(t);var i=n("CcnG"),o=n("Ip0R"),s=n("dIas"),a=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},r=function(){function e(){this.configDoc={html:"demo/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.html",ts:"demo/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.ts",component:"lib/st-horizontal-tabs/st-horizontal-tabs.component.ts"},this.options=[{id:"overview",text:"Overview",status:s.w.warning},{id:"activity",text:"Activity"},{id:"dashboard",text:"Dashboard",status:s.w.error},{id:"nodes",text:"Nodes"}],this.active=this.options[1]}return e=a([Object(i.Component)({selector:"st-horizontal-tabs-demo",template:n("RGTB"),styles:[n("HmNo")]})],e)}();n.d(t,"StHorizontalTabsDemoModule",function(){return c});var l=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},c=function(){function e(){}return e=l([Object(i.NgModule)({imports:[o.CommonModule,s.x,s.j.withComponents({components:[r]}),s.k],declarations:[r],providers:[]})],e)}()},HmNo:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.horizontal-tabs {\n  width: 100%;\n  display: block; }\n.demo {\n  display: block;\n  padding: 60px 0; }\n'},RGTB:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\n   <section class="container-liquid demo-layout">\n      <p class="introduction">Tabs are designed to quickly navigate between views within the same context.</p>\n      <span class="separator"></span>\n      <h1 class="title">Design and behaviour</h1>\n      <p class="paragraph">Tabs appear in a single, non-scrollable row, above their content. The width of each tab is\n         dependent on its label. To ensure that all tabs appear in the container, avoid using more than seven tabs and\n         limit labels to one or two words.</p>\n      <st-horizontal-tabs class="demo" [options]="options" [activeOption]="active" qaTag="horizontal-tabs-demo">\n      </st-horizontal-tabs>\n      <span class="separator"></span>\n      <h1 class="title">Usage and best practices</h1>\n      <ul class="list">\n         <li> Use tabs for alternate views within the sidenav, the aside or main content area.</li>\n         <li> Don\u2019t use tabs to break user interactions into a series of steps. Serial workflows are best presented in a\n            wizard.\n         </li>\n         <li> Avoid using tabs in cards and modals.</li>\n         <li> Ensure that the content in each view is independent of the content in other views.</li>\n         <li> Don\u2019t force users to navigate back and forth to compare data\u2013keep such content in the same view.</li>\n         <li> Avoid cross-linking between tabs.</li>\n         <li> If the content within a view is broad, divide it into subsections.</li>\n         <li> Users should not have to move between tabs in order to complete a task</li>\n         <li> Favor nouns over verbs, for example, Settings, Permissions, and Performance.</li>\n         <li> Use title-style caps.</li>\n         <li> Avoid using icons in labels.</li>\n      </ul>\n   </section>\n</st-docs>\n'}}]);