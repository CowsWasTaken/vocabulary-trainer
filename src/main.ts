import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });

  // const prismaService = app.get(UsersPrismaService);
  // await prismaService.enableShutdownHooks(app);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`GraphQL Playground: ${await app.getUrl()}/graphql`);
}
bootstrap();
