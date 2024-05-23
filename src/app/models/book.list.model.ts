export class BookListModel{
    ratingAverage: string;
    authorName: string;
    title: string;
    firstPublishYear: string;
    subject: string;
    authorBirthDate: string;
    authorTopWork: string;

    constructor(itemData: any){
        this.ratingAverage = itemData['ratingAverage'];
        this.authorName = itemData['authorName'];
        this.title = itemData['title'];
        this.firstPublishYear = itemData['firstPublishYear'];
        this.subject = itemData['subject'];
        this.authorBirthDate = itemData['authorBirthDate'];
        this.authorTopWork = itemData['authorTopWork'];
    }
}