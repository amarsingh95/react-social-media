(this.webpackJsonpkshdmfrontend=this.webpackJsonpkshdmfrontend||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(10),r=n.n(i),c=(n(95),n(96),n(13)),l=n(9),s=n(134),o=n(146),d=n(147),u=n(148),j=n(149),b=n(144),h=n(74),p=n.n(h),m=n(59),O=n.n(m),x=n(69),g=n(136),f=n(151),y=n(138),v=n(139),P=n(140),C=n(141),L=n(142),I=n(143),k=n(58),S=n.n(k),w=n(152),W=n(20),q="ALL_USERS_API_DATA",_="LOGIN",T="LOGOUT",N="FETCH_REQUEST",E="FETCH_FAILURE",D=function(e,t){return function(n){n(F({isLoadging:!0})),fetch("http://localhost:4000/members/showAll",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:e,limit:t})}).then((function(e){return e.json()})).then((function(e){n(R(e))})).catch((function(e){console.log(e),n(U({err:e.message}))}))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e)return{type:N,payload:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e)return{type:q,payload:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e)return{type:E,payload:e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e)return{type:_,payload:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e)return{type:T,payload:e}},J=n(15),G=n(1),M=Object(s.a)({table:{minWidth:650}}),B=function(e){var t=Object(c.c)(),n=Object(a.useState)([]),i=Object(l.a)(n,2),r=(i[0],i[1],Object(a.useState)(0)),s=Object(l.a)(r,2),o=(s[0],s[1],Object(a.useState)(1)),d=Object(l.a)(o,2),u=d[0],j=(d[1],Object(a.useState)(4)),h=Object(l.a)(j,2),p=h[0],m=(h[1],Object(a.useState)(0)),k=Object(l.a)(m,2);k[0],k[1];Object(a.useEffect)((function(){e.data.apilogin[0].isLoggedIn&&function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(D(u,p));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,u,p]);var q=M();return e.data.apilogin[0].isLoggedIn?!0===e.data.apilogin[0].isLoading?Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("div",{children:Object(G.jsx)("h1",{children:" ...Loading "})})}):Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(g.a,{maxWidth:"lg",style:{height:"100vh"},children:[Object(G.jsx)(f.a,{component:"h1",m:1,style:{textAlign:"center"},children:"KD"}),Object(G.jsx)(y.a,{children:Object(G.jsxs)(v.a,{className:q.table,"aria-label":"simple table",children:[Object(G.jsx)(P.a,{children:Object(G.jsxs)(C.a,{children:[Object(G.jsx)(L.a,{children:"ID"}),Object(G.jsx)(L.a,{children:"Name"}),Object(G.jsx)(L.a,{children:"LastName"}),Object(G.jsx)(L.a,{children:"Email"}),Object(G.jsx)(L.a,{children:"Gender"}),Object(G.jsx)(L.a,{children:"DOB"}),Object(G.jsx)(L.a,{children:"Education"}),Object(G.jsx)(L.a,{children:"Employment"}),Object(G.jsx)(L.a,{children:"Maritial Status"}),Object(G.jsx)(L.a,{children:"Vansh"}),Object(G.jsx)(L.a,{children:"Gotra"}),Object(G.jsx)(L.a,{children:"Edit"})]})}),Object(G.jsx)(I.a,{children:e.data.apidata[0].results.map((function(t,n){return Object(G.jsxs)(C.a,{children:[Object(G.jsx)(L.a,{children:e.data.apidata[0].offset+n+1}),Object(G.jsx)(L.a,{children:t.fname}),Object(G.jsx)(L.a,{children:t.lastnm}),Object(G.jsx)(L.a,{children:t.email_id}),Object(G.jsx)(L.a,{children:t.pgender}),Object(G.jsx)(L.a,{children:t.dob}),Object(G.jsx)(L.a,{children:t.peductn}),Object(G.jsx)(L.a,{children:t.pemplymnt}),Object(G.jsx)(L.a,{children:t.pmatrial_status}),Object(G.jsx)(L.a,{children:t.vansh}),Object(G.jsx)(L.a,{children:t.gotra}),Object(G.jsx)(L.a,{children:Object(G.jsx)(W.b,{to:"/userEdit",children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",endIcon:Object(G.jsx)(S.a,{})})})})]},n)}))})]})}),Object(G.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"},children:Object(G.jsx)(w.a,{count:Math.ceil(e.data.apidata[0].count/p),size:"large",onChange:function(e,n){return t(D(n,p))},variant:"outlined"})})]})}):Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(J.a,{to:"/login"})})},H=Object(c.b)((function(e){return{data:e}}))(B),V=n(26),Z=n(23),K=n(145),Q=n(150),X=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"98%"}}}})),Y=function(){var e=Object(a.useState)({firstnm:"",lastnm:"",mob_no:"",email_id:"",usr_pswd:""}),t=Object(l.a)(e,2),n=t[0],i=t[1],r=function(e){var t=e.target.name;i(Object(Z.a)(Object(Z.a)({},n),{},Object(V.a)({},t,e.target.value)))},c=X();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(g.a,{maxWidth:"sm",style:{backgroundColor:"#cfe8fc",height:"80vh"},children:[Object(G.jsx)("h1",{style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"40px"},children:"Register"}),Object(G.jsx)("div",{className:c.root,children:Object(G.jsxs)(K.a,{container:!0,spacing:2,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{fullWidth:!0,required:!0,id:"standard-required",label:"First Name",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"firstnm",id:"firstnm"},onChange:r})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{fullWidth:!0,required:!0,id:"standard-required",label:"Last Name",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"lastnm",id:"lastnm"},onChange:r})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,id:"standard-required",label:"Email",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"email_id",id:"email_id"},onChange:r})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,id:"standard-required",label:"Phone",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"mob_no",id:"mob_no"},onChange:r})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"usr_pswd",id:"usr_pswd"},onChange:r})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{id:"standard-password-input",label:"Confirm Password",type:"password",autoComplete:"current-password",variant:"outlined",InputLabelProps:{shrink:!0}})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={firstname:n.firstnm,lastname:n.lastnm,mobile:n.mob_no,email:n.email_id,password:n.usr_pswd};fetch("http://localhost:4000/members/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Submit"})})]})})]}),Object(G.jsx)("div",{children:"Footer"})]})},$=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"98%"}}}})),ee=function(e){var t=Object(c.c)(),n=Object(a.useState)({email:"",password:""}),i=Object(l.a)(n,2),r=i[0],s=i[1],o=Object(a.useState)(0),d=Object(l.a)(o,2),u=(d[0],d[1],Object(a.useState)(!1)),j=Object(l.a)(u,2),h=(j[0],j[1],Object(a.useState)("")),p=Object(l.a)(h,2),m=p[0],O=(p[1],$()),x=function(e){var t=e.target.name;s(Object(Z.a)(Object(Z.a)({},r),{},Object(V.a)({},t,e.target.value)))};return e.data.apilogin[0].isLoggedIn?Object(G.jsx)(J.a,{to:"/adduser"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(g.a,{maxWidth:"xs",style:{backgroundColor:"#cfe8fc",height:"80vh"},children:[Object(G.jsx)("h1",{style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"40px"},children:"Login"}),Object(G.jsx)("div",{className:O.root,children:Object(G.jsxs)(K.a,{container:!0,spacing:2,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,id:"standard-required",label:"Email",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"email",id:"email"},onChange:x})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{id:"standard-password-input",label:"Password",type:"password",variant:"outlined",InputLabelProps:{shrink:!0},inputProps:{name:"password",id:"password"},onChange:x})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(e){var n={email:r.email,password:r.password};t(function(e){return function(t){try{fetch("http://localhost:4000/members/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t(A(e))})).catch((function(e){}))}catch(n){console.log("This is 403 err")}}}(n))},children:"Login"})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)("div",{style:{color:"red",textAlign:"center"},children:m})})]})})]}),Object(G.jsx)("div",{children:"Footer"})]})},te=Object(s.a)((function(e){return{input:{display:"none"}}})),ne=function(e){var t=Object(a.useState)(e.data.apilogin[0].id),n=Object(l.a)(t,2),i=n[0],r=(n[1],Object(a.useState)({id:0,fname:"",lastnm:"",mob_no:"",email_id:"",pgender:"",dob:"",peductn:"",pemplymnt:"",pmatrial_status:"",img_src:"",vansh:"",gotra:"",caddrs:"",city:"",district:"",state:"",country:"",zip:0,reltn:"",firstnm:"",eductn:"",emplymnt:"",gender:""})),c=Object(l.a)(r,2),s=c[0],o=c[1],d=Object(a.useState)(""),u=Object(l.a)(d,2),j=(u[0],u[1]),h=Object(a.useState)(""),p=Object(l.a)(h,2),m=p[0],O=p[1],x=Object(a.useState)(""),y=Object(l.a)(x,2),v=(y[0],y[1],te());var P=function(e){var t=e.target.name;o(Object(Z.a)(Object(Z.a)({},s),{},Object(V.a)({},t,e.target.value)))};return Object(a.useEffect)((function(){var e;e=i,fetch("http://localhost:4000/members/show",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){o(e[0]),console.log(e[0])})).catch((function(e){console.log(e)}))}),[i,s.img_src]),e.data.apilogin[0].isLoggedIn?Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(g.a,{maxWidth:"sm",style:{height:"100vh"},children:[Object(G.jsx)(f.a,{component:"div",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px"},children:Object(G.jsx)("form",{children:Object(G.jsxs)(K.a,{container:!0,spacing:3,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:"Personal Information"}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,name:"employment",label:"Employment",InputLabelProps:{shrink:!0},value:null===s.pemplymnt?"":s.pemplymnt,variant:"outlined",inputProps:{name:"pemplymnt",id:"pemplymntId"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Date of Birth",InputLabelProps:{shrink:!0},value:null===s.dob?"":s.dob,variant:"outlined",inputProps:{name:"dob",id:"dob"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Education",InputLabelProps:{shrink:!0},value:null===s.peductn?"":s.peductn,variant:"outlined",inputProps:{name:"peductn",id:"peductn"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Vansh",InputLabelProps:{shrink:!0},value:null===s.vansh?"":s.vansh,variant:"outlined",inputProps:{name:"vansh",id:"vansh"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Gotra",InputLabelProps:{shrink:!0},value:null===s.gotra?"":s.gotra,variant:"outlined",inputProps:{name:"gotra",id:"gotra"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Gender",InputLabelProps:{shrink:!0},value:null===s.pgender?"":s.pgender,variant:"outlined",inputProps:{name:"pgender",id:"pgender"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Marital Status",InputLabelProps:{shrink:!0},value:null===s.pmatrial_status?"":s.pmatrial_status,variant:"outlined",inputProps:{name:"pmatrial_status",id:"pmatrial_status"},onChange:P})}),Object(G.jsxs)(K.a,{item:!0,sm:6,children:[Object(G.jsx)("input",{accept:"image/*",className:v.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){console.log("Handle Image"),O(e.target.files[0].name),j(URL.createObjectURL(e.target.files[0]));var t=new FileReader;t.onload=function(e){var t=String(e.target.result).replace("data:","").replace(/^.+,/,"");s.img_src=t},t.readAsDataURL(e.target.files[0])}}),Object(G.jsx)("label",{htmlFor:"contained-button-file",children:Object(G.jsxs)(b.a,{variant:"contained",color:"primary",component:"span",children:["Upload Image ",m]})})]}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)("img",{src:"http://localhost:4000".concat(s.img_src),style:{width:"100px",height:"100px"}})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={gender:s.pgender,dob:s.dob,eductn:s.peductn,emplymnt:s.pemplymnt,matrial_status:s.pmatrial_status,img_src:s.img_src,vansh:s.vansh,gotra:s.gotra};fetch("http://localhost:4000/members/update-person/".concat(i),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Update"})})]})})}),Object(G.jsx)(f.a,{component:"div",style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"},children:Object(G.jsx)("form",{children:Object(G.jsxs)(K.a,{container:!0,spacing:3,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:"Contact Information"}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Address",InputLabelProps:{shrink:!0},value:null===s.caddrs?"":s.caddrs,variant:"outlined",inputProps:{name:"caddrs",id:"caddrs"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"City",InputLabelProps:{shrink:!0},value:null===s.city?"":s.city,variant:"outlined",inputProps:{name:"city",id:"city"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"District",InputLabelProps:{shrink:!0},value:null===s.district?"":s.district,variant:"outlined",inputProps:{name:"district",id:"district"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"State",InputLabelProps:{shrink:!0},value:null===s.state?"":s.state,variant:"outlined",inputProps:{name:"state",id:"state"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Country",InputLabelProps:{shrink:!0},value:null===s.country?"":s.country,variant:"outlined",inputProps:{name:"country",id:"country"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Zip",InputLabelProps:{shrink:!0},value:null===s.zip?"":s.zip,variant:"outlined",inputProps:{name:"zip",id:"zip"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={caddrs:s.caddrs,city:s.city,district:s.district,state:s.state,country:s.country,zip:s.zip};fetch("http://localhost:4000/members/update-contact/".concat(i),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Update"})})]})})}),Object(G.jsx)(f.a,{component:"div",style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"},children:Object(G.jsx)("form",{children:Object(G.jsxs)(K.a,{container:!0,spacing:3,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:"Family Information"}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Relation",InputLabelProps:{shrink:!0},value:null===s.reltn?"":s.reltn,variant:"outlined",inputProps:{name:"reltn",id:"reltn"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Name",InputLabelProps:{shrink:!0},value:null===s.firstnm?"":s.firstnm,variant:"outlined",inputProps:{name:"firstnm",id:"firstnm"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Education",InputLabelProps:{shrink:!0},value:null===s.eductn?"":s.eductn,variant:"outlined",inputProps:{name:"eductn",id:"eductn"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Employment",InputLabelProps:{shrink:!0},value:null===s.emplymnt?"":s.emplymnt,variant:"outlined",inputProps:{name:"emplymnt",id:"emplymnt"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Gender",InputLabelProps:{shrink:!0},value:null===s.gender?"":s.gender,variant:"outlined",inputProps:{name:"gender",id:"gender"},onChange:P})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={reltn:s.reltn,firstnm:s.firstnm,eductn:s.eductn,emplymnt:s.emplymnt,gender:s.gender};fetch("http://localhost:4000/members/update-family/".concat(i),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Update"})})]})})})]})}):Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(J.a,{to:"/login"})})},ae=Object(s.a)((function(e){return{input:{display:"none"}}})),ie=function(e){var t=Object(a.useState)(e.data.apilogin[0].id),n=Object(l.a)(t,2),i=n[0],r=(n[1],Object(a.useState)({id:0,fname:"",lastnm:"",mob_no:"",email_id:"",pgender:"",dob:"",peductn:"",pemplymnt:"",pmatrial_status:"",img_src:"",vansh:"",gotra:"",caddrs:"",city:"",district:"",state:"",country:"",zip:0,reltn:"",firstnm:"",eductn:"",emplymnt:"",gender:""})),c=Object(l.a)(r,2),s=c[0],o=c[1],d=Object(a.useState)(""),u=Object(l.a)(d,2),j=u[0],h=u[1],p=Object(a.useState)(),m=Object(l.a)(p,2),O=m[0],x=m[1],y=Object(a.useState)(),v=Object(l.a)(y,2),P=v[0],C=v[1],L=Object(a.useState)(!1),I=Object(l.a)(L,2),k=(I[0],I[1],ae()),S=function(e){var t=e.target.name;o(Object(Z.a)(Object(Z.a)({},s),{},Object(V.a)({},t,e.target.value)))};return Object(a.useEffect)((function(){var e;e=i,fetch("http://localhost:4000/members/show",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){o(e[0])})).catch((function(e){console.log(e)}))}),[i]),e.data.apilogin[0].isLoggedIn?Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(g.a,{maxWidth:"sm",style:{height:"100vh"},children:[Object(G.jsx)("form",{children:Object(G.jsx)(f.a,{component:"div",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px"},children:Object(G.jsxs)(K.a,{container:!0,spacing:3,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:"Personal Information "}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,name:"employment",label:"Employment",InputLabelProps:{shrink:!0},value:null===s.pemplymnt?"":s.pemplymnt,variant:"outlined",inputProps:{name:"pemplymnt",id:"pemplymntId"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Date of Birth",InputLabelProps:{shrink:!0},value:null===s.dob?"":s.dob,variant:"outlined",inputProps:{name:"dob",id:"dob"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Education",InputLabelProps:{shrink:!0},value:null===s.peductn?"":s.peductn,variant:"outlined",inputProps:{name:"peductn",id:"peductn"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Vansh",InputLabelProps:{shrink:!0},value:null===s.vansh?"":s.vansh,variant:"outlined",inputProps:{name:"vansh",id:"vansh"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Gotra",InputLabelProps:{shrink:!0},value:null===s.gotra?"":s.gotra,variant:"outlined",inputProps:{name:"gotra",id:"gotra"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Gender",InputLabelProps:{shrink:!0},value:null===s.pgender?"":s.pgender,variant:"outlined",inputProps:{name:"pgender",id:"pgender"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Marital Status",InputLabelProps:{shrink:!0},value:null===s.pmatrial_status?"":s.pmatrial_status,variant:"outlined",inputProps:{name:"pmatrial_status",id:"pmatrial_status"},onChange:S})}),Object(G.jsxs)(K.a,{item:!0,sm:6,children:[Object(G.jsx)("input",{accept:"image/*",className:k.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){x(e.target.files[0].name),h(URL.createObjectURL(e.target.files[0]));var t=new FileReader;t.onload=function(e){var t=String(e.target.result).replace("data:","").replace(/^.+,/,"");console.log(t),C(t)},t.readAsDataURL(e.target.files[0])}}),Object(G.jsx)("label",{htmlFor:"contained-button-file",children:Object(G.jsxs)(b.a,{variant:"contained",color:"primary",component:"span",children:["Upload Image ",O]})})]}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)("img",{style:{width:"100px",height:"100px"},src:j,alt:"image"})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={ursID:i,gender:s.pgender,dob:s.dob,eductn:s.peductn,emplymnt:s.pemplymnt,matrial_status:s.pmatrial_status,vansh:s.vansh,gotra:s.gotra,imgsrc:P};fetch("http://localhost:4000/members/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Save"})})]})})}),Object(G.jsx)("form",{children:Object(G.jsx)(f.a,{component:"div",style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"},children:Object(G.jsxs)(K.a,{container:!0,spacing:3,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:"Contact Information"}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Address",InputLabelProps:{shrink:!0},value:null===s.caddrs?"":s.caddrs,variant:"outlined",inputProps:{name:"caddrs",id:"caddrs"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"City",InputLabelProps:{shrink:!0},value:null===s.city?"":s.city,variant:"outlined",inputProps:{name:"city",id:"city"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"District",InputLabelProps:{shrink:!0},value:null===s.district?"":s.district,variant:"outlined",inputProps:{name:"district",id:"district"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"State",InputLabelProps:{shrink:!0},value:null===s.state?"":s.state,variant:"outlined",inputProps:{name:"state",id:"state"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Country",InputLabelProps:{shrink:!0},value:null===s.country?"":s.country,variant:"outlined",inputProps:{name:"country",id:"country"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Zip",InputLabelProps:{shrink:!0},value:null===s.zip?"":s.zip,variant:"outlined",inputProps:{name:"zip",id:"zip"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={usrID:i,caddrs:s.caddrs,city:s.city,district:s.district,state:s.state,country:s.country,zip:s.zip};fetch("http://localhost:4000/members/save-contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Save"})})]})})}),Object(G.jsx)("form",{children:Object(G.jsx)(f.a,{component:"div",style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"10px"},children:Object(G.jsxs)(K.a,{container:!0,spacing:3,children:[Object(G.jsx)(K.a,{item:!0,sm:12,children:"Family Information"}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Relation",InputLabelProps:{shrink:!0},value:null===s.reltn?"":s.reltn,variant:"outlined",inputProps:{name:"reltn",id:"reltn"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Name",InputLabelProps:{shrink:!0},value:null===s.firstnm?"":s.firstnm,variant:"outlined",inputProps:{name:"firstnm",id:"firstnm"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Education",InputLabelProps:{shrink:!0},value:null===s.eductn?"":s.eductn,variant:"outlined",inputProps:{name:"eductn",id:"eductn"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Employment",InputLabelProps:{shrink:!0},value:null===s.emplymnt?"":s.emplymnt,variant:"outlined",inputProps:{name:"emplymnt",id:"emplymnt"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:6,children:Object(G.jsx)(Q.a,{required:!0,fullWidth:!0,label:"Gender",InputLabelProps:{shrink:!0},value:null===s.gender?"":s.gender,variant:"outlined",inputProps:{name:"gender",id:"gender"},onChange:S})}),Object(G.jsx)(K.a,{item:!0,sm:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){var e={usrID:i,reltn:s.reltn,firstnm:s.firstnm,eductn:s.eductn,emplymnt:s.emplymnt,gender:s.gender};fetch("http://localhost:4000/members/save-family",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Save"})})]})})})]})}):Object(G.jsx)(J.a,{to:"/login"})},re=Object(c.b)((function(e){return{data:e}}))(ee),ce=Object(c.b)((function(e){return{data:e}}))(ie),le=Object(c.b)((function(e){return{data:e}}))(ne),se=function(e){return Object(G.jsxs)(G.Fragment,{children:["This is Profile id is ",e.data.apilogin[0].id]})},oe=Object(c.b)((function(e){return{data:e}}))(se),de=Object(s.a)({table:{minWidth:650}}),ue=function(e){var t=de();return console.log("This is Table"),console.log(e.rowDataA),Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(g.a,{maxWidth:"lg",style:{height:"100vh"},children:[Object(G.jsx)(f.a,{component:"h1",m:1,style:{textAlign:"center"},children:"Reusabel Component"}),Object(G.jsx)(y.a,{children:Object(G.jsxs)(v.a,{className:t.table,"aria-label":"simple table",children:[Object(G.jsx)(P.a,{children:Object(G.jsx)(C.a,{})}),Object(G.jsx)(I.a,{})]})})]})})},je=Object(c.b)((function(e){return{data:e}}))(ue),be=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),he=function(e){var t=be(),n=Object(c.c)(),i=Object(a.useState)(!1),r=Object(l.a)(i,2),s=r[0];r[1];return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:t.root,children:Object(G.jsx)(o.a,{position:"static",children:Object(G.jsxs)(d.a,{children:[Object(G.jsx)(u.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(G.jsx)(p.a,{})}),Object(G.jsx)(j.a,{variant:"h6",className:t.title}),!1===e.data.apilogin[0].isLoggedIn?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(b.a,{color:"inherit",children:Object(G.jsx)(W.b,{to:"/register",style:{textDecoration:"none",color:"white"},children:"Register"})}),Object(G.jsx)(b.a,{color:"inherit",children:Object(G.jsx)(W.b,{to:"/login",style:{textDecoration:"none",color:"white"},children:"Login"})})]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(b.a,{color:"inherit",children:Object(G.jsx)(W.b,{to:"/listAll",style:{textDecoration:"none",color:"white"},children:"List All"})}),Object(G.jsx)(b.a,{color:"inherit",children:Object(G.jsx)(W.b,{to:"/table",style:{textDecoration:"none",color:"white"},children:"Table"})}),Object(G.jsx)(b.a,{color:"inherit",onClick:function(e){var t;n((t={logout:s},function(e){e(z(t))}))},children:Object(G.jsx)(W.b,{to:"/login",style:{textDecoration:"none",color:"white"},children:"Logout"})}),Object(G.jsx)(b.a,{color:"inherit",children:e.data.apilogin[0].userName})]})]})})}),Object(G.jsxs)(J.d,{children:[Object(G.jsx)(J.b,{exact:!0,path:"/listAll",component:H}),Object(G.jsx)(J.b,{exact:!0,path:"/login",component:re}),Object(G.jsx)(J.b,{exact:!0,path:"/register",component:Y}),Object(G.jsx)(J.b,{exact:!0,path:"/adduser",component:ce}),Object(G.jsx)(J.b,{exact:!0,path:"/userEdit",component:le}),Object(G.jsx)(J.b,{exact:!0,path:"/profile",component:oe}),Object(G.jsx)(J.b,{exact:!0,path:"/table",component:je})]})]})},pe=Object(c.b)((function(e){return{data:e}}))(he);var me=function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(pe,{})})},Oe=n(27);var xe=Object(Oe.combineReducers)({apidata:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{results:[],offset:0,count:0,isLoading:!1,Error:""}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return[{results:[],offset:0,count:0,isLoading:!0,Error:""}];case q:return[{results:t.payload.results,offset:t.payload.offset,count:t.payload.totalCount[0].countTotal,isLoading:!1,Error:""}];case E:return[{results:[],offset:0,count:0,isLoading:!1,Error:t.payload.err}];default:return e}},apilogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{isLoggedIn:!1,message:"",userName:"",id:0}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return[{isLoggedIn:t.payload.isLoggedIn,message:t.payload.message,userName:t.payload.userName,id:t.payload.id}];case T:return[{isLoggedIn:t.payload.logout}];default:return e}}}),ge=n(75),fe=n(62),ye=n(76),ve=n.n(ye),Pe=n(77),Ce=n(78),Le={key:"root",storage:ve.a},Ie=Object(fe.a)(Le,xe),ke=Object(Oe.createStore)(Ie,Object(Ce.composeWithDevTools)(Object(Oe.applyMiddleware)(ge.a))),Se=Object(fe.b)(ke);r.a.render(Object(G.jsx)(W.a,{children:Object(G.jsx)(c.a,{store:ke,children:Object(G.jsx)(Pe.a,{persistor:Se,children:Object(G.jsx)(me,{})})})}),document.getElementById("root"))},95:function(e,t,n){},96:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.9929ed18.chunk.js.map