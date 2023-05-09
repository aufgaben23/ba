import{H as P,F as N,V as T}from"./Verifier-929c8743.js";import{L as n}from"./leader-line-vue-b24e3c58.js";import{f as D,_ as z,r as S,o as a,c as d,g as R,h as m,i as H,w as p,v as E,e as y,t as F,F as w,j as C,n as V,k as A,p as W,d as G}from"./index-31bcb7df.js";const J=D({name:"ex2",components:{Header:P,Footer:N,Verifier:T},data(){return{submitted:!1,levels:[0,0,0,0,0,0,0,0,0,0],levelquotient:[0,0,0,0,0,0,0,0,0,0],quotientValues:[],inputValues1:[],inputValues2:[],inputValues3:[],inputValues4:[],inputValues5:[],number:0,secondnumber:0,lines:[],result:"still false",generated:!1,difficulty:"",bordercolorarr1:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr1:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr2:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr2:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr3:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr3:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr4:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr4:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr5:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr5:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarrquo:["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarrquo:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]}},created(){window.onpopstate=e=>{for(var t=0;t<this.lines.length;t++)this.lines[t].remove();this.lines=[]}},methods:{hint(){},seteasy(){this.difficulty="easy",this.reloadPage()},sethard(){this.difficulty="hard",this.reloadPage()},submitAnswer(){this.submitted=!0,this.checkAnswer()},getrandomnumber(e,t){return Math.floor(Math.random()*(t-e+1))+e},reloadPage(){this.levels=[0,0,0,0,0,0,0,0,0,0],this.levelquotient=[0,0,0,0,0,0,0,0,0,0];const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);if(e>=600&&e<=1e3)if(this.difficulty=="easy")this.number=this.getrandomnumber(5,12),this.secondnumber=this.getrandomnumber(3,20);else if(this.difficulty=="hard")this.number=this.getrandomnumber(5,12),this.secondnumber=this.getrandomnumber(20,50);else return;else if(this.difficulty=="easy")this.number=this.getrandomnumber(5,15),this.secondnumber=this.getrandomnumber(3,20);else if(this.difficulty=="hard")this.number=this.getrandomnumber(5,15),this.secondnumber=this.getrandomnumber(20,50);else return;this.number!=0&&(this.generated=!0);for(var t=this.number,I=this.secondnumber,g=t*I,o=0;o<this.lines.length;o++)this.lines[o].remove();this.lines=[];var h=[],b=2*I,f=!1,v=!1;t%2!=0&&(f=!0);for(var s=!1,o=1;o<5;o++)for(var r=0;r<this["borderboolarr"+o].length;r++)this["bordercolorarr"+o][r]="black",this["borderboolarr"+o][r]="true";for(var o=1;o<5;o++)(o=1)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="blue"),(o=2)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="green"),(o=3)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="yellow"),(o=4)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="orange"),(o=5)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="purple");for(var o=1;o<10;o++){var l=Math.floor(g/b),c=g%b;if(b>=g){this.levels[o]=1;break}this.levels[o]=this.levels[o]+l,this.levelquotient[o]=l,s?(this.levels[o]++,c!=0&&h.push(c),h.length>1&&h.shift(),s=!1):h[h.length-1]!=c&&(c!=0&&h.push(c),h.length>1&&(this.levels[o]++,h.shift())),l%2!=0&&(f?v=!0:f=!0),f&&v&&(s=!0,f=!1,v=!1),b=b*2}this.inputValues1=[],this.inputValues2=[],this.inputValues3=[],this.inputValues4=[],this.inputValues5=[],this.quotientValues=[],this.$nextTick(function(){var B=this.levels,L=[];for(let i=0;i<B.length-1;i++){if(i==0)for(let u=0;u<B[i+1];u++){var q=n.setLine(n.obj.pointAnchor(document.getElementById("out"+2*u),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus1"+u),{color:"red",x:"50%",y:"90%"})),k=n.setLine(n.obj.pointAnchor(document.getElementById("out"+(2*u+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus1"+u),{color:"red",x:"50%",y:"90%"}));this.lines.push(q),this.lines.push(k),u+1==B[1]&&2*u+3==t&&L.push("out"+(2*u+2))}if(i>0)for(let u=0;u<B[i+1];u++){var U=this.levelquotient[i+1]>u&&this.levelquotient[i+1]>1,j=this.levelquotient[i]>2*u&&this.levelquotient[i]>1,$=this.levelquotient[i]>2*u+1&&this.levelquotient[i]>1;if(U){if(j){var q=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+i+2*u),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(q)}else if(!j){var q=n.setLine(n.obj.pointAnchor(document.getElementById("str"+i+2*u),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"0%",y:"-15%",path:"arc"}));q.color="green",this.lines.push(q)}}if(!U){if(j){var q=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+i+2*u),{x:"50%",y:"0 %"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(q)}else if(!j){var q=n.setLine(n.obj.pointAnchor(document.getElementById("str"+i+2*u),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(q)}}if(u+1==B[i+1]&&L.length>0&&B[i]<2*u+2){var k=k=n.setLine(n.obj.pointAnchor(document.getElementById(L.pop()),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(k)}else{if(U){if($){var k=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+i+(2*u+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(k)}else if(!$){var k=n.setLine(n.obj.pointAnchor(document.getElementById("str"+i+(2*u+1)),{x:"50%",y:"-15%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"0%",y:"-15%",path:"arc"}));this.lines.push(k),k.color="blue"}}if(!U){if($){var k=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+i+(2*u+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(k)}else if(!$){var k=n.setLine(n.obj.pointAnchor(document.getElementById("str"+i+(2*u+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(i+1)+u),{color:"red",x:"50%",y:"85%",path:"arc"}));this.lines.push(k)}}u+1==B[i+1]&&2*u+3==B[i]&&(this.levelquotient[i]==B[i]?L.push("quo"+i+(2*u+2)):L.push("str"+i+(2*u+2)))}}}})},checkAnswer(){this.$nextTick(function(){this.result="still false";for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["bordercolorarr"+e][t]="black",this["borderboolarr"+e][t]="true";for(var e=1;e<5;e++)(e=1)&&(this.bordercolorarrquo[e]="blue",this.borderboolarrquo[e]="true"),(e=2)&&(this.bordercolorarrquo[e]="green",this.borderboolarrquo[e]="true"),(e=3)&&(this.bordercolorarrquo[e]="yellow",this.borderboolarrquo[e]="true"),(e=4)&&(this.bordercolorarrquo[e]="orange",this.borderboolarrquo[e]="true"),(e=5)&&(this.bordercolorarrquo[e]="purple",this.borderboolarrquo[e]="true");var I=this.number,g=this.secondnumber,o=I*g,h=[],b=2*g,f=!1,v=!1;I%2!=0&&(f=!0);for(var s=!1,e=1;e<10;e++){var r=Math.floor(o/b),l=o%b;if(b>=o&&(this["inputValues"+e][0]==null||this["inputValues"+e][0]=="")&&(this.result="incomplete"),b>=o){this["inputValues"+e][0]!=o&&(this["borderboolarr"+e][0]="false",this.result="false");break}for(var c=0;c<r;c++)if(this.levelquotient[e]>c&&this.levelquotient[e]>1){if(this.quotientValues[e]==null||this.quotientValues[e]==""){this.result="incomplete";return}this.quotientValues[e]!=(o-l)/r&&(this.result="false",this.borderboolarrquo[e]="false")}else{if(this["inputValues"+e][c]==null||this["inputValues"+e][c]==""){this.result="incomplete";return}this["inputValues"+e][c]!=(o-l)/r&&(this["borderboolarr"+e][c]="false",this.result="false")}if(s){if(this["inputValues"+e][r]==null||this["inputValues"+e][r]==""){this.result="incomplete";return}this["inputValues"+e][r]!=l&&(this["borderboolarr"+e][r]="false",this.result="false"),l!=0&&h.push(l),h.length>1&&h.shift(),s=!1}else if(h[h.length-1]!=l&&(l!=0&&h.push(l),h.length>1)){if(this["inputValues"+e][r]==null||this["inputValues"+e][r]==""){this.result="incomplete";return}this["inputValues"+e][r]!=l&&(this["borderboolarr"+e][r]="false",this.result="false"),h.shift()}r%2!=0&&(f?v=!0:f=!0),f&&v&&(s=!0,f=!1,v=!1),b=b*2}this.result=="still false"&&(this.result="correct");for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["borderboolarr"+e][t]=="false"?this["bordercolorarr"+e][t]="red":this["bordercolorarr"+e][t]="black";for(var e=1;e<5;e++)e==1&&(this.borderboolarrquo[1]=="false"?this.bordercolorarrquo[1]="red":this.bordercolorarrquo[1]="blue"),e==2&&(this.borderboolarrquo[2]=="false"?this.bordercolorarrquo[2]="red":this.bordercolorarrquo[2]="green"),e==3&&(this.borderboolarrquo[3]=="false"?this.bordercolorarrquo[3]="red":this.bordercolorarrquo[3]="yellow"),e==4&&(this.borderboolarrquo[4]=="false"?this.bordercolorarrquo[4]="red":this.bordercolorarrquo[4]="orange"),e==5&&(this.borderboolarrquo[5]=="false"?this.bordercolorarrquo[5]="red":this.bordercolorarrquo[5]="purple")})},reset(){for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["bordercolorarr"+e][t]="black",this["borderboolarr"+e][t]="true";for(var e=1;e<5;e++)this.borderboolarrquo[e]="true",(e=1)&&(this.bordercolorarrquo[e]="blue"),(e=2)&&(this.bordercolorarrquo[e]="green"),(e=3)&&(this.bordercolorarrquo[e]="yellow"),(e=4)&&(this.bordercolorarrquo[e]="orange"),(e=5)&&(this.bordercolorarrquo[e]="purple");this.quotientValues=[],this.inputValues1=[],this.inputValues2=[],this.inputValues3=[],this.inputValues4=[],this.inputValues5=[]},info(){for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["bordercolorarr"+e][t]="black",this["borderboolarr"+e][t]="true";for(var e=1;e<5;e++)this.borderboolarrquo[e]="true",(e=1)&&(this.bordercolorarrquo[e]="blue"),(e=2)&&(this.bordercolorarrquo[e]="green"),(e=3)&&(this.bordercolorarrquo[e]="yellow"),(e=4)&&(this.bordercolorarrquo[e]="orange"),(e=5)&&(this.bordercolorarrquo[e]="purple");var I=this.number,g=this.secondnumber,o=I*g,h=[],b=2*g,f=!1,v=!1;I%2!=0&&(f=!0);for(var s=!1,e=1;e<10;e++){var r=Math.floor(o/b),l=o%b;if(b>=o){this["inputValues"+e][0]=o;break}for(var c=0;c<r;c++)this.levelquotient[e]>c&&this.levelquotient[e]>1?this.quotientValues[e]=(o-l)/r:this["inputValues"+e][c]=(o-l)/r;s?(this["inputValues"+e][r]=l,l!=0&&h.push(l),h.length>1&&h.shift(),s=!1):h[h.length-1]!=l&&(l!=0&&h.push(l),h.length>1&&(this["inputValues"+e][r]=l,h.shift())),r%2!=0&&(f?v=!0:f=!0),f&&v&&(s=!0,f=!1,v=!1),b=b*2}this.result=="still false"&&(this.result="correct")}}});const M=e=>(W("data-v-e2d93774"),e=e(),G(),e),K={class:"ex2"},O=M(()=>y("br",null,null,-1)),Q=M(()=>y("br",null,null,-1)),X={id:"warning"},Y=M(()=>y("h2",{class:"title"}," Wähle Schwierigkeitsgrad ",-1)),Z=[Y],_={id:"the_task"},x={class:"title"},ee={class:"level5"},re=["id"],te=["id","onUpdate:modelValue"],oe=["id"],le={class:"level4"},se=["id"],ue=["id","onUpdate:modelValue"],ie=["id"],ne={class:"level3"},ae=["id"],de=["id","onUpdate:modelValue"],he=["id"],be={class:"level2"},fe=["id"],ce=["id","onUpdate:modelValue"],pe=["id"],me={class:"level1"},ve=["id"],ke=["id","onUpdate:modelValue"],ye=["id"],ge={class:"outs"},qe=["id"];function Ve(e,t,I,g,o,h){const b=S("Verifier"),f=S("Header"),v=S("Footer");return a(),d("div",K,[O,this.submitted?(a(),R(b,{key:0,correctSolution:this.result=="correct",ifincomplete:this.result=="incomplete",tip:this.hint(),onCloseVerifier:t[0]||(t[0]=s=>this.submitted=!1)},null,8,["correctSolution","ifincomplete","tip"])):m("",!0),H(f,{onSeteasy:t[1]||(t[1]=s=>e.seteasy()),onSethard:t[2]||(t[2]=s=>e.sethard()),task_number:"2",task_name:"Aufgabe 2",is_ex1:!1,is_ex2:!0,is_ex3:!1,lines:this.lines},null,8,["lines"]),Q,p(y("p",X,Z,512),[[E,e.number==0]]),p(y("p",_,[y("h1",x," Finde das Produkt von "+F(e.number)+" und "+F(e.secondnumber),1)],512),[[E,e.number!=0]]),p(y("div",ee,[(a(!0),d(w,null,C(e.levels[5],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[5]>r&&e.levelquotient[5]>1?p((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[5]+";"),ref_for:!0,ref:"inputs",id:"quo5"+r,"onUpdate:modelValue":t[3]||(t[3]=l=>e.quotientValues[5]=l)},null,12,re)),[[A,e.quotientValues[5]]]):m("",!0),r>=e.levelquotient[5]||e.levelquotient[5]<2?p((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr5[r]+";"),ref_for:!0,ref:"inputs",id:"str5"+r,"onUpdate:modelValue":l=>e.inputValues5[r]=l},null,12,te)),[[A,e.inputValues5[r]]]):m("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus5"+r,class:"flex-child magenta"}," + ",8,oe)):m("",!0)]))),128))],512),[[E,e.levels[5]!=null]]),p(y("div",le,[(a(!0),d(w,null,C(e.levels[4],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[4]>r&&e.levelquotient[4]>1?p((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[4]+";"),ref_for:!0,ref:"inputs",id:"quo4"+r,"onUpdate:modelValue":t[4]||(t[4]=l=>e.quotientValues[4]=l)},null,12,se)),[[A,e.quotientValues[4]]]):m("",!0),r>=e.levelquotient[4]||e.levelquotient[4]<2?p((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr4[r]+";"),ref_for:!0,ref:"inputs",id:"str4"+r,"onUpdate:modelValue":l=>e.inputValues4[r]=l},null,12,ue)),[[A,e.inputValues4[r]]]):m("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus4"+r,class:"flex-child magenta"}," + ",8,ie)):m("",!0)]))),128))],512),[[E,e.levels[4]!=null]]),p(y("div",ne,[(a(!0),d(w,null,C(e.levels[3],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[3]>r&&e.levelquotient[3]>1?p((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[3]+";"),ref_for:!0,ref:"inputs",id:"quo3"+r,"onUpdate:modelValue":t[5]||(t[5]=l=>e.quotientValues[3]=l)},null,12,ae)),[[A,e.quotientValues[3]]]):m("",!0),r>=e.levelquotient[3]||e.levelquotient[3]<2?p((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr3[r]+";"),ref_for:!0,ref:"inputs",id:"str3"+r,"onUpdate:modelValue":l=>e.inputValues3[r]=l},null,12,de)),[[A,e.inputValues3[r]]]):m("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus3"+r,class:"flex-child magenta"}," + ",8,he)):m("",!0)]))),128))],512),[[E,e.levels[3]!=null]]),p(y("div",be,[(a(!0),d(w,null,C(e.levels[2],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[2]>r&&e.levelquotient[2]>1?p((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[2]+";"),ref_for:!0,ref:"inputs",id:"quo2"+r,"onUpdate:modelValue":t[6]||(t[6]=l=>e.quotientValues[2]=l)},null,12,fe)),[[A,e.quotientValues[2]]]):m("",!0),r>=e.levelquotient[2]||e.levelquotient[2]<2?p((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr2[r]+";"),ref_for:!0,ref:"inputs",id:"str2"+r,"onUpdate:modelValue":l=>e.inputValues2[r]=l},null,12,ce)),[[A,e.inputValues2[r]]]):m("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus2"+r,class:"flex-child magenta"}," + ",8,pe)):m("",!0)]))),128))],512),[[E,e.levels[2]!=null]]),p(y("div",me,[(a(!0),d(w,null,C(e.levels[1],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[1]>r&&e.levelquotient[1]>1?p((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[1]+";"),class:"flex-childgreen",ref_for:!0,ref:"inputs",id:"quo1"+r,"onUpdate:modelValue":t[7]||(t[7]=l=>e.quotientValues[1]=l)},null,12,ve)),[[A,e.quotientValues[1]]]):m("",!0),r>=e.levelquotient[1]||e.levelquotient[1]<2?p((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr1[r]+";"),class:"flex-childgreen",ref_for:!0,ref:"inputs",id:"str1"+r,"onUpdate:modelValue":l=>e.inputValues1[r]=l},null,12,ke)),[[A,e.inputValues1[r]]]):m("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus1"+r,class:"flex-child magenta"}," + ",8,ye)):m("",!0)]))),128))],512),[[E,e.levels[1]!=null]]),y("div",ge,[(a(!0),d(w,null,C(e.number,(s,r)=>(a(),d("output",{key:s,class:"outputs",id:"out"+r},F(e.secondnumber),9,qe))),128))]),H(v,{onNext_task:t[8]||(t[8]=s=>e.reloadPage()),onCheck_answer:t[9]||(t[9]=s=>e.submitAnswer()),onReset:t[10]||(t[10]=s=>e.reset()),onInfo:t[11]||(t[11]=s=>e.info())})])}const Ee=z(J,[["render",Ve],["__scopeId","data-v-e2d93774"]]);export{Ee as default};
