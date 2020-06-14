import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { useStaticQuery, graphql } from 'gatsby';

import {
  PageWrapper,
  ArrowButtonsContainer,
  ArrowButton,
  ScoreDisplay,
} from '../components/index.styles';
import Layout from '../layouts';
import { useExpander } from '../hooks';
import Intro from '../components/Intro';
import School from '../components/School';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Direction } from '../utils';

const pages = [
  { key: 'intro', Component: Intro },
  { key: 'work', Component: Work },
  { key: 'school', Component: School },
  { key: 'projects', Component: Projects },
  { key: 'contact', Component: Contact },
];

interface ArrowButtonsProps {
  onUp: () => void;
  onLeft: () => void;
  onDown: () => void;
  onRight: () => void;
  upDisabled: boolean;
  leftDisabled: boolean;
  downDisabled: boolean;
  rightDisabled: boolean;
}

const ArrowButtons = ({
  onUp,
  onDown,
  onLeft,
  onRight,
  upDisabled,
  leftDisabled,
  downDisabled,
  rightDisabled,
}: ArrowButtonsProps) => (
  <ArrowButtonsContainer>
    <ArrowButton direction={Direction.Up} onClick={onUp} disabled={upDisabled}>
      <i className="fas fa-caret-up" />
    </ArrowButton>
    <ArrowButton
      direction={Direction.Left}
      onClick={onLeft}
      disabled={leftDisabled}
    >
      <i className="fas fa-caret-left" />
    </ArrowButton>
    <ArrowButton
      direction={Direction.Down}
      onClick={onDown}
      disabled={downDisabled}
    >
      <i className="fas fa-caret-down" />
    </ArrowButton>
    <ArrowButton
      direction={Direction.Right}
      onClick={onRight}
      disabled={rightDisabled}
    >
      <i className="fas fa-caret-right" />
    </ArrowButton>
  </ArrowButtonsContainer>
);

const query = graphql`
  query {
    allDataJson {
      nodes {
        key
        numSections
      }
    }
  }
`;

const IndexPage = () => {
  const [currentPageIdx, setCurrentPageIdx] = React.useState<number>(0);
  const [prevPageIdx, setPrevPageIdx] = React.useState<number>(0);
  const [score, setScore] = React.useState<number>(0);
  const data = useStaticQuery(query);
  const orderedNumSections: Array<number> = [];
  data.allDataJson.nodes.forEach(
    ({ key, numSections }: { key: string; numSections: number }) => {
      orderedNumSections[
        pages.findIndex((pageObj) => pageObj.key === key)
      ] = numSections;
    }
  );
  const {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    nextSectionExists,
    prevSectionExists,
    isMoving,
    setIsMoving,
  } = useExpander(orderedNumSections, currentPageIdx);

  const nextPageExists = currentPageIdx < pages.length - 1;
  const prevPageExists = currentPageIdx > 0;

  const goToPrevPage = React.useCallback(() => {
    setCurrentPageIdx((oldPageIdx) => {
      if (oldPageIdx === 0) return oldPageIdx;
      setPrevPageIdx(oldPageIdx);
      return oldPageIdx - 1;
    });
  }, []);

  const goToNextPage = React.useCallback(() => {
    setCurrentPageIdx((oldPageIdx) => {
      if (oldPageIdx === pages.length - 1) return oldPageIdx;
      setPrevPageIdx(oldPageIdx);
      return oldPageIdx + 1;
    });
  }, []);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'Up': // IE/Edge support
        case 'ArrowUp':
          goToNextSection();
          break;
        case 'Left':
        case 'ArrowLeft':
          goToPrevPage();
          break;
        case 'Down':
        case 'ArrowDown':
          goToPrevSection();
          break;
        case 'Right':
        case 'ArrowRight':
          goToNextPage();
          break;
      }
    }
    if (document) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document && document.removeEventListener('keydown', onKeyDown);
  }, [currentPageIdx]);

  return (
    <Layout>
      {pages.map((pageObj, idx) => (
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
                <pageObj.Component
                  currentSectionIdx={currentSections[idx]}
                  prevSectionIdx={prevSections[idx]}
                  goToNextSection={goToNextSection}
                  goToPrevSection={goToPrevSection}
                  isMoving={isMoving}
                  setIsMoving={setIsMoving}
                  setScore={setScore}
                />
              }
            </PageWrapper>
          )}
        </Transition>
      ))}
      <ArrowButtons
        onUp={goToNextSection}
        onLeft={goToPrevPage}
        onDown={goToPrevSection}
        onRight={goToNextPage}
        upDisabled={!nextSectionExists}
        leftDisabled={!prevPageExists}
        downDisabled={!prevSectionExists}
        rightDisabled={!nextPageExists}
      />
      {!!score && <ScoreDisplay>Score: {score}</ScoreDisplay>}
    </Layout>
  );
};

export default IndexPage;
