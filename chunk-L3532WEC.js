import{a as it,b as dt}from"./chunk-WJB2OH5R.js";import{a as X}from"./chunk-4LTHMJ2X.js";import{d as lt,f as ct}from"./chunk-JRGSY6I6.js";import"./chunk-3HDICL73.js";import{d as st,e as mt,f as pt,g as _t,h as ut,i as ft,j as ht,k as gt,l as Ct}from"./chunk-ICVQICPL.js";import"./chunk-CGQBLB6Y.js";import"./chunk-QZFXWMZH.js";import{a as O}from"./chunk-LYSGW6LQ.js";import"./chunk-Y5MOA5ZQ.js";import"./chunk-WLY2NOSN.js";import"./chunk-5KDTFN2L.js";import{a as nt,b as at}from"./chunk-3ETSPOZP.js";import{Kb as w,hb as Y,ib as Z,kb as tt,lb as et}from"./chunk-EC4IZ44C.js";import{Bc as A,Bd as J,Be as ot,Db as C,De as rt,Ge as M,Jb as l,Pd as R,Rd as q,Xb as a,Yb as o,Yd as G,Zb as S,bc as k,ec as b,f as F,gc as d,ge as K,hb as L,hc as P,ic as I,ie as Q,jd as W,kd as U,lb as n,le as _,ne as E,qb as D,sc as r,sd as H,tc as m,uc as T,xa as x,xb as B,ya as v}from"./chunk-IQ4WXRRQ.js";var xt=["*","*","*","*"];function vt(i,e){if(i&1){let t=k();a(0,"button",13),b("click",function(){x(t);let s=d(2);return v(s.handleSubmit())}),r(1),o()}if(i&2){let t=d(2);l("nzLoading",t.submitting),n(),T(" ",t.$t("_save")," ")}}function bt(i,e){i&1&&(a(0,"div",14),r(1," \u5904\u7406\u5B8C\u6210\u6240\u6709\u6570\u636E\u540E\u9700\u8981\u70B9\u51FB\u4E00\u6B21\u4FDD\u5B58\u65B9\u53EF\u751F\u6548 "),o())}function yt(i,e){if(i&1&&(S(0,"app-logo",17),a(1,"div"),r(2,"\u2193"),o()),i&2){let t=d(2).$implicit;l("src",t.oldData.icon)("name",t.oldData.name)}}function zt(i,e){i&1&&I(0,0,["*ngIf","data.oldData"],yt,3,2)}function St(i,e){if(i&1){let t=k();a(0,"a",15),b("click",function(s){x(t);let p=d(2).$implicit,u=d(2);return v(u.jumpService.goUrl(s,p.oldData.url))}),r(1),o(),a(2,"div"),r(3,"\u2193"),o()}if(i&2){let t=d(2).$implicit;n(),m(t.oldData.name)}}function kt(i,e){i&1&&I(0,1,["*ngIf","data.oldData"],St,4,1)}function It(i,e){if(i&1&&S(0,"tag-list",21),i&2){let t=d(3).$implicit;l("data",t.oldData.tags)}}function Tt(i,e){if(i&1&&(C(0,It,1,1,"tag-list",19),a(1,"div"),r(2,"\u2193"),o()),i&2){let t=d(2).$implicit;l("ngIf",t.oldData.tags)}}function Dt(i,e){i&1&&I(0,2,["*ngIf","data.oldData"],Tt,3,1)}function Et(i,e){if(i&1&&S(0,"tag-list",21),i&2){let t=d().$implicit;l("data",t.tags)}}function wt(i,e){if(i&1&&(a(0,"pre",22),r(1),o(),a(2,"div"),r(3,"\u2193"),o()),i&2){let t=d(2).$implicit;n(),m(t.oldData.desc)}}function Ot(i,e){i&1&&I(0,3,["*ngIf","data.oldData"],wt,4,1)}function Nt(i,e){if(i&1){let t=k();a(0,"tr")(1,"td",8),b("nzCheckedChange",function(s){let p=x(t).$implicit,u=d(2);return v(u.onItemChecked(p.extra.uuid,s))}),o(),a(2,"td")(3,"a",15),b("click",function(){let s=x(t),p=s.$implicit,u=s.index,h=d(2);return v(h.handleClick(p,u))}),r(4),o()(),a(5,"td"),r(6),o(),a(7,"td"),r(8),o(),a(9,"td",16),C(10,zt,2,0,"ng-content",2),S(11,"app-logo",17),o(),a(12,"td"),C(13,kt,2,0,"ng-content",2),a(14,"a",18),b("click",function(s){let p=x(t).$implicit,u=d(2);return v(u.jumpService.goUrl(s,p.url))}),o()(),a(15,"td"),C(16,Dt,2,0,"ng-content",2)(17,Et,1,1,"tag-list",19),o(),a(18,"td"),C(19,Ot,2,0,"ng-content",2),S(20,"pre",20),o(),a(21,"td",11),r(22),o(),a(23,"td"),r(24),o()()}if(i&2){let t=e.$implicit,c=d(2);n(),l("nzChecked",c.setOfCheckedId.has(t.extra.uuid)),n(3),m(c.$t("_handle")),n(2),m(c.typeMap[t.extra.type]),n(2),m(t.id),n(2),l("ngIf",t.oldData),n(),l("src",t.icon)("name",t.name),n(2),l("ngIf",t.oldData),n(),l("innerHTML",t.name,L),n(2),l("ngIf",t.oldData),n(),l("ngIf",t.tags),n(2),l("ngIf",t.oldData),n(),l("innerHTML",t.desc,L),n(2),T(" ",t.breadcrumb," "),n(2),m(t.createdAt)}}function $t(i,e){if(i&1){let t=k();a(0,"div"),C(1,vt,2,2,"button",3),a(2,"button",4),b("click",function(){x(t);let s=d();return v(s.getUserCollect())}),r(3),o(),a(4,"button",5),b("click",function(){x(t);let s=d();return v(s.batchDelete())}),r(5),o(),C(6,bt,2,0,"div",6),a(7,"nz-table",7,0)(9,"thead")(10,"tr")(11,"th",8),b("nzCheckedChange",function(s){x(t);let p=d();return v(p.onAllChecked(s))}),o(),a(12,"th",9),r(13),o(),a(14,"th",9),r(15),o(),a(16,"th",9),r(17,"ID"),o(),a(18,"th",9),r(19),o(),a(20,"th",10),r(21),o(),a(22,"th",10),r(23),o(),a(24,"th",11),r(25),o(),a(26,"th",11),r(27),o(),a(28,"th"),r(29),o()()(),a(30,"tbody"),C(31,Nt,25,15,"tr",12),o()()()}if(i&2){let t=d();n(),l("ngIf",!t.isSelfDevelop),n(),l("nzLoading",t.submitting),n(),T(" ",t.$t("_refresh")," "),n(),l("nzLoading",t.submitting),n(),T(" ",t.$t("_del")," "),n(),l("ngIf",!t.isSelfDevelop),n(),l("nzData",t.dataList)("nzShowPagination",!1),n(4),l("nzChecked",t.checked),n(2),m(t.$t("_action")),n(2),m(t.$t("_type")),n(4),m(t.$t("_icon")),n(2),m(t.$t("_webName")),n(2),m(t.$t("_associatedLabels")),n(2),m(t.$t("_webDesc")),n(2),m(t.$t("_webTag")),n(2),m(t.$t("_createAt")),n(2),l("ngForOf",t.dataList)("ngForTrackBy",t.trackByItem)}}var V=class i{constructor(e,t,c){this.message=e;this.modal=t;this.jumpService=c}$t=_;isSelfDevelop=G;isPermission=!!R();submitting=!1;dataList=[];authCode="";tagMap=K;typeMap={1:_("_add"),2:_("_edit"),3:_("_del")};setOfCheckedId=new Set;checked=!1;ngOnInit(){this.getUserCollect()}onAllChecked(e){this.checked=e,this.dataList.forEach(t=>{e?this.setOfCheckedId.add(t.extra.uuid):this.setOfCheckedId.delete(t.extra.uuid)})}onItemChecked(e,t){t?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}batchDelete(){this.submitting||!this.setOfCheckedId.size||this.modal.confirm({nzTitle:_("_confirmDel"),nzOkDanger:!0,nzWidth:350,nzOkText:_("_del"),nzOnOk:()=>{this.submitting=!0,M({data:this.dataList.filter(e=>this.setOfCheckedId.has(e.extra.uuid))}).then(e=>{this.checked=!1,this.setOfCheckedId.clear(),this.dataList=e.data?.data||[]}).finally(()=>{this.submitting=!1})}})}handleDelete(e){this.submitting=!0,M({data:[this.dataList[e]]}).then(t=>{this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}highlightDifferences(e,t){function c(z,j){let N=z.length,$=j.length,y=Array.from({length:N+1},()=>Array($+1).fill(""));for(let f=1;f<=N;f++)for(let g=1;g<=$;g++)z[f-1]===j[g-1]?y[f][g]=y[f-1][g-1]+z[f-1]:y[f][g]=y[f-1][g].length>y[f][g-1].length?y[f-1][g]:y[f][g-1];return y[N][$]}let s=c(e,t),p="",u=0,h=0;for(let z of s){for(;u<e.length&&e[u]!==z;)u++;for(;h<t.length&&t[h]!==z;)p+=`<b>${t[h]}</b>`,h++;p+=z,u++,h++}for(;h<t.length;)p+=`<b>${t[h]}</b>`,h++;return p}getUserCollect(){this.submitting=!0,rt().then(e=>{this.isPermission=!0,this.dataList=(e.data?.data||[]).map(t=>(t.extra.type===2&&(t.oldData=ct(t.id),t.oldData&&(t.name=this.highlightDifferences(t.oldData.name,t.name),t.desc=this.highlightDifferences(t.oldData.desc,t.desc))),t))}).finally(()=>{this.submitting=!1})}handleSubmitAuthCode(){this.submitting||!this.authCode||(q(this.authCode),this.getUserCollect())}handleCreate(e,t){let c=this;E.emit("CREATE_WEB",{parentId:e.parentId,detail:e,isMove:!0}),E.emit("SET_CREATE_WEB",{detail:null,callback(){c.handleDelete(t)}})}handleDeleteWeb(e,t){this.modal.info({nzTitle:_("_confirmDel"),nzOnOk:()=>F(this,null,function*(){(yield lt([e.id]))&&this.message.success(_("_delSuccess")),this.handleDelete(t)})})}handleUpdateWeb(e){E.emit("CREATE_WEB",{detail:e})}handleClick(e,t){e.extra.type===1?this.handleCreate(e,t):e.extra.type===3?this.handleDeleteWeb(e,t):e.extra.type===2&&this.handleUpdateWeb(e)}handleSubmit(){this.submitting||this.modal.info({nzTitle:_("_syncDataOut"),nzOkText:_("_confirmSync"),nzContent:_("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,ot({message:"update db",content:JSON.stringify(Q),path:J}).then(()=>{this.message.success(_("_syncSuccessTip"))}).finally(()=>{this.submitting=!1})}})}trackByItem(e,t){return t.id}static \u0275fac=function(t){return new(t||i)(D(w),D(O),D(X))};static \u0275cmp=B({type:i,selectors:[["user-collect"]],features:[A([w,O])],ngContentSelectors:xt,decls:2,vars:2,consts:[["basicTable",""],["nzTip","Loading...",3,"nzSpinning"],[4,"ngIf"],["nz-button","","nzType","primary","style","margin-right: 20px",3,"nzLoading","click",4,"ngIf"],["nz-button","",3,"click","nzLoading"],["nz-button","","nzType","primary","nzDanger","",2,"margin-left","20px",3,"click","nzLoading"],["class","mb-2.5 mt-2.5 !text-red-500 font-bold",4,"ngIf"],[3,"nzData","nzShowPagination"],[3,"nzCheckedChange","nzChecked"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","300px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-button","","nzType","primary",2,"margin-right","20px",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5","!text-red-500","font-bold"],[3,"click"],[1,"text-center"],[3,"src","name"],[3,"click","innerHTML"],[3,"data",4,"ngIf"],[1,"desc",3,"innerHTML"],[3,"data"],[1,"desc"]],template:function(t,c){t&1&&(P(xt),a(0,"nz-spin",1),C(1,$t,32,19,"div",2),o()),t&2&&(l("nzSpinning",c.submitting),n(),l("ngIf",c.isPermission))},dependencies:[H,W,U,at,nt,et,tt,Y,Z,Ct,ft,st,pt,mt,gt,ut,ht,_t,it,dt],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{V as default};
