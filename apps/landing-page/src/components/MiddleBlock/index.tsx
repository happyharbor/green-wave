import { Col, Image as ImageAntd, Row } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { MinPara, MinTitle, ServiceWrapper } from '../ContentBlock/LeftContentBlock/styles';
import { Content, ContentWrapper, MiddleBlockSection } from './styles';
import { MiddleBlockProps, SectionBlockProps } from './types';

const MiddleBlock = ({ title, content, button, id, section, t }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name={button.title} onClick={button.onClick}>
                  {t(button.title)}
                </Button>
              )}
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === 'object' &&
                    section.map((item: SectionBlockProps, id: number) => {
                      return (
                        <Col key={id} span={6}>
                          <ImageAntd style={{ borderRadius: '50%' }} src={item.image} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
