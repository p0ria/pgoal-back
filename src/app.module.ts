import { Module } from '@nestjs/common';
import {CONTROLLERS} from "./controllers";
import {SERVICES} from "./services";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./auth/strategies/constants";
import {ENTITIES} from "./schemas/entities";
import {STRATEGIES} from "./auth/strategies";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: "mssql",
          host: "localhost",
          port: 1433,
          username: "sa",
          password: "r@h3Madrese",
          database: "pgoal",
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
          synchronize: true
      }),
      TypeOrmModule.forFeature([...ENTITIES]),
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '10h'}
      })
  ],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES, ...STRATEGIES],
})
export class AppModule {}
