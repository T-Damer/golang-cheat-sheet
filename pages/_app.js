import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Go Lang Cheat Sheet</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="static/favicon.ico"
          />
          <meta name="description" content="Golang cheat sheet" />
          <meta name="author" content="Pulkit Kathuria" />
          <meta property="og:title" content="Pulkit Kathuria" />
          <meta
            property="og:description"
            content="Golang cheat sheet. An overview of Go syntax and features"
          />
          <meta property="og:image" content="./static/gcp.png" />
          <meta
            property="og:url"
            content="https://kevincobain2000.github.io/golang-cheat-sheet"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Pulkit Kathuria" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"
          />
        </Head>

        <Component {...pageProps} />
      </Container>
    );
  }
}
