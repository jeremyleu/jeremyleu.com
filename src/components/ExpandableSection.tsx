import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import {
  ExpandableSectionWrapper,
  ScrollingSection,
} from './ExpandableSection.styles';

const ExpandableSection = ({
  sections,
  currentSectionIdx,
  prevSectionIdx,
  setIsMoving,
}: {
  sections: Array<React.ReactNode>;
  prevSectionIdx: number;
  currentSectionIdx: number;
  setIsMoving?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const expandableSectionWrapper = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!setIsMoving) {
      return;
    }
    const stopMoving = () => {
      setIsMoving(false);
    };

    expandableSectionWrapper.current!.addEventListener(
      'transitionend',
      stopMoving
    );

    return () => {
      expandableSectionWrapper.current!.removeEventListener(
        'transitionend',
        stopMoving
      );
    };
  }, []);
  return (
    <ExpandableSectionWrapper
      currentSectionIdx={currentSectionIdx}
      ref={expandableSectionWrapper}
    >
      {sections.map((section, idx) => (
        <Transition
          in={idx === currentSectionIdx}
          timeout={{ enter: 0, exit: 400 }}
          key={idx}
        >
          {(status: TransitionStatus) => (
            <ScrollingSection
              difference={idx - currentSectionIdx}
              prevDifference={idx - prevSectionIdx}
              status={status}
            >
              {section}
            </ScrollingSection>
          )}
        </Transition>
      ))}
    </ExpandableSectionWrapper>
  );
};

export default ExpandableSection;
