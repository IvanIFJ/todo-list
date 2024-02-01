import styled from 'styled-components'
import { Header } from '../molecules/Header'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.color.surface.accent};
  width: 100%;
  height: 100vh;
  height: 100dvh;
`

const Container = styled.div`
  max-width: 375px;
  background-color: ${({ theme }) => theme.color.surface.subtle};
  border-radius: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(3)}`};
`


export function BaseLayout({ children }: WithChildren) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </Wrapper>
  )
}