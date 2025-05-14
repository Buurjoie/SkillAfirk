import React from 'react'
import {Helmet} from "react-helmet";

export default function HeaderSeoComp({title, desc}) {
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="https://skill-afirk.vercel.app/" />
                <meta name="description" content={desc} />
                <meta name="keywords" content="gratuite, apprendre un métier en Afrique, formation gratuite pour jeunes, formation, métiers, jeunes, Afrique, en ligne, compétences, reconversion, autodidactes, hors ligne, apprentissage" />
      </Helmet>

    </>
  )
}