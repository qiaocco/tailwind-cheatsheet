export interface TwJson {
    title: string;
    children: TwSection[];
}

export interface TwSection {
    title: string;
    url: string;
    description: string;
    table: TwClassEntry[];
}

export interface TwClassEntry {
    class: string;
    properties: string;
    value: string;
}