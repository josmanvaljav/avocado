(()=>{const e="https://platzi-avo.vercel.app",t=e+"/api/avo",n=document.querySelector("#js-mount");window.fetch(t).then((e=>e.json())).then((t=>{const c=[];t.data.forEach((t=>{const n=document.createElement("img");n.src=e+t.image;const o=document.createElement("h2");o.textContent=t.name,o.className="text-[#347A08] text-xl font-bold";const a=document.createElement("div");a.textContent="Price per unit: "+(e=>new window.Intl.NumberFormat("en-EN",{style:"currency",currency:"USD"}).format(e))(t.price),a.className="font-medium";const m=document.createElement("div");m.append(o,a);const r=document.createElement("div");r.className="grid grid-cols-2 gap-2 place-items-center shadow-sm shadow-green-600",r.append(n,m),c.push(r)})),n.append(...c)}))})();