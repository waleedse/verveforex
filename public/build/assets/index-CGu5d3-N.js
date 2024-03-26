import{r as o,u as w,e as E,d as F,o as U,p as n,B as A,j as e,s as I,I as P,C as R,D,E as L,x as B}from"./app-yghldwAo.js";const $=()=>{const[f,N]=o.useState([]),[p,b]=o.useState(null),m=w(),h=E(),r=h.pathname.includes("edit-slider"),x=F();o.useEffect(()=>{r&&y()},[]);const v={title:"",index:"",status:0,type:1,countries:[],excludeCheck:!1,image:null,shortDescription:""};o.useEffect(()=>{S()},[h.pathname]);const{formik:V,setFieldValue:t,values:l,handleChange:c,touched:d,errors:i,handleSubmit:g,resetForm:S}=U({initialValues:v,validationSchema:R,onSubmit:async s=>{n.loading("Createing Slider");var a=new FormData;a.append("title",s.title),a.append("index",s.index),a.append("selected_countries",s.countries),a.append("status",s.status),a.append("type",s.type),a.append("id",m.id),a.append("image",s.image),a.append("excluded",s.excludeCheck),a.append("content",s.content);let u;r?u=await L(a):u=await D(a),n.dismiss(),u.status==200?(n.success(`Slider ${r?"Updated":"Created"}`),x("/adminpanel/manage-sliders")):n.error(u.response.data.message)}}),C=async()=>{let s=await B();N(s)},y=async()=>{n.loading("Loading Slider");let s=await A(m==null?void 0:m.id);n.dismiss(),s?(t("title",s.title),t("index",s.index),t("countries",s.countries?JSON.parse(s.countries):[]),t("type",s.type),t("status",s.status),t("image",s.image),t("content",s.content)):(n.error("Promotion Not found"),x("/adminpanel/manage-promotions"))};o.useEffect(()=>{C()},[]);const j=s=>{t("countries",s)},k=s=>{const a=URL.createObjectURL(s.target.files[0]);b(a),t("image",s.target.files[0])};return e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("div",{class:"col-md-12",children:e.jsx("div",{class:"page-header-title",children:e.jsxs("h2",{class:"mb-5",children:[r?"Edit":"Add"," Slider"]})})}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputEmail4",children:"Title"}),e.jsx("input",{type:"text",name:"title",value:l.title,className:`form-control ${i.title&&d.title&&"is-invalid"}`,id:"inputEmail4",placeholder:"title",onChange:c}),i.title&&d.title&&e.jsx("p",{className:"invalid-feedback",children:i.title})]}),e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputPassword4",children:"Index"}),e.jsx("input",{name:"index",onChange:c,type:"text",className:`form-control ${i.index&&d.index&&"is-invalid"}`,id:"inputPassword4",placeholder:"Slider index",value:l.index}),i.index&&d.index&&e.jsx("p",{className:"invalid-feedback",children:i.index})]}),e.jsxs("div",{className:"form-group col-md-12",children:[e.jsx("label",{className:"form-label",htmlFor:"inputPassword4",children:"Slider Content"}),e.jsx("textarea",{name:"content",onChange:c,type:"text",className:"form-control ",id:"inputPassword4",placeholder:"Slider content",value:l.content,style:{height:"300px"}})]}),e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Type"}),e.jsxs("select",{name:"type",onChange:c,value:l.type,placeholder:"Select type",className:"form-select",children:[e.jsx("option",{value:1,children:"All Countries"}),e.jsx("option",{value:2,children:"Specific Countries"})]})]}),e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Status"}),e.jsxs("select",{name:"status",onChange:c,value:l.status,className:"form-select",children:[e.jsx("option",{value:1,children:"Active"}),e.jsx("option",{value:0,children:"Draft"})]})]})]}),l.type==2&&e.jsx("div",{className:"row",children:e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Countries"}),e.jsx(I,{options:f,selectedValues:l.countries,onSelect:j,onRemove:j,displayValue:"name",className:"form-select p-1"})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-danger",children:"*"})," Recommended resolution is 1920 * 1080 with file size"]}),e.jsxs("label",{className:"btn btn-outline-secondary",htmlFor:"flupld",children:[e.jsx("i",{className:"ti ti-upload me-2"})," Click to Upload"]}),e.jsx("input",{onChange:k,type:"file",id:"flupld",className:`d-none ${i.image&&d.image&&"is-invalid"}`}),i.image&&d.image&&e.jsx("p",{className:"invalid-feedback",children:i.image})]})}),(p||l.image)&&e.jsx("div",{className:"col-auto ",children:e.jsx("img",{src:p||P+l.image,alt:"user-image",className:"wid-100 rounded"})})]}),e.jsxs("div",{className:"form-group col-md-4",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Check to exclude countries"}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:"gridCheck",name:"excludeCheck",checked:l.excludeCheck,onChange:c}),e.jsx("label",{className:"form-check-label",htmlFor:"gridCheck",children:"Exclude"})]})]}),e.jsxs("button",{onClick:g,type:"submit",className:"btn btn-primary",children:[r?"Update":"Create","  Slider"]})]})})})]})})};export{$ as default};
