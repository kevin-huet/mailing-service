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
    await this.mailerService.sendMail({
      to: payload.email,
      subject: '',
      template: '',
      context: {},
    });
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
