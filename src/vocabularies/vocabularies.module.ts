import { Module } from '@nestjs/common';
import { VocabulariesService } from './vocabularies.service';
import { VocabulariesResolver } from './vocabularies.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [VocabulariesService, VocabulariesResolver],
  imports: [PrismaModule],
})
export class VocabulariesModule {}
