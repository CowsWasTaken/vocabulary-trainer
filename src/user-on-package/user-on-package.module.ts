import { forwardRef, Module } from '@nestjs/common';
import { UserOnPackageService } from './user-on-package.service';
import { UserOnPackageResolver } from './user-on-package.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { PackagesModule } from '../packages/packages.module';

@Module({
  providers: [UserOnPackageService, UserOnPackageResolver],
  imports: [
    PrismaModule,
    forwardRef(() => PackagesModule),
    forwardRef(() => UsersModule),
  ],
  exports: [UserOnPackageService],
})
export class UserOnPackageModule {}
