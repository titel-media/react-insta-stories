import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import style from './../styles.css'
import up from './../up.png'

export default function seeMore(props) {
  return (
    <Fragment>
      <div className={`${style.seeMoreExpanded} ${props.showContent ? style.seeMoreVisible : ''}`}>
        {props.seeMoreContent}
        <div onClick={() => {
          props.toggleMore(false)
          props.action('play')
        }} className={style.seeMoreClose}><span>✕</span></div>
      </div>
      {!props.showContent && <div onClick={() => {
        props.toggleMore(true)
        props.action('pause')
      }} className={style.seeMore}>
        {props.seeMoreAction}
      </div>}
    </Fragment>
  )
}

seeMore.propTypes = {
  seeMoreContent: PropTypes.object,
  showContent: PropTypes.bool,
  action: PropTypes.func,
  toggleMore: PropTypes.func,
  seeMoreAction: PropTypes.element
}
