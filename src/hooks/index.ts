import React from 'react';

export function useExpander(numSections: number) {
  const [currentSectionIdx, setCurrentSectionIdx] = React.useState<number>(-1);

  const goToNextSection = () => {
    setCurrentSectionIdx(originalSectionIdx => {
      const nextSectionIdx = originalSectionIdx + 1;
      if (nextSectionIdx < numSections) {
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
      return originalSectionIdx - 1;
    });
  };

  return {
    currentSectionIdx,
    goToNextSection,
    goToPrevSection,
  };
}
