import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { ButtonSection } from '../../common/Button/styles';
import { PageBlockProps } from '../../common/types';
import { gScrollTo } from '../../common/utils/scroll';
import { secondaryColor } from '../../styles/styles';
import { ContentWrapper, IntroBlockSection } from './styles';

const IntroColumnBlock = ({ t, id }: PageBlockProps) => {
  return (
    <IntroBlockSection id={id}>
      <ContentWrapper>
        <h1>{t('Title')}</h1>
        <ButtonSection>
          <Button name="BookMe" fixedWidth={true} onClick={() => gScrollTo('bookme')}>
            {t('Book Me')}
          </Button>
          <Button name="WhoAreWe" color={secondaryColor} fixedWidth={true} onClick={() => gScrollTo('whoAreWe')}>
            {t('Who Are We')}
          </Button>
        </ButtonSection>
      </ContentWrapper>
    </IntroBlockSection>
  );
};

export default withTranslation()(IntroColumnBlock);
