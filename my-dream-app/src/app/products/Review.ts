export default class Review {
    public id: number;
    public createdDate: string;
    public reviewer: string;
    public productId: number;
    public starRating: number;
    public title: string;
    public text: string;

    constructor( id: number, createdDate: string, reviewer: string, productId: number,  starRating: number, title: string, text: string ) {
        this.id = id;
        this.createdDate = createdDate;
        this.reviewer = reviewer;
        this.productId = productId;
        this.starRating = starRating;
        this.title = title;
        this.text = text;
    }
}