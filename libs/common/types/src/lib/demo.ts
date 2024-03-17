
export interface Demo {
  title: string,
  subtitle: string,
  description: string,
  route: string
}

export const DEMOS: Demo[] = [
  {
    title: 'Location',
    subtitle: '',
    description: 'A list of saved locations and associated metadata that can be selected, manipulated, or added to.',
    route: '/location'
  },
  {
    title: 'Weather',
    subtitle: '',
    description: 'Current weather for locations that have been configured.',
    route: '/weather'
  },
] as const;
