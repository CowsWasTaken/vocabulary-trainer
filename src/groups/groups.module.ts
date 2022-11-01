import { forwardRef, Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GroupsResolver } from './groups.resolver';
import { PackagesModule } from '../packages/packages.module';

@Module({
  providers: [GroupsService, GroupsResolver],
  imports: [PrismaModule, forwardRef(() => PackagesModule)],
  exports: [GroupsService],
})
export class GroupsModule {}
