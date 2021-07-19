import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  monthlyPrice: number;

  @Field((type) => Int)
  dailyPrice: number;

  @Field()
  thumbnailUrl: string;

  @Field()
  mileage: string;

  @Field()
  gearType: string;

  @Field()
  gas: string;
}
