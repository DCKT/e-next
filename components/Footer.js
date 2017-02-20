// @flow

import React from 'react'

export default (): React$Element<*> => (
  <footer className='footer'>
    <div className='container'>
      <div className='columns'>
        <div className='column'>
          <h3>ENEXT</h3>
          <ul>
            <li>
              <a>Figure</a>
            </li>
          </ul>
        </div>
        <div className='column'>
          <h3>Licenses</h3>
          <ul>
            <li>
              <a>License 1</a>
            </li>
            <li>
              <a>License 2</a>
            </li>
            <li>
              <a>License 3</a>
            </li>
          </ul>
        </div>
        <div className='column'>
          <h3>Informations</h3>
          <ul>
            <li>
              <a>Info 1</a>
            </li>
            <li>
              <a>Info 2</a>
            </li>
            <li>
              <a>Info 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
