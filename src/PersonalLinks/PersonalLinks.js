import styled from 'styled-components'
import { Linkedin } from '@styled-icons/bootstrap'
import { Gmail, Leetcode, Github } from '@styled-icons/simple-icons'
import { DocumentBulletList } from '@styled-icons/fluentui-system-filled'
import resume from '../resume/Carl_Guan_CV.pdf'

const IconWrapper = styled.div`
  display: inline;
  width: 5%;
  padding: 0;
  margin-right: 60px;
`

const IconNameWrapper = styled.p`
  visibility: hidden;
  padding: 0;
  margin: 0;
  text-align: left;
  color: ${(props) => props.color};
  font: Source Code Pro;
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  ${(props) => props.hover}:hover & {
    visibility: visible;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 7%;
`

const createIcon = ({ name, href, iconName, color, hoverColor }) => {
  const StyledIcon = styled(iconName)`
    margin-bottom: 20px;
    padding: 0;
    color: ${color};
    &:hover {
      color: ${hoverColor};
    }
  `
  return (
    <IconWrapper>
      <a href={href} target="_blank" rel="noreferrer">
        <StyledIcon />
        <IconNameWrapper hover={IconWrapper} color={color}>
          {name}
        </IconNameWrapper>
      </a>
    </IconWrapper>
  )
}

const personalLinks = () => {
  const personalLinkObjs = [
    {
      name: 'gmail',
      iconName: Gmail,
      color: '#D14836',
      hoverColor: '#4285F4',
      href: 'mailto:carlxguan@gmail.com',
    },
    {
      name: 'résumé',
      iconName: DocumentBulletList,
      color: '#228B22',
      hoverColor: '#000',
      href: resume,
    },
    //    {
    //      name: 'leetcode',
    //      iconName: Leetcode,
    //      color: '#F89F1B',
    //      hoverColor: '#A0A0A0',
    //      href: 'https://leetcode.com/c-x-g',
    //    },
    {
      name: 'linkedin',
      iconName: Linkedin,
      color: '#0077b5',
      hoverColor: 'teal',
      href: 'https://www.linkedin.com/in/carl-guan-b073341a5',
    },
    {
      name: 'github',
      iconName: Github,
      color: '#181717',
      hoverColor: '#6cc644',
      href: 'https://github.com/c-x-g',
    },
  ]

  const personalLinksComponent = personalLinkObjs.map((e) => {
    return createIcon(e)
  })

  return <ButtonsWrapper>{personalLinksComponent}</ButtonsWrapper>
}

export default personalLinks
