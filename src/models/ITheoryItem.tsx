export interface ISection {
    title: string,
    content: React.ReactNode,
}

export interface ITheoryItem {
    src_name: string,
    name: string,
    description?: string,
    image?: string,
    sections: ISection[],
}