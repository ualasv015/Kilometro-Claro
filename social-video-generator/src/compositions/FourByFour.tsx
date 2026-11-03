import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BrandLogo} from '../components/BrandLogo';
const lime='#d7f36a', green='#123b30', ice='#e4f2ef';
const captions=[[0,3.48,"¿Crees que por llevar un 4×4 puedes frenar antes sobre nieve?"],[4.08,4.52,"Cuidado."],[4.86,8.6,"La tracción total puede ayudar al coche a avanzar cuando el suelo resbala,"],[8.82,10.54,"porque puede enviar fuerza a ambos ejes."],[11.02,13.76,"Pero al frenar, el agarre sigue dependiendo de los neumáticos,"],[14.14,16.24,"la velocidad y el estado de la carretera."],[16.98,19.6,"Tener cuatro ruedas motrices no crea agarre infinito."],[20.22,22.1,"Por eso, incluso con un 4×4,"],[22.42,25.34,"necesitas neumáticos adecuados y una distancia de seguridad suficiente."],[25.9,27.2,"¿Ya conocías esta diferencia?"],[27.84,30.08,"Busca la guía de tracción en kilometroclaro.com."]] as const;
const scenes=[
 [0,'¿UN 4×4 FRENA ANTES?','FRENAR SOBRE NIEVE'],
 [4.08,'LA TRACCIÓN AYUDA A AVANZAR','SUPERFICIE DESLIZANTE'],
 [8.82,'FUERZA A LOS DOS EJES','TRACCIÓN TOTAL'],
 [11.02,'AL FRENAR MANDA EL AGARRE','NEUMÁTICOS · VELOCIDAD · FIRME'],
 [16.98,'EL AGARRE TIENE UN LÍMITE','CUATRO RUEDAS MOTRICES'],
 [20.22,'DEJA MÁS MARGEN','NEUMÁTICOS Y DISTANCIA'],
 [25.9,'¿CONOCÍAS LA DIFERENCIA?','GUÍA DE TRACCIÓN'],
] as const;
const Car=({x,y,color=green}:{x:number;y:number;color?:string})=><g transform={'translate('+x+' '+y+')'}>
 <path d="M-71 35v-46l23-16 24-42h69l24 47 21 14v43z" fill={color} stroke="#173d34" strokeWidth="5" strokeLinejoin="round"/>
 <path d="M-33 -28l19-31h51l17 31z" fill="#a7d2cd"/>
 <path d="M-72 11h14m134-7h14" stroke="#fff5a9" strokeWidth="8"/>
 <circle cx="-40" cy="35" r="24" fill="#172522"/><circle cx="57" cy="35" r="24" fill="#172522"/>
 <circle cx="-40" cy="35" r="10" fill="#a7d2cd"/><circle cx="57" cy="35" r="10" fill="#a7d2cd"/>
 </g>;
const Art=({index,frame}:{index:number;frame:number})=>{
 const travel=interpolate(frame,[0,100],[0,310],{extrapolateRight:'clamp'});
 return <svg viewBox="0 0 900 660" style={{width:'100%',height:'100%',display:'block'}}>
 <rect width="900" height="660" fill={ice}/>
 <path d="M0 320L175 150 290 270 450 100 630 286 760 170 900 300V430H0Z" fill="#bfded8"/>
 <path d="M0 398H900V568H0Z" fill="#42645f"/>
 <path d="M0 483H900" stroke="#e4f2ef" strokeWidth="8" strokeDasharray="56 42" strokeDashoffset={-(frame%98)}/>
 {index===2?<g>
 <rect x="337" y="100" width="226" height="430" rx="70" fill={green}/>
 <path d="M450 178v268M335 184h230M335 440h230" stroke={lime} strokeWidth={12+3*Math.sin(frame/5)}/>
 {[184,440].flatMap(y=>[320,580].map(x=><rect key={x+'-'+y} x={x-26} y={y-48} width="52" height="96" rx="17" fill="#172522" stroke={lime} strokeWidth="5"/>))}
 <circle cx="450" cy="315" r="48" fill={lime}/>
 <text x="450" y="325" textAnchor="middle" fill={green} fontWeight="900" fontSize="32">4×4</text>
 </g>:index===3?<g>{['NEUMÁTICOS','VELOCIDAD','CARRETERA'].map((label,i)=><g key={label}>
 <rect x={32+i*287} y="240" width="264" height="220" rx="28" fill={frame>=i*38?green:'#678982'}/>
 <text x={164+i*287} y="344" textAnchor="middle" fill={lime} fontWeight="900" fontSize="64">{['◉','»','≋'][i]}</text>
 <text x={164+i*287} y="405" textAnchor="middle" fill="white" fontWeight="900" fontSize="22">{label}</text>
 </g>)}</g>:index===6?<g><rect x="68" y="220" width="764" height="200" rx="30" fill={green}/><text x="450" y="332" textAnchor="middle" fill={lime} fontWeight="900" fontSize="52">KILOMETROCLARO.COM</text></g>:<>
 <Car x={index===5?210:200+travel} y={423} color={green}/>
 {index===5&&<><Car x={700} y={423} color="#78b0a8"/><path d="M320 505H590m-255-14-15 14 15 14m240-28 15 14-15 14" fill="none" stroke={lime} strokeWidth="7"/></>}
 {index!==5&&<text x="450" y="220" textAnchor="middle" fill={green} fontWeight="900" fontSize="75">{['4×4','AVANZAR','','','AGARRE LIMITADO'][index]}</text>}
 </>}
 </svg>;
};
export const FourByFourPreview=()=>{const frame=useCurrentFrame();return <Art index={Math.min(6,Math.floor(frame/40))} frame={frame%40}/>};
export const FourByFour=()=>{const frame=useCurrentFrame(), time=frame/30;
 const index=scenes.reduce((active,scene,i)=>time>=scene[0]?i:active,0);
 const [start,title,label]=scenes[index];
 const cue=captions.find(([a,b])=>time>=a&&time<b);
 return <AbsoluteFill style={{background:green,fontFamily:'Arial,sans-serif',color:'white'}}>
 <BrandLogo style={{top:26,left:38,transform:'scale(.59)',transformOrigin:'top left'}}/>
 <div style={{position:'absolute',top:120,left:50,right:50,display:'flex',gap:8}}>{scenes.map(([a],i)=><div key={a} style={{height:8,flex:1,background:'#ffffff38',borderRadius:10,overflow:'hidden'}}><div style={{height:8,background:lime,width:Math.max(0,Math.min(100,(time-a)/((scenes[i+1]?.[0]??30.4)-a)*100))+'%'}}/></div>)}</div>
 <div style={{position:'absolute',top:151,left:50,right:50,display:'flex',justifyContent:'space-between',fontSize:22,fontWeight:800}}><span>{index+1} / 7 · {label}</span><span>{(30.4-time).toFixed(1)} s</span></div>
 <div style={{position:'absolute',top:240,left:65,right:65,textAlign:'center',fontSize:72,fontWeight:950,color:lime,lineHeight:1.05}}>{title}</div>
 <div style={{position:'absolute',top:510,left:50,right:50,borderRadius:34,overflow:'hidden'}}><Art index={index} frame={Math.max(0,frame-Math.round(start*30))}/></div>
 {cue&&<div style={{position:'absolute',bottom:240,left:65,right:65,minHeight:138,display:'grid',placeItems:'center',background:'#f7f8f5',color:green,fontWeight:800,fontSize:38,textAlign:'center',padding:22,borderRadius:25}}>{cue[2]}</div>}
 <Audio src={staticFile('audio/voice-video-022.wav')}/>
 </AbsoluteFill>};
export const FourByFourCover=()=> <AbsoluteFill style={{background:green,fontFamily:'Arial,sans-serif'}}>
 <Img src={staticFile('logo-marca-kilometro-claro.png')} style={{position:'absolute',width:104,height:104,left:488,top:355,borderRadius:52}}/>
 <div style={{position:'absolute',left:60,right:60,top:510,textAlign:'center',fontSize:88,fontWeight:950,color:lime,lineHeight:1.05}}>EL ERROR<br/>DEL 4×4</div>
 <div style={{position:'absolute',left:60,right:60,top:770,borderRadius:30,overflow:'hidden'}}><Art index={0} frame={42}/></div>
 </AbsoluteFill>;
