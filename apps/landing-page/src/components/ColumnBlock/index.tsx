import { Row, Col } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { ColumnBlockSection, Content, ContentWrapper, Title } from './styles';
import { ColumnBlockPageProps, ColumnBlockProps } from './types';

const ColumnBlock = ({ t, title, columnBlocks, id }: ColumnBlockProps) => {
  return (
    <div>
      <ColumnBlockSection>
        <Slide direction="left">
          <Row justify="center">
            <h6>{t(title)}</h6>
            <Row justify="center" align="top" id={id}>
              {columnBlocks.map(({ Icon, title, content }: ColumnBlockPageProps, id: number) => {
                return (
                  <Col key={id}>
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
