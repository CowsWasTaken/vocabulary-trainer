import { forwardRef, Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PackagesResolver } from './packages.resolver';
import { UserOnPackageModule } from '../user-on-package/user-on-package.module';
import { GroupsModule } from '../groups/groups.module';

@Module({
  providers: [PackagesService, PackagesResolver],
  imports: [
    PrismaModule,
    forwardRef(() => UserOnPackageModule),
    forwardRef(() => GroupsModule),
  ],
  exports: [PackagesService],
})
export class PackagesModule {}
