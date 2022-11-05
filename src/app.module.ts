import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [MailModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
