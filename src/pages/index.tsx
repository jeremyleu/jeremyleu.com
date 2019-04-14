import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import { PageWrapper } from './index.styles';
import Layout from '../layouts';
import { useExpander } from '../hooks';
import Intro from './Intro';
import School from './School';

const pages = [Intro, School];

const IndexPage = () => {
  const [currentPageIdx, setCurrentPageIdx] = React.useState<number>(0);
  const [prevPageIdx, setPrevPageIdx] = React.useState<number>(0);
  const {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    isMoving,
    setIsMoving,
  } = useExpander(pages.map(page => page.sections.length), currentPageIdx);

  return (
    <Layout>
      {pages.map((PageElement, idx) => (
        <Transition
          in={idx === currentPageIdx}
          timeout={{ enter: 0, exit: 400 }}
          key={idx}
        >
          {(status: TransitionStatus) => (
            <PageWrapper
              difference={idx - currentPageIdx}
              prevDifference={idx - prevPageIdx}
              status={status}
            >
              {
                <PageElement
                  currentSectionIdx={currentSections[idx]}
                  prevSectionIdx={prevSections[idx]}
                  goToNextSection={goToNextSection}
                  goToPrevSection={goToPrevSection}
                  isMoving={isMoving}
                  setIsMoving={setIsMoving}
                />
              }
            </PageWrapper>
          )}
        </Transition>
      ))}
      <button
        onClick={() => {
          setCurrentPageIdx(oldPageIdx => {
            setPrevPageIdx(oldPageIdx);
            return oldPageIdx + 1;
          });
        }}
        style={{ zIndex: 1, position: 'relative' }}
      >
        Next
      </button>
    </Layout>
  );
};

export default IndexPage;
