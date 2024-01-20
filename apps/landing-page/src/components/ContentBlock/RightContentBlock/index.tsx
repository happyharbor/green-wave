import { Row, Col } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../common/Button';
import { SvgIcon } from '../../../common/SvgIcon';
import { ContentBlockButtonProps, ContentBlockProps } from '../types';
import { RightBlockContainer, Content, ContentWrapper, ButtonWrapper } from './styles';

const RightBlock = ({ title, content, buttons, icon, t, id }: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {content && <Content>{t(content)}</Content>}
              <ButtonWrapper>
                {typeof buttons === 'object' &&
                  buttons.map((item: ContentBlockButtonProps, id: number) => {
                    return (
                      <Button key={id} color={item.color} fixedWidth={true} onClick={item.onClick}>
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
