import React from 'react';

export function useExpander(
  numsSections: Array<number>,
  currentPageIdx: number
) {
  const [prevSections, setPrevSections] = React.useState<Array<number>>(
    Array(numsSections.length).fill(-1)
  );
  const [currentSections, setCurrentSections] = React.useState<Array<number>>(
    Array(numsSections.length).fill(-1)
  );
  const [isMoving, setIsMoving] = React.useState<boolean>(false);

  const goToNextSection = () => {
    setCurrentSections(originalSections => {
      const newSections = [...originalSections];
      newSections[currentPageIdx] += 1;
      if (newSections[currentPageIdx] < numsSections[currentPageIdx]) {
        setPrevSections(originalSections);
        if (originalSections[currentPageIdx] === -1 && setIsMoving) {
          setIsMoving(true);
        }
        return newSections;
      }
      return originalSections;
    });
  };

  const goToPrevSection = () => {
    setCurrentSections(originalSections => {
      if (originalSections[currentPageIdx] === -1) {
        return originalSections;
      }
      setPrevSections(originalSections);
      if (originalSections[currentPageIdx] === 0 && setIsMoving) {
        setIsMoving(true);
      }
      const newSections = [...originalSections];
      newSections[currentPageIdx] -= 1;
      return newSections;
    });
  };

  return {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    isMoving,
    setIsMoving,
  };
}
