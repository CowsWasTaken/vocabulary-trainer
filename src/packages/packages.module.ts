import { forwardRef, Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PackagesResolver } from './packages.resolver';
import { UserOnPackageModule } from '../user-on-package/user-on-package.module';

@Module({
  providers: [PackagesService, PackagesResolver],
  imports: [PrismaModule, forwardRef(() => UserOnPackageModule)],
  exports: [PackagesService],
})
export class PackagesModule {}
