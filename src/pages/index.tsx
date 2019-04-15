import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { useStaticQuery, graphql } from 'gatsby';

import {
  PageWrapper,
  ArrowButtonsContainer,
  ArrowButton,
  ScoreDisplay,
} from './index.styles';
import Layout from '../layouts';
import { useExpander } from '../hooks';
import Intro from './Intro';
import School from './School';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import { Direction } from '../utils';

const pages = [
  { key: 'intro', Component: Intro },
  { key: 'school', Component: School },
  { key: 'work', Component: Work },
  { key: 'projects', Component: Projects },
  { key: 'contact', Component: Contact },
];

interface ArrowButtonsProps {
  onUp: () => void;
  onLeft: () => void;
  onDown: () => void;
  onRight: () => void;
}

const ArrowButtons = ({ onUp, onDown, onLeft, onRight }: ArrowButtonsProps) => (
  <ArrowButtonsContainer>
    <ArrowButton direction={Direction.Up} onClick={onUp}>
      <i className="fas fa-caret-up" />
    </ArrowButton>
    <ArrowButton direction={Direction.Left} onClick={onLeft}>
      <i className="fas fa-caret-left" />
    </ArrowButton>
    <ArrowButton direction={Direction.Down} onClick={onDown}>
      <i className="fas fa-caret-down" />
    </ArrowButton>
    <ArrowButton direction={Direction.Right} onClick={onRight}>
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
        pages.findIndex(pageObj => pageObj.key === key)
      ] = numSections;
    }
  );
  const {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    isMoving,
    setIsMoving,
  } = useExpander(orderedNumSections, currentPageIdx);

  const goToPrevPage = React.useCallback(() => {
    setCurrentPageIdx(oldPageIdx => {
      if (oldPageIdx === 0) return oldPageIdx;
      setPrevPageIdx(oldPageIdx);
      return oldPageIdx - 1;
    });
  }, []);

  const goToNextPage = React.useCallback(() => {
    setCurrentPageIdx(oldPageIdx => {
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
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
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
      {ReactDOM.createPortal(
        <ArrowButtons
          onUp={goToNextSection}
          onLeft={goToPrevPage}
          onDown={goToPrevSection}
          onRight={goToNextPage}
        />,
        document.body
      )}
      {!!score &&
        ReactDOM.createPortal(
          <ScoreDisplay>Score: {score}</ScoreDisplay>,
          document.body
        )}
    </Layout>
  );
};

export default IndexPage;
