import { Icon } from '@iconify/react'
import gmailIcon from '@iconify-icons/simple-icons/gmail'
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode'
import fileInfoAlt from '@iconify-icons/uil/file-info-alt'
import linkedinFilled from '@iconify-icons/ant-design/linkedin-filled'
import githubFilled from '@iconify-icons/ant-design/github-filled'
import resume from '../resume/Carl_Guan_CV.pdf'

const personalLinks = () => {
  const personalLinkObjs = [
    {
      iconName: gmailIcon,
      style: { color: '#D14836' },
      href: 'mailto:carlxguan@gmail.com',
    },
    {
      iconName: fileInfoAlt,
      style: { color: '#000' },
      href: resume,
    },
    {
      iconName: leetcodeIcon,
      style: { color: '#F89F1B' },
      href: 'https://leetcode.com/c-x-g',
    },
    {
      iconName: linkedinFilled,
      style: { color: '#0077b5' },
      href: 'https://www.linkedin.com/in/carl-guan-b073341a5',
    },
    {
      iconName: githubFilled,
      style: { color: '#181717' },
      href: 'https://github.com/c-x-g',
    },
  ]

  const personalLinksComponent = personalLinkObjs.map((e) => {
    return (
      <li>
        <a href={e.href} target="_blank" rel="noreferrer">
          <Icon className="iconify" icon={e.iconName} data-inline="false" style={e.style}></Icon>
        </a>
      </li>
    )
  })

  return (
    <nav>
      <div class="row nav-bar">
        <ul class="main-nav">{personalLinksComponent}</ul>
      </div>
    </nav>
  )
}

export default personalLinks
