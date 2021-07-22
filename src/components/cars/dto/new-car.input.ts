import { InputType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(200)
  @Min(70, { message: 'This is not lower than 70' })
  dailyPrice: number;

  @Field((type) => Int)
  @Max(3000)
  @Min(1500)
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
