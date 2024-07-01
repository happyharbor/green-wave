import { WithTranslation, withTranslation } from 'react-i18next';
import { Container, Content, TextWrapper } from './styles';

interface Props {
  title: string;
  content: string;
  t: WithTranslation['t'];
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h2>{t(title)}</h2>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
