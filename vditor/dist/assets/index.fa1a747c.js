import{n as i,s as h,av as y,u as g,r as p,o as x,c as w,C as n,h as u,O as b,w as k,x as C}from"./vendor.d83aeadb.js";import{u as N}from"./index.f7640687.js";const V={class:"access-container"},j={class:"access-form"},B=n("div",{id:"logo"},null,-1),K={style:{margin:"0 25px"}},P={style:{"margin-top":"20px"}},S=C("Login"),D=n("div",{id:"copyRight"},null,-1),R={setup(E){const s=i(""),t=i(""),v=N(),_=h(),m=y(),r=g(),e=i(!1),d=()=>{if(s.value.length===0){r.warning("Please input username");return}if(t.value.length===0){r.warning("Please input password");return}e.value=!0;const a=new FormData;a.append("username",s.value),a.append("password",t.value),v.verifyToken(a).then(()=>{_.success({content:"Hi, "+s.value+"Enjoy your writing time ~",meta:"...",duration:2e3}),m.push("/index"),e.value=!1}).catch(()=>{e.value=!1})};return(a,o)=>{const c=p("n-input"),f=p("n-button");return x(),w("div",V,[n("div",j,[B,n("div",K,[u(c,{style:{"margin-bottom":"10px"},disabled:e.value,round:"",value:s.value,"onUpdate:value":o[0]||(o[0]=l=>s.value=l),placeholder:"",maxlength:20},null,8,["disabled","value"]),u(c,{disabled:e.value,onKeyup:b(d,["enter"]),round:"",value:t.value,"onUpdate:value":o[1]||(o[1]=l=>t.value=l),type:"password",showPasswordOn:"click",placeholder:"",maxlength:20},null,8,["disabled","onKeyup","value"])]),n("div",P,[u(f,{strong:"",secondary:"",round:"",type:"info",disabled:e.value,onClick:d},{default:k(()=>[S]),_:1},8,["disabled"])])]),D])}}};export{R as default};