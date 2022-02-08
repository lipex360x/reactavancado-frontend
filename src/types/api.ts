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

export type LandingPageProps = {
  sectionHeader: SectionHeaderProps
}
