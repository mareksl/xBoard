import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50052',
    package: 'users',
    protoPath: join(__dirname, 'users/users.proto'),
  },
};
