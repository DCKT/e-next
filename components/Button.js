// @flow

import React from 'react'
import classNames from 'classnames'
import { Link } from 'next/link'

type Props = {
  children?: React$Element<*>,
  className?: ?string,
  icons?: string,
  href?: ?string,
  type?: 'primary' | 'danger' | 'warning' | 'link' | 'close' | 'success',
  submit?: boolean
}

const Button = (props: Props) => {
  const { type, icons, submit, ...otherProps } = props
  const className = classNames('button', props.className, {
    'is-primary': props.type === 'primary',
    'is-warning': props.type === 'warning',
    'is-danger': props.type === 'danger',
    'is-success': props.type === 'success',
    'is-link': props.type === 'link'
  })
  const buttonType = submit ? 'submit' : 'button'

  if (type === 'link') {
    return (
      <Link {...otherProps} className={className}>
        <a>
          { props.children }
        </a>
      </Link>
    )
  } else {
    return (
      <button {...otherProps} className={className} type={buttonType}>
        {
          icons ? (
            <span className='icon'>
              <i className={`fa fa-${icons}`} />
            </span>
          ) : null
        }
        { props.children }
      </button>
    )
  }
}

export default Button
