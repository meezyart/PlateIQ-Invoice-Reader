import React from 'react'
import PropTypes from 'prop-types'

import './titlebox.css'

const TitleBox = ({className,title, content ,children }) => (
  <div>
    <div className={className ||'title-box'}>
      <h6 className="is-size-7 has-text-grey-light is-uppercase has-text-weight-semibold">{title}</h6>
      <h5 className="is-size-6 has-text-black-bis">{content}</h5>
    </div>
    {children}
   </div>
)

TitleBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
}

TitleBox.defaultProps = {
  title: '',
  content: '',
  className: '',
  children: '',
}

export default TitleBox
