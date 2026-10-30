import React from 'react';
import {Composition} from 'remotion';
import rawSpec from '../data/videos/video-001.json';
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

const defaultSpec = validateVideoSpec(rawSpec);
const rankingSpec = validateRankingVideo(rankingRaw);
const hiddenDetailsSpec = hiddenDetailsRaw as unknown as HiddenDetailsSpec;
const drivetrainSpec = drivetrainRaw as unknown as DrivetrainSpec;
const directorySpec = directoryRaw as unknown as BrandDirectorySpec;
const missionSpec = missionRaw as unknown as MissionSPromoSpec;
const missionInteriorSpec = missionInteriorRaw as unknown as MissionSInteriorSpec;
const missionDesignRefsSpec = missionDesignRefsRaw as unknown as MissionSDesignRefsSpec;

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
  </>
);
