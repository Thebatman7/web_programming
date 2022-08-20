(()=>{"use strict";var t={5175:(t,e,a)=>{a(6992),a(8674),a(9601),a(7727);var i=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/likes"}},[a("div",{staticClass:"menu-item detach"},[a("i",{staticClass:"fab fa-gratipay"}),a("p",[t._v("My Likes")])])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/bucket_list"}},[a("div",{staticClass:"menu-item detach"},[a("i",{staticClass:"fas fa-th-list"}),a("p",[t._v("My Bucket List")])])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/admin"}},[a("div",{staticClass:"menu-item detach"},[a("i",{staticClass:"fa fa-user-circle",attrs:{"aria-hidden":"true"}}),a("p",[t._v("Admin")])])])],1),t._m(2)])])]),a("router-view"),t._m(3)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{src:"images/logo.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item resume"},[a("a",{staticClass:"nav-link resume-link",attrs:{href:"/images/REM.pdf",target:"_blank"}},[t._v("If you liked the web click here for my Resume")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"theFooter"}},[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-item footer-one"},[a("a",{staticClass:"instagram-link",attrs:{href:"https://www.instagram.com/rembrand.paul/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})])]),a("div",{staticClass:"footer-item footer-two"},[a("a",{staticClass:"linkedin-link",attrs:{href:"https://www.linkedin.com/in/rembrandpardo/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])]),a("div",{staticClass:"footer-item footer-three"},[a("a",{staticClass:"git-link",attrs:{href:"https://github.com/Thebatman7",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])]),a("div",{staticClass:"footer-item footer-four"},[a("a",{staticClass:"twitter-link",attrs:{href:"https://twitter.com/rembrand_pardo",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("div",{staticClass:"footer-item footer-five"},[a("a",{staticClass:"facebook-link",attrs:{href:"https://www.facebook.com/profile.php?id=100010131761034",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})])])])])}],s=a(1001),o={},c=(0,s.Z)(o,n,r,!1,null,null,null);const l=c.exports;var u=a(8345),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("PlaceList",{attrs:{places:t.places}})],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"search"},[a("form",{staticClass:"pure-form"})])])}],p=a(6198),y=(a(5666),a(7327),a(1539),a(4916),a(4765),a(4216)),g=a.n(y),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"places"},t._l(t.places,(function(e){return a("div",{key:e.id,staticClass:"place"},[a("div",{staticClass:"info"},[a("h1",[t._v(" Memory: "+t._s(e.title))]),t._v(" "),a("p",[t._v('"'+t._s(e.description)+'"')]),a("h1",[t._v("Location:")]),a("p",[t._v("     "+t._s(e.country))]),a("p",[t._v("     "+t._s(e.city))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:e.path}})]),a("div",{staticClass:"like"},[a("h1",[t._v("Add to your Pangaea")]),a("button",{staticClass:"auto",on:{click:function(a){return t.addToBucketList(e)}}},[t._v("Bucket list")]),t._v(" "),a("button",{staticClass:"auto",on:{click:function(a){return t.addToLikes(e)}}},[t._v("Like")])])])})),0)])},f=[];a(2526),a(1817);const v={name:"PlaceList",data:function(){return{places:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/items");case 3:return a=e.sent,t.places=a.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},addToLikes:function(t){return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("api/likes/"+t._id);case 3:return a=e.sent,console.log(a.data.title),e.next=7,g().post("/api/likes",{title:t.title,description:t.description,country:t.country,city:t.city,path:t.path});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},addToBucketList:function(t){return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("api/blist/"+t._id);case 3:return a=e.sent,console.log(a.data.title),e.next=7,g().post("/api/blist",{title:t.title,description:t.description,country:t.country,city:t.city,path:t.path});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},_=v;var C=(0,s.Z)(_,h,f,!1,null,"3c9427be",null);const b=C.exports,k={name:"Home_",components:{PlaceList:b},data:function(){return{searchText:"",items:[]}},created:function(){this.getItems()},computed:{places:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().search(t.searchText.toLowerCase())>=0}));return e}},methods:{getItems:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/items");case 3:return a=e.sent,t.items=a.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},w=k;var j=(0,s.Z)(w,m,d,!1,null,"679fbf5c",null);const S=j.exports;var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pure-menu pure-menu-horizontal"},[a("ul",{staticClass:"pure-menu-list"},[a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("United States")}}},[t._v("United States")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Spain")}}},[t._v("Spain")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Mexico")}}},[t._v("Mexico")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Peru")}}},[t._v("Peru")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Italy")}}},[t._v("Italy")])])])]),t.US_selected?a("div",{staticClass:"pure-menu pure-menu-horizontal"},[a("ul",{staticClass:"pure-menu-list"},[a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.selectState("Utah")}}},[t._v("Utah")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.selectState("Washington")}}},[t._v("Washington")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.selectState("California")}}},[t._v("California")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.selectState("Las Vegas")}}},[t._v("Las Vegas")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.selectState("Ohio")}}},[t._v("Ohio")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.selectState("Hawaii")}}},[t._v("Hawaii")])])])]):t._e(),a("PlaceList",{attrs:{places:t.places}})],1)},x=[];const U={name:"Detach_",components:{PlaceList:b},data:function(){return{country:"",US_selected:!1,state:""}},computed:{places:function(){var t=this;return""!=this.country?this.$root.$data.places.filter((function(e){return e.country===t.country})):""!=this.state?this.$root.$data.places.filter((function(e){return e.state===t.state})):null}},methods:{select:function(t){"United States"==t?(this.US_selected=!0,this.country="",this.state=""):(this.US_selected=!1,this.country=t)},selectState:function(t){this.state=t}}},P=U;var L=(0,s.Z)(P,I,x,!1,null,"31d7b616",null);const R=L.exports;var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("LikedItems")],1)},B=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"places"},t._l(t.places,(function(e){return a("div",{key:e.id,staticClass:"place"},[a("div",{staticClass:"info"},[a("h1",[t._v("Memory: "+t._s(e.title))]),t._v(" "),a("p",[t._v('"'+t._s(e.description)+'"')]),a("h1",[t._v("Location:")]),a("p",[t._v("     "+t._s(e.country))]),a("p",[t._v("     "+t._s(e.city))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:e.path}})]),a("div",{staticClass:"like"},[a("h1",[t._v("You can modify your likes")]),a("button",{staticClass:"auto",on:{click:function(a){return t.removeItem(e)}}},[t._v("Dislike")])])])})),0)])},F=[];const M={name:"PlaceList",data:function(){return{title:"",description:"",country:"",city:"",file:null,addItem:null,places:[],findTitle:""}},created:function(){this.getItems()},methods:{removeItem:function(t){var e=this;return(0,p.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g()["delete"]("/api/likes/"+t._id);case 3:return e.getItems(),a.abrupt("return",!0);case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getItems:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/likes");case 3:return a=e.sent,console.log(a.data[0].title),t.places=a.data,e.abrupt("return",!0);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},E=M;var $=(0,s.Z)(E,O,F,!1,null,"d242d232",null);const Z=$.exports,H={name:"Likes_",components:{LikedItems:Z},data:function(){return{alikes:[]}}},A=H;var N=(0,s.Z)(A,T,B,!1,null,"1a13792e",null);const V=N.exports;var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("BucketItems",{attrs:{places:t.bucket_list}})],1)},z=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"places"},[a("div",[t._v(" Items in bucket list "+t._s(t.places.length))]),t._l(t.places,(function(e){return a("div",{key:e.id,staticClass:"place"},[a("div",{staticClass:"info"},[a("h1",[t._v("I must visit this place:")]),a("p",[t._v("     "+t._s(e.country))]),a("p",[t._v("     "+t._s(e.city))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:e.path}})]),a("div",{staticClass:"list"},[a("h1",[t._v("Modify your list")]),a("button",{staticClass:"auto",on:{click:function(a){return t.removeItem(e)}}},[t._v("Remove from bucket list")])])])}))],2)])},D=[];const J={name:"BucketItems",data:function(){return{places:[]}},created:function(){this.getItems()},methods:{removeItem:function(t){var e=this;return(0,p.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g()["delete"]("/api/blist/"+t._id);case 3:return e.getItems(),a.abrupt("return",!0);case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},getItems:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/blist");case 3:return a=e.sent,t.places=a.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},K=J;var Y=(0,s.Z)(K,G,D,!1,null,"16537ae7",null);const q=Y.exports,Q={name:"Bucket_",components:{BucketItems:q},data:function(){return{}},computed:{bucket_list:function(){return this.$root.$data.bucket_list},numBucketItems:function(){return this.$root.$data.bucket_list.length}}},X=Q;var tt=(0,s.Z)(X,W,z,!1,null,"707424e2",null);const et=tt.exports;var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[t._m(0),a("div",{staticClass:"add"},[a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Enter a memory"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("p"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{description:"description",rows:"6",cols:"23",placeholder:"Enter a discription (optional)"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{placeholder:"Enter a country"},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{placeholder:"Enter a state or city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),a("p"),a("input",{attrs:{type:"file",name:"photo"},on:{change:t.fileChanged}}),t.emptyness?a("button",{staticClass:"button",on:{click:t.upload}},[t._v("Upload")]):t._e()]),t.addItem?a("div",{staticClass:"upload"},[a("h2",[t._v(t._s(t.addItem.title))]),a("h1",[t._v(t._s(t.addItem.description))]),a("h1",[t._v(t._s(t.addItem.country))]),a("h1",[t._v(t._s(t.addItem.city))]),a("img",{attrs:{src:t.addItem.path}})]):t._e()]),t._m(1),a("div",{staticClass:"edit"},[a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search item"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?a("div",{staticClass:"suggestions"},t._l(t.suggestions,(function(e){return a("div",{key:e.id,staticClass:"suggestion",on:{click:function(a){return t.selectItem(e)}}},[t._v(t._s(e.title)+" ")])})),0):t._e()]),t.findItem?a("div",{staticClass:"upload"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.findItem.title,expression:"findItem.title"}],domProps:{value:t.findItem.title},on:{input:function(e){e.target.composing||t.$set(t.findItem,"title",e.target.value)}}}),a("p"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.findItem.description,expression:"findItem.description"}],attrs:{description:"description",rows:"5",cols:"33",placeholder:"Enter a discription"},domProps:{value:t.findItem.description},on:{input:function(e){e.target.composing||t.$set(t.findItem,"description",e.target.value)}}}),a("img",{attrs:{src:t.findItem.path,align:"right"}})]):t._e(),t.findItem?a("div",{staticClass:"actions"},[a("button",{staticClass:"button",on:{click:function(e){return t.deleteItem(t.findItem)}}},[t._v("Delete")]),a("button",{staticClass:"button",on:{click:function(e){return t.editItem(t.findItem)}}},[t._v("Edit")])]):t._e()])])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading"},[a("div",{staticClass:"circle"},[t._v("1")]),a("h2",[t._v("Add a Memory")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading"},[a("div",{staticClass:"circle"},[t._v("2")]),a("h2",[t._v("Edit/Delete an Item")])])}];a(6755),a(2707),a(8309);const nt={name:"Admin_",data:function(){return{title:"",description:"",country:"",city:"",file:null,addItem:null,items:[],findTitle:"",findItem:null,empty:!1}},created:function(){this.getItems()},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))},emptyness:function(){return""!==this.title&&""!==this.country&&""!==this.city}},methods:{fileChanged:function(t){this.file=t.target.files[0]},upload:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new FormData,a.append("photo",t.file,t.file.name),e.next=5,g().post("/api/photos",a);case 5:return i=e.sent,""==t.description&&(t.description="no description for this memory"),e.next=9,g().post("/api/items",{title:t.title,description:t.description,country:t.country,city:t.city,path:i.data.path});case 9:n=e.sent,t.addItem=n.data,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},getItems:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/api/items");case 3:return a=e.sent,t.items=a.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},selectItem:function(t){this.findTitle="",this.findItem=t},deleteItem:function(t){var e=this;return(0,p.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g()["delete"]("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),a.abrupt("return",!0);case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},editItem:function(t){var e=this;return(0,p.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g().put("/api/items/"+t._id,{title:e.findItem.title,description:e.findItem.description});case 3:return e.findItem=null,e.getItems(),a.abrupt("return",!0);case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})))()},blankInput:function(){""!==this.title&&""!==this.country&&""!==this.city?this.empty:this.epmty}}},rt=nt;var st=(0,s.Z)(rt,at,it,!1,null,"6598b7d8",null);const ot=st.exports;i.Z.use(u.Z);var ct=[{path:"/",name:"home",component:S},{path:"/detach",name:"Detach",component:R},{path:"/likes",name:"Likes",component:V},{path:"/bucket_list",name:"Bucket_list",component:et},{path:"/admin",name:"admin",component:ot}],lt=new u.Z({mode:"history",base:"/",routes:ct});const ut=lt;var mt=[{id:1,memory:"Eiffel Tower at night",note:"First time visiting a different country",country:"France",state:"",city:"Paris",image:"france-1.jpg"},{id:2,memory:"Eiffel Tower during the day",note:"It was beautiful",country:"France",state:"",city:"Paris",image:"france-2.jpg"},{id:3,memory:"The Eiffel Tower",note:"Amazing",country:"France",state:"",city:"Paris",image:"france-3.jpg"},{id:4,memory:"The entire Eiffel Tower",note:"Just Wow",country:"France",state:"",city:"Paris",image:"france-4.jpg"},{id:5,memory:"Amazing architecture",note:"no words",country:"France",state:"",city:"Paris",image:"france-5.jpg"},{id:6,memory:"France like gold",note:"Wow",country:"France",state:"",city:"Paris",image:"france-6.jpg"},{id:7,memory:"France is romantic",note:"peaceful",country:"France",state:"",city:"Paris",image:"france-7.jpg"},{id:8,memory:"France is romantic",note:"glad I got to see it before it was destroyed by the fire",country:"France",state:"",city:"Paris",image:"france-8.jpg"},{id:9,memory:"France goth building",note:"just like in the movies",country:"France",state:"",city:"Paris",image:"france-9.jpg"},{id:10,memory:"France really like gold",note:"door to heaven...",country:"France",state:"",city:"Paris",image:"france-10.jpg"},{id:11,memory:"Two wonderful people",note:"I am glad I got to teach them about the gospel",country:"Spain",state:"",city:"Cartagena",image:"cartagena-1.jpg"},{id:12,memory:"Holy week in Caratagena",note:"NOT KKK, lol",country:"Spain",state:"",city:"Cartagena",image:"cartagena-2.jpg"},{id:13,memory:"Tree next to Caratagena's bus station",note:"I have seen that tree so many times in my mission. Good memories",country:"Spain",state:"",city:"Cartagena",image:"cartagena-3.jpg"},{id:14,memory:"Architecture in Spain is not bad",note:"Old theater. I wonder if they ever played Batman there, lol",country:"Spain",state:"",city:"Cartagena",image:"cartagena-4.jpg"},{id:15,memory:"Spinder Cartagena, Spider Cartagena...",note:"Why? Still cool though",country:"Spain",state:"",city:"Cartagena",image:"cartagena-5.jpg"},{id:16,memory:"I needed a picture with that tree...",note:"So good to see my mission as a civilian",country:"Spain",state:"",city:"Cartagena",image:"cartagena-6.jpg"},{id:17,memory:"Feria del Caballo",note:"Amazing, just amazing...",country:"Spain",state:"",city:"Jerez",image:"jerez-1.jpg"},{id:18,memory:"My friends' dad in Feria del Caballo",note:"good people",country:"Spain",state:"",city:"Jerez",image:"jerez-2.jpg"},{id:19,memory:"Flamencas, flamencas everywhere",note:"not bad...",country:"Spain",state:"",city:"Jerez",image:"jerez-3.jpg"},{id:20,memory:"Old architecture",note:"Old classy",country:"Italy",state:"",city:"Rome",image:"italy-1.jpg"},{id:21,memory:"Rome Colosseum",note:"Gladiator",country:"Italy",state:"",city:"Rome",image:"italy-2.jpg"},{id:22,memory:"Rome is cool",note:"arches",country:"Italy",state:"",city:"Rome",image:"italy-3.jpg"},{id:23,memory:"A different cool piece of art",note:"a different angle",country:"Italy",state:"",city:"Rome",image:"italy-4.jpg"},{id:24,memory:"Pope's home",note:"interesting",country:"Italy",state:"",city:"Rome",image:"italy-5.jpg"},{id:25,memory:"Art to the Cieling",note:"not allowed but worth it",country:"Italy",state:"",city:"Rome",image:"italy-6.jpg"},{id:26,memory:"Trevi Fountain",note:"made my wish",country:"France",state:"",city:"Rome",image:"italy-7.jpg"},{id:27,memory:"Pretty",note:"The men from UNCLE",country:"France",state:"",city:"Rome",image:"italy-8.jpg"},{id:28,memory:"Trevi Fountain and me",note:"made my second wish",country:"France",state:"",city:"Rome",image:"italy-9.jpg"},{id:29,memory:"Trevi Fountain and me again",note:"made my third and last wish",country:"France",state:"",city:"Rome",image:"italy-10.jpg"},{id:30,memory:"A city of Gods",note:"power",country:"France",state:"",city:"Rome",image:"italy-11.jpg"},{id:31,memory:"Mama and me in Barcelona",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-1.jpg"},{id:32,memory:"Beach with good friends",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-2.jpg"},{id:33,memory:"Sagrada Familia",note:"impressive",country:"Spain",state:"",city:"Barcelona",image:"barcelona-3.jpg"},{id:34,memory:"Art and architecture of Barcelona",note:"precious",country:"Spain",state:"",city:"Barcelona",image:"barcelona-4.jpg"},{id:35,memory:"So much beauty in a little park",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-5.jpg"},{id:36,memory:"Good friends visiting Barcelona",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-6.jpg"},{id:37,memory:"Beach of Barcelona",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-7.jpg"},{id:38,memory:"this sea is just beautiful",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-8.jpg"},{id:39,memory:"I just have jumppend",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-9.jpg"},{id:40,memory:"Beach, what...?",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-10.jpg"},{id:41,memory:"The view is just mint",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-11.jpg"},{id:42,memory:"One of the coolest buildings in the world",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-12.jpg"},{id:43,memory:"Food market, mom made it special",note:"",country:"Spain",state:"",city:"Barcelona",image:"barcelona-13.jpg"},{id:44,memory:"Holy place with holy people",note:"",country:"United States",state:"Utah",city:"Provo",image:"utah-1.jpg"},{id:45,memory:"Cool people in cool Provo",note:"",country:"United States",state:"Utah",city:"Provo",image:"utah-2.jpg"},{id:46,memory:"The beauty is evident",note:"",country:"United States",state:"Utah",city:"",image:"utah-3.jpg"},{id:47,memory:"Wall of gum",note:"",country:"United States",state:"Washington",city:"",image:"seattle-1.jpg"},{id:48,memory:"Sea of Seattle",note:"",country:"United States",state:"Washington",city:"",image:"seattle-2.jpg"},{id:49,memory:"Space Needle",note:"",country:"United States",state:"Washington",city:"",image:"seattle-3.jpg"},{id:50,memory:"Mutti",note:"",country:"United States",state:"Washington",city:"",image:"seattle-4.jpg"},{id:51,memory:"Beauty of Seattle",note:"",country:"United States",state:"Washington",city:"",image:"seattle-5.jpg"},{id:52,memory:"Space Needle in its glory",note:"",country:"United States",state:"Washington",city:"",image:"seattle-6.jpg"},{id:53,memory:"Peruvian llama",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-1.jpg"},{id:54,memory:"Machu Picchu from above",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-2.jpg"},{id:55,memory:"Machu Picchu",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-3.jpg"},{id:56,memory:"Machu Picchu other side",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-4.jpg"},{id:57,memory:"Machu Picchu!",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-5.jpg"},{id:58,memory:"Long hair in Peru",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-6.jpg"},{id:59,memory:"City in the clouds",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-7.jpg"},{id:60,memory:"Old City",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-8.jpg"},{id:61,memory:"A hike to the city in the clouds",note:"",country:"Peru",state:"",city:"Ollantaytambo",image:"peru-9.jpg"},{id:61,memory:"Palm Springs",note:"",country:"United States",state:"California",city:"",image:"california-1.jpg"},{id:62,memory:"Art in Palm Springs",note:"",country:"United States",state:"California",city:"",image:"california-2.jpg"},{id:63,memory:"Lucury of Cali",note:"",country:"United States",state:"California",city:"",image:"california-3.jpg"},{id:64,memory:"Palm Springs Museum",note:"",country:"United States",state:"California",city:"",image:"california-4.jpg"},{id:65,memory:"Hill in Palm Springs",note:"",country:"United States",state:"California",city:"",image:"california-5.jpg"},{id:66,memory:"Malibu beach",note:"",country:"United States",state:"California",city:"",image:"california-6.jpg"},{id:67,memory:"Malibu beach again",note:"",country:"United States",state:"California",city:"",image:"california-7.jpg"},{id:68,memory:"Just pretty",note:"",country:"United States",state:"California",city:"",image:"california-8.jpg"},{id:69,memory:"Honolulu Beach",note:"",country:"United States",state:"Hawaii",city:"",image:"hawaii-1.jpg"},{id:70,memory:"sunset in Hawaii",note:"",country:"United States",state:"Hawaii",city:"",image:"hawaii-2.jpg"},{id:71,memory:"Mama in Hawaii",note:"",country:"United States",state:"Hawaii",city:"",image:"hawaii-3.jpg"},{id:72,memory:"Beach and relax",note:"Beach and relax",country:"United States",state:"Hawaii",city:"",image:"hawaii-4.jpg"},{id:73,memory:"LDS in Hawaii",note:"",country:"United States",state:"Hawaii",city:"",image:"hawaii-5.jpg"},{id:74,memory:"Temple in Hawaii",note:"",country:"United States",state:"Hawaii",city:"",image:"hawaii-6.jpg"},{id:75,memory:"Temple Maya",note:"",country:"Mexico",state:"",city:"Cancun",image:"mexico-1.jpg"},{id:76,memory:"Cool temple",note:"",country:"Mexico",state:"",city:"Cancun",image:"mexico-2.jpg"},{id:77,memory:"Cenote",note:"",country:"Mexico",state:"",city:"Cancun",image:"mexico-3.jpg"},{id:78,memory:"Cool sinkhole",note:"",country:"Mexico",state:"",city:"Cancun",image:"mexico-4.jpg"},{id:79,memory:"Temple in Ohio",note:"",country:"United States",state:"Ohio",city:"",image:"ohio-1.jpg"},{id:80,memory:"Good people in Ohio",note:"",country:"United States",state:"Ohio",city:"",image:"ohio-2.jpg"},{id:81,memory:"Mama near the temple",note:"",country:"United States",state:"Ohio",city:"",image:"ohio-3.jpg"},{id:81,memory:"Mama near the temple",note:"",country:"United States",state:"Ohio",city:"",image:"ohio-3.jpg"},{id:82,memory:"I jumped off that building",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-1.jpg"},{id:83,memory:"Las Vegas sign",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-2.jpg"},{id:84,memory:"Good people in Las Vegas",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-3.jpg"},{id:85,memory:"Helicopter ride",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-4.jpg"},{id:86,memory:"This is Las Vegas",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-5.jpg"},{id:87,memory:"Raced in a Lamborghini Las Vegas",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-6.jpg"},{id:88,memory:"Jumped off a building in Las Vegas",note:"",country:"United States",state:"Las Vegas",city:"",image:"vegas-7.jpg"},{id:89,memory:"Good hikes",note:"",country:"United States",state:"Utah",city:"",image:"utah-4.jpg"},{id:90,memory:"Good people in the mountains",note:"",country:"United States",state:"Utah",city:"",image:"utah-5.jpg"},{id:91,memory:"Memories...",note:"",country:"United States",state:"Utah",city:"",image:"utah-6.jpg"},{id:92,memory:"Memories with her",note:"",country:"United States",state:"Utah",city:"",image:"utah-7.jpg"},{id:93,memory:"Memories with friends",note:"",country:"United States",state:"Utah",city:"",image:"utah-8.jpg"},{id:94,memory:"Salt Lake. This is my home now",note:"",country:"United States",state:"Utah",city:"",image:"utah-9.jpg"}];const dt=mt;i.Z.config.productionTip=!1;var pt={places:dt,likes:[],bucket_list:[]};new i.Z({router:ut,data:pt,render:function(t){return t(l)}}).$mount("#app")}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.m=t,(()=>{var t=[];a.O=(e,i,n,r)=>{if(!i){var s=1/0;for(u=0;u<t.length;u++){for(var[i,n,r]=t[u],o=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((t=>a.O[t](i[c])))?i.splice(c--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,n,r]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={143:0};a.O.j=e=>0===t[e];var e=(e,i)=>{var n,r,[s,o,c]=i,l=0;if(s.some((e=>0!==t[e]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var u=c(a)}for(e&&e(i);l<s.length;l++)r=s[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},i=self["webpackChunkcp3_vue_frontend"]=self["webpackChunkcp3_vue_frontend"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=a.O(void 0,[998],(()=>a(5175)));i=a.O(i)})();
//# sourceMappingURL=app.d80cf2e6.js.map