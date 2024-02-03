import styled from 'styled-components'
import { Header } from '../molecules/Header'
import { Footer } from '../molecules/Footer'

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
`

const Container = styled.div`
  overflow: hidden;
  flex-shrink: 1;
  width: 100%;
  position: relative;
  ${({ theme }) => `
    max-width: ${theme.maxWidth};
    background-color: ${theme.color.surface.subtle};
    border-radius: ${theme.spacing(6)};
    padding: ${theme.spacing(6)} ${theme.spacing(3)};
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
        <Main>{children}</Main>
      </Container>
      <Footer />
    </Wrapper>
  )
}