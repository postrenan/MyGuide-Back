import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  const config = new DocumentBuilder() .setTitle('API Example') .setDescription('The API description') .setVersion('1.0') .addTag('example') .build(); const document = SwaggerModule.createDocument(app, config); SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
