export interface HeroSlide {
  /** Large outlined background word */
  bg: string
  /** Step indicator, e.g. "01" */
  step: string
  title: string
  text: string
  img: string
  /** Engine status label shown on the card */
  status: string
}

export const HERO_DATA: HeroSlide[] = [
  {
    bg: 'TEMPO',
    step: '01',
    title: 'Adeus, Word. Olá, Alta Costura.',
    text: 'Horas perdidas no Word são propostas perdidas. ARCA transforma dias de diagramação manual em um processo cirúrgico de apenas 3 minutos.',
    img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80',
    status: 'Design Editorial Gerado',
  },
  {
    bg: 'CURADORIA',
    step: '02',
    title: 'A IA orquestra os detalhes.',
    text: 'Não é apenas automação, é maestria invisível. Nossa IA estruturada organiza itinerários, conexões aéreas e experiências com rigor estético.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    status: 'Inteligência Estrutural Ativa',
  },
  {
    bg: 'IMPECÁVEL',
    step: '03',
    title: 'Sua marca, sem fricção.',
    text: 'Roteiros 100% white-label que geram desejo imediato. Compartilhe um link interativo e veja seu cliente assinar digitalmente ali mesmo.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
    status: 'Proposta Pronta para Assinatura',
  },
]
