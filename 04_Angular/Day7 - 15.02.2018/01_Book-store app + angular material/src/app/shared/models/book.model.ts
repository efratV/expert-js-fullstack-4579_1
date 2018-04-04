
    export interface ImageLinks {
        smallThumbnail: string;
        thumbnail: string;
    }

    export interface VolumeInfo {
        title: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        pageCount?: number;
        imageLinks: ImageLinks;
        language?: string;
        subtitle?: string;
    }

    export interface ListPrice {
        amount?: number;
        currencyCode?: string;
    }

    export interface SaleInfo {
        listPrice?: ListPrice;
    }

    export interface Book {
        id?:string;
        volumeInfo: VolumeInfo;
        saleInfo?: SaleInfo;
    }

    export interface BookRootObject {
        items: Book[];
    }


