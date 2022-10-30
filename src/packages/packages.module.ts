import { Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PackagesResolver } from './packages.resolver';

@Module({
  providers: [PackagesService, PackagesResolver],
  imports: [PrismaModule],
  exports: [PackagesService],
})
export class PackagesModule {}
