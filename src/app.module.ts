import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { VocabulariesModule } from './vocabularies/vocabularies.module';
import { PackagesModule } from './packages/packages.module';
import { GroupsModule } from './groups/groups.module';
import { UserOnPackageModule } from './user-on-package/user-on-package.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { GqlAuthGuard } from './auth/gql/gql-auth.guard';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      // typeDefs: [...DateTimeTypeDefinition],
      // resolvers: { Date: DateTimeResolver },
    }),
    UsersModule,
    VocabulariesModule,
    PackagesModule,
    GroupsModule,
    UserOnPackageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
  ],
})
export class AppModule {}
