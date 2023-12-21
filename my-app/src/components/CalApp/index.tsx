/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { withTranslation } from 'react-i18next';
import { CalAppContainer } from './styles';

const CalApp = ({ id }: { id: string }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "styles": { "branding": { "brandColor": "#18216d" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [])
  return <CalAppContainer id={id}>
    <Cal id={id} calLink="trixobird/30min"
         style={{ width: "100%", height: "100%", overflow: "scroll" }}
         config={{ layout: 'month_view' }}
    />
  </CalAppContainer>;
};

export default withTranslation()(CalApp);
