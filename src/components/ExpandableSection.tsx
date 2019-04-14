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
}: {
  sections: Array<React.ReactNode>;
  prevSectionIdx: number;
  currentSectionIdx: number;
}) => {
  return (
    <ExpandableSectionWrapper currentSectionIdx={currentSectionIdx}>
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
