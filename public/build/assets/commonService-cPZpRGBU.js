import{u as r}from"./useAxios-anTgZer3.js";const a=async e=>{const t=r();try{return(await t.post("register",e)).data}catch(s){return s}},o=async e=>{const t=r();try{return(await t.post("password/email",e)).data}catch(s){return s}},c=async e=>{const t=r();try{return(await t.post(`resend-verification-email/${e}`)).data}catch(s){return s}},i=async()=>{const e=r();try{return(await e.get("get-promotions")).data}catch{return null}},p=async()=>{const e=r();try{return(await e.get("get-client-brokers")).data}catch{return null}},u=async(e="")=>{const t=r();try{return(await t.get(`get-client-broker-links${e!=""?"/"+e:""}`)).data}catch{return null}},l=async e=>{const t=r();try{return(await t.post("update-client-broker-links",e)).data}catch{return null}},d=async e=>{const t=r();try{return(await t.post("update-profile",e,{headers:{"content-type":!1,"mime-type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch{return null}},y=async e=>{const t=r();try{return(await t.post("add-note",e)).data}catch{return null}},g=async e=>{const t=r();try{return(await t.get(`get-notes/${e}`)).data}catch{return null}},m=async e=>{const t=r();try{return(await t.get("get-client-broker-commissions")).data}catch{return null}},h=async e=>{const t=r();try{return(await t.post("create-ib",e)).data}catch{return null}},w=async e=>{const t=r();try{return(await t.post("create-client-broker",e)).data}catch(s){return s}},x=async e=>{const t=r();try{return(await t.post("add-client-promotion",e)).data}catch(s){return s}},I=async e=>{const t=r();try{return(await t.get(`deactivate-promotion/${e}`)).data}catch(s){return s}},k=async()=>{const e=r();try{return(await e.get("get-client-dashboard-stats")).data}catch(t){return t}};export{c as R,y as a,u as b,i as c,x as d,I as e,m as f,g,k as h,p as i,w as j,h as k,l,a as m,o as r,d as u};