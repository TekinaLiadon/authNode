(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff08c3c4"],{"17c5":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const s={class:"login"},n={class:"login__input-wrap"},c={class:"login__input-wrap"},r=Object(o["i"])("Войти");function l(e,t,a,l,u,i){const d=Object(o["D"])("InputWrap"),p=Object(o["D"])("Button"),m=Object(o["D"])("Layout");return Object(o["v"])(),Object(o["e"])(m,null,{default:Object(o["K"])(()=>[Object(o["h"])("div",s,[Object(o["h"])("div",n,[Object(o["j"])(d,{label:"Email",type:"email",modelValue:u.formData.username,"onUpdate:modelValue":t[0]||(t[0]=e=>u.formData.username=e)},null,8,["modelValue"])]),Object(o["h"])("div",c,[Object(o["j"])(d,{label:"Password",type:"password",modelValue:u.formData.password,"onUpdate:modelValue":t[1]||(t[1]=e=>u.formData.password=e)},null,8,["modelValue"])]),Object(o["j"])(p,{onClick:i.login},{default:Object(o["K"])(()=>[r]),_:1},8,["onClick"])])]),_:1})}var u=a("ebad"),i=a("f6dc"),d=a("8bd7"),p=a("bc3a"),m=a.n(p),b=a("4360");const h=m.a.create({baseURL:"http://localhost:3000",timeout:2e4,headers:{Accept:"application/json"}});h.interceptors.request.use(e=>(e.headers.common={...e.headers.common,Authorization:"Bearer "+b["a"].state.userToken},e),e=>Promise.reject(e)),h.interceptors.response.use(e=>e,e=>{throw 401===e.response.status&&b["a"].commit("user/killUser"),e});var j=h,f={name:"Login",components:{Button:d["a"],InputWrap:i["a"],Layout:u["a"]},data(){return{formData:{username:"",password:""}}},methods:{login(){j({method:"post",url:"/api/auth",data:this.formData}).then(e=>{console.log(e.data),this.$store.commit("setUserToken",e.data.token),this.$router.push({name:"Home"})}).catch(e=>{console.log(e)})}}},w=(a("bc78"),a("6b0d")),O=a.n(w);const k=O()(f,[["render",l],["__scopeId","data-v-ed2a4706"]]);t["default"]=k},bc78:function(e,t,a){"use strict";a("17c5")}}]);
//# sourceMappingURL=chunk-ff08c3c4.2f29cfea.js.map