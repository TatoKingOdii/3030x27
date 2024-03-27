export interface WorldLoc {
  id: string,
  iso2Code: string,
  name: string,
  region: Region,
  adminregion: Region,
  incomeLevel: Region,
  lendingType: Region,
  capitalCity: string,
  longitude: string,
  latitude: string
}

export interface Region {
  id: string,
  iso2code: string,
  value: string
}

export interface WorldMetadata {
  page: number,
  pages: number,
  per_page: number,
  total: number
}

export interface WorldResponse {
  metadata: WorldMetadata,
  worldLocs: WorldLoc[]
}
