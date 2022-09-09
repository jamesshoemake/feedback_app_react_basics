import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link
        // to={{
        //   pathname: 'about',
        //   search: '?sort=example',
        //   hash: '#about'
        // }}
        to="/about"
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
