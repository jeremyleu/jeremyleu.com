import React from 'react';

export function useExpander(numSections: number) {
  const [prevSectionIdx, setPrevSectionIdx] = React.useState<number>(-1);
  const [currentSectionIdx, setCurrentSectionIdx] = React.useState<number>(-1);

  const goToNextSection = () => {
    setCurrentSectionIdx(originalSectionIdx => {
      const nextSectionIdx = originalSectionIdx + 1;
      if (nextSectionIdx < numSections) {
        setPrevSectionIdx(originalSectionIdx);
        return nextSectionIdx;
      }
      return originalSectionIdx;
    });
  };

  const goToPrevSection = () => {
    setCurrentSectionIdx(originalSectionIdx => {
      if (originalSectionIdx === -1) {
        return -1;
      }
      setPrevSectionIdx(originalSectionIdx);
      return originalSectionIdx - 1;
    });
  };

  return {
    currentSectionIdx,
    prevSectionIdx,
    goToNextSection,
    goToPrevSection,
  };
}
