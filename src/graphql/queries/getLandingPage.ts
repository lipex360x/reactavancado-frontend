const GET_LANDING_PAGE = /* GraphQL */`
fragment buttonProps on ComponentComponentButton {
  label
  url
}

fragment imageProps on UploadFile {
  alternativeText
  url
}

fragment sectionHeader on LandingPage {
  sectionHeader {
    logo {
      ...imageProps
    }
  }
}

fragment sectionHero on LandingPage {
  sectionHero {
    title
    description
    button {
      ...buttonProps
    }
    hero {
      ...imageProps
    }
  }
}

fragment sectionAbout on LandingPage {
  sectionAbout {
    title
    description
    image {
      ...imageProps
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techs {
      label
      icon {
        ...imageProps
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concept {
      label
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    text1
    text2
  }
}

fragment princingBox on LandingPage {
  princingBox {
    totalPrice
    numberInstallments
    priceInstallment
    benefits {
      title
    }
    button {
      ...buttonProps
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    title
    authors {
      name
      role
      description
      socialMedia {
        url
        title
      }
      photo {
        ...imageProps
      }
    }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      description
      photo {
        ...imageProps
      }
    }
  }
}

fragment sectionFaq on LandingPage {
  sectionFaq {
    title
    faq {
      question
      answer
    }
  }
}

query GET_HOMEPAGE {
  landingPage {
    ...sectionHeader
    ...sectionHero
    ...sectionAbout
    ...sectionTech
    ...sectionConcepts
    ...sectionAgenda
    ...princingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFaq
  }
}
`

export default GET_LANDING_PAGE
