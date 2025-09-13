import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import * as Joi from "joi";

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    CacheModule.register(),
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        FRONTEND_CALLBACK: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        POSTGRES_PRISMA_URL: Joi.string().required(),
        AUTHSCH_CLIENT_ID: Joi.string().required(),
        AUTHSCH_CLIENT_SECRET: Joi.string().required(),
      }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
