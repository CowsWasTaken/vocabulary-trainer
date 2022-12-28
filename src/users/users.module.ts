import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { UserOnPackageModule } from '../user-on-package/user-on-package.module';

@Module({
  providers: [UsersService, UsersResolver],
  imports: [PrismaModule, forwardRef(() => UserOnPackageModule)],
  exports: [UsersService],
})
export class UsersModule {}
