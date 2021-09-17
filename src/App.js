import './css/style.css'
import './css/queries.css'
import AboutMe from './AboutMe/AboutMe'
import PersonalLinks from './PersonalLinks/PersonalLinks'

function App() {
  return (
    <div>
      <body>
        <section className="intro">
          <AboutMe></AboutMe>
          <PersonalLinks></PersonalLinks>
        </section>
      </body>
    </div>
  )
}

export default App
