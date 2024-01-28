import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { TranslationProps } from '../../common/types';
import { gScrollTo } from '../../common/utils/scroll';
import { secondaryColor } from '../../styles/styles';
import { ButtonSection, ContentWrapper, IntroBlockSection } from './styles';

const IntroColumnBlock = ({ t }: TranslationProps) => {
  return (
    <IntroBlockSection>
      <ContentWrapper>
        <h1>{t('Title')}</h1>
        <ButtonSection>
          <Button name="BookMe" onClick={() => gScrollTo('bookme')}>
            {t('Book Me')}
          </Button>
          <Button name="WhoAreWe" color={secondaryColor} onClick={() => gScrollTo('whoAreWe')}>
            {t('Who Are We')}
          </Button>
        </ButtonSection>
      </ContentWrapper>
    </IntroBlockSection>
  );
};

export default withTranslation()(IntroColumnBlock);
