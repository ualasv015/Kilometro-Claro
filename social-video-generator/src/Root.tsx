import {LiftOffPromo, LiftOffPreview, LiftOffCover, type LiftOffSpec} from './compositions/LiftOffPromo';
import liftRaw from '../data/videos/video-025.json';
import {AcceleratorPromo, AcceleratorPreview, AcceleratorCover, type AcceleratorSpec} from './compositions/AcceleratorPromo';
import accRaw from '../data/videos/video-024.json';
import {CvtVsEcvtPromo, CvtVsEcvtPreview, CvtVsEcvtCover, cvtPreviewFrames, type CvtVsEcvtSpec} from './compositions/CvtVsEcvtPromo';
import cvtRaw from '../data/videos/video-023.json';
import {FourByFourGripPromo, FourByFourGripPreview, FourByFourGripCover, previewFrames as gripPreviewFrames, type FourByFourGripSpec} from './compositions/FourByFourGripPromo';
import gripRaw from '../data/videos/video-022.json';
import {FourByFour,FourByFourCover,FourByFourPreview} from './compositions/FourByFour';
import {Matrix2D,Matrix2DCover,type MatrixSpec} from './compositions/Matrix2D';
import matrixRaw from '../data/videos/video-021.json';
import {PoloViajePromo,PoloViajeCover,type PoloViajeSpec} from './compositions/PoloViajePromo';
import poloViajeRaw from '../data/videos/video-020.json';
import {PoloComparePromo,PoloCompareCover,type PoloCompareSpec} from './compositions/PoloComparePromo';
import poloCompareRaw from '../data/videos/video-019.json';
import {PoloGtiPromo,PoloGtiCover,type PoloGtiSpec} from './compositions/PoloGtiPromo';
import poloGtiRaw from '../data/videos/video-018.json';
import {TenseiPricePromo,TenseiPriceCover,type TenseiPriceSpec} from './compositions/TenseiPricePromo';
import priceRaw from '../data/videos/video-017.json';
import {VtecPromo,VtecCover,type VtecSpec} from './compositions/VtecPromo';
import vtecRaw from '../data/videos/video-016.json';
import {TenseiPromo,TenseiCover,type TenseiSpec} from './compositions/TenseiPromo';
import tenseiRaw from '../data/videos/video-015.json';
import React from 'react';
import {Composition} from 'remotion';
import rawSpec from '../data/videos/video-001.json';
import mazdaManualRaw from '../data/videos/video-014.json';
import {MazdaManualPromo, MazdaManualCover, type MazdaManualSpec} from './compositions/MazdaManualPromo';
import mazdaWeightRaw from '../data/videos/video-013.json';
import {MazdaWeightPromo, MazdaWeightCover, type MazdaWeightSpec} from './compositions/MazdaWeightPromo';
import mazdaRaw from '../data/videos/video-012.json';
import {MazdaMx5Promo, MazdaMx5Cover, type MazdaMx5Spec} from './compositions/MazdaMx5Promo';
import gtGt3Raw from '../data/videos/video-011.json';
import {ToyotaGtGt3Promo, type ToyotaGtGt3Spec} from './compositions/ToyotaGtGt3Promo';
import aeroRaw from '../data/videos/video-010.json';
import {ToyotaAeroPromo, type ToyotaAeroSpec} from './compositions/ToyotaAeroPromo';
import {validateVideoSpec} from './content/validate';
import {CostComparison} from './compositions/CostComparison';
import rankingRaw from '../data/videos/video-002.json';
import {validateRankingVideo} from './content/validate-ranking';
import {CarSales2025} from './compositions/CarSales2025';
import hiddenDetailsRaw from '../data/videos/video-003.json';
import {HiddenCarDetails, type HiddenDetailsSpec} from './compositions/HiddenCarDetails';
import drivetrainRaw from '../data/videos/video-004.json';
import {DrivetrainExplainer, type DrivetrainSpec} from './compositions/DrivetrainExplainer';
import directoryRaw from '../data/videos/video-005.json';
import {BrandDirectoryPromo, type BrandDirectorySpec} from './compositions/BrandDirectoryPromo';
import missionRaw from '../data/videos/video-006.json';
import {MissionSPromo, type MissionSPromoSpec} from './compositions/MissionSPromo';
import missionInteriorRaw from '../data/videos/video-007.json';
import {MissionSInteriorPromo, type MissionSInteriorSpec} from './compositions/MissionSInteriorPromo';
import missionDesignRefsRaw from '../data/videos/video-008.json';
import {MissionSDesignRefsPromo, type MissionSDesignRefsSpec} from './compositions/MissionSDesignRefsPromo';
import toyotaGrGtRaw from '../data/videos/video-009.json';
import {ToyotaGrGtPromo, type ToyotaGrGtSpec} from './compositions/ToyotaGrGtPromo';

const defaultSpec = validateVideoSpec(rawSpec);
const rankingSpec = validateRankingVideo(rankingRaw);
const hiddenDetailsSpec = hiddenDetailsRaw as unknown as HiddenDetailsSpec;
const drivetrainSpec = drivetrainRaw as unknown as DrivetrainSpec;
const directorySpec = directoryRaw as unknown as BrandDirectorySpec;
const missionSpec = missionRaw as unknown as MissionSPromoSpec;
const missionInteriorSpec = missionInteriorRaw as unknown as MissionSInteriorSpec;
const missionDesignRefsSpec = missionDesignRefsRaw as unknown as MissionSDesignRefsSpec;
const toyotaGrGtSpec = toyotaGrGtRaw as unknown as ToyotaGrGtSpec;

export const RemotionRoot: React.FC = () => (
  <>
  <Composition
    id="Cost100Km"
    component={CostComparison}
    durationInFrames={defaultSpec.durationSeconds * defaultSpec.fps}
    fps={defaultSpec.fps}
    width={1080}
    height={1920}
    defaultProps={defaultSpec}
  />
  <Composition
    id="Sales2025Reel"
    component={CarSales2025}
    durationInFrames={rankingSpec.durationSeconds * rankingSpec.fps}
    fps={rankingSpec.fps}
    width={1080}
    height={1920}
    defaultProps={rankingSpec}
  />
  <Composition
    id="HiddenCarDetailsReel"
    component={HiddenCarDetails}
    durationInFrames={Math.round(hiddenDetailsSpec.durationSeconds * hiddenDetailsSpec.fps)}
    fps={hiddenDetailsSpec.fps}
    width={1080}
    height={1920}
    defaultProps={hiddenDetailsSpec}
  />
  <Composition
    id="DrivetrainExplainerReel"
    component={DrivetrainExplainer}
    durationInFrames={Math.round(drivetrainSpec.durationSeconds * drivetrainSpec.fps)}
    fps={drivetrainSpec.fps}
    width={1080}
    height={1920}
    defaultProps={drivetrainSpec}
  />
  <Composition
    id="BrandDirectoryPromoReel"
    component={BrandDirectoryPromo}
    durationInFrames={Math.round(directorySpec.durationSeconds * directorySpec.fps)}
    fps={directorySpec.fps}
    width={1080}
    height={1920}
    defaultProps={directorySpec}
  />
  <Composition
    id="MissionSPromoReel"
    component={MissionSPromo}
    durationInFrames={Math.round(missionSpec.durationSeconds * missionSpec.fps)}
    fps={missionSpec.fps}
    width={1080}
    height={1920}
    defaultProps={missionSpec}
  />
  <Composition
    id="MissionSInteriorReel"
    component={MissionSInteriorPromo}
    durationInFrames={Math.round(missionInteriorSpec.durationSeconds * missionInteriorSpec.fps)}
    fps={missionInteriorSpec.fps}
    width={1080}
    height={1920}
    defaultProps={missionInteriorSpec}
  />
  <Composition
    id="MissionSDesignRefsReel"
    component={MissionSDesignRefsPromo}
    durationInFrames={Math.round(missionDesignRefsSpec.durationSeconds * missionDesignRefsSpec.fps)}
    fps={missionDesignRefsSpec.fps}
    width={1080}
    height={1920}
    defaultProps={missionDesignRefsSpec}
  />
  <Composition
    id="ToyotaGrGtReel"
    component={ToyotaGrGtPromo}
    durationInFrames={Math.round(toyotaGrGtSpec.durationSeconds * toyotaGrGtSpec.fps)}
    fps={toyotaGrGtSpec.fps}
    width={1080}
    height={1920}
    defaultProps={toyotaGrGtSpec}
  />
  <Composition id="ToyotaAeroReel" component={ToyotaAeroPromo} durationInFrames={Math.round((aeroRaw as ToyotaAeroSpec).durationSeconds * (aeroRaw as ToyotaAeroSpec).fps)} fps={(aeroRaw as ToyotaAeroSpec).fps} width={1080} height={1920} defaultProps={aeroRaw as ToyotaAeroSpec} />
  <Composition id="ToyotaGtGt3Reel" component={ToyotaGtGt3Promo} durationInFrames={Math.round((gtGt3Raw as ToyotaGtGt3Spec).durationSeconds * (gtGt3Raw as ToyotaGtGt3Spec).fps)} fps={(gtGt3Raw as ToyotaGtGt3Spec).fps} width={1080} height={1920} defaultProps={gtGt3Raw as ToyotaGtGt3Spec} />
  <Composition id="MazdaMx5Reel" component={MazdaMx5Promo} durationInFrames={Math.round((mazdaRaw as MazdaMx5Spec).durationSeconds * (mazdaRaw as MazdaMx5Spec).fps)} fps={(mazdaRaw as MazdaMx5Spec).fps} width={1080} height={1920} defaultProps={mazdaRaw as MazdaMx5Spec} />
  <Composition id="MazdaMx5Cover" component={MazdaMx5Cover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="MazdaWeightReel" component={MazdaWeightPromo} durationInFrames={Math.round((mazdaWeightRaw as MazdaWeightSpec).durationSeconds * (mazdaWeightRaw as MazdaWeightSpec).fps)} fps={(mazdaWeightRaw as MazdaWeightSpec).fps} width={1080} height={1920} defaultProps={mazdaWeightRaw as MazdaWeightSpec} />
  <Composition id="MazdaWeightCover" component={MazdaWeightCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="MazdaManualReel" component={MazdaManualPromo} durationInFrames={Math.round((mazdaManualRaw as MazdaManualSpec).durationSeconds * (mazdaManualRaw as MazdaManualSpec).fps)} fps={(mazdaManualRaw as MazdaManualSpec).fps} width={1080} height={1920} defaultProps={mazdaManualRaw as MazdaManualSpec} />
  <Composition id="MazdaManualCover" component={MazdaManualCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="TenseiReel" component={TenseiPromo} durationInFrames={1128} fps={30} width={1080} height={1920} defaultProps={tenseiRaw as TenseiSpec} />
  <Composition id="TenseiCover" component={TenseiCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="VtecReel" component={VtecPromo} durationInFrames={1120} fps={30} width={1080} height={1920} defaultProps={vtecRaw as VtecSpec} />
  <Composition id="VtecCover" component={VtecCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="TenseiPriceReel" component={TenseiPricePromo} durationInFrames={1078} fps={30} width={1080} height={1920} defaultProps={priceRaw as TenseiPriceSpec} />
  <Composition id="TenseiPriceCover" component={TenseiPriceCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="PoloGtiReel" component={PoloGtiPromo} durationInFrames={1226} fps={30} width={1080} height={1920} defaultProps={poloGtiRaw as PoloGtiSpec} />
  <Composition id="PoloGtiCover" component={PoloGtiCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="PoloCompareReel" component={PoloComparePromo} durationInFrames={1105} fps={30} width={1080} height={1920} defaultProps={poloCompareRaw as PoloCompareSpec} />
  <Composition id="PoloCompareCover" component={PoloCompareCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="PoloViajeReel" component={PoloViajePromo} durationInFrames={1120} fps={30} width={1080} height={1920} defaultProps={poloViajeRaw as PoloViajeSpec} />
  <Composition id="PoloViajeCover" component={PoloViajeCover} durationInFrames={1} fps={30} width={1080} height={1920} />
    <Composition id="FourByFourPreview" component={FourByFourPreview} durationInFrames={280} fps={30} width={900} height={660} /><Composition id="FourByFourReel" component={FourByFour} durationInFrames={912} fps={30} width={1080} height={1920} /><Composition id="FourByFourCover" component={FourByFourCover} durationInFrames={1} fps={30} width={1080} height={1920} /><Composition id="MatrixReel" component={Matrix2D} durationInFrames={900} fps={30} width={1080} height={1920} defaultProps={matrixRaw as MatrixSpec} />
  <Composition id="MatrixCover" component={Matrix2DCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="FourByFourGripReel" component={FourByFourGripPromo} durationInFrames={Math.round((gripRaw as FourByFourGripSpec).durationSeconds * (gripRaw as FourByFourGripSpec).fps)} fps={30} width={1080} height={1920} defaultProps={gripRaw as FourByFourGripSpec} />
  <Composition id="FourByFourGripPreview" component={FourByFourGripPreview} durationInFrames={gripPreviewFrames} fps={30} width={984} height={720} />
  <Composition id="FourByFourGripCover" component={FourByFourGripCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="CvtVsEcvtReel" component={CvtVsEcvtPromo} durationInFrames={Math.round((cvtRaw as CvtVsEcvtSpec).durationSeconds * (cvtRaw as CvtVsEcvtSpec).fps)} fps={30} width={1080} height={1920} defaultProps={cvtRaw as CvtVsEcvtSpec} />
  <Composition id="CvtVsEcvtPreview" component={CvtVsEcvtPreview} durationInFrames={cvtPreviewFrames} fps={30} width={1080} height={1060} />
  <Composition id="CvtVsEcvtCover" component={CvtVsEcvtCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="AcceleratorReel" component={AcceleratorPromo} durationInFrames={Math.round((accRaw as AcceleratorSpec).durationSeconds * (accRaw as AcceleratorSpec).fps)} fps={30} width={1080} height={1920} defaultProps={accRaw as AcceleratorSpec} />
  <Composition id="AcceleratorPreview" component={AcceleratorPreview} durationInFrames={1230} fps={30} width={1080} height={1920} />
  <Composition id="AcceleratorCover" component={AcceleratorCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  <Composition id="LiftOffReel" component={LiftOffPromo} durationInFrames={Math.round((liftRaw as LiftOffSpec).durationSeconds * (liftRaw as LiftOffSpec).fps)} fps={30} width={1080} height={1920} defaultProps={liftRaw as LiftOffSpec} />
  <Composition id="LiftOffPreview" component={LiftOffPreview} durationInFrames={1382} fps={30} width={1080} height={1920} />
  <Composition id="LiftOffCover" component={LiftOffCover} durationInFrames={1} fps={30} width={1080} height={1920} />
  </>
);



