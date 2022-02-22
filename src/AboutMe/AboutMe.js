import '../css/style.css'
import '../css/queries.css'
import styled from 'styled-components'

const Paragraph = styled.p`
  line-height: 160%;
  font-weight: 400;
  font-size: 35px;
`

const aboutMe = () => {
  return (
    <Paragraph>
      Hello! I&#39;m Carl&#44; a software engineer
      <br />
    </Paragraph>
  )
}

export default aboutMe
