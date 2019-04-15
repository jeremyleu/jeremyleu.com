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

  const goToNextSection = React.useCallback(() => {
    setCurrentSections(originalSections => {
      const newSections = [...originalSections];
      newSections[currentPageIdx] += 1;
      if (newSections[currentPageIdx] < numsSections[currentPageIdx]) {
        setPrevSections(originalSections);
        if (
          originalSections[currentPageIdx] === -1 &&
          currentPageIdx === 0 &&
          setIsMoving
        ) {
          setIsMoving(true);
        }
        return newSections;
      }
      return originalSections;
    });
  }, [currentPageIdx]);

  const goToPrevSection = React.useCallback(() => {
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
  }, [currentPageIdx]);

  return {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    isMoving,
    setIsMoving,
  };
}
