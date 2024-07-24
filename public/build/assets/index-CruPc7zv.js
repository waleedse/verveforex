import{r as d,u as S,a as D,b as L,_ as n,j as e}from"./app-zisHiWb0.js";import{u as P}from"./index.esm-O-gOiDKM.js";import{M as F,c as E}from"./quill.snow-CRdhNnzz.js";import{g as U,a as A,u as I,b as R}from"./index-OlUGPo4w.js";import{I as _}from"./useAxios-Lz-iII4a.js";import"./commonService-UHry8wXh.js";const z=()=>{const[j,b]=d.useState([]),[h,N]=d.useState(null),m=S(),u=D(),c=u.pathname.includes("edit-promotion"),x=L();d.useEffect(()=>{c&&y()},[]);const v={title:"",websiteLink:"",status:0,type:1,countries:[],excludeCheck:!1,image:null,shortDescription:""};d.useEffect(()=>{k()},[u.pathname]);const{formik:$,setFieldValue:a,values:l,handleChange:r,touched:o,errors:t,handleSubmit:f,resetForm:k}=P({initialValues:v,validationSchema:E,onSubmit:async s=>{n.loading("createing promotion");var i=new FormData;i.append("title",s.title),i.append("link",s.websiteLink),i.append("selectedCountries",s.countries),i.append("status",s.status),i.append("type",s.type),i.append("id",m.id),i.append("image",s.image),i.append("excludeCheck",s.excludeCheck),i.append("shortDescription",s.shortDescription);let p;c?p=await I(i):p=await A(i),n.dismiss(),p.status==200?(n.success(`Promotion ${c?"Updated":"Created"}`),x("/adminpanel/manage-promotion")):n.error(p.response.data.message)}}),C=async()=>{let s=await R();b(s)},y=async()=>{n.loading("Loading Promotion");let s=await U(m==null?void 0:m.id);n.dismiss(),s?(a("title",s.title),a("websiteLink",s.link),a("countries",s.countries?JSON.parse(s.countries):[]),a("type",s.type),a("status",s.status),a("image",s.image),a("shortDescription",s.short_description),a("shortDescription",s.short_description)):(n.error("Promotion Not found"),x("/adminpanel/manage-promotions"))};d.useEffect(()=>{C()},[]);const g=s=>{a("countries",s)},w=s=>{const i=URL.createObjectURL(s.target.files[0]);N(i),a("image",s.target.files[0])};return e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("div",{class:"col-md-12",children:e.jsx("div",{class:"page-header-title",children:e.jsxs("h2",{class:"mb-5",children:[c?"Edit":"Add"," Promotion"]})})}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputEmail4",children:"Title"}),e.jsx("input",{type:"text",name:"title",value:l.title,className:`form-control ${t.title&&o.title&&"is-invalid"}`,id:"inputEmail4",placeholder:"title",onChange:r}),t.title&&o.title&&e.jsx("p",{className:"invalid-feedback",children:t.title})]}),e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputPassword4",children:"Website Link"}),e.jsx("input",{name:"websiteLink",onChange:r,type:"text",className:`form-control ${t.websiteLink&&o.websiteLink&&"is-invalid"}`,id:"inputPassword4",placeholder:"Website promotion link",value:l.websiteLink}),t.websiteLink&&o.websiteLink&&e.jsx("p",{className:"invalid-feedback",children:t.websiteLink})]}),e.jsxs("div",{className:"form-group col-md-12",children:[e.jsx("label",{className:"form-label",htmlFor:"inputPassword4",children:"Short Description"}),e.jsx("input",{name:"shortDescription",onChange:r,type:"text",className:`form-control ${t.shortDescription&&o.shortDescription&&"is-invalid"}`,id:"inputPassword4",placeholder:"Short description",value:l.shortDescription}),t.shortDescription&&o.shortDescription&&e.jsx("p",{className:"invalid-feedback",children:t.shortDescription})]}),e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Type"}),e.jsxs("select",{name:"type",onChange:r,value:l.type,placeholder:"Select type",className:"form-select",children:[e.jsx("option",{value:1,children:"All Countries"}),e.jsx("option",{value:2,children:"Specific Countries"})]})]}),e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Status"}),e.jsxs("select",{name:"status",onChange:r,value:l.status,className:"form-select",children:[e.jsx("option",{value:1,children:"Active"}),e.jsx("option",{value:0,children:"Draft"})]})]})]}),l.type==2&&e.jsx("div",{className:"row",children:e.jsxs("div",{className:"form-group col-md-6",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Countries"}),e.jsx(F,{options:j,selectedValues:l.countries,onSelect:g,onRemove:g,displayValue:"name",className:"form-select p-1"})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group ",children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-danger",children:"*"})," Recommended resolution is 640*640 with file size"]}),e.jsxs("label",{className:"btn btn-outline-secondary",htmlFor:"flupld",children:[e.jsx("i",{className:"ti ti-upload me-2"})," Click to Upload"]}),e.jsx("input",{onChange:w,type:"file",id:"flupld",className:`d-none ${t.image&&o.image&&"is-invalid"}`}),t.image&&o.image&&e.jsx("p",{className:"invalid-feedback",children:t.image})]})}),(h||l.image)&&e.jsx("div",{className:"col-auto ",children:e.jsx("img",{src:h||_+l.image,alt:"user-image",className:"wid-100 rounded"})})]}),e.jsxs("div",{className:"form-group col-md-4",children:[e.jsx("label",{className:"form-label",htmlFor:"inputState",children:"Check to exclude countries"}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:"gridCheck",name:"excludeCheck",checked:l.excludeCheck,onChange:r}),e.jsx("label",{className:"form-check-label",htmlFor:"gridCheck",children:"Exclude"})]})]}),e.jsxs("button",{onClick:f,type:"submit",className:"btn btn-primary",children:[c?"Update":"Create","  Promotion"]})]})})})]})})};export{z as default};
