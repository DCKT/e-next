// @flow

import React from 'react'
import Link from 'next/link'
import type { TMoltinProduct } from '../utils/js/types'

type Props = {
  data: TMoltinProduct
}

export default (props: Props) => {
  const { data } = props
  const { images, title, description, brand, slug, id } = data

  return (
    <div className='card'>
      <Link href={`/product?id=${id}`} as={`/product/${slug}_${id}`}>
        <a>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <img src={images[0].url.http} alt={images[0].name} />
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-content'>
                <p className='title is-4'>{ title }</p>
                <p className='subtitle is-6'>{ brand.value }</p>
              </div>
            </div>

            <div className='content'>
              { description }
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
