import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}