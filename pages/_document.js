// @flow
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { StyleSheetServer } from 'aphrodite'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage())
    return { ...html, css }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width,minimum-scale=1' />
          <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' />
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
          <style dangerouslySetInnerHTML={{ __html: this.props.css.content }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
