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

export type LandingPageProps = {
  sectionHeader: SectionHeaderProps
  sectionAbout: SectionAboutProps
  sectionTech: SectionTechProps
}
