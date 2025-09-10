import React from 'react'
import {Helmet} from "react-helmet";

export default function HeaderSeoComp({formation}) {
  return (
    <>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="https://skill-afirk.vercel.app/" />
                <meta name="description" content={desc} />
                <meta name="keywords" content="gratuite, apprendre un métier en Afrique, formation gratuite pour jeunes, formation, métiers, jeunes, Afrique, en ligne, compétences, reconversion, autodidactes, hors ligne, apprentissage" />
                 <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "EducationalOrganization",
                      "name": "SkillAfrik",
                      "url": "https://skill-afirk.vercel.app",
                      "logo": "https://skill-afirk.vercel.app/images/logo_mine.png",
                      "description": "Plateforme de formation professionnelle en ligne pour les jeunes Africains.",
                      "sameAs": [
                        "https://facebook.com/skillafrik",
                        "https://instagram.com/skillafrik"
                      ]
                    })}
                  </script>
      </Helmet> */}



       <Helmet>
        {/* SEO classique */}
        <title>{formation.title} | SkillAfrik</title>
        <meta name="description" content={formation.description} />
        <meta name="keywords" content="gratuite, apprendre un métier en Afrique, formation gratuite pour jeunes, formation, métiers, jeunes, Afrique, en ligne, compétences, reconversion, autodidactes, hors ligne, apprentissage" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content={formation.url} />
        <meta property="og:title" content={formation.title} />
        <meta property="og:description" content={formation.description} />
        <meta property="og:site_name" content="SkillAfrik" />
        <meta property="og:image" content={formation.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={formation.title} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formation.title} />
        <meta name="twitter:description" content={formation.description} />
        <meta name="twitter:image" content={formation.image} />
      </Helmet>

    </>
  )
}