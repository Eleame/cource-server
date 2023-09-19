import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentResponse {
  @ApiProperty({ example: '2b9e50d0' })
  id: string;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: { value: '100', currency: 'EUR' } })
  amount: {
    value: string;
    currency: string;
  };

  @ApiProperty({ example: 'Order №1' })
  description: string;

  @ApiProperty({
    example: {
      type: 'redirect',
      confirmation_url:
        'https://paysera.lt/checkout/payments/v2/contract?orderId=2b',
    },
  })
  confirmation: {
    type: string;
    confirmation_url: string;
  };

  @ApiProperty({
    example: {
      account_id: '204971',
      gateway_id: '2057935',
    },
  })
  recipient: {
    account_id: string;
    gateway_id: string;
  };

  @ApiProperty({ example: true })
  test: boolean;

  @ApiProperty({ example: false })
  paid: boolean;

  @ApiProperty({ example: false })
  refundable: boolean;

  @ApiProperty({ example: {} })
  metadata: object;
}
