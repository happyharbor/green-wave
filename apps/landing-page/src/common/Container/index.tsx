import { ContainerProps } from '../types';
import { PageContainer, StyledContainer } from './styles';

const Container = ({ border, children }: ContainerProps) => (
  <PageContainer>
    <StyledContainer $border={border}>{children}</StyledContainer>
  </PageContainer>
);

export default Container;
