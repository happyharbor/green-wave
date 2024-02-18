import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { ButtonSection } from '../../common/Button/styles';
import { ButtonType, PageBlockProps } from '../../common/types';
import { gScrollTo } from '../../common/utils/scroll';
import { ContentWrapper, IntroBlockSection } from './styles';

const IntroColumnBlock = ({ t, id }: PageBlockProps) => {
  return (
    <IntroBlockSection id={id}>
      <ContentWrapper>
        <h1>{t('Title')}</h1>
        <ButtonSection>
          <Button name="BookMe" type={ButtonType.Normal} onClick={() => gScrollTo('bookme')}>
            {t('Book Me')}
          </Button>
          <Button name="WhoAreWe" type={ButtonType.Small} onClick={() => gScrollTo('whoAreWe')}>
            {t('Who Are We')}
          </Button>
        </ButtonSection>
      </ContentWrapper>
    </IntroBlockSection>
  );
};

export default withTranslation()(IntroColumnBlock);
