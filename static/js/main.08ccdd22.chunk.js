(this.webpackJsonpKlingon_calculator=this.webpackJsonpKlingon_calculator||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(3),i=a.n(s),c=(a(13),a(14),a(15),a(4)),r=a(5),u=a(1),o=a(7),m=a(6),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={num1:"",num2:"",display:"",selectedop:"+",error:""},console.log("qaqIHneS!"),n.updatenum1=n.updatenum1.bind(Object(u.a)(n)),n.updatenum2=n.updatenum2.bind(Object(u.a)(n)),n.handleAdd=n.handleAdd.bind(Object(u.a)(n)),n.handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.handleTime=n.handleTime.bind(Object(u.a)(n)),n.handleDivide=n.handleDivide.bind(Object(u.a)(n)),n.clear=n.clear.bind(Object(u.a)(n)),n.answer=n.answer.bind(Object(u.a)(n)),n.translate=n.translate.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"updatenum1",value:function(e){var t=[this.state.num1];t.push(e.currentTarget.value),this.setState({num1:t.join("")})}},{key:"updatenum2",value:function(e){var t=[this.state.num2];t.push(e.currentTarget.value),this.setState({num2:t.join("")})}},{key:"handleAdd",value:function(e){e.preventDefault(),this.setState({selectedop:"+"})}},{key:"handleDelete",value:function(e){e.preventDefault(),this.setState({selectedop:"-"})}},{key:"handleDivide",value:function(e){e.preventDefault(),this.setState({selectedop:"/"})}},{key:"handleTime",value:function(e){e.preventDefault(),this.setState({selectedop:"x"})}},{key:"clear",value:function(e){e.preventDefault(),this.setState({num1:"",num2:"",display:"",selectedop:"+",error:""})}},{key:"answer",value:function(e){e.preventDefault(),""!==this.state.num1&&""!==this.state.num2||this.setState({error:l.a.createElement("img",{src:"KlingonError.svg",alt:"error"})}),"+"===this.state.selectedop?this.setState({display:parseFloat(this.state.num1)+parseFloat(this.state.num2)}):"-"===this.state.selectedop?this.setState({display:parseFloat(this.state.num1)-parseFloat(this.state.num2)}):"/"===this.state.selectedop&&"0"===this.state.num2?this.setState({display:"error"}):"/"===this.state.selectedop?this.setState({display:parseFloat(this.state.num1)/parseFloat(this.state.num2)}):"x"===this.state.selectedop&&this.setState({display:parseFloat(this.state.num1)*parseFloat(this.state.num2)})}},{key:"translate",value:function(e){if("error"===e)return l.a.createElement("img",{src:"KlingonError.svg",alt:"error"});var t=[];return e.toString().split("").forEach((function(e,a){"1"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon1.svg",alt:"1"})):"2"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon2.svg",alt:"2"})):"3"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon3.svg",alt:"3"})):"4"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon4.svg",alt:"4"})):"5"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon5.svg",alt:"5"})):"6"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon6.svg",alt:"6"})):"7"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon7.svg",alt:"7"})):"8"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon8.svg",alt:"8"})):"9"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon9.svg",alt:"9"})):"0"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"Klingon0.svg",alt:"0"})):"-"===e?t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"KlingonNegative.svg",alt:"negative"})):"."===e&&t.push(l.a.createElement("img",{key:"".concat(e,".").concat(a),src:"KlingonDecimal.svg",alt:"decimal"}))})),t}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"keyboard-container"},"First Number",l.a.createElement("div",{className:"keyboard"},l.a.createElement("button",{key:"11",value:1,onClick:this.updatenum1},this.translate("1")),l.a.createElement("button",{key:"12",value:2,onClick:this.updatenum1},this.translate("2")),l.a.createElement("button",{key:"13",value:3,onClick:this.updatenum1},this.translate("3")),l.a.createElement("button",{key:"14",value:4,onClick:this.updatenum1},this.translate("4")),l.a.createElement("button",{key:"15",value:5,onClick:this.updatenum1},this.translate("5")),l.a.createElement("button",{key:"16",value:6,onClick:this.updatenum1},this.translate("6")),l.a.createElement("button",{key:"17",value:7,onClick:this.updatenum1},this.translate("7")),l.a.createElement("button",{key:"18",value:8,onClick:this.updatenum1},this.translate("8")),l.a.createElement("button",{key:"19",value:9,onClick:this.updatenum1},this.translate("9")),l.a.createElement("button",{key:"1-",value:"-",onClick:this.updatenum1,className:"negative"},this.translate("-")),l.a.createElement("button",{key:"10",value:0,onClick:this.updatenum1},this.translate("0")),l.a.createElement("button",{key:"1.",value:".",onClick:this.updatenum1},this.translate(".")))),l.a.createElement("div",{className:"calculator"},l.a.createElement("div",{"data-testid":"name"},"Klingon Calculator"),l.a.createElement("div",{"data-testid":"display",className:"display"},this.translate(this.state.display)),l.a.createElement("div",{className:"number-inputs"},l.a.createElement("div",{"data-testid":"display",className:"display-num"},this.translate(this.state.num1)),l.a.createElement("div",{className:"selected-operation"},this.state.selectedop),l.a.createElement("div",{"data-testid":"display",className:"display-num"},this.translate(this.state.num2))),l.a.createElement("div",{className:"operation-selectors"},l.a.createElement("button",{"data-testid":"add",onClick:this.handleAdd},"+"),l.a.createElement("button",{"data-testid":"sub",onClick:this.handleDelete},"-"),l.a.createElement("button",{"data-testid":"mul",onClick:this.handleTime},"x"),l.a.createElement("button",{"data-testid":"div",onClick:this.handleDivide},"/")),l.a.createElement("div",{className:"options"},l.a.createElement("button",{"data-testid":"clear",className:"clear",onClick:this.clear},"Clear"),l.a.createElement("button",{"data-testid":"calc",onClick:this.answer,className:"calculate"},"Calculate")),l.a.createElement("div",{"data-testid":"error",id:"error",className:"error"},this.state.error)),l.a.createElement("div",{className:"keyboard-container"},"Second Number",l.a.createElement("div",{className:"keyboard"},l.a.createElement("button",{key:"21",value:1,onClick:this.updatenum2},this.translate("1")),l.a.createElement("button",{key:"22",value:2,onClick:this.updatenum2},this.translate("2")),l.a.createElement("button",{key:"23",value:3,onClick:this.updatenum2},this.translate("3")),l.a.createElement("button",{key:"24",value:4,onClick:this.updatenum2},this.translate("4")),l.a.createElement("button",{key:"25",value:5,onClick:this.updatenum2},this.translate("5")),l.a.createElement("button",{key:"26",value:6,onClick:this.updatenum2},this.translate("6")),l.a.createElement("button",{key:"27",value:7,onClick:this.updatenum2},this.translate("7")),l.a.createElement("button",{key:"28",value:8,onClick:this.updatenum2},this.translate("8")),l.a.createElement("button",{key:"29",value:9,onClick:this.updatenum2},this.translate("9")),l.a.createElement("button",{key:"2-",value:"-",onClick:this.updatenum2,className:"negative"},this.translate("-")),l.a.createElement("button",{key:"20",value:0,onClick:this.updatenum2},this.translate("0")),l.a.createElement("button",{key:"2.",value:".",onClick:this.updatenum2},this.translate(".")))))}}]),a}(l.a.Component),h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("img",{src:"klingonlogo.png",className:"logo",alt:"Klingon Logo"})),l.a.createElement(d,null),l.a.createElement("footer",null,l.a.createElement("p",null,"Created by Yu-Huan Wu"),l.a.createElement("div",{className:"footer-info"},l.a.createElement("a",{href:"https://github.com/Yu-HuanWu",target:"_blank",title:"My GitHub link",rel:"noopener noreferrer"},l.a.createElement("img",{src:"githublogo.gif",alt:"GitHub waving gif made by Yu-Huan Wu",height:"70"})),l.a.createElement("a",{href:"https://github.com/Yu-HuanWu/Klingon_Calculator#readme",target:"_blank",title:"Info about this calculator",rel:"noopener noreferrer"},l.a.createElement("img",{src:"question.svg",alt:"Star Trek question mark",height:"70"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/yu-huan-wu",target:"_blank",title:"My LinkedIn. If you want to hire me just holler at me my dude",rel:"noopener noreferrer"},l.a.createElement("img",{src:"linkedin.gif",alt:"LinkedIn bouncing gif made by Yu-Huan Wu",height:"70"})))))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.08ccdd22.chunk.js.map