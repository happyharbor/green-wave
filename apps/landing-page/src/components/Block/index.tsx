import { Image as AntdImage } from 'antd';
import { withTranslation } from 'react-i18next';
import { CaptionContainer } from '../../common/Wave/styles';
import { Container, TextWrapper, Content, WaveStyle } from './styles';

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <CaptionContainer>
        <WaveStyle>
          <AntdImage src="/img/svg/wave_vector.svg" preview={false} />
        </WaveStyle>
        <h2>{t(title)}</h2>
      </CaptionContainer>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
