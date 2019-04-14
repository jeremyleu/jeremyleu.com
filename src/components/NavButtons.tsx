import React from 'react';
import { Button, ButtonIcon, NavButtonContainer } from './NavButtons.styles';

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
      {buttons.map(button => (
        <Button
          onClick={button.isNextButton ? goToNextSection : goToPrevSection}
        >
          <ButtonIcon
            isNextButton={button.isNextButton}
            className="fas fa-caret-up"
          />
          {button.buttonText}
        </Button>
      ))}
    </NavButtonContainer>
  );
};

export default NavButtons;
