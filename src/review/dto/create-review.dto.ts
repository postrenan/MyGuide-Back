export class CreateReviewDto {
    title: string;
    description: string;
    picture: number; // ID ou outra representação
    shopId: number; // ID da loja para associar a review
}
