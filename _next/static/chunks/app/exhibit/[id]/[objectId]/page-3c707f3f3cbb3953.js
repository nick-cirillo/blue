(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{684:(e,t,s)=>{"use strict";s.d(t,{default:()=>v});var a=s(5155),i=s(2115),l=s(9911),n=s(98),r=s(3429),o=s.n(r),c=s(6766);s(9316);var d=s(5731),h=s(6874),x=s.n(h),u=s(7067);let m=e=>{let{imageUrl:t,svgUrl:s,onReady:l}=e,n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new u.Noise(Math.random()),a=n.current;if(!a)return;let i=a.getContext("2d");if(!i)return;let r=new Image;r.src=t,r.crossOrigin="anonymous",r.onload=async()=>{let t=r.width,n=r.height,o=n+40;a.width=(t+40)*2,a.height=2*o,i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,a.width,a.height),i.imageSmoothingEnabled=!1;let c=await fetch(s),d=await c.text(),h=new DOMParser().parseFromString(d,"image/svg+xml").querySelectorAll("path");i.save(),i.translate(20,20),i.strokeStyle="white",i.fillStyle="white",h.forEach(t=>{let s=t.getAttribute("d");if(!s)return;let a=new Path2D(s);i.lineWidth=16,i.stroke(a),i.lineCap="round",i.fill(a);let l=t.getTotalLength(),n=Math.max(100,l/3),r=new Path2D;for(let s=0;s<n;s++){let{x:a,y:i}=t.getPointAtLength(s/n*l),o=0*e.perlin2(.05*a,.05*i),c=0*e.perlin2(.05*i,.05*a);a+=o,i+=c,0===s?r.moveTo(a,i):r.lineTo(a,i)}i.lineWidth=10,i.stroke(r),i.fill(r)}),i.restore(),i.drawImage(r,20,20,t,n),l&&l(a.toDataURL("image/png"))}},[t,s,l]),(0,a.jsx)("canvas",{ref:n,className:"hidden invisible"})},g={facingMode:"environment"};function f(e){let{artifact:t,onImageCaptured:s}=e,[r,h]=(0,i.useState)("/blue/images/artifacts/".concat(t.id,".png"));console.log(r);let u=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,p]=(0,i.useState)({width:0,height:0}),[v,b]=(0,i.useState)(null),[j,y]=(0,i.useState)(null),[,N]=(0,i.useState)(!1),[k,z]=(0,i.useState)(!1),[L,C]=(0,i.useState)(!1),E=()=>z(!1),S={width:300,height:360},[F,D]=(0,i.useState)(null),[P,R]=(0,i.useState)("Line up the image to the outline");(0,i.useEffect)(()=>{let e=()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{fetch(t.svgURL).then(e=>e.text()).then(e=>{let t=new DOMParser().parseFromString(e,"image/svg+xml").querySelectorAll("path");t.length>0&&(y(Array.from(t).map(e=>e.getAttribute("d")||"")),b(Array.from(t).map(e=>new Path2D(e.getAttribute("d")||""))))}).catch(console.error)},[t.svgURL]);let I=(0,i.useCallback)(()=>{let e=window.innerHeight/100;p({width:40*e,height:60*e})},[]);(0,i.useEffect)(()=>{console.log(t.imageURL,t.svgURL)},[t.imageURL,t.svgURL]),(0,i.useEffect)(()=>(I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)),[I]),(0,i.useEffect)(()=>{let e=()=>{if(u.current&&f.current){let t=u.current.video,s=f.current,a=s.getContext("2d");if(a&&4===t.readyState&&v){let e=t.videoWidth,i=t.videoHeight;s.width=w.width,s.height=w.height;let l=w.height,n=e/i*l,r=(w.width-n)/2;a.clearRect(0,0,s.width,s.height),a.drawImage(t,r,0,n,l)}requestAnimationFrame(e)}};requestAnimationFrame(e)},[w,v]);let U=async()=>{if(u.current&&f.current){let e=u.current.video,s=f.current;if(s.getContext("2d")&&4===e.readyState){let e=document.createElement("canvas");e.width=300,e.height=360;let a=e.getContext("2d");if(a){a.clearRect(0,0,e.width,e.height),a.save();let i=e.width/S.width,l=e.height/S.height;if(console.log("scale"),console.log(i,l),console.log("clipcanvas"),console.log(e.width,e.height),console.log("viewbox"),console.log(S.width,S.height),a.translate(e.width/2,e.height/2),a.scale(i,l),a.translate(-S.width/2,-S.height/2),v){let e=new Path2D;for(let t of v)e.addPath(t);a.clip(e,"evenodd")}else console.error("no clippath");a.translate(S.width/2,S.height/2),a.scale(1/i,360/(300*l)),a.translate(-e.width/2,-e.height/2),a.drawImage(s,0,0,e.width,e.height),a.restore(),D(e.toDataURL("image/png")),R(""),h("/blue/images/artifacts/".concat(t.id,".png"))}else console.error("canvas not initialized properly")}}},A=async()=>{D(null),R("Line up the image to the outline"),h("/blue/images/artifacts/".concat(t.id,".png"))};return(0,a.jsxs)("div",{className:"relative flex flex-col items-center justify-center w-screen h-screen bg-blue-black",style:{height:"calc(var(--vh, 1vh) * 100)"},children:[(0,a.jsxs)("div",{className:"absolute top-5 flex flex-row w-[40svh] h-[10svh] justify-between items-center",children:[(0,a.jsx)(x(),{href:"/exhibit/".concat(t.exhibitID),children:(0,a.jsx)("img",{src:"/blue/icons/left-arrow-blue.svg",alt:"Back",className:"cursor-pointer"})}),(0,a.jsxs)("button",{onClick:()=>{N(e=>!e),z(!0)},className:"rounded-full p-3 z-10 flex items-center gap-2 border-none ".concat(k?"bg-white text-blue-500":"bg-transparent text-blue-500"),"aria-label":"Hint",children:[k?(0,a.jsx)(l.ZPX,{className:"text-[#89aFEF]"}):(0,a.jsx)(l.z5h,{className:"text-[#89aFEF]"}),(0,a.jsx)("span",{className:"text-[#89aFEF]",children:"Hint"})]})]}),k&&(0,a.jsx)(d.lG,{open:k,onClose:E,className:"fixed inset-0 z-20 flex justify-center items-center",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg p-6 w-80 max-w-xs flex flex-col justify-center items-center",children:[(0,a.jsx)("h2",{className:"text-[#3e65c8] text-lg mb-4 text-center",children:t.hint||"This artifact doesn't have a hint."}),(0,a.jsx)("button",{onClick:E,className:"bg-[#3e65c8] text-white rounded-md px-4 py-2 w-full",children:"OK"})]})}),(0,a.jsxs)("div",{className:"relative w-[40svh] h-[60svh]",children:[(0,a.jsx)(o(),{ref:u,videoConstraints:g,className:"absolute opacity-0 pointer-events-none"}),(0,a.jsx)("canvas",{ref:f,style:{width:"40svh",height:"60svh"},className:"absolute rounded-lg shadow-lg"}),(0,a.jsx)("div",{className:"absolute inset-0 flex justify-center items-center pointer-events-none",children:(0,a.jsx)("svg",{className:"w-[40svh] h-auto rounded-md z-[10]",width:"300",height:"360",viewBox:"0 0 300 360",fill:"none",xmlns:"http://www.w3.org/2000/svg",overflow:"visible",children:j&&j.length>0?j.map((e,t)=>(0,a.jsx)("path",{d:e,pathLength:100,stroke:"white",strokeDasharray:"0.5 1",strokeWidth:"0.5svh",strokeLinejoin:"round"},t)):(0,a.jsx)("text",{x:"10",y:"50",fill:"white",children:"Loading..."})})}),!F&&(0,a.jsx)("div",{className:"absolute bottom-[4px] left-1/2 transform -translate-x-1/2 w-[95%] z-[10] text-center text-warm-white text-[14px] overflow-hidden px-3 py-2 rounded-[60px] bg-[#393939]/70 backdrop-blur-[7px]",children:(0,a.jsx)("p",{children:P})})]}),!F&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"absolute bottom-12 flex flex-col gap-4",children:(0,a.jsx)("button",{onClick:U,className:"bg-gray-2 text-black rounded-full w-[72px] h-[72px] flex items-center justify-center shadow-lg border-none z-[9]","aria-label":"Take Picture",children:(0,a.jsx)("div",{className:"bg-white text-black rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-lg border-none z-[10]"})})}),(0,a.jsx)("div",{className:"absolute inset-0 flex justify-center items-center z-[10] pointer-events-none",children:(0,a.jsx)(c.default,{src:"/blue/camera-overlay/"+t.id+".png",alt:"Captured",className:"w-[40svh] h-auto",width:500,height:500})})]}),F&&(0,a.jsxs)(a.Fragment,{children:[F&&(0,a.jsxs)("div",{className:"fixed bottom-0 w-full px-5 py-3 flex justify-between z-40",children:[(0,a.jsx)("button",{onClick:A,className:"bg-black text-white border-2 border-white px-4 py-2 rounded-full z-[10]",children:"Retake"}),(0,a.jsxs)("button",{onClick:()=>{F&&F.length>50?C(!0):console.error("empty captured image")},className:"bg-[#89aFEF] text-black px-6 py-2 rounded-full z-[10] flex items-center gap-2",children:["Confirm",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-black",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 12h14M12 5l7 7-7 7"})})]})]}),(0,a.jsx)("div",{style:{width:"".concat(w.width,"px"),height:"".concat(w.height,"px")},className:"bg-blue-500 opacity-50 absolute rounded-lg shadow-lg z-[5]"}),(0,a.jsx)("div",{className:"absolute inset-0 flex justify-center items-center pointer-events-none z-[6]",children:(0,a.jsx)("svg",{className:"w-[40svh] h-auto rounded-md stroke-animation",width:"300",height:"360",viewBox:"0 0 300 360",fill:"none",xmlns:"http://www.w3.org/2000/svg",overflow:"visible",children:j&&j.length>0?j.map((e,t)=>(0,a.jsx)("path",{d:e,pathLength:100,stroke:"white",strokeWidth:"1.8svh",strokeLinejoin:"round"},t)):(0,a.jsx)("text",{x:"10",y:"50",fill:"white",children:"Loading..."})})}),(0,a.jsx)("div",{className:"absolute inset-0 flex justify-center items-center z-[10] pointer-events-none",children:(0,a.jsx)(c.default,{src:F,alt:"Captured",className:"w-[40svh] h-auto",width:500,height:500})})]}),L&&F&&(0,a.jsx)(m,{imageUrl:F,svgUrl:t.svgURL,onReady:async e=>{await (0,n.lE)(e,t.id,t.exhibitID),console.log("processed image saved"),s()}})]})}var w=s(9923);function p(e){let{image:t,artifact:s}=e;return(0,a.jsxs)("div",{className:"w-[100svw] h-[100svh] flex flex-col gap-5 items-center relative bg-warm-white",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",style:{background:"radial-gradient(#6D9DF8 2px, transparent 1px)",backgroundSize:"20px 20px",zIndex:0}}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full z-2",style:{background:"linear-gradient(to bottom, white, #CBDEFF)",backgroundSize:"100% 100%",opacity:.85}}),(0,a.jsxs)("div",{className:"relative z-10",children:[(0,a.jsxs)(w.P.div,{className:"fixed top-0 left-0 w-full h-[100px] bg-[#89AFEF] text-[#222324] shadow-md z-50 rounded-b-[20px] flex flex-col justify-center items-center",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.4},children:[(0,a.jsx)("p",{className:"text-base font-medium text-gray-1",children:"You found a"}),(0,a.jsx)("p",{className:"text-xl font-semibold text-black",children:s.name.toUpperCase()})]}),(0,a.jsx)("div",{className:"h-[128px]"}),(0,a.jsx)("div",{className:"w-full flex justify-center",children:(0,a.jsxs)(w.P.div,{className:"w-[293px] flex justify-between",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.4},children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("p",{className:"text-base font-medium text-gray-1",children:"Time Period"}),(0,a.jsx)("p",{className:"text-base font-medium text-gray-1",children:"Material"})]}),(0,a.jsxs)("div",{className:"text-end flex flex-col justify-start gap-1",children:[(0,a.jsx)("p",{className:"text-base font-medium text-black",children:s.time||"???"}),(0,a.jsx)("p",{className:"text-base font-medium text-black",children:s.material||"???"})]})]})}),(0,a.jsx)("div",{className:"flex flex-col items-center",children:t&&(0,a.jsxs)(w.P.div,{className:"relative",initial:{y:-25},animate:{y:25},transition:{duration:.3,delay:1},children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full rounded-lg",style:{zIndex:1}}),(0,a.jsx)(c.default,{src:t,alt:"Captured",className:"w-[340px] h-auto rounded-lg",width:500,height:500})]})}),(0,a.jsx)(w.P.div,{initial:{y:35,opacity:0},animate:{y:35,opacity:1},transition:{duration:.3,delay:.4},className:"mt-4 flex justify-center",children:(0,a.jsxs)(x(),{href:"/exhibit/".concat(s.exhibitID),className:"bg-[#333D37] text-white text-[16px] px-6 py-2 rounded-full shadow-md hover:bg-[#444D47] transition flex items-center",children:[(0,a.jsx)("span",{className:"mr-2",children:"Continue"}),(0,a.jsx)(l.Z0P,{style:{width:"20px",height:"18px"}})]})})]})]})}function v(e){let{artifact:t}=e,[s,l]=(0,i.useState)(null),r=async()=>{let e=await (0,n.K0)(t.id);e?l(e):console.log("Image not found in IndexedDB")};return(0,a.jsx)(a.Fragment,{children:s?(0,a.jsx)(p,{image:s,artifact:t}):(0,a.jsx)(f,{artifact:t,onImageCaptured:r})})}},7454:(e,t,s)=>{Promise.resolve().then(s.bind(s,684))},9316:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[381,711,766,874,694,98,441,684,358],()=>t(7454)),_N_E=e.O()}]);