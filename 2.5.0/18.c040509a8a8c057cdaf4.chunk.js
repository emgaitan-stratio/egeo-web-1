webpackJsonp([18],{"1FxE":function(e,n,l){"use strict";l.d(n,"a",function(){return t});var t=function(){function e(){}return e}()},"3I5i":function(e,n,l){"use strict";function t(e){return d["ɵvid"](0,[(e()(),d["ɵeld"](0,null,null,1,"li",[],null,null,null,null,null)),(e()(),d["ɵted"](null,["\n               ","\n            "]))],null,function(e,n){e(n,1,0,n.context.$implicit.label)})}function a(e){return d["ɵvid"](0,[(e()(),d["ɵeld"](0,null,null,35,"st-api-doc",[],null,null,null,o.a,o.b)),d["ɵdid"](49152,null,0,p.a,[],{doc:[0,"doc"]},null),(e()(),d["ɵted"](null,["\n   "])),(e()(),d["ɵeld"](0,null,0,18,"div",[["class","example-run"]],null,null,null,null,null)),(e()(),d["ɵted"](null,["\n\n      "])),(e()(),d["ɵeld"](0,null,null,15,"section",[["class","container-fluid col-md-24"]],null,null,null,null,null)),(e()(),d["ɵted"](null,["\n         "])),(e()(),d["ɵeld"](0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),d["ɵted"](null,["Pagination with pipe"])),(e()(),d["ɵted"](null,["\n\n         "])),(e()(),d["ɵeld"](0,null,null,6,"ul",[["class","list-items"]],null,null,null,null,null)),(e()(),d["ɵted"](null,["\n            "])),(e()(),d["ɵand"](16777216,null,null,3,null,t)),d["ɵdid"](802816,null,0,r.NgForOf,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),d["ɵpod"]({perPage:0,currentPage:1}),d["ɵpid"](0,m._69,[m.a]),(e()(),d["ɵted"](null,["\n         "])),(e()(),d["ɵted"](null,["\n\n         "])),(e()(),d["ɵeld"](0,null,null,1,"st-pagination",[],null,[[null,"change"]],function(e,n,l){var t=!0,a=e.component;if("change"===n){t=!1!==a.onChangePage(l)&&t}return t},c.D,c.E)),d["ɵdid"](638976,null,0,m._45,[d.ChangeDetectorRef],{total:[0,"total"],perPage:[1,"perPage"],currentPage:[2,"currentPage"]},{change:"change"}),(e()(),d["ɵted"](null,["\n\n      "])),(e()(),d["ɵted"](null,["\n\n   "])),(e()(),d["ɵted"](null,["\n   "])),(e()(),d["ɵeld"](0,null,2,5,"div",[["class","example-model"]],null,null,null,null,null)),(e()(),d["ɵted"](null,["\n      "])),(e()(),d["ɵted"](null,["\n      "])),(e()(),d["ɵeld"](0,null,null,1,"st-load-code",[["file","+components/pagination/example-code/pagination.interface.ts.txt"]],null,null,null,g.a,g.b)),d["ɵdid"](114688,null,0,f.a,[d.Renderer,h.a],{file:[0,"file"]},null),(e()(),d["ɵted"](null,["\n   "])),(e()(),d["ɵted"](null,["\n   "])),(e()(),d["ɵeld"](0,null,1,4,"div",[["class","example-code"]],null,null,null,null,null)),(e()(),d["ɵted"](null,["\n      "])),(e()(),d["ɵeld"](0,null,null,1,"st-load-code",[["class","col-sm-24"],["file","+components/pagination/example-code/pagination.html.txt"]],null,null,null,g.a,g.b)),d["ɵdid"](114688,null,0,f.a,[d.Renderer,h.a],{file:[0,"file"]},null),(e()(),d["ɵted"](null,["\n   "])),(e()(),d["ɵted"](null,["\n"]))],function(e,n){var l=n.component;e(n,1,0,l.apiDoc),e(n,13,0,d["ɵunv"](n,13,0,d["ɵnov"](n,15).transform(l.items,e(n,14,0,l.perPage,l.page))));e(n,19,0,l.items.length,50,l.page);e(n,27,0,"+components/pagination/example-code/pagination.interface.ts.txt");e(n,33,0,"+components/pagination/example-code/pagination.html.txt")},null)}function u(e){return d["ɵvid"](0,[(e()(),d["ɵeld"](0,null,null,1,"pagination-example",[],null,null,null,a,y)),d["ɵdid"](114688,null,0,s.a,[],null,null)],function(e,n){e(n,1,0)},null)}var i=l("igmU"),d=l("/oeL"),o=l("Tryy"),p=l("i4ow"),r=l("qbdv"),m=l("CdNE"),s=l("UXPI"),c=l("7+Ru"),g=l("fFgk"),f=l("KjOg"),h=l("bHZ1");l.d(n,"a",function(){return v});var P=[i.a],y=d["ɵcrt"]({encapsulation:0,styles:P,data:{}}),v=d["ɵccf"]("pagination-example",s.a,u,{},{},[])},UXPI:function(e,n,l){"use strict";var t=l("gOac");l.d(n,"a",function(){return a});var a=function(){function e(){this.page=1,this.perPage=20,this.title="pagination",this.items=[],this.items2=[]}return e.prototype.ngOnInit=function(){this.apiDoc={title:"Pagination",description:"Paging component for use in tables and lists.",haveModel:!0,apiSection:{inputs:[{paramName:"total",type:t.a.NUM,required:!0,details:"Total number of items to page"},{paramName:"perPage",type:t.a.NUM,required:!1,details:"Number of items to show per page. By default there are 20"},{paramName:"perPageOptions",type:t.a.ARRAY_NUM,required:!1,details:"Define number of items per page. By default is [20, 50, 100]"},{paramName:"currentPage",type:t.a.NUM,required:!1,details:"Current paging page. By default is 1"},{paramName:"label",type:t.a.OBJ,required:!1,details:"Translation tags or component texts"},{paramName:"showPerPage",type:t.a.BOOL,required:!1,details:"Show dropdown of number elements per page. By default false"},{paramName:"hidePerPage",type:t.a.BOOL,required:!1,details:"Hide dropdown of number elements per page. By default false"},{paramName:"theme",type:t.a.STR,required:!1,details:". By default themeA"},{paramName:"qaTag",type:t.a.STR,required:!0,details:"Id value for qa test."}],outputs:[{paramName:"change",type:t.a.FUNC,required:!1,details:"Output the page change action or change number of items to show per page"}]},exampleDesc:""},this.items=this.generateItems(100),this.items2=this.generateItems(50)},e.prototype.generateItems=function(e){for(var n=[],l=1;l<=e;l++)n.push({label:"Example"+l,value:l});return n},e.prototype.onChangePage=function(e){this.perPage=e.perPage,this.page=e.currentPage},e.ctorParameters=function(){return[]},e}()},XcjY:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=l("/oeL"),a=l("1FxE"),u=l("7+Ru"),i=l("3I5i"),d=l("qbdv"),o=l("bm2B"),p=l("CdNE"),r=l("BkNc"),m=l("pTHf"),s=(l.n(m),l("9Qcf")),c=l("T2Au"),g=l("UXPI");l.d(n,"PaginationModuleNgFactory",function(){return f});var f=t["ɵcmf"](a.a,[],function(e){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[u.a,i.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID]),t["ɵmpd"](4608,o.a,o.a,[]),t["ɵmpd"](4608,o.b,o.b,[]),t["ɵmpd"](4608,p.a,p.a,[]),t["ɵmpd"](4608,p.b,p.b,[]),t["ɵmpd"](512,d.CommonModule,d.CommonModule,[]),t["ɵmpd"](512,r.x,r.x,[[2,r.m],[2,r.c]]),t["ɵmpd"](512,p.f,p.f,[]),t["ɵmpd"](512,p.g,p.g,[]),t["ɵmpd"](512,p.h,p.h,[]),t["ɵmpd"](512,p.i,p.i,[]),t["ɵmpd"](512,p.j,p.j,[]),t["ɵmpd"](512,o.c,o.c,[]),t["ɵmpd"](512,o.d,o.d,[]),t["ɵmpd"](512,o.e,o.e,[]),t["ɵmpd"](512,p.k,p.k,[]),t["ɵmpd"](512,p.l,p.l,[]),t["ɵmpd"](512,p.m,p.m,[]),t["ɵmpd"](512,p.n,p.n,[]),t["ɵmpd"](512,p.o,p.o,[]),t["ɵmpd"](512,p.p,p.p,[]),t["ɵmpd"](512,p.q,p.q,[]),t["ɵmpd"](512,p.r,p.r,[]),t["ɵmpd"](512,p.s,p.s,[]),t["ɵmpd"](512,p.t,p.t,[]),t["ɵmpd"](512,p.u,p.u,[]),t["ɵmpd"](512,p.v,p.v,[]),t["ɵmpd"](512,p.w,p.w,[]),t["ɵmpd"](512,p.x,p.x,[]),t["ɵmpd"](512,p.y,p.y,[]),t["ɵmpd"](512,p.z,p.z,[]),t["ɵmpd"](512,p.A,p.A,[]),t["ɵmpd"](512,p.B,p.B,[]),t["ɵmpd"](512,p.C,p.C,[]),t["ɵmpd"](512,p.D,p.D,[]),t["ɵmpd"](512,p.E,p.E,[]),t["ɵmpd"](512,p.F,p.F,[]),t["ɵmpd"](512,p.G,p.G,[]),t["ɵmpd"](512,p.H,p.H,[]),t["ɵmpd"](512,p.I,p.I,[]),t["ɵmpd"](512,p.J,p.J,[]),t["ɵmpd"](512,p.K,p.K,[]),t["ɵmpd"](512,m.VirtualScrollModule,m.VirtualScrollModule,[]),t["ɵmpd"](512,p.L,p.L,[]),t["ɵmpd"](512,p.M,p.M,[]),t["ɵmpd"](512,p.N,p.N,[]),t["ɵmpd"](512,p.O,p.O,[]),t["ɵmpd"](512,s.a,s.a,[]),t["ɵmpd"](512,c.a,c.a,[]),t["ɵmpd"](512,a.a,a.a,[]),t["ɵmpd"](1024,r.t,function(){return[[{path:"",component:g.a}]]},[])])})},igmU:function(e,n,l){"use strict";l.d(n,"a",function(){return t});var t=[".list-items[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.list-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#dedede;border-bottom:1px solid #fff;font-size:.88rem;font-family:Open Sans;padding:5px}"]}});