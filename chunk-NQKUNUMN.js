import{Ad as d,Db as I,Gd as u,Jb as p,Od as _,Xb as i,Yb as r,Yd as h,Zb as f,gc as s,ib as v,kd as x,lb as n,le as C,sc as a,sd as S,uc as l,vc as c,xb as y,xe as D}from"./chunk-IQ4WXRRQ.js";function b(t,m){if(t&1&&(i(0,"p"),a(1),r()),t&2){let e=s();n(),l("TOKEN: ",e.token,"")}}function E(t,m){if(t&1&&(i(0,"p"),a(1),r()),t&2){let e=s();n(),c("",e.$t("_devBranch"),": ",e.config.branch,"")}}function T(t,m){if(t&1&&(i(0,"p"),a(1),r()),t&2){let e=s();n(),c("",e.$t("_prevDevTime"),": ",e.date,"")}}var g=class t{$t=C;isSelfDevelop=h;token=_();config=d;date=d.datetime;currentVersionSrc=`https://img.shields.io/badge/current-v${u}-red.svg?longCache=true&style=flat-square`;constructor(){}ngOnInit(){}getImageRepoInfo(){D().then(m=>{})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["system-info"]],decls:11,vars:6,consts:[[4,"ngIf"],[3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav"]],template:function(e,o){e&1&&(i(0,"div"),I(1,b,2,1,"p",0)(2,E,2,2,"p",0)(3,T,2,2,"p",0),i(4,"p"),a(5),f(6,"img",1),r(),i(7,"p"),a(8),i(9,"a",2),f(10,"img",3),r()()()),e&2&&(n(),p("ngIf",!o.isSelfDevelop),n(),p("ngIf",!o.isSelfDevelop),n(),p("ngIf",!o.isSelfDevelop),n(2),l("",o.$t("_curVer"),": "),n(),p("src",o.currentVersionSrc,v),n(2),l(" ",o.$t("_newVer"),": "))},dependencies:[S,x],styles:["p[_ngcontent-%COMP%]{margin-bottom:10px}"]})};export{g as default};
