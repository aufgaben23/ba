import{H as M,F as A,V as C}from"./Verifier-07c01984.js";import{f as F,_ as H,r as g,o as n,c as o,e as t,g as I,h as d,i as v,w as i,v as u,a as m,t as h,F as _,j as y,k,n as V,p as N,d as U}from"./index-31024c11.js";const B=F({name:"ex3",components:{Header:M,Footer:A,Verifier:C},data(){return{submitted:!1,inputValues:[],tableValues:[],answer:0,number:0,secondnumber:0,number_arr:[],result:"still false",bordercolorarr:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarrtable:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarrtable:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],finalarr:[],difficulty:"",smallscreen:!1}},methods:{hint(){},seteasy(){this.difficulty="easy",this.reloadPage()},sethard(){this.difficulty="hard",this.reloadPage()},getrandomnumber(e,r){return Math.floor(Math.random()*(r-e+1))+e},dec2bin(e){return(e>>>0).toString(2)},getarrayofnumbers(e){for(var r=e.split(""),b=[],f,c=0;c<r.length;c++)r[c]==1&&(f=r.length-c-1,b.push(Math.pow(2,f)));return b},getfinalarr(e){for(var r=[],b=1;b<=e;b*=2)r.push(b);this.finalarr=r,console.log("the final arr is now "+this.finalarr)},submitAnswer(){this.submitted=!0,this.checkAnswer()},reloadPage(){if(this.difficulty=="easy")this.secondnumber=this.getrandomnumber(2,6),this.secondnumber==2?this.number=this.getrandomnumber(3,10):this.secondnumber==3?this.number=this.getrandomnumber(3,8):this.secondnumber==4?this.number=this.getrandomnumber(3,6):this.secondnumber==5?this.number=this.getrandomnumber(3,5):this.secondnumber==6&&(this.number=this.getrandomnumber(3,5));else if(this.difficulty=="hard")this.secondnumber=this.getrandomnumber(3,9),this.secondnumber==3?this.number=this.getrandomnumber(9,12):this.secondnumber==4?this.number=this.getrandomnumber(7,8):this.secondnumber==5?this.number=this.getrandomnumber(7,8):this.secondnumber==6?this.number=this.getrandomnumber(6,7):this.secondnumber==7?this.number=this.getrandomnumber(4,7):this.secondnumber==8?this.number=this.getrandomnumber(4,6):this.secondnumber==9&&(this.number=this.getrandomnumber(4,6));else return;const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);e>=600&&e<=1e3&&(this.smallscreen=!0),this.tableValues=[],this.inputValues=[],this.number_arr=this.getarrayofnumbers(this.dec2bin(this.number)),console.log("the number arr is "+this.number_arr);var r=this.number_arr[0];this.getfinalarr(r)},checkAnswer(){this.result="still false";for(var e=0;e<this.borderboolarr.length;e++)this.bordercolorarr[e]="black";for(var e=0;e<this.borderboolarrtable.length;e++)this.bordercolorarrtable[e]="black";for(var r=0;r<this.number_arr.length;r++){if(this.inputValues[r]==null||this.inputValues[r]==""){this.result="incomplete";return}this.inputValues[r]!=this.number_arr[r]?(this.result="false",this.borderboolarr[r]=!1):this.borderboolarr[r]=!0}if(this.inputValues[this.number_arr.length]==null||this.inputValues[r]==""){this.result="incomplete";return}this.inputValues[this.number_arr.length]!=Math.pow(this.secondnumber,this.number)?(this.borderboolarr[this.number_arr.length]=!1,this.result="false"):this.borderboolarr[this.number_arr.length]=!0;for(var r=0;r<this.tableValues.length;r++)this.tableValues[r]!=Math.pow(this.secondnumber,this.finalarr[r])?(console.log("final arr is "+this.finalarr),console.log("2nd number is "+this.secondnumber),this.result="false",this.borderboolarrtable[r]=!1):this.borderboolarrtable[r]=!0;for(var e=0;e<this.inputValues.length;e++)this.borderboolarr[e]?this.bordercolorarr[e]="black":this.bordercolorarr[e]="red";for(var e=0;e<this.borderboolarrtable.length;e++)this.borderboolarrtable[e]?this.bordercolorarrtable[e]="black":this.bordercolorarrtable[e]="red";this.result=="still false"&&(this.result="correct")},reset(){for(var e=0;e<this.borderboolarr.length;e++)this.bordercolorarr[e]="black";for(var e=0;e<this.borderboolarrtable.length;e++)this.bordercolorarrtable[e]="black";this.inputValues=[],this.tableValues=[]},info(){for(var e=0;e<this.borderboolarr.length;e++)this.bordercolorarr[e]="black";for(var e=0;e<this.borderboolarrtable.length;e++)this.bordercolorarrtable[e]="black";this.inputValues=[],this.tableValues=[];for(var r=0;r<this.number_arr.length;r++)this.inputValues[r]=this.number_arr[r];this.inputValues[this.number_arr.length]=Math.pow(this.secondnumber,this.number),console.log("final answer "+Math.pow(this.secondnumber,this.number));for(var e=0;e<this.finalarr.length;e++)this.tableValues[e]=Math.pow(this.secondnumber,this.finalarr[e])}}});const a=e=>(N("data-v-2c588c15"),e=e(),U(),e),P=a(()=>t("br",null,null,-1)),E={class:"ex3"},z=a(()=>t("br",null,null,-1)),D={id:"warning"},T=a(()=>t("h2",{class:"title"}," Wähle Schwierigkeitsgrad ",-1)),j=[T],L={id:"the_task"},R={class:"description"},W={class:"description_tabelle"},q={class:"container"},G={class:"containerchild"},J=["id","onUpdate:modelValue"],K=a(()=>t("br",null,null,-1)),O=a(()=>t("br",null,null,-1)),Q=a(()=>t("br",null,null,-1)),X={class:"list"},Y={key:0,class:"flex-childgreen"},Z=["id","onUpdate:modelValue"],x={key:2,class:"multi"},ee={key:3,class:"flex-childgreen"},re=a(()=>t("span",null,null,-1)),te={key:1},se=a(()=>t("br",null,null,-1)),ne=[se],le=a(()=>t("br",null,null,-1)),oe=a(()=>t("br",null,null,-1));function ae(e,r,b,f,c,ie){const w=g("Verifier"),S=g("Header"),$=g("Footer");return n(),o(_,null,[P,t("div",E,[this.submitted?(n(),I(w,{key:0,correctSolution:this.result=="correct",ifincomplete:this.result=="incomplete",tip:this.hint(),onCloseVerifier:r[0]||(r[0]=s=>this.submitted=!1)},null,8,["correctSolution","ifincomplete","tip"])):d("",!0),v(S,{onSeteasy:r[1]||(r[1]=s=>e.seteasy()),onSethard:r[2]||(r[2]=s=>e.sethard()),task_number:"3",task_name:"Aufgabe 6",is_ex1:!1,is_ex2:!1,is_ex3:!1,is_ex4:!1,is_ex5:!1,is_ex6:!0}),z,i(t("p",D,j,512),[[u,e.number==0]]),i(t("p",L,[t("h1",R,[m(" Finde "+h(e.secondnumber)+" ",1),t("sup",null,h(e.number),1)])],512),[[u,e.number!=0]]),i(t("h2",W," Vorbereitungstabelle ",512),[[u,e.number!=0]]),(n(!0),o(_,null,y(e.finalarr.length,(s,l)=>(n(),o("div",{class:"table",key:s},[t("div",q,[i(t("h1",G,[m(h(e.secondnumber)+" ",1),t("sup",null,h(e.finalarr[l]),1),m("  = ")],512),[[u,e.number!=0]]),i(t("input",{class:"containersecondchild",type:"number",style:V("--borderColor:"+e.bordercolorarrtable[l]+";"),ref_for:!0,ref:"inputs",id:"table"+l,"onUpdate:modelValue":p=>e.tableValues[l]=p},null,12,J),[[u,e.number!=0],[k,e.tableValues[l]]])])]))),128)),K,O,Q,t("div",X,[(n(!0),o(_,null,y(e.number_arr.length,(s,l)=>(n(),o("div",{key:s,class:"flex-container"},[s==1?i((n(),o("h1",Y,[m(h(e.secondnumber)+" ",1),t("sup",null,h(e.number),1),m(" =  ")],512)),[[u,e.number!=0]]):d("",!0),s!=0?i((n(),o("h1",{key:1,class:"flex-childgreen"},h(e.secondnumber),513)),[[u,e.number!=0]]):d("",!0),i(t("input",{class:"list-inputs",type:"number",style:V("--borderColor:"+e.bordercolorarr[l]+";"),ref_for:!0,ref:"inputs",id:"str"+l,"onUpdate:modelValue":p=>e.inputValues[l]=p},null,12,Z),[[u,e.number!=0],[k,e.inputValues[l]]]),s!=e.number_arr.length&&s!=e.number_arr.length+1?(n(),o("h1",x," *   ")):d("",!0),s==e.number_arr.length?(n(),o("h1",ee,[m(" =   "),re])):d("",!0)]))),128)),i(t("input",{class:"list-inputs",type:"number",style:V("--borderColor:"+e.bordercolorarr[e.number_arr.length]+";"),ref:"inputs",id:"answer","onUpdate:modelValue":r[3]||(r[3]=s=>e.inputValues[e.number_arr.length]=s)},null,4),[[u,e.number!=0],[k,e.inputValues[e.number_arr.length]]])]),e.smallscreen?d("",!0):(n(),o("span",te,ne)),le,oe,v($,{onNext_task:r[4]||(r[4]=s=>e.reloadPage()),onCheck_answer:r[5]||(r[5]=s=>e.submitAnswer()),onReset:r[6]||(r[6]=s=>e.reset()),onInfo:r[7]||(r[7]=s=>e.info())})])],64)}const he=H(B,[["render",ae],["__scopeId","data-v-2c588c15"]]);export{he as default};
