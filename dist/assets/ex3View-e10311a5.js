import{H as $,F as C,V as A}from"./Verifier-49f0cdfc.js";import{e as F,_ as I,r as g,o as n,c as a,d as t,f as N,g as d,h as p,w as u,v as b,F as _,i as k,t as h,j as v,n as V,a as B,p as H,k as M}from"./index-e149eb8f.js";const P=F({name:"ex3",components:{Header:$,Footer:C,Verifier:A},data(){return{submitted:!1,inputValues:[],tableValues:[],answer:0,number:0,secondnumber:0,number_arr:[],result:"still false",oneto16:[1,2,4,8,16],oneto64:[1,2,4,8,16,32,64],bordercolorarr:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarrtable:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarrtable:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],finalarr:[],difficulty:""}},methods:{hint(){},seteasy(){this.difficulty="easy",this.finalarr=this.oneto16,this.reloadPage()},sethard(){this.difficulty="hard",this.finalarr=this.oneto64,this.reloadPage()},getrandomnumber(e,r){return Math.floor(Math.random()*(r-e+1))+e},dec2bin(e){return(e>>>0).toString(2)},getarrayofnumbers(e){for(var r=e.split(""),c=[],f,i=0;i<r.length;i++)r[i]==1&&(f=r.length-i-1,c.push(Math.pow(2,f)));return c},submitAnswer(){this.submitted=!0,this.checkAnswer()},reloadPage(){if(this.difficulty=="easy")this.secondnumber=this.getrandomnumber(2,31),this.number=this.getrandomnumber(2,20);else if(this.difficulty=="hard")this.secondnumber=this.getrandomnumber(20,127),this.number=this.getrandomnumber(20,100);else return;this.tableValues=[],this.inputValues=[],this.number_arr=this.getarrayofnumbers(this.dec2bin(this.secondnumber))},checkAnswer(){this.result="still false";for(var e=0;e<this.borderboolarr.length;e++)this.bordercolorarr[e]="black",console.log("black");for(var e=0;e<this.borderboolarrtable.length;e++)this.bordercolorarrtable[e]="black",console.log("black");for(var r=0;r<this.number_arr.length;r++){if(this.inputValues[r]==null||this.inputValues[r]==""){this.result="incomplete";return}this.inputValues[r]!=this.number_arr[r]?(this.result="false",this.borderboolarr[r]=!1,console.log("WAS set here 0")):this.borderboolarr[r]=!0}if(this.inputValues[this.number_arr.length]==null||this.inputValues[r]==""){this.result="incomplete";return}this.inputValues[this.number_arr.length]!=this.number*this.secondnumber?(this.borderboolarr[this.number_arr.length]=!1,console.log("debug"),this.result="false",console.log("WAS set here 1"),console.log("cause ionput vals len -1 is "+this.inputValues[this.number_arr.length])):this.borderboolarr[this.number_arr.length]=!0;for(var r=0;r<this.tableValues.length;r++)this.tableValues[r]!=this.oneto64[r]*this.number?(this.result="false",this.borderboolarrtable[r]=!1):this.borderboolarrtable[r]=!0;for(var e=0;e<this.inputValues.length;e++)this.borderboolarr[e]?(this.bordercolorarr[e]="black",console.log("black")):(this.bordercolorarr[e]="red",console.log("red ?"));for(var e=0;e<this.borderboolarrtable.length;e++)this.borderboolarrtable[e]?(this.bordercolorarrtable[e]="black",console.log("black")):(this.bordercolorarrtable[e]="red",console.log("red ?"));this.result=="still false"&&(this.result="correct")},reset(){for(var e=0;e<this.borderboolarr.length;e++)this.bordercolorarr[e]="black",console.log("black");for(var e=0;e<this.borderboolarrtable.length;e++)this.bordercolorarrtable[e]="black",console.log("black");this.inputValues=[],this.tableValues=[]},info(){console.log("beginning number arr length is "+this.number_arr.length),console.log("beginning and number array is "+this.number_arr),console.log("this number is "+this.number);for(var e=0;e<this.borderboolarr.length;e++)this.bordercolorarr[e]="black",console.log("black");for(var e=0;e<this.borderboolarrtable.length;e++)this.bordercolorarrtable[e]="black",console.log("black");this.inputValues=[],this.tableValues=[];for(var r=0;r<this.number_arr.length;r++)this.inputValues[r]=this.number_arr[r];this.inputValues[this.number_arr.length]=this.number*this.secondnumber;for(var e=0;e<this.oneto64.length;e++)this.tableValues[e]=this.oneto64[e]*this.number;console.log("from help "+this.inputValues)}}});const s=e=>(H("data-v-f0891325"),e=e(),M(),e),U=s(()=>t("br",null,null,-1)),W={class:"ex3"},z=s(()=>t("br",null,null,-1)),D={class:"flex-container-button"},E=s(()=>t("div",{class:"info title"},null,-1)),T=[E],j=s(()=>t("div",{class:"info title"},null,-1)),L=[j],R={id:"warning"},q=s(()=>t("h2",{class:"title"}," Wähle Schwierigkeitsgrad ",-1)),G=[q],J=s(()=>t("br",null,null,-1)),K={class:"list"},O=["id","onUpdate:modelValue"],Q={key:1,class:"flex-childgreen"},X={key:2,class:"flex-childgreen"},Y=s(()=>t("span",null,null,-1)),Z=s(()=>t("br",null,null,-1)),x=s(()=>t("br",null,null,-1)),ee=s(()=>t("br",null,null,-1)),re={class:"container"},te=["id","onUpdate:modelValue"],le=s(()=>t("br",null,null,-1)),se=s(()=>t("br",null,null,-1)),oe=s(()=>t("br",null,null,-1)),ne=s(()=>t("br",null,null,-1));function ae(e,r,c,f,i,ie){const y=g("Verifier"),w=g("Header"),S=g("Footer");return n(),a(_,null,[U,t("div",W,[this.submitted?(n(),N(y,{key:0,correctSolution:this.result=="correct",ifincomplete:this.result=="incomplete",tip:this.hint(),onCloseVerifier:r[0]||(r[0]=l=>this.submitted=!1)},null,8,["correctSolution","ifincomplete","tip"])):d("",!0),p(w,{task_number:"3",task_name:"Aufgabe 3",is_ex1:!1,is_ex2:!1,is_ex3:!0}),z,t("div",D,[t("button",{class:"btn_difficulty",onClick:r[1]||(r[1]=l=>e.seteasy())},T),t("button",{class:"btn_difficulty2",onClick:r[2]||(r[2]=l=>e.sethard())},L)]),u(t("p",R,G,512),[[b,e.number==0]]),J,t("div",K,[(n(!0),a(_,null,k(e.number_arr.length+1,(l,o)=>(n(),a("div",{key:l,class:"flex-container"},[l==1?u((n(),a("h1",{key:0,class:"flex-childgreen"},h(e.number)+" * "+h(e.secondnumber)+" = "+h(e.number)+" * ( ",513)),[[b,e.number!=0]]):d("",!0),u(t("input",{class:"flex-child magenta",type:"number",style:V("--borderColor:"+e.bordercolorarr[o]+";"),ref_for:!0,ref:"inputs",id:"str"+o,"onUpdate:modelValue":m=>e.inputValues[o]=m},null,12,O),[[b,e.number!=0],[v,e.inputValues[o]]]),l!=e.number_arr.length&&l!=e.number_arr.length+1?(n(),a("h1",Q," + ")):d("",!0),l==e.number_arr.length?(n(),a("h1",X,[B(" ) = "),Y])):d("",!0)]))),128))]),Z,x,ee,(n(!0),a(_,null,k(e.finalarr.length,(l,o)=>(n(),a("div",{class:"table",key:l},[t("div",re,[u(t("h1",{class:"containerchild"},h(e.number)+" * "+h(e.finalarr[o])+" =   ",513),[[b,e.number!=0]]),u(t("input",{class:"containersecondchild",type:"number",style:V("--borderColor:"+e.bordercolorarrtable[o]+";"),ref_for:!0,ref:"inputs",id:"table"+o,"onUpdate:modelValue":m=>e.tableValues[o]=m},null,12,te),[[b,e.number!=0],[v,e.tableValues[o]]])])]))),128)),le,se,oe,ne,p(S,{onNext_task:r[3]||(r[3]=l=>e.reloadPage()),onCheck_answer:r[4]||(r[4]=l=>e.submitAnswer()),onReset:r[5]||(r[5]=l=>e.reset()),onInfo:r[6]||(r[6]=l=>e.info())})])],64)}const he=I(P,[["render",ae],["__scopeId","data-v-f0891325"]]);export{he as default};