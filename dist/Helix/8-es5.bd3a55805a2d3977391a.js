!function(){function l(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function n(n,e,u){return e&&l(n.prototype,e),u&&l(n,u),n}function e(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"21Ks":function(l){l.exports=JSON.parse('[{"id":1,"title":"Cleaning"},{"id":2,"title":"Business"},{"id":3,"title":"IT"},{"id":4,"title":"Car"},{"id":5,"title":"Agency"},{"id":6,"title":"Laptop"},{"id":7,"title":"Washing"},{"id":8,"title":"Paper"},{"id":9,"title":"Pen"},{"id":10,"title":"Tea"},{"id":11,"title":"Coffee"},{"id":12,"title":"Keyboard"}]')},iyDP:function(l,n){var e;(e=jQuery).fn.niceSelect=function(l){function n(l){l.after(e("<div></div>").addClass("nice-select").addClass(l.attr("class")||"").addClass(l.attr("disabled")?"disabled":"").attr("tabindex",l.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var n=l.next(),u=l.find("option"),t=l.find("option:selected");n.find(".current").html(t.data("display")||t.text()),u.each(function(l){var u=e(this),t=u.data("display");n.find("ul").append(e("<li></li>").attr("data-value",u.val()).attr("data-display",t||null).addClass("option"+(u.is(":selected")?" selected":"")+(u.is(":disabled")?" disabled":"")).html(u.text()))})}if("string"==typeof l)return"update"==l?this.each(function(){var l=e(this),u=e(this).next(".nice-select"),t=u.hasClass("open");u.length&&(u.remove(),n(l),t&&l.next().trigger("click"))}):"destroy"==l?(this.each(function(){var l=e(this),n=e(this).next(".nice-select");n.length&&(n.remove(),l.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+l+'" does not exist.'),this;this.hide(),this.each(function(){var l=e(this);l.next().hasClass("nice-select")||n(l)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(l){var n=e(this);e(".nice-select").not(n).removeClass("open"),n.toggleClass("open"),n.hasClass("open")?(n.find(".option"),n.find(".focus").removeClass("focus"),n.find(".selected").addClass("focus")):n.focus()}),e(document).on("click.nice_select",function(l){0===e(l.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(l){var n=e(this),u=n.closest(".nice-select");u.find(".selected").removeClass("selected"),n.addClass("selected");var t=n.data("display")||n.text();u.find(".current").text(t),u.prev("select").val(n.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(l){var n=e(this),u=e(n.find(".focus")||n.find(".list .option.selected"));if(32==l.keyCode||13==l.keyCode)return n.hasClass("open")?u.trigger("click"):n.trigger("click"),!1;if(40==l.keyCode){if(n.hasClass("open")){var t=u.nextAll(".option:not(.disabled)").first();t.length>0&&(n.find(".focus").removeClass("focus"),t.addClass("focus"))}else n.trigger("click");return!1}if(38==l.keyCode){if(n.hasClass("open")){var i=u.prevAll(".option:not(.disabled)").first();i.length>0&&(n.find(".focus").removeClass("focus"),i.addClass("focus"))}else n.trigger("click");return!1}if(27==l.keyCode)n.hasClass("open")&&n.trigger("click");else if(9==l.keyCode&&n.hasClass("open"))return!1});var u=document.createElement("a").style;return u.cssText="pointer-events:auto","auto"!==u.pointerEvents&&e("html").addClass("no-csspointerevents"),this}},vfOS:function(l,u,t){"use strict";t.r(u),t.d(u,"ShopModuleNgFactory",function(){return Q});var i=t("8Y7J"),o=function l(){e(this,l)},a=t("pMnS"),s=t("+bQD"),c=t("j/Fd"),d=t("SVse"),r=t("jhVY"),p=t("EaNY"),f=t("iInd");t("iyDP");var g=function(){function l(n){e(this,l),this.el=n}return n(l,[{key:"ngAfterViewInit",value:function(){$(this.el.nativeElement).niceSelect(),this.attachAngularChange(),this.attachObserver()}},{key:"attachAngularChange",value:function(){var l=this;$(this.el.nativeElement).one("change",function(){var n=document.createEvent("Event");n.initEvent("change",!0,!0),l.el.nativeElement.dispatchEvent(n),l.attachAngularChange()})}},{key:"attachObserver",value:function(){var l=this;this.observer=new MutationObserver(function(n){n.forEach(function(){return l.onChanges()})}),this.observer.observe(this.el.nativeElement,{attributes:!0,childList:!0,characterData:!0})}},{key:"detachObserver",value:function(){this.observer.disconnect()}},{key:"onChanges",value:function(){this.detachObserver(),$(this.el.nativeElement).niceSelect("update"),this.attachObserver()}},{key:"ngOnDestroy",value:function(){this.detachObserver(),$(this.el.nativeElement).niceSelect("destroy")}}]),l}(),h=function l(){e(this,l)},v=t("xkgV"),m=t("abRS"),y=t("O5Pk"),b=t("21Ks"),k=function(){function l(){e(this,l),this.shopcategory=y,this.shoptags=b}return n(l,[{key:"ngOnInit",value:function(){}}]),l}(),C=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==i["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey)&&u),u},null,null)),i["\u0275did"](2,671744,null,0,f.p,[f.n,f.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),i["\u0275ted"](3,null,["",""]))],function(l,n){l(n,2,0,i["\u0275inlineInterpolate"](1,"/shop/cat/",n.context.$implicit.id,""))},function(l,n){l(n,1,0,i["\u0275nov"](n,2).target,i["\u0275nov"](n,2).href),l(n,3,0,n.context.$implicit.title)})}function w(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==i["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey)&&u),u},null,null)),i["\u0275did"](2,671744,null,0,f.p,[f.n,f.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),i["\u0275ted"](3,null,["",""]))],function(l,n){l(n,2,0,i["\u0275inlineInterpolate"](1,"/shop/tag/",n.context.$implicit.id,""))},function(l,n){l(n,1,0,i["\u0275nov"](n,2).target,i["\u0275nov"](n,2).href),l(n,3,0,n.context.$implicit.title)})}function L(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,34,"div",[["class","ovent-sidebar"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,6,"div",[["class","widget-box categories-box-2 mb-30"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,2,"h3",[["class","widget-title"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,0,"span",[["class","line"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Category"])),(l()(),i["\u0275eld"](5,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,x)),i["\u0275did"](7,278528,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["\u0275eld"](8,0,null,null,6,"div",[["class","widget-box keyword-box mb-30"]],null,null,null,null,null)),(l()(),i["\u0275eld"](9,0,null,null,2,"h3",[["class","widget-title"]],null,null,null,null,null)),(l()(),i["\u0275eld"](10,0,null,null,0,"span",[["class","line"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Keyword"])),(l()(),i["\u0275eld"](12,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,w)),i["\u0275did"](14,278528,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),i["\u0275eld"](15,0,null,null,13,"div",[["class","widget-box newsletter-box mb-30"]],null,null,null,null,null)),(l()(),i["\u0275eld"](16,0,null,null,2,"h3",[["class","widget-title"]],null,null,null,null,null)),(l()(),i["\u0275eld"](17,0,null,null,0,"span",[["class","line"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Keyword"])),(l()(),i["\u0275eld"](19,0,null,null,9,"div",[["class","newsletter-form"]],null,null,null,null,null)),(l()(),i["\u0275eld"](20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Lorem ipsum dolor sit asecte is tur adipisicing elit."])),(l()(),i["\u0275eld"](22,0,null,null,6,"form",[],null,null,null,null,null)),(l()(),i["\u0275eld"](23,0,null,null,2,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),i["\u0275eld"](24,0,null,null,0,"input",[["class","form_control"],["name","name"],["placeholder","Enter email"],["required",""],["type","email"]],null,null,null,null,null)),(l()(),i["\u0275eld"](25,0,null,null,0,"i",[["class","fal fa-envelope"]],null,null,null,null,null)),(l()(),i["\u0275eld"](26,0,null,null,2,"div",[["class","form_button"]],null,null,null,null,null)),(l()(),i["\u0275eld"](27,0,null,null,1,"button",[["class","subscribe-btn"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Subscribe Now"])),(l()(),i["\u0275eld"](29,0,null,null,5,"div",[["class","widget-box add-box"]],null,null,null,null,null)),(l()(),i["\u0275eld"](30,0,null,null,4,"div",[["class","add-img"]],null,null,null,null,null)),(l()(),i["\u0275eld"](31,0,null,null,0,"img",[["alt",""],["class","img-fluid"],["src","assets/images/add-2.jpg"]],null,null,null,null,null)),(l()(),i["\u0275eld"](32,0,null,null,2,"a",[["class","add-btn"],["routerLink","/contact"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==i["\u0275nov"](l,33).onClick(e.button,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey)&&u),u},null,null)),i["\u0275did"](33,671744,null,0,f.p,[f.n,f.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),i["\u0275ted"](-1,null,["Add Banner"]))],function(l,n){var e=n.component;l(n,7,0,e.shopcategory),l(n,14,0,e.shoptags),l(n,33,0,"/contact")},function(l,n){l(n,32,0,i["\u0275nov"](n,33).target,i["\u0275nov"](n,33).href)})}var O=t("xkeV"),K=function(){function l(n){e(this,l),this.router=n,this.page=1,this.shopblock=O,this.shopcategory=y,this.shoptags=b}return n(l,[{key:"setCategory",value:function(l){this.shopcategory=l}},{key:"getCategory",value:function(){return this.shopcategory}},{key:"getPostsByCategory",value:function(l){return this.shopblock=O.filter(function(n){return n.category.includes(parseInt(l))})}},{key:"setTag",value:function(l){this.shoptags=l}},{key:"getTag",value:function(){return this.shoptags}},{key:"getPostsByTags",value:function(l){return this.shopblock=O.filter(function(n){return n.tags.includes(parseInt(l))})}},{key:"setPosts",value:function(){var l=null!=this.getCategory()?this.getPostsByCategory(this.getCategory()):"",n=null!=this.getTag()?this.getPostsByTags(this.getTag()):"";(""!=l||null!=l||null!=l)&&l.length>0?this.shopblock=l:(""!=n||null!=n||null!=n)&&n.length>0&&(this.shopblock=n)}},{key:"ngAfterContentInit",value:function(){this.setCategory(this.router.snapshot.params.catId),this.setTag(this.router.snapshot.params.tagId),this.setPosts()}}]),l}(),S=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function I(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),i["\u0275ted"](1,null,["$",""])),i["\u0275ppd"](2,2)],null,function(l,n){var e=i["\u0275unv"](n,1,0,l(n,2,0,i["\u0275nov"](n.parent.parent,0),n.parent.context.$implicit.price*(100-n.parent.context.$implicit.discount)/100,"1.2-2"));l(n,1,0,e)})}function E(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,24,"div",[["class","col-lg-4 col-md-6 col-sm-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,23,"div",[["class","product-box mb-30"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,10,"div",[["class","product-img"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),i["\u0275eld"](4,0,null,null,8,"div",[["class","product-overlay"]],null,null,null,null,null)),(l()(),i["\u0275eld"](5,0,null,null,7,"div",[["class","product-link"]],null,null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==i["\u0275nov"](l,7).onClick(e.button,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey)&&u),u},null,null)),i["\u0275did"](7,671744,null,0,f.p,[f.n,f.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),i["\u0275eld"](8,0,null,null,0,"i",[["class","far fa-shopping-cart"]],null,null,null,null,null)),(l()(),i["\u0275eld"](9,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),i["\u0275eld"](10,0,null,null,0,"i",[["class","far fa-heart"]],null,null,null,null,null)),(l()(),i["\u0275eld"](11,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),i["\u0275eld"](12,0,null,null,0,"i",[["class","far fa-eye"]],null,null,null,null,null)),(l()(),i["\u0275eld"](13,0,null,null,11,"div",[["class","product-info"]],null,null,null,null,null)),(l()(),i["\u0275eld"](14,0,null,null,3,"h5",[],null,null,null,null,null)),(l()(),i["\u0275eld"](15,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==i["\u0275nov"](l,16).onClick(e.button,e.ctrlKey,e.shiftKey,e.altKey,e.metaKey)&&u),u},null,null)),i["\u0275did"](16,671744,null,0,f.p,[f.n,f.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),i["\u0275ted"](17,null,["",""])),(l()(),i["\u0275eld"](18,0,null,null,6,"div",[["class","price"]],null,null,null,null,null)),(l()(),i["\u0275eld"](19,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,I)),i["\u0275did"](21,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](22,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),i["\u0275ted"](23,null,["$",""])),i["\u0275ppd"](24,2)],function(l,n){l(n,7,0,i["\u0275inlineInterpolate"](1,"/shop-details/",n.context.$implicit.id,"")),l(n,16,0,i["\u0275inlineInterpolate"](1,"/shop-details/",n.context.$implicit.id,"")),l(n,21,0,n.context.$implicit.discount)},function(l,n){l(n,3,0,n.context.$implicit.image[0],n.context.$implicit.title),l(n,6,0,i["\u0275nov"](n,7).target,i["\u0275nov"](n,7).href),l(n,15,0,i["\u0275nov"](n,16).target,i["\u0275nov"](n,16).href),l(n,17,0,n.context.$implicit.title);var e=i["\u0275unv"](n,23,0,l(n,24,0,i["\u0275nov"](n.parent,0),n.context.$implicit.price,"1.2-2"));l(n,23,0,e)})}function T(l){return i["\u0275vid"](0,[i["\u0275pid"](0,d.DecimalPipe,[i.LOCALE_ID]),(l()(),i["\u0275eld"](1,0,null,null,46,"section",[["class","shop-page-section pt-120 pb-120"]],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,45,"div",[["class","container"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,44,"div",[["class","row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](4,0,null,null,40,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),i["\u0275eld"](5,0,null,null,30,"div",[["class","shop-filter"]],null,null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,29,"form",[],null,null,null,null,null)),(l()(),i["\u0275eld"](7,0,null,null,28,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),i["\u0275eld"](8,0,null,null,3,"div",[["class","col-lg-5 col-md-4 col-sm-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](9,0,null,null,2,"div",[["class","shop-text"]],null,null,null,null,null)),(l()(),i["\u0275eld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i["\u0275ted"](11,null,["Showing 1\u20139 of "," Results"])),(l()(),i["\u0275eld"](12,0,null,null,23,"div",[["class","col-lg-7 col-md-8 col-sm-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](13,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),i["\u0275eld"](14,0,null,null,3,"div",[["class","col-lg-7 col-md-7"]],null,null,null,null,null)),(l()(),i["\u0275eld"](15,0,null,null,2,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),i["\u0275eld"](16,0,null,null,0,"input",[["class","form_control"],["name","search"],["placeholder","Search Keywords"],["type","search"]],null,null,null,null,null)),(l()(),i["\u0275eld"](17,0,null,null,0,"i",[["class","fal fa-envelope"]],null,null,null,null,null)),(l()(),i["\u0275eld"](18,0,null,null,17,"div",[["class","col-lg-5 col-md-5"]],null,null,null,null,null)),(l()(),i["\u0275eld"](19,0,null,null,16,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),i["\u0275eld"](20,0,null,null,15,"select",[["nice-select",""]],null,null,null,null,null)),i["\u0275did"](21,4341760,null,0,g,[i.ElementRef],null,null),(l()(),i["\u0275eld"](22,0,null,null,1,"option",[["data-display","Short by"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Short by"])),(l()(),i["\u0275eld"](24,0,null,null,1,"option",[["value","1"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Bags"])),(l()(),i["\u0275eld"](26,0,null,null,1,"option",[["value","2"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Clothing"])),(l()(),i["\u0275eld"](28,0,null,null,1,"option",[["value","3"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Jewellery"])),(l()(),i["\u0275eld"](30,0,null,null,1,"option",[["value","4"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Men"])),(l()(),i["\u0275eld"](32,0,null,null,1,"option",[["value","5"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Shoes"])),(l()(),i["\u0275eld"](34,0,null,null,1,"option",[["value","6"]],null,null,null,null,null)),(l()(),i["\u0275ted"](-1,null,["Vintage"])),(l()(),i["\u0275eld"](36,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,3,null,E)),i["\u0275did"](38,278528,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),i["\u0275pod"](39,{itemsPerPage:0,currentPage:1}),i["\u0275pid"](0,v.b,[v.e]),(l()(),i["\u0275eld"](41,0,null,null,3,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),i["\u0275eld"](42,0,null,null,2,"div",[["class","pagination justify-content-center mt-40"]],null,null,null,null,null)),(l()(),i["\u0275eld"](43,0,null,null,1,"pagination-controls",[["nextLabel",">"],["previousLabel","<"],["responsive","true"]],null,[[null,"pageChange"]],function(l,n,e){var u=!0;return"pageChange"===n&&(u=!1!==(l.component.page=e)&&u),u},m.b,m.a)),i["\u0275did"](44,49152,null,0,v.c,[],{responsive:[0,"responsive"],previousLabel:[1,"previousLabel"],nextLabel:[2,"nextLabel"]},{pageChange:"pageChange"}),(l()(),i["\u0275eld"](45,0,null,null,2,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),i["\u0275eld"](46,0,null,null,1,"app-shop-sidebar",[],null,null,null,L,C)),i["\u0275did"](47,114688,null,0,k,[],null,null)],function(l,n){var e=n.component,u=i["\u0275unv"](n,38,0,i["\u0275nov"](n,40).transform(e.shopblock,l(n,39,0,9,e.page)));l(n,38,0,u),l(n,44,0,"true","<",">"),l(n,47,0)},function(l,n){l(n,11,0,n.component.shopblock.length)})}var F=t("R8T8"),R=t("FezY"),N=function(){function l(){e(this,l),this.classname="footer-area footer-area-v1 footer-area-v3  bg_cover",this.ftlogo="assets/images/logo-2.png",this.ftbg="assets/images/footer-3.jpg"}return n(l,[{key:"ngOnInit",value:function(){}}]),l}(),P=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"app-header",[],null,[["window","scroll"]],function(l,n,e){var u=!0;return"window:scroll"===n&&(u=!1!==i["\u0275nov"](l,1).onWindowScroll(e)&&u),u},s.b,s.a)),i["\u0275did"](1,114688,null,0,c.a,[d.DOCUMENT],null,null),(l()(),i["\u0275eld"](2,0,null,null,1,"app-breadcrumb",[],null,null,null,r.b,r.a)),i["\u0275did"](3,114688,null,0,p.a,[],null,null),(l()(),i["\u0275eld"](4,0,null,null,1,"app-content",[],null,null,null,T,S)),i["\u0275did"](5,1097728,null,0,K,[f.a],null,null),(l()(),i["\u0275eld"](6,0,null,null,1,"app-footer",[],null,null,null,F.b,F.a)),i["\u0275did"](7,114688,null,0,R.a,[],{layout:[0,"layout"],logo:[1,"logo"],bg:[2,"bg"]},null)],function(l,n){var e=n.component;l(n,1,0),l(n,3,0),l(n,7,0,e.classname,e.ftlogo,e.ftbg)},null)}var _=i["\u0275ccf"]("app-shop",N,function(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,"app-shop",[],null,null,null,M,P)),i["\u0275did"](1,114688,null,0,N,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),A=t("9AJC"),D=t("s7LF"),V=t("G0yt"),j=t("iryk"),B=t("lABs"),J=t("GytN"),G=t("IheW"),z=function l(){e(this,l)},Y=t("B0QU"),q=t("hGdz"),Q=i["\u0275cmf"](o,[],function(l){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,_,A.a,A.b,A.l,A.m,A.i,A.j,A.k]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[i.LOCALE_ID]),i["\u0275mpd"](4608,D.e,D.e,[]),i["\u0275mpd"](4608,V.v,V.v,[i.ComponentFactoryResolver,i.Injector,V.pb,V.w]),i["\u0275mpd"](5120,j.a,B.b,[f.n]),i["\u0275mpd"](4608,J.NgMasonryGridService,J.NgMasonryGridService,[i.PLATFORM_ID]),i["\u0275mpd"](4608,v.e,v.e,[]),i["\u0275mpd"](4608,G.h,G.n,[d.DOCUMENT,i.PLATFORM_ID,G.l]),i["\u0275mpd"](4608,G.o,G.o,[G.h,G.m]),i["\u0275mpd"](5120,G.a,function(l){return[l]},[G.o]),i["\u0275mpd"](4608,G.k,G.k,[]),i["\u0275mpd"](6144,G.i,null,[G.k]),i["\u0275mpd"](4608,G.g,G.g,[G.i]),i["\u0275mpd"](6144,G.b,null,[G.g]),i["\u0275mpd"](4608,G.f,G.j,[G.b,i.Injector]),i["\u0275mpd"](4608,G.c,G.c,[G.f]),i["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),i["\u0275mpd"](1073742336,f.q,f.q,[[2,f.v],[2,f.n]]),i["\u0275mpd"](1073742336,z,z,[]),i["\u0275mpd"](1073742336,V.c,V.c,[]),i["\u0275mpd"](1073742336,V.f,V.f,[]),i["\u0275mpd"](1073742336,V.g,V.g,[]),i["\u0275mpd"](1073742336,V.k,V.k,[]),i["\u0275mpd"](1073742336,V.l,V.l,[]),i["\u0275mpd"](1073742336,D.d,D.d,[]),i["\u0275mpd"](1073742336,D.a,D.a,[]),i["\u0275mpd"](1073742336,V.r,V.r,[]),i["\u0275mpd"](1073742336,V.t,V.t,[]),i["\u0275mpd"](1073742336,V.x,V.x,[]),i["\u0275mpd"](1073742336,V.E,V.E,[]),i["\u0275mpd"](1073742336,V.J,V.J,[]),i["\u0275mpd"](1073742336,V.P,V.P,[]),i["\u0275mpd"](1073742336,V.S,V.S,[]),i["\u0275mpd"](1073742336,V.V,V.V,[]),i["\u0275mpd"](1073742336,V.ab,V.ab,[]),i["\u0275mpd"](1073742336,V.db,V.db,[]),i["\u0275mpd"](1073742336,V.eb,V.eb,[]),i["\u0275mpd"](1073742336,V.fb,V.fb,[]),i["\u0275mpd"](1073742336,V.y,V.y,[]),i["\u0275mpd"](1073742336,B.a,B.a,[]),i["\u0275mpd"](1073742336,J.NgMasonryGridModule,J.NgMasonryGridModule,[]),i["\u0275mpd"](1073742336,Y.c,Y.c,[]),i["\u0275mpd"](1073742336,q.a,q.a,[]),i["\u0275mpd"](1073742336,v.a,v.a,[]),i["\u0275mpd"](1073742336,G.e,G.e,[]),i["\u0275mpd"](1073742336,G.d,G.d,[]),i["\u0275mpd"](1073742336,h,h,[]),i["\u0275mpd"](1073742336,o,o,[]),i["\u0275mpd"](1024,f.l,function(){return[[{path:"",component:N}]]},[]),i["\u0275mpd"](256,Y.b,{},[]),i["\u0275mpd"](256,G.l,"XSRF-TOKEN",[]),i["\u0275mpd"](256,G.m,"X-XSRF-TOKEN",[])])})}}])}();