export class MailConfirmRequestDTO {
  email: string;
  code: string;
}

export class MailResetRequestDTO {
  email: string;
}

export class MailDeleteRequestDTO {
  email: string;
}
