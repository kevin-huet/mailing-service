import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  MailConfirmRequestDTO,
  MailDeleteRequestDTO,
  MailResetRequestDTO,
} from './mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    @Inject('LOGGER_SERVICE') private loggerClient: ClientProxy,
    private mailerService: MailerService,
  ) {}

  public async sendConfirmationMail(payload: MailConfirmRequestDTO) {
    try {
      await this.mailerService.sendMail({
        to: payload.email,
        subject: 'Registration',
        template: 'registration.hbs',
        context: { code: payload.code, username: payload.username },
      });
      this.loggerClient.emit('LOG_CREATE', {
        name: 'Email Sent',
        description: `Email registration validation as sent, username: ${payload.username}`,
        service: 'MAILER',
        type: 'INFO',
      });
    } catch (e) {
      this.loggerClient.emit('LOG_CREATE', {
        name: 'Email error',
        description: e.message,
        service: 'MAILER ',
        type: 'ERROR',
      });
    }
  }

  public async sendResetPasswordMail(payload: MailResetRequestDTO) {
    await this.mailerService.sendMail({
      to: payload.email,
      subject: '',
      template: '',
      context: {},
    });
  }

  public async sendDeleteAccountMail(payload: MailDeleteRequestDTO) {
    await this.mailerService.sendMail({
      to: payload.email,
      subject: '',
      template: '',
      context: {},
    });
    return Promise.resolve(undefined);
  }

  public async sendEmailNotification(payload: any) {
    await this.mailerService.sendMail({
      to: payload.email,
      subject: '',
      template: '',
      context: {},
    });
  }
}
