import { InlineWidget } from 'react-calendly';
import { withTranslation } from 'react-i18next';
import { PageBlockProps } from '../../common/types';
import { fontColor, secondaryColor } from '../../styles/styles.ts';
import { CalendlyAppContainer } from './styles';

const CalendlyApp = ({ id, t }: PageBlockProps) => {
  return (
    <CalendlyAppContainer id={id}>
      <h2 style={{ textAlign: 'center', paddingBottom: '2rem' }}>{t('Book Me')}</h2>
      <InlineWidget
        pageSettings={{
          primaryColor: secondaryColor,
          textColor: fontColor,
          hideEventTypeDetails: false,
        }}
        styles={{ height: '43.625rem' }}
        url="https://calendly.com/yourgreenwave/meet-greenwave"
      />
    </CalendlyAppContainer>
  );
};

export default withTranslation()(CalendlyApp);
