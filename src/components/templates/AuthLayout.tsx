import styled from 'styled-components'
import { Footer } from '../organism/Footer'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.surface.accent};
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  
  @media (max-height: 570px) {
    justify-content: flex-start;
  };
  
  ${({ theme }) => `
    @media (max-width: ${theme.maxWidth}) {
      justify-content: flex-start;
      padding: 0;
    };
  `}
`

const Container = styled.div`

  width: 100%;
  position: relative;
  ${({ theme }) => `
    max-width: ${theme.maxWidth};
    background-color: ${theme.color.surface.base};
    border-radius: ${theme.borderRadius.large};
    padding: ${theme.spacing(5)} ${theme.spacing(3)};
    
    @media (max-width: ${theme.maxWidth}) {
      padding: ${theme.spacing(4)} ${theme.spacing(3)};
      border-radius: 0 0 ${theme.borderRadius.large} ${theme.borderRadius.large};
      height: 100%;
    };
  `}
`

const Main = styled.main`
  flex-shrink: 0;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  align-items: center;
  text-align: center;
`

export function AuthLayout({ children }: WithChildren) {
  return (
    <Wrapper>
      <Container>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </Wrapper>
  )
}
