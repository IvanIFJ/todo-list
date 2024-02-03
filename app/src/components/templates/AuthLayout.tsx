import styled from 'styled-components'
import { Footer } from '../molecules/Footer'

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

  @media (max-width: ${650 + 32}px) {
    padding: 0;
  };
`

const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  position: relative;
  ${({ theme }) => `
    max-width: ${theme.maxWidth};
    background-color: ${theme.color.surface.base};
    border-radius: ${theme.spacing(6)};
    padding: ${theme.spacing(6)} ${theme.spacing(3)};
  `}
`

const Main = styled.main`
  flex-shrink: 0;
  height: 100%;
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