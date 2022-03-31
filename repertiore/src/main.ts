import { NestFactory } from '@nestjs/core';

import { AppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(AppConfig.Environment.API_PORT);
}
bootstrap();
