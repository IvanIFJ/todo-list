import styled from 'styled-components'
import { Header } from '../organism/Header'
import { Footer } from '../organism/Footer'
import { SideMenu } from '../molecules/SideMenu'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.color.surface.accent};
  padding: ${({ theme }) => `${theme.spacing(2)}`};

  ${({ theme }) => `
    @media (max-width: ${theme.maxWidth}) {
      padding: 0;
    };
  `}
`

const Container = styled.div`
  overflow: hidden;
  flex-shrink: 1;
  width: 100%;
  position: relative;
  ${({ theme }) => `
    max-width: ${theme.maxWidth};
    background-color: ${theme.color.surface.subtle};
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
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`

export function BaseLayout({ children }: WithChildren) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          {children}
          <SideMenu />
        </Main>
      </Container>
      <Footer />
    </Wrapper>
  )
}
