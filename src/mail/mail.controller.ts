import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { MessagePattern } from '@nestjs/microservices';
import {
  MailConfirmRequestDTO,
  MailDeleteRequestDTO,
  MailResetRequestDTO,
} from './mail.dto';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @MessagePattern('MAIL_SEND_CONFIRM_ACCOUNT')
  async accountConfirmation(payload: MailConfirmRequestDTO): Promise<any> {
    return this.mailService.sendConfirmationMail(payload);
  }

  @MessagePattern('MAIL_SEND_RESET_PASSWORD')
  async resetPassword(payload: MailResetRequestDTO): Promise<any> {
    return this.mailService.sendResetPasswordMail(payload);
  }

  @MessagePattern('MAIL_SEND_DELETE_ACCOUNT')
  async deleteAccount(payload: MailDeleteRequestDTO): Promise<any> {
    return this.mailService.sendDeleteAccountMail(payload);
  }
}
