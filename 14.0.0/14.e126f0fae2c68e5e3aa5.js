(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{CC32:function(t,e,l){"use strict";l.r(e);var a=l("Ip0R"),r=l("CcnG"),n=l("dIas"),s=function(t,e,l,a){var r,n=arguments.length,s=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,l,a);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(s=(n<3?r(s):n>3?r(e,l,s):r(e,l))||s);return n>3&&s&&Object.defineProperty(e,l,s),s},o=function(){function t(){this.fields=[{id:"id",label:"Id",sortable:!0},{id:"name",label:"Name"},{id:"lastName",label:"Last Name"},{id:"phone",label:"Phone"},{id:"company",label:"Company"},{id:"completedProfile",label:"Completed profile",sortable:!1}],this.header=!0,this.data=[{id:"4545-df56-s345",name:"Antonio",lastName:"L\xf3pez",phone:60052520145,company:"Stratio",completedProfile:"80%"},{id:"4545-df56-s345",name:"Marina",lastName:"Lara",phone:600456520145,company:"Stratio",completedProfile:"80%"},{id:"4545-df56-s345",name:"\xc1lvaro",lastName:"Garc\xeda",phone:60052320145,company:"Stratio",completedProfile:"80%"},{id:"4545-df56-s345",name:"Marina",lastName:"Gonz\xe1lez",phone:600455640145,company:"Stratio",completedProfile:"80%"},{id:"4545-df56-s345",name:"Pepe",lastName:"Guerrero",phone:6005276845,company:"Stratio",completedProfile:"80%"},{id:"4545-df56-s345",name:"Mar\xeda",lastName:"Rodr\xedguez",phone:60065620145,company:"Stratio",completedProfile:"80%"}],this.selectedTable1=[],this.selectedTable2=[]}return t.prototype.onSelectRow=function(t,e,l){l[e]=t.checked},t=s([Object(r.Component)({template:l("Hlq1"),styles:[l("w6z5")]})],t)}();l.d(e,"StTableDemoModule",function(){return c});var b=function(t,e,l,a){var r,n=arguments.length,s=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,l,a);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(s=(n<3?r(s):n>3?r(e,l,s):r(e,l))||s);return n>3&&s&&Object.defineProperty(e,l,s),s},c=function(){function t(){}return t=b([Object(r.NgModule)({imports:[a.CommonModule,n.T,n.h,n.i.withComponents({components:[o]})],declarations:[o]})],t)}()},Hlq1:function(t,e){t.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<section class="container-liquid">\r\n\r\n   <h1>Simple table</h1>\r\n   <st-table [fields]="fields" [sortable]="true" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data">\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.company}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.completedProfile}}</label>\r\n         </td>\r\n         <td st-table-row-hover>\r\n            <i class="icon icon-arrow2_right"></i>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n   <h1>Simple table with fixed header</h1>\r\n   <st-table [fields]="fields" [sortable]="true" [fixedHeader]="true" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data">\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.company}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.completedProfile}}</label>\r\n         </td>\r\n         <td st-table-row-hover>\r\n            <i class="icon icon-arrow2_right"></i>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n   <h1>Selectable table without hover menu and configured to not stand up rows when selected</h1>\r\n   <st-table [fields]="fields" [sortable]="true" [selectableAll]="true" [hasHoverMenu]="false" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data; let i = index" [selected]="selectedTable1[i]" [standUpSelected] = "false">\r\n         <td st-table-cell st-table-row-content>\r\n            <st-checkbox (change)="onSelectRow($event, i, selectedTable1)"></st-checkbox>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.company}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.completedProfile}}</label>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n   <h1>Selectable table without hover menu and configured to stand up rows when selected</h1>\r\n   <st-table [fields]="fields" [sortable]="true"  [selectableAll]="true" [hasHoverMenu]="false" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data; let i = index" [selected]="selectedTable2[i]" [standUpSelected] = "true">\r\n         <td st-table-cell st-table-row-content>\r\n            <st-checkbox (change)="onSelectRow($event, i, selectedTable2)"></st-checkbox>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.company}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.completedProfile}}</label>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n   <h1>Simple table without header but with hover menu</h1>\r\n   <st-table [fields]="fields" [sortable]="true" [header]="false" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data">\r\n         <td st-table-cell st-table-row-content>\r\n            <label class="example-pedro-test">{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.company}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.completedProfile}}</label>\r\n         </td>\r\n         <td st-table-row-hover>\r\n            <i class="icon icon-arrow2_right"></i>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n   <h1>Table with complex hover actions and the custom class \'separated rows\'</h1>\r\n   <st-table [fields]="fields" [sortable]="true" customClasses="separated-rows" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data">\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.company}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.completedProfile}}</label>\r\n         </td>\r\n         <td st-table-row-hover>\r\n            <button class="button button-toolbar"><i class="icon-circle-check"></i></button>\r\n            <button class="button button-toolbar"><i class="icon-download"></i></button>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n   <h1>Table with special content (charts, images)</h1>\r\n   <st-table [fields]="fields" [sortable]="true" qaTag="table-qa-tag">\r\n      <tr st-table-row *ngFor="let userData of data">\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.id}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.name}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.lastName}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <label>{{userData.phone}}</label>\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <img style="width: 50px;" src="assets/images/stratio.png">\r\n         </td>\r\n         <td st-table-cell st-table-row-content>\r\n            <div style="width: 25px;  height: 25px;">\r\n               <svg viewBox="0 0 100 100" style="display: block; width: 100%;">\r\n                  <path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" stroke-width="1"\r\n                        fill-opacity="0"></path>\r\n                  <path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="rgb(55,181,228)"\r\n                        stroke-width="6" fill-opacity="0"\r\n                        style="stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;"></path>\r\n               </svg>\r\n            </div>\r\n         </td>\r\n         <td st-table-row-hover>\r\n            <i class="icon icon-arrow2_right"></i>\r\n         </td>\r\n      </tr>\r\n   </st-table>\r\n\r\n</section>\r\n'},w6z5:function(t,e){t.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nst-table {\n  display: block;\n  width: 1000px; }\n'}}]);