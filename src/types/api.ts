export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type SectionHeroProps = {
  title: string
  description: string
  button: ButtonProps
  hero: ImageProps
}

export type SectionHeaderProps = {
  logo: ImageProps
  sectionHero: SectionHeroProps
}

export type SectionAboutProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techs: Array<{
    label: string
    icon: ImageProps
  }>
}

export type SectionConceptsProps = {
  title: string
  concept: Array<{
    label: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type SectionAgendaProps = {
  title: string
  text1: string
  text2: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: Array<{
    title: string
  }>
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<{
    photo: ImageProps
    name: string
    role: string
    description: string
    socialMedia: Array<{
      url: string
      title: string
    }>
  }>
}

export type LandingPageProps = {
  sectionHeader: SectionHeaderProps
  sectionAbout: SectionAboutProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
}
