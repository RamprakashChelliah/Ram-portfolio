export interface ProjectDetail{
    overview: string,
    subHeading: string,
    detail: KeyAreaDetail[]
}

interface KeyAreaDetail{
    heading: string,
    description: string[]
}