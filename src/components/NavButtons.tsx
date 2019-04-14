import React from 'react';
import { NavButton, ButtonIcon, NavButtonContainer } from './NavButtons.styles';

interface NavButtonsProps {
  numSections: number;
  currentSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

const NavButtons = ({
  numSections,
  currentSectionIdx,
  goToNextSection,
  goToPrevSection,
}: NavButtonsProps) => {
  const buttons = [];

  if (currentSectionIdx === -1) {
    buttons.push({ isNextButton: true, buttonText: 'More' });
  } else {
    if (currentSectionIdx < numSections - 1) {
      buttons.push({ isNextButton: true, buttonText: 'Next' });
    }
    if (currentSectionIdx === 0) {
      buttons.push({ isNextButton: false, buttonText: 'Less' });
    } else {
      buttons.push({ isNextButton: false, buttonText: 'Prev' });
    }
  }

  return (
    <NavButtonContainer>
      {buttons.map((button, idx) => (
        <NavButton
          onClick={button.isNextButton ? goToNextSection : goToPrevSection}
          key={idx}
        >
          <ButtonIcon
            isNextButton={button.isNextButton}
            className="fas fa-caret-up"
          />
          {button.buttonText}
        </NavButton>
      ))}
    </NavButtonContainer>
  );
};

export default NavButtons;
