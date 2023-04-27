import { Field, InputType } from '@nestjs/graphql';



@InputType()
export class AddInputType {
  @Field()
  name: string;

  @Field()
  email:string;


 
}