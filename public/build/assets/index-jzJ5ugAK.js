import{r as t,j as s,I as d,L as r}from"./app-MbfiU_30.js";import{k as h}from"./index-gMrTogDv.js";const o=()=>{const[a,i]=t.useState([]),c=async()=>{let e=await h();i(e)};return t.useEffect(()=>{c()},[]),s.jsx("div",{className:"row",children:s.jsxs("div",{className:"col-sm-12",children:[s.jsx("div",{class:"page-header-title",children:s.jsx("h2",{class:"mb-5",children:"Manage Clients"})}),s.jsx("div",{className:"card table-card",children:s.jsxs("div",{className:"card-body",children:[s.jsx("div",{className:"text-end p-4 pb-sm-2"}),s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"table table-hover",id:"pc-dt-simple",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{className:"text-end",children:"#"}),s.jsx("th",{children:"Client"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Phone"}),s.jsx("th",{children:"Country"}),s.jsx("th",{children:"Email verification"}),s.jsx("th",{children:"Status"}),s.jsx("th",{className:"text-center",children:"Actions"})]})}),s.jsx("tbody",{children:a&&a.map((e,n)=>{var l;return s.jsxs("tr",{children:[s.jsx("td",{className:"text-end",children:e.id}),s.jsx("td",{children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-auto pe-0",children:s.jsx("img",{src:d+e.image,alt:"user-image",className:"wid-40 rounded"})}),s.jsx("div",{className:"col",children:s.jsxs("h6",{className:"mb-1",children:[e.first_name," ",e==null?void 0:e.last_name]})})]})}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.phone}),s.jsx("td",{children:(l=e==null?void 0:e.country)==null?void 0:l.name}),s.jsx("td",{children:e.email_verified_at?"Verified":"Pending email verification"}),s.jsxs("td",{children:[s.jsx("span",{className:`badge bg-light-${e.status!="active"?"danger":"success"}  f-12`,children:e.status})," "]}),s.jsx("td",{className:"text-center",children:s.jsx("ul",{className:"list-inline me-auto mb-0",children:s.jsx("li",{className:"list-inline-item align-bottom","data-bs-toggle":"tooltip",title:"Edit",children:s.jsx(r,{to:`/adminpanel/client-detail/${e.id}`,className:"avtar avtar-xs btn-link-success btn-pc-default",children:s.jsx("i",{className:"ti ti-eye f-18"})})})})})]},n)})})]})})]})})]})})};export{o as default};