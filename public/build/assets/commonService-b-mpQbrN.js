import{u as s}from"./useAxios-Lz-iII4a.js";const a=async()=>{const t=s();try{return(await t.get("get-countries")).data}catch(e){return console.error("Error fetching data:",e),null}},o=async()=>{const t=s();try{return(await t.get("get-promotions")).data}catch{return null}},c=async()=>{const t=s();try{return(await t.get("get-home-slider")).data}catch{return null}},u=async()=>{const t=s();try{return(await t.get("get-feature-news")).data}catch{return null}},g=async t=>{const e=s();try{return(await e.get(`get-news-by-slug/${t}`)).data}catch{return null}},l=async t=>{const e=s();try{return(await e.get("get-news")).data}catch{return null}},i=async()=>{const t=s();try{return(await t.get("get-all-brokers/1")).data}catch{return null}},p=async t=>{const e=s();try{return(await e.get(`get-ib-with-refferals/${t}`)).data}catch{return null}};export{a,i as b,o as c,c as d,u as e,g as f,p as g,l as h};