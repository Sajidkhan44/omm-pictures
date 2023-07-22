import React from 'react';
import { default as NextHead } from 'next/head';


export default function Head(props:any) {
  const { pageTitle, description, url } = props;
  return (
    <NextHead>
     
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
      <meta
        property="og:title"
        content={pageTitle}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${url}`}
      />
    </NextHead>
  );
}
