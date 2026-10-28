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

const defaultSpec = validateVideoSpec(rawSpec);
const rankingSpec = validateRankingVideo(rankingRaw);
const hiddenDetailsSpec = hiddenDetailsRaw as unknown as HiddenDetailsSpec;
const drivetrainSpec = drivetrainRaw as unknown as DrivetrainSpec;

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
  </>
);
