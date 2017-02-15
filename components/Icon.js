// @flow

/* Check http://fontawesome.io/icons/ for the list */

import React from 'react'
import classNames from 'classnames'

type Props = {
  name: string,
  size: 'small' | 'medium' | 'large'
}

export default (props: Props): React$Element<*> => {
  const className = classNames('icon', {
    'is-small': props.size === 'small',
    'is-medium': props.size === 'medium',
    'is-large': props.size === 'large'
  })

  return (
    <span className={className}>
      <i className={`fa fa-${props.name}`} />
    </span>
  )
}
