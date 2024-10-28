import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { LocationModule } from './location/location.module';
import { ShopModule } from './shop/shop.module';
import { ProductModule } from './product/product.module';
import { FavoriteModule } from './favorite/favorite.module';
import { ReviewModule } from './review/review.module';
import { CategoryModule } from './category/category.module';
import { PictureModule } from './picture/picture.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [UserModule, AdminModule, LocationModule, ShopModule, ProductModule, FavoriteModule, ReviewModule, CategoryModule, PictureModule],
  providers: [ PrismaService],
})
export class AppModule {}
