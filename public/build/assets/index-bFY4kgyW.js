import{r as l,j as s,L as r}from"./app-Q2pmJbPb.js";import{d as o}from"./commonService-Petjnc5L.js";import"./useAxios-ESFQUA61.js";const N=()=>{const[a,d]=l.useState(null),t=async()=>{let e=await o();d(e),console.log(e)};return l.useEffect(()=>{t()},[]),l.useEffect(()=>{window.scrollTo(0,0)},[]),s.jsxs("div",{children:[s.jsxs("section",{className:"page-title centred",children:[s.jsx("div",{className:"bg-layer",style:{backgroundImage:"url(/assets/images/background/page-title.jpg)"}}),s.jsxs("div",{className:"line-box",children:[s.jsx("div",{className:"line-1"}),s.jsx("div",{className:"line-2"})]}),s.jsx("div",{className:"auto-container",children:s.jsxs("div",{className:"content-box",children:[s.jsx("h1",{children:"News"}),s.jsxs("ul",{className:"bread-crumb clearfix",children:[s.jsx("li",{children:s.jsx("a",{href:"/",children:"Home"})}),s.jsx("li",{children:"news"}),s.jsx("li",{})]})]})})]}),a&&s.jsx("section",{className:"news-style-two sec-pad",children:s.jsxs("div",{className:"auto-container",children:[s.jsxs("div",{className:"sec-title",children:[s.jsx("span",{className:"sub-title",children:"News & Updates"}),s.jsx("div",{className:"link-box"})]}),s.jsx("div",{className:"row clearfix text-center",children:a==null?void 0:a.map((e,i)=>{var c,n;return s.jsx("div",{className:"col-lg-3 col-md-6 col-sm-12 news-block",children:s.jsx("div",{className:"news-block-one wow fadeInUp animated","data-wow-delay":"00ms","data-wow-duration":"1500ms",children:s.jsxs("div",{className:"inner-box",children:[s.jsxs("div",{className:"image-box",children:[s.jsx("figure",{className:"image",children:s.jsx(r,{to:`/news/${e==null?void 0:e.slug}`,children:s.jsx("img",{src:`uploads/${e==null?void 0:e.image}`,alt:!0})})}),s.jsxs("span",{className:"post-date",children:[(c=new Date(e.created_at))==null?void 0:c.toLocaleDateString("en-US",{day:"numeric"}),s.jsx("br",{}),(n=new Date(e.created_at))==null?void 0:n.toLocaleDateString("en-US",{month:"short"})]})]}),s.jsxs("div",{className:"lower-content",children:[s.jsx("h4",{children:s.jsx(r,{to:`/news/${e==null?void 0:e.slug}`,children:e.title})}),s.jsx("p",{className:"content-body",dangerouslySetInnerHTML:{__html:e.body}})]})]})})},i)})})]})})]})};export{N as default};
