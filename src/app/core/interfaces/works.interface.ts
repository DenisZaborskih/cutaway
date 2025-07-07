export interface WorksShort {
    title: string;
    imgURL: string;
    year: number;
    theme: string;
    description: string;
}

export interface WorksFull{
    title: string;
    year: number;
    theme: string;
    desriptions: string[];
    headings: string[];
    imgURLs: string[];
}