import { Row, Col } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { ColumnBlockSection, Content, ContentWrapper, Title } from './styles';
import { ColumnBlockPageProps, ColumnBlockProps } from './types';

const ColumnBlock = ({ t, title, columnBlocks, id }: ColumnBlockProps) => {
  return (
    <div>
      <ColumnBlockSection>
        <Slide direction="up">
          <Row justify="center" id={id}>
            <h6>{t(title)}</h6>
            <Row justify="center" align="top">
              {columnBlocks.map(({ Icon, title, content }: ColumnBlockPageProps, id: number) => {
                return (
                  <Col key={id} lg={6} md={6} sm={6} xs={6}>
                    <Icon size={64} />
                    <ContentWrapper>
                      <Title>{t(title)}</Title>
                      <Content>{content && t(content)}</Content>
                    </ContentWrapper>
                  </Col>
                );
              })}
            </Row>
          </Row>
        </Slide>
      </ColumnBlockSection>
    </div>
  );
};

export default withTranslation()(ColumnBlock);
