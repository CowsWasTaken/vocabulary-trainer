import { Resolver } from '@nestjs/graphql';
import { VocabulariesService } from './vocabularies.service';

@Resolver()
export class VocabulariesResolver {
  constructor(private usersService: VocabulariesService) {}
}
