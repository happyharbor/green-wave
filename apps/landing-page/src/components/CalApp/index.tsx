/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
import { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import Cal, { getCalApi } from '@calcom/embed-react';
import { PageBlockProps } from '../../common/types';
import { primaryColor } from '../../styles/styles';
import { CalAppContainer } from './styles';

const CalApp = ({ id, t }: PageBlockProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: primaryColor } },
        hideEventTypeDetails: false,
        theme: 'light',
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <CalAppContainer id={id}>
      <h2 style={{ textAlign: 'center', paddingBottom: '2rem' }}>{t('Book Me')}</h2>
      <Cal
        id={id}
        calLink="green-wave/30min"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view' }}
      />
    </CalAppContainer>
  );
};

export default withTranslation()(CalApp);
