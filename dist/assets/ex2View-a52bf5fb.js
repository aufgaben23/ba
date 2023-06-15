import{H as P,F as N,V as T}from"./Verifier-07c01984.js";import{L as n}from"./leader-line-vue-b24e3c58.js";import{f as D,_ as z,r as F,o as a,c as d,g as R,h as v,i as H,w as m,v as E,e as y,t as M,F as w,j as C,n as V,k as A,p as W,d as _}from"./index-31024c11.js";const G=D({name:"ex2",components:{Header:P,Footer:N,Verifier:T},data(){return{submitted:!1,levels:[0,0,0,0,0,0,0,0,0,0],levelquotient:[0,0,0,0,0,0,0,0,0,0],quotientValues:[],inputValues1:[],inputValues2:[],inputValues3:[],inputValues4:[],inputValues5:[],number:0,secondnumber:0,lines:[],result:"still false",generated:!1,difficulty:"",bordercolorarr1:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr1:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr2:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr2:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr3:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr3:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr4:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr4:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarr5:["black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarr5:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],bordercolorarrquo:["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],borderboolarrquo:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]}},created(){window.onpopstate=e=>{for(var t=0;t<this.lines.length;t++)this.lines[t].remove();this.lines=[]}},methods:{hint(){},seteasy(){this.difficulty="easy",this.reloadPage()},setmiddle(){this.difficulty="middle",this.reloadPage()},sethard(){this.difficulty="hard",this.reloadPage()},submitAnswer(){this.submitted=!0,this.checkAnswer()},getrandomnumber(e,t){return Math.floor(Math.random()*(t-e+1))+e},reloadPage(){this.levels=[0,0,0,0,0,0,0,0,0,0],this.levelquotient=[0,0,0,0,0,0,0,0,0,0];const e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);if(e>=600&&e<=1e3)if(this.difficulty=="easy")this.number=this.getrandomnumber(5,9),this.secondnumber=this.getrandomnumber(3,9);else if(this.difficulty=="middle")this.number=this.getrandomnumber(5,12),this.secondnumber=this.getrandomnumber(10,19);else if(this.difficulty=="hard")this.number=this.getrandomnumber(5,12),this.secondnumber=this.getrandomnumber(20,50);else return;else if(this.difficulty=="easy")this.number=this.getrandomnumber(5,9),this.secondnumber=this.getrandomnumber(3,9);else if(this.difficulty=="middle")this.number=this.getrandomnumber(5,15),this.secondnumber=this.getrandomnumber(10,19);else if(this.difficulty=="hard")this.number=this.getrandomnumber(5,15),this.secondnumber=this.getrandomnumber(20,50);else return;this.number!=0&&(this.generated=!0);for(var t=this.number,I=this.secondnumber,q=t*I,o=0;o<this.lines.length;o++)this.lines[o].remove();this.lines=[];var h=[],b=2*I,f=!1,g=!1;t%2!=0&&(f=!0);for(var s=!1,o=1;o<5;o++)for(var r=0;r<this["borderboolarr"+o].length;r++)this["bordercolorarr"+o][r]="black",this["borderboolarr"+o][r]="true";for(var o=1;o<5;o++)(o=1)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="blue"),(o=2)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="green"),(o=3)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="yellow"),(o=4)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="orange"),(o=5)&&(this.borderboolarrquo[o]="true",this.bordercolorarrquo[o]="purple");for(var o=1;o<10;o++){var l=Math.floor(q/b),p=q%b;if(b>=q){this.levels[o]=1;break}this.levels[o]=this.levels[o]+l,this.levelquotient[o]=l,s?(this.levels[o]++,p!=0&&h.push(p),h.length>1&&h.shift(),s=!1):h[h.length-1]!=p&&(p!=0&&h.push(p),h.length>1&&(this.levels[o]++,h.shift())),l%2!=0&&(f?g=!0:f=!0),f&&g&&(s=!0,f=!1,g=!1),b=b*2}this.inputValues1=[],this.inputValues2=[],this.inputValues3=[],this.inputValues4=[],this.inputValues5=[],this.quotientValues=[],this.$nextTick(function(){var B=this.levels,L=[];for(let u=0;u<B.length-1;u++){if(u==0)for(let i=0;i<B[u+1];i++){var k=n.setLine(n.obj.pointAnchor(document.getElementById("out"+2*i),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus1"+i),{color:"red",x:"50%",y:"90%"})),c=n.setLine(n.obj.pointAnchor(document.getElementById("out"+(2*i+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus1"+i),{color:"red",x:"50%",y:"90%"}));c.path="straight",k.path="straight",this.lines.push(k),this.lines.push(c),i+1==B[1]&&2*i+3==t&&L.push("out"+(2*i+2))}if(u>0)for(let i=0;i<B[u+1];i++){var U=this.levelquotient[u+1]>i&&this.levelquotient[u+1]>1,j=this.levelquotient[u]>2*i&&this.levelquotient[u]>1,$=this.levelquotient[u]>2*i+1&&this.levelquotient[u]>1;if(U){if(j){var k=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+u+2*i),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));k.path="straight",this.lines.push(k)}else if(!j){var k=n.setLine(n.obj.pointAnchor(document.getElementById("str"+u+2*i),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"0%",y:"-15%",path:"arc"}));k.path="straight",k.color="green",this.lines.push(k)}}if(!U){if(j){var k=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+u+2*i),{x:"50%",y:"0 %"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));k.path="straight",this.lines.push(k)}else if(!j){var k=n.setLine(n.obj.pointAnchor(document.getElementById("str"+u+2*i),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));k.path="straight",this.lines.push(k)}}if(i+1==B[u+1]&&L.length>0&&B[u]<2*i+2){var c=c=n.setLine(n.obj.pointAnchor(document.getElementById(L.pop()),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));c.path="straight",this.lines.push(c)}else{if(U){if($){var c=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+u+(2*i+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));c.path="straight",this.lines.push(c)}else if(!$){var c=n.setLine(n.obj.pointAnchor(document.getElementById("str"+u+(2*i+1)),{x:"50%",y:"-15%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"0%",y:"-15%",path:"arc"}));c.path="straight",this.lines.push(c),c.color="blue"}}if(!U){if($){var c=n.setLine(n.obj.pointAnchor(document.getElementById("quo"+u+(2*i+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));c.path="straight",this.lines.push(c)}else if(!$){var c=n.setLine(n.obj.pointAnchor(document.getElementById("str"+u+(2*i+1)),{x:"50%",y:"0%"}),n.obj.pointAnchor(document.getElementById("plus"+(u+1)+i),{color:"red",x:"50%",y:"85%",path:"arc"}));c.path="straight",this.lines.push(c)}}i+1==B[u+1]&&2*i+3==B[u]&&(this.levelquotient[u]==B[u]?L.push("quo"+u+(2*i+2)):L.push("str"+u+(2*i+2)))}}}})},checkAnswer(){this.$nextTick(function(){this.result="still false";for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["bordercolorarr"+e][t]="black",this["borderboolarr"+e][t]="true";for(var e=1;e<5;e++)(e=1)&&(this.bordercolorarrquo[e]="blue",this.borderboolarrquo[e]="true"),(e=2)&&(this.bordercolorarrquo[e]="green",this.borderboolarrquo[e]="true"),(e=3)&&(this.bordercolorarrquo[e]="yellow",this.borderboolarrquo[e]="true"),(e=4)&&(this.bordercolorarrquo[e]="orange",this.borderboolarrquo[e]="true"),(e=5)&&(this.bordercolorarrquo[e]="purple",this.borderboolarrquo[e]="true");var I=this.number,q=this.secondnumber,o=I*q,h=[],b=2*q,f=!1,g=!1;I%2!=0&&(f=!0);for(var s=!1,e=1;e<10;e++){var r=Math.floor(o/b),l=o%b;if(b>=o&&(this["inputValues"+e][0]==null||this["inputValues"+e][0]=="")&&(this.result="incomplete"),b>=o){this["inputValues"+e][0]!=o&&(this["borderboolarr"+e][0]="false",this.result="false");break}for(var p=0;p<r;p++)if(this.levelquotient[e]>p&&this.levelquotient[e]>1){if(this.quotientValues[e]==null||this.quotientValues[e]==""){this.result="incomplete";return}this.quotientValues[e]!=(o-l)/r&&(this.result="false",this.borderboolarrquo[e]="false")}else{if(this["inputValues"+e][p]==null||this["inputValues"+e][p]==""){this.result="incomplete";return}this["inputValues"+e][p]!=(o-l)/r&&(this["borderboolarr"+e][p]="false",this.result="false")}if(s){if(this["inputValues"+e][r]==null||this["inputValues"+e][r]==""){this.result="incomplete";return}this["inputValues"+e][r]!=l&&(this["borderboolarr"+e][r]="false",this.result="false"),l!=0&&h.push(l),h.length>1&&h.shift(),s=!1}else if(h[h.length-1]!=l&&(l!=0&&h.push(l),h.length>1)){if(this["inputValues"+e][r]==null||this["inputValues"+e][r]==""){this.result="incomplete";return}this["inputValues"+e][r]!=l&&(this["borderboolarr"+e][r]="false",this.result="false"),h.shift()}r%2!=0&&(f?g=!0:f=!0),f&&g&&(s=!0,f=!1,g=!1),b=b*2}this.result=="still false"&&(this.result="correct");for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["borderboolarr"+e][t]=="false"?this["bordercolorarr"+e][t]="red":this["bordercolorarr"+e][t]="black";for(var e=1;e<5;e++)e==1&&(this.borderboolarrquo[1]=="false"?this.bordercolorarrquo[1]="red":this.bordercolorarrquo[1]="blue"),e==2&&(this.borderboolarrquo[2]=="false"?this.bordercolorarrquo[2]="red":this.bordercolorarrquo[2]="green"),e==3&&(this.borderboolarrquo[3]=="false"?this.bordercolorarrquo[3]="red":this.bordercolorarrquo[3]="yellow"),e==4&&(this.borderboolarrquo[4]=="false"?this.bordercolorarrquo[4]="red":this.bordercolorarrquo[4]="orange"),e==5&&(this.borderboolarrquo[5]=="false"?this.bordercolorarrquo[5]="red":this.bordercolorarrquo[5]="purple")})},reset(){for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["bordercolorarr"+e][t]="black",this["borderboolarr"+e][t]="true";for(var e=1;e<5;e++)this.borderboolarrquo[e]="true",(e=1)&&(this.bordercolorarrquo[e]="blue"),(e=2)&&(this.bordercolorarrquo[e]="green"),(e=3)&&(this.bordercolorarrquo[e]="yellow"),(e=4)&&(this.bordercolorarrquo[e]="orange"),(e=5)&&(this.bordercolorarrquo[e]="purple");this.quotientValues=[],this.inputValues1=[],this.inputValues2=[],this.inputValues3=[],this.inputValues4=[],this.inputValues5=[]},info(){for(var e=1;e<5;e++)for(var t=0;t<this["borderboolarr"+e].length;t++)this["bordercolorarr"+e][t]="black",this["borderboolarr"+e][t]="true";for(var e=1;e<5;e++)this.borderboolarrquo[e]="true",(e=1)&&(this.bordercolorarrquo[e]="blue"),(e=2)&&(this.bordercolorarrquo[e]="green"),(e=3)&&(this.bordercolorarrquo[e]="yellow"),(e=4)&&(this.bordercolorarrquo[e]="orange"),(e=5)&&(this.bordercolorarrquo[e]="purple");var I=this.number,q=this.secondnumber,o=I*q,h=[],b=2*q,f=!1,g=!1;I%2!=0&&(f=!0);for(var s=!1,e=1;e<10;e++){var r=Math.floor(o/b),l=o%b;if(b>=o){this["inputValues"+e][0]=o;break}for(var p=0;p<r;p++)this.levelquotient[e]>p&&this.levelquotient[e]>1?this.quotientValues[e]=(o-l)/r:this["inputValues"+e][p]=(o-l)/r;s?(this["inputValues"+e][r]=l,l!=0&&h.push(l),h.length>1&&h.shift(),s=!1):h[h.length-1]!=l&&(l!=0&&h.push(l),h.length>1&&(this["inputValues"+e][r]=l,h.shift())),r%2!=0&&(f?g=!0:f=!0),f&&g&&(s=!0,f=!1,g=!1),b=b*2}this.result=="still false"&&(this.result="correct")}}});const S=e=>(W("data-v-ed4a4391"),e=e(),_(),e),J={class:"ex2"},K=S(()=>y("br",null,null,-1)),O=S(()=>y("br",null,null,-1)),Q={id:"warning"},X=S(()=>y("h2",{class:"title"}," Wähle Schwierigkeitsgrad ",-1)),Y=[X],Z={id:"the_task"},x={class:"title"},ee={class:"level5"},re=["id"],te=["id","onUpdate:modelValue"],oe=["id"],le={class:"level4"},se=["id"],ie=["id","onUpdate:modelValue"],ue=["id"],ne={class:"level3"},ae=["id"],de=["id","onUpdate:modelValue"],he=["id"],be={class:"level2"},fe=["id"],ce=["id","onUpdate:modelValue"],pe=["id"],me={class:"level1"},ve=["id"],ke=["id","onUpdate:modelValue"],ge=["id"],ye={class:"outs"},qe=["id"],Ve=S(()=>y("br",null,null,-1));function Ae(e,t,I,q,o,h){const b=F("Verifier"),f=F("Header"),g=F("Footer");return a(),d("div",J,[K,this.submitted?(a(),R(b,{key:0,correctSolution:this.result=="correct",ifincomplete:this.result=="incomplete",tip:this.hint(),onCloseVerifier:t[0]||(t[0]=s=>this.submitted=!1)},null,8,["correctSolution","ifincomplete","tip"])):v("",!0),H(f,{onSeteasy:t[1]||(t[1]=s=>e.seteasy()),onSetmiddle:t[2]||(t[2]=s=>e.setmiddle()),onSethard:t[3]||(t[3]=s=>e.sethard()),task_number:"2",task_name:"Aufgabe 2",is_ex1:!1,is_ex2:!0,is_ex3:!1,is_ex4:!1,is_ex5:!1,is_ex6:!1,lines:this.lines},null,8,["lines"]),O,m(y("p",Q,Y,512),[[E,e.number==0]]),m(y("p",Z,[y("h1",x," Finde das Produkt von "+M(e.number)+" und "+M(e.secondnumber),1)],512),[[E,e.number!=0]]),m(y("div",ee,[(a(!0),d(w,null,C(e.levels[5],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[5]>r&&e.levelquotient[5]>1?m((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[5]+";"),ref_for:!0,ref:"inputs",id:"quo5"+r,"onUpdate:modelValue":t[4]||(t[4]=l=>e.quotientValues[5]=l)},null,12,re)),[[A,e.quotientValues[5]]]):v("",!0),r>=e.levelquotient[5]||e.levelquotient[5]<2?m((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr5[r]+";"),ref_for:!0,ref:"inputs",id:"str5"+r,"onUpdate:modelValue":l=>e.inputValues5[r]=l},null,12,te)),[[A,e.inputValues5[r]]]):v("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus5"+r,class:"flex-child magenta"}," + ",8,oe)):v("",!0)]))),128))],512),[[E,e.levels[5]!=null]]),m(y("div",le,[(a(!0),d(w,null,C(e.levels[4],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[4]>r&&e.levelquotient[4]>1?m((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[4]+";"),ref_for:!0,ref:"inputs",id:"quo4"+r,"onUpdate:modelValue":t[5]||(t[5]=l=>e.quotientValues[4]=l)},null,12,se)),[[A,e.quotientValues[4]]]):v("",!0),r>=e.levelquotient[4]||e.levelquotient[4]<2?m((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr4[r]+";"),ref_for:!0,ref:"inputs",id:"str4"+r,"onUpdate:modelValue":l=>e.inputValues4[r]=l},null,12,ie)),[[A,e.inputValues4[r]]]):v("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus4"+r,class:"flex-child magenta"}," + ",8,ue)):v("",!0)]))),128))],512),[[E,e.levels[4]!=null]]),m(y("div",ne,[(a(!0),d(w,null,C(e.levels[3],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[3]>r&&e.levelquotient[3]>1?m((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[3]+";"),ref_for:!0,ref:"inputs",id:"quo3"+r,"onUpdate:modelValue":t[6]||(t[6]=l=>e.quotientValues[3]=l)},null,12,ae)),[[A,e.quotientValues[3]]]):v("",!0),r>=e.levelquotient[3]||e.levelquotient[3]<2?m((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr3[r]+";"),ref_for:!0,ref:"inputs",id:"str3"+r,"onUpdate:modelValue":l=>e.inputValues3[r]=l},null,12,de)),[[A,e.inputValues3[r]]]):v("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus3"+r,class:"flex-child magenta"}," + ",8,he)):v("",!0)]))),128))],512),[[E,e.levels[3]!=null]]),m(y("div",be,[(a(!0),d(w,null,C(e.levels[2],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[2]>r&&e.levelquotient[2]>1?m((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[2]+";"),ref_for:!0,ref:"inputs",id:"quo2"+r,"onUpdate:modelValue":t[7]||(t[7]=l=>e.quotientValues[2]=l)},null,12,fe)),[[A,e.quotientValues[2]]]):v("",!0),r>=e.levelquotient[2]||e.levelquotient[2]<2?m((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr2[r]+";"),ref_for:!0,ref:"inputs",id:"str2"+r,"onUpdate:modelValue":l=>e.inputValues2[r]=l},null,12,ce)),[[A,e.inputValues2[r]]]):v("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus2"+r,class:"flex-child magenta"}," + ",8,pe)):v("",!0)]))),128))],512),[[E,e.levels[2]!=null]]),m(y("div",me,[(a(!0),d(w,null,C(e.levels[1],(s,r)=>(a(),d("div",{key:s,class:"flex-container1"},[e.levelquotient[1]>r&&e.levelquotient[1]>1?m((a(),d("input",{key:0,type:"number",style:V("--borderColor:"+e.bordercolorarrquo[1]+";"),class:"flex-childgreen",ref_for:!0,ref:"inputs",id:"quo1"+r,"onUpdate:modelValue":t[8]||(t[8]=l=>e.quotientValues[1]=l)},null,12,ve)),[[A,e.quotientValues[1]]]):v("",!0),r>=e.levelquotient[1]||e.levelquotient[1]<2?m((a(),d("input",{key:1,type:"number",style:V("--borderColor:"+e.bordercolorarr1[r]+";"),class:"flex-childgreen",ref_for:!0,ref:"inputs",id:"str1"+r,"onUpdate:modelValue":l=>e.inputValues1[r]=l},null,12,ke)),[[A,e.inputValues1[r]]]):v("",!0),s!=e.number&&s!=e.number+1?(a(),d("h1",{key:2,id:"plus1"+r,class:"flex-child magenta"}," + ",8,ge)):v("",!0)]))),128))],512),[[E,e.levels[1]!=null]]),y("div",ye,[(a(!0),d(w,null,C(e.number,(s,r)=>(a(),d("output",{key:s,class:"outputs",id:"out"+r},M(e.secondnumber),9,qe))),128))]),Ve,H(g,{onNext_task:t[9]||(t[9]=s=>e.reloadPage()),onCheck_answer:t[10]||(t[10]=s=>e.submitAnswer()),onReset:t[11]||(t[11]=s=>e.reset()),onInfo:t[12]||(t[12]=s=>e.info())})])}const we=z(G,[["render",Ae],["__scopeId","data-v-ed4a4391"]]);export{we as default};
