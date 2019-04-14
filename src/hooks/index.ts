import React from 'react';

export function useExpander(sections: Array<React.ReactNode>) {
  const [currentSectionIdx, setCurrentSectionIdx] = React.useState<number>(-1);

  const goToNextSection = () => {
    setCurrentSectionIdx(originalSectionIdx => {
      const nextSectionIdx = originalSectionIdx + 1;
      if (nextSectionIdx < sections.length) {
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
    currentSection: sections[currentSectionIdx] || null,
    goToNextSection,
    goToPrevSection,
  };
}
