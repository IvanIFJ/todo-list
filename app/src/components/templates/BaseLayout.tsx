import styled from 'styled-components'
import { Header } from '../molecules/Header'
import { Footer } from '../molecules/Footer'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.surface.accent};
  width: 100%;
  height: 100vh;
  height: 100dvh;
`

const Container = styled.div`
  max-width: 475px;
  width: 100%;
  height: 100%;
  max-height: 650px;
  background-color: ${({ theme }) => theme.color.surface.subtle};
  border-radius: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(3)}`};
  position: relative;
`

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`

export function BaseLayout({ children }: WithChildren) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>{children}</Main>
      </Container>
      <Footer />
    </Wrapper>
  )
}