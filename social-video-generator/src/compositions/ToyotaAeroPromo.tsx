import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type Cue = {startSeconds:number; endSeconds:number; text:string};
export type ToyotaAeroSpec = {id:string; durationSeconds:number; fps:number; captions:Cue[]};
const scenes = [
  {start:0,end:6.3,label:'EL RETO'}, {start:6.3,end:16.2,label:'DISEÑO'},
  {start:16.2,end:23.0,label:'VELOCIDAD'}, {start:23.0,end:27.2,label:'AERODINÁMICA'},
  {start:27.2,end:33.4,label:'PROTOTIPO'}, {start:33.4,end:40.88,label:'LA GUÍA'},
];
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const Title:React.FC<{eyebrow:string; title:string; frame:number}> = ({eyebrow,title,frame}) => <div style={{position:'absolute',top:230,left:55,right:55,textAlign:'center',opacity:interpolate(frame,[0,8],[0,1],clamp),transform:`translateY(${interpolate(frame,[0,10],[25,0],clamp)}px)`}}><div style={{color:brand.paper,fontSize:21,fontWeight:900,letterSpacing:3,marginBottom:13}}>{eyebrow}</div><div style={{color:brand.lime,fontSize:title.length>25?48:64,fontWeight:1000,lineHeight:1.03,letterSpacing:-1.5}}>{title}</div></div>;
const Photo:React.FC<{file:string;frame:number;top?:number;height?:number}> = ({file,frame,top=445,height=560}) => <div style={{position:'absolute',top,left:48,right:48,height,borderRadius:30,overflow:'hidden',boxShadow:'0 24px 60px #06140f88',opacity:interpolate(frame,[0,9],[0,1],clamp)}}><Img src={staticFile(`images/toyota-gr-gt-02/${file}.jpg`)} style={{width:'100%',height:'100%',objectFit:'cover',transform:`translateX(${Math.sin(frame/30)*20}px) scale(${1.06+interpolate(frame,[0,130],[0,0.08],clamp)})`}} /></div>;
const AirDiagram:React.FC<{frame:number}> = ({frame}) => <svg viewBox="0 0 900 300" style={{position:'absolute',left:90,top:1050,width:900,height:300}}>
  {[55,100,145,190].map((y,i)=><path key={y} d={`M20 ${y} C220 ${y-15} 250 ${y-65} 460 ${y-55} S700 ${y-15} 880 ${y-25}`} stroke={i%2?brand.paper:brand.lime} opacity=".72" fill="none" strokeWidth="5" strokeDasharray="30 22" strokeDashoffset={-frame*3} />)}
  <path d="M130 225 L230 218 Q290 150 407 150 L550 150 Q630 156 680 214 L780 225 L790 247 L120 247 Z" fill="#173d34" stroke={brand.lime} strokeWidth="5" strokeDasharray="1400" strokeDashoffset={interpolate(frame,[0,45],[1400,0],clamp)} />
  <circle cx="260" cy="240" r="28" fill={brand.deep} stroke={brand.paper} strokeWidth="5"/><circle cx="670" cy="240" r="28" fill={brand.deep} stroke={brand.paper} strokeWidth="5"/>
</svg>;

const Content:React.FC<{index:number;f:number}> = ({index,f}) => {
 if(index===0) return <><Title frame={f} eyebrow="TOYOTA GR GT" title="¿DISEÑADO EMPEZANDO POR EL AIRE?"/><Photo frame={f} file="25" top={475} height={640}/><div style={{position:'absolute',top:1165,left:70,right:70,textAlign:'center',color:brand.paper,fontSize:30,fontWeight:900}}>EL AIRE CONDICIONA LAS FORMAS</div></>;
 if(index===1) return <><Title frame={f} eyebrow="UN PROCESO DIFERENTE" title="PRIMERO, AERODINÁMICA"/><Photo frame={f} file="26" top={425} height={520}/><div style={{position:'absolute',top:982,left:65,right:65,textAlign:'center',color:brand.paper,fontSize:25,fontWeight:900,letterSpacing:1}}>AERODINÁMICA + REFRIGERACIÓN → CARROCERÍA</div><AirDiagram frame={f}/></>;
 if(index===2) return <><Title frame={f} eyebrow="VELOCIDAD PUNTA OBJETIVO" title="AL MENOS 320 KM/H"/><Photo frame={f} file="27" top={460} height={625}/><div style={{position:'absolute',top:1125,left:115,right:115,borderRadius:20,padding:'20px 15px',background:brand.lime,color:brand.deep,textAlign:'center',fontSize:28,fontWeight:950}}>OBJETIVO · PROTOTIPO EN DESARROLLO</div></>;
 if(index===3) return <><Title frame={f} eyebrow="LAS FORMAS IMPORTAN" title="TRES EFECTOS DEL AIRE"/><div style={{position:'absolute',top:465,left:65,right:65,display:'grid',gap:26}}>{['RESISTENCIA AL AVANCE','ESTABILIDAD','REFRIGERACIÓN'].map((label,i)=><div key={label} style={{height:180,borderRadius:26,display:'flex',alignItems:'center',gap:30,padding:'0 30px',background:i===1?brand.lime:'#f7f8f5',color:brand.deep,opacity:interpolate(f,[i*10,i*10+10],[0,1],clamp),transform:`translateX(${interpolate(f,[i*10,i*10+10],[80,0],clamp)}px)`}}><div style={{fontSize:65,fontWeight:1000,width:95,textAlign:'center'}}>{['≋','↕','✳'][i]}</div><div style={{fontSize:35,fontWeight:1000}}>{label}</div></div>)}</div></>;
 if(index===4) return <><Title frame={f} eyebrow="LA LETRA PEQUEÑA" title="ES UN PROTOTIPO"/><div style={{position:'absolute',top:470,left:80,right:80,textAlign:'center',color:brand.lime,fontSize:150,fontWeight:1000,lineHeight:1,transform:`scale(${interpolate(f,[0,14],[.75,1],clamp)})`}}>320+</div><div style={{position:'absolute',top:660,left:135,right:135,background:brand.lime,color:brand.deep,textAlign:'center',padding:'24px 15px',borderRadius:22,fontSize:34,fontWeight:1000}}>OBJETIVO DE DESARROLLO</div><div style={{position:'absolute',top:800,left:100,right:100,textAlign:'center',color:brand.paper,fontSize:32,lineHeight:1.15,fontWeight:900}}>NO ES UNA PRESTACIÓN HOMOLOGADA DEL MODELO FINAL</div></>;
 return <><div style={{position:'absolute',top:260,left:0,right:0,display:'flex',justifyContent:'center'}}><div style={{width:225,height:225,borderRadius:'50%',overflow:'hidden',boxShadow:'0 18px 30px #06140f70'}}><Img src={staticFile('logo-marca-kilometro-claro.png')} style={{width:'100%',height:'100%',borderRadius:'50%'}}/></div></div><div style={{position:'absolute',top:550,left:65,right:65,textAlign:'center',color:brand.paper,fontSize:50,lineHeight:1.08,fontWeight:1000}}>¿QUÉ SABEMOS?<br/><span style={{color:brand.lime}}>¿QUÉ FALTA POR SABER?</span></div><div style={{position:'absolute',top:835,left:65,right:65,textAlign:'center',background:brand.lime,color:brand.deep,padding:'25px 12px',borderRadius:24,fontSize:42,fontWeight:1000,transform:`scale(${interpolate(f,[20,30],[.94,1],clamp)})`}}>KILOMETROCLARO.COM</div><div style={{position:'absolute',top:950,left:70,right:70,textAlign:'center',color:brand.paper,fontSize:27,fontWeight:900}}>BUSCA LA GUÍA COMPLETA DEL GR GT</div></>;
};
export const ToyotaAeroPromo:React.FC<ToyotaAeroSpec> = (spec) => {
 const frame=useCurrentFrame(), sec=frame/spec.fps, idx=Math.max(0,scenes.findIndex(s=>sec>=s.start&&sec<s.end)), scene=scenes[idx], local=frame-Math.round(scene.start*spec.fps), cue=spec.captions.find(c=>sec>=c.startSeconds&&sec<c.endSeconds);
 const grid=(frame*.6)%90;
 return <AbsoluteFill style={{background:'radial-gradient(ellipse at 52% 45%, #1d5d4e 0%, #173d34 42%, #0a211a 100%)',overflow:'hidden',fontFamily:brand.font}}>
  <div style={{position:'absolute',inset:0,opacity:.12,backgroundImage:'linear-gradient(#d7f36a 1px,transparent 1px),linear-gradient(90deg,#d7f36a 1px,transparent 1px)',backgroundSize:'90px 90px',backgroundPosition:`${grid}px ${-grid}px`}}/>
  <div style={{position:'absolute',top:360,right:-230,width:650,height:650,borderRadius:'50%',border:'2px solid #d7f36a30',transform:`translateY(${Math.sin(frame/23)*30}px)`}}/>
  <Content index={idx} f={local}/>
  <BrandLogo style={{top:28,left:38,transform:'scale(.59)',transformOrigin:'top left',zIndex:30}}/>
  <div style={{position:'absolute',top:42,right:42,padding:'12px 16px',borderRadius:14,background:brand.paper,color:brand.deep,fontSize:18,fontWeight:900,zIndex:30}}>TOYOTA GR GT</div>
  <div style={{position:'absolute',top:118,left:48,right:48,display:'flex',gap:8,zIndex:30}}>{scenes.map((s,i)=><div key={s.label} style={{height:8,flex:1,background:'#f7f8f53b',borderRadius:8,overflow:'hidden'}}><div style={{height:'100%',width:`${100*(i<idx?1:i>idx?0:interpolate(sec,[s.start,s.end],[0,1],clamp))}%`,background:brand.lime}}/></div>)}</div>
  <div style={{position:'absolute',top:145,left:50,right:50,display:'flex',justifyContent:'space-between',color:brand.paper,fontSize:17,fontWeight:900,letterSpacing:1,zIndex:30}}><span>{String(idx+1).padStart(2,'0')} / 06 · {scene.label}</span><span>{Math.max(0,spec.durationSeconds-sec).toFixed(1).replace('.',',')} s</span></div>
  {cue&&<div style={{position:'absolute',left:54,right:54,bottom:203,minHeight:148,padding:'22px 27px',boxSizing:'border-box',display:'grid',placeItems:'center',borderRadius:28,background:brand.paper,color:brand.deep,fontSize:cue.text.length>72?29:cue.text.length>52?33:38,lineHeight:1.12,fontWeight:850,textAlign:'center',boxShadow:'0 20px 50px #06140f95',zIndex:35}}>{cue.text}</div>}
  <div style={{position:'absolute',bottom:48,left:54,right:54,display:'flex',justifyContent:'space-between',color:'#dfe9e2',fontSize:15,fontWeight:750,zIndex:25}}><span>IMÁGENES OFICIALES · TOYOTA MOTOR CORPORATION / TOYOTA GAZOO RACING</span><span>{sec.toFixed(1).replace('.',',')} s</span></div>
  <Audio src={staticFile('audio/voice-video-010.wav')} volume={1}/>
 </AbsoluteFill>;
};
