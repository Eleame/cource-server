import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Oleg' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'oleg123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'oleg@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
