(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{1404:()=>{},2510:(e,t,s)=>{Promise.resolve().then(s.bind(s,3178))},3178:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var a=s(5155),l=s(2115),r=s(6766),i=s(5695),n=s(2699),c=s.n(n),o=s(98),d=s(2634);let u=e=>{let{isLabel:t,id:s,x:r,y:i,src:n,width:c,aspectRatio:o,rotation:u,moveSticker:h,resizeSticker:g,rotateSticker:b,deleteSticker:v,active:f,setActiveSticker:p}=e,x=(0,l.useRef)(null),[m,w]=(0,l.useState)({translate:[r,i],rotate:u,width:c});(0,l.useEffect)(()=>{w({translate:[r,i],rotate:u,width:c})},[r,i,u,c]);let k=!isNaN(o)&&o>0?o:1,j=m.width*k;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{ref:x,style:{position:"absolute",left:"".concat(m.translate[0],"%"),top:"".concat(m.translate[1],"%"),width:"".concat(m.width,"%"),height:"".concat(j,"%"),transform:"rotate(".concat(m.rotate,"deg)")},onClick:()=>p(s),children:[(0,a.jsx)("div",{style:{width:"100%",height:"100%",backgroundImage:t?"url(/stickers/".concat(n,")"):"url(".concat(n,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",cursor:"move"}}),f&&(0,a.jsx)("button",{onClick:e=>{e.stopPropagation(),v(s)},style:{position:"absolute",top:"-12px",right:"-12px",width:"24px",height:"24px",backgroundColor:"var(--Warm-White)",color:"red",fontWeight:"bold",borderRadius:"50%",border:"none",cursor:"pointer",transform:"rotate(-".concat(m.rotate,"deg)")},children:"x"})]}),f&&(0,a.jsx)(d.Ay,{target:x.current,draggable:!0,resizable:!0,rotatable:!0,renderDirections:["se"],onDrag:e=>{let{left:t,top:a}=e;if(!x.current||!x.current.parentElement)return;let l=x.current.parentElement.getBoundingClientRect(),r=t/l.width*100,i=a/l.height*100;w(e=>({...e,translate:[r,i]})),h(s,r,i)},onResize:e=>{let{width:t}=e;if(!x.current||!x.current.parentElement)return;let a=t/x.current.parentElement.getBoundingClientRect().width*100;w(e=>({...e,width:a})),g(s,a)},onRotate:e=>{let{beforeRotate:t}=e;w(e=>({...e,rotate:t})),b(s,t)}})]})};function h(e){let{setMenuSelection:t,addSticker:s,setGridBg:i,menuSelection:n}=e,c=["sticker","label","grid"],[d,u]=(0,l.useState)([]),[,h]=(0,l.useState)(c.indexOf(null!=n?n:"sticker"));return(0,l.useEffect)(()=>{(async()=>{u(await (0,o.Ui)())})()},[]),(0,l.useEffect)(()=>{h(c.indexOf(null!=n?n:"sticker"))},[n,c]),(0,a.jsxs)("div",{className:"modal transition-transform duration-200",children:[(0,a.jsxs)("div",{id:"top-bar",className:"w-full h-[4svh] flex items-center",children:[(0,a.jsx)("div",{className:"flex-1"}),(0,a.jsxs)("div",{className:"flex gap-[1svh]",children:[(0,a.jsx)("div",{className:"w-[1.5svh] h-[1.5svh] rounded-full ".concat("sticker"===n?"bg-blue-1":"bg-blue-5")}),(0,a.jsx)("div",{className:"w-[1.5svh] h-[1.5svh] rounded-full ".concat("label"===n?"bg-blue-1":"bg-blue-5")}),(0,a.jsx)("div",{className:"w-[1.5svh] h-[1.5svh] rounded-full ".concat("grid"===n?"bg-blue-1":"bg-blue-5")})]}),(0,a.jsx)("div",{className:"flex-1 flex justify-end w-[7svh]",children:(0,a.jsx)("button",{className:"flex p-[1svh] justify-end round-button w-[4svh] h-[4svh] rounded-full text-white",onClick:()=>t(null),children:(0,a.jsx)(r.default,{src:"/icons/x.svg",alt:"close",width:50,height:50})})})]}),(0,a.jsxs)("div",{id:"contents",className:"w-full h-[65svh] overflow-y-scroll no-scrollbar",children:["sticker"===n&&s&&(0,a.jsx)("div",{className:"flex grid grid-cols-3 gap-[1.5svh] w-full",children:d.map(e=>{let{id:l,url:r}=e;return(0,a.jsx)("div",{onClick:()=>{s(l,!1),t(null)},className:"cursor-pointer w-full aspect-[5/6]",style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center"}},l)})}),"label"===n&&s&&(0,a.jsx)("div",{className:"flex flex-wrap gap-[1.5svh] w-full",children:["1.png","4.png","5.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png"].map((e,l)=>(0,a.jsx)("div",{onClick:()=>{s(e,!0),t(null)},className:"cursor-pointer  h-[10svh] w-full",style:{backgroundImage:"url(/stickers/".concat(e,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}},l))}),"grid"===n&&i&&(0,a.jsx)("div",{className:"flex grid grid-cols-2 gap-[2svh] w-full",children:["#D7E3FF","#E16161","#ACDACA","#FFC531","var(--Warm-White)","#222324"].map((e,s)=>(0,a.jsx)("div",{style:{backgroundColor:e},className:"w-full aspect-[1] cursor-pointer rounded-md",onClick:()=>{i(e),t(null)}},s))})]})]})}s(1404);let g=e=>({id:e.id,imageName:e.imageName,x:e.x,y:e.y,width:e.width,aspectRatio:e.aspectRatio,rotation:e.rotation,isLabel:e.isLabel}),b=()=>{let e=(0,l.useRef)(null),[t,s]=(0,l.useState)([]),[n,d]=(0,l.useState)(null),[b,v]=(0,l.useState)(null),[f,p]=(0,l.useState)("var(--Warm-White)"),x=(0,i.useRouter)();(0,l.useEffect)(()=>{(0,o.u9)().then(e=>{e&&p(e)}),(0,o.KW)().then(async e=>{s(await Promise.all(e.map(async e=>{let t=e.aspectRatio||1;return{...e,src:e.isLabel?e.imageName:await (0,o.K0)(e.imageName)||"",moveSticker:k,resizeSticker:j,rotateSticker:N,deleteSticker:y,active:!1,setActiveSticker:d,aspectRatio:t}})))})},[]);let m=(e,t)=>{s(s=>{let a=s.map(s=>s.id===e?{...s,...t}:s),l=a.find(t=>t.id===e);return l&&(0,o.N5)(g(l)),a})},w=e=>{v(e),d(null)},k=(e,t,a)=>{s(s=>s.map(s=>s.id===e?{...s,x:t,y:a}:s)),m(e,{x:t,y:a})},j=(e,t)=>{s(s=>s.map(s=>s.id===e?{...s,width:t}:s)),m(e,{width:t})},N=(e,t)=>{s(s=>s.map(s=>s.id===e?{...s,rotation:t}:s)),m(e,{rotation:t})},y=e=>{s(t=>t.filter(t=>t.id!==e)),(0,o.dC)(e)},S=async()=>{let t=e.current;t&&(d(null),requestAnimationFrame(async()=>{let e=(await c()(t,{backgroundColor:null,scale:3,useCORS:!0})).toDataURL("image/png"),s=await (await fetch(e)).blob(),a=new File([s],"stickerboard.png",{type:s.type});navigator.share&&navigator.canShare&&navigator.canShare({files:[a]})?await navigator.share({files:[a],title:"Stickerboard",text:"Check out all these artifacts I found at the Penn Museum!"}):(alert("Sharing is not supported on your device."),console.log("Sharing not supported in this browser.")),console.log("Screenshot captured successfully and share dialog opened!")}))};return(0,a.jsxs)("div",{className:"relative h-[100svh] w-[100svw] grid-bg-gray flex flex-col justify-center items-center bg-gray-500 overflow-hidden gap-[0.5svh]",children:[(0,a.jsxs)("div",{className:"w-[42.75svh] h-[9svh] py-[2.3svh] flex flex-row justify-between items-center",children:[(0,a.jsx)("button",{onClick:()=>x.back(),className:"round-button h-full flex rounded-full p-[1svh] px-[2svh]",children:(0,a.jsx)(r.default,{src:"/icons/arrow-stroke.svg",className:"w-full h-full",width:100,height:100,alt:"back"})}),(0,a.jsx)("button",{onClick:S,className:"round-button h-full flex rounded-full p-[1svh] px-[2svh]",children:(0,a.jsx)(r.default,{src:"/icons/export-black.svg",className:"w-full h-full",width:100,height:100,alt:"export"})})]}),(0,a.jsx)("div",{ref:e,className:"w-[42.75svh] h-[76svh] grid-bg rounded-[1svh] shadow-lg relative overflow-hidden",style:{backgroundColor:f},children:t.map(e=>(0,a.jsx)(u,{isLabel:e.isLabel,id:e.id,x:e.x,y:e.y,src:e.src,width:e.width||10,aspectRatio:e.aspectRatio||1,rotation:e.rotation||0,moveSticker:k,resizeSticker:j,rotateSticker:N,deleteSticker:y,active:e.id===n,setActiveSticker:d},e.id))}),(0,a.jsxs)("div",{className:"border-black p-[2svh] min-h-[10svh] flex justify-center items-center",children:[b&&(0,a.jsx)(h,{setMenuSelection:v,addSticker:"grid"!==b?(e,t)=>{(0,o.K0)(e).then(a=>{let l=new window.Image;l.onload=()=>{let r=l.naturalHeight/l.naturalWidth,i={id:Date.now(),imageName:e,src:t?e:a||"",x:30,y:50-40*r/2,width:40,aspectRatio:r,rotation:0,isLabel:t,moveSticker:k,resizeSticker:j,rotateSticker:N,deleteSticker:y,active:!0,setActiveSticker:d};s(e=>[...e,i]);let n={...i};(0,o.N5)(g(n))},l.src=t?"/stickers/".concat(e):a||""})}:void 0,setGridBg:"grid"===b?e=>{p(e),(0,o.XG)(e)}:void 0,menuSelection:b}),(0,a.jsxs)("div",{id:"sticker-bar",className:"round-button w-full flex flex-row justify-center items-center p-[1.3svh] px-[2.3svh] gap-[1.5svh] rounded-full",children:[(0,a.jsx)("button",{className:"flex w-[4.7svh] h-[4.7svh] rounded-full p-[0.7svh] ".concat("sticker"===b?"bg-blue-1":"bg-blue-5"),onClick:()=>w("sticker"),children:(0,a.jsx)(r.default,{src:"sticker"===b?"/stickerboard/sticker-button-alt.svg":"/stickerboard/sticker-button.svg",alt:"sticker button",width:50,height:50,className:"object-contain"})}),(0,a.jsx)("button",{className:"flex w-[4.7svh] h-[4.7svh] rounded-full p-[0.7svh] ".concat("label"===b?"bg-blue-1":"bg-blue-5"),onClick:()=>w("label"),children:(0,a.jsx)(r.default,{src:"label"===b?"/stickerboard/label-button-alt.svg":"/stickerboard/label-button.svg",alt:"label button",width:50,height:50,className:"object-contain"})}),(0,a.jsx)("button",{className:"flex w-[4.7svh] h-[4.7svh] rounded-full p-[0.7svh] ".concat("grid"===b?"bg-blue-1":"bg-blue-5"),onClick:()=>w("grid"),children:(0,a.jsx)(r.default,{src:"grid"===b?"/stickerboard/grid-button-alt.svg":"/stickerboard/grid-button.svg",alt:"grid button",width:50,height:50,className:"object-contain"})})]})]})]})};function v(){return(0,a.jsx)(b,{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[525,239,316,766,997,98,441,684,358],()=>t(2510)),_N_E=e.O()}]);