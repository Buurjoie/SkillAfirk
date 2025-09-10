import React from 'react'
import {Helmet} from "react-helmet-async";

export default function HeaderSeoComp({formation}) {
   const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": formation?.title ,
    "description": formation?.description ,
    "provider": {
      "@type": "Organization",
      "name": "SkillAfrik",
      "sameAs": "https://skill-afirk.vercel.app"
    },
    "url": formation?.url,
    "image": formation?.image
  };
  return (
    <>
       <Helmet prioritizeSeoTags>
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

         {/* JSON-LD Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      </Helmet>

    </>
  )
}