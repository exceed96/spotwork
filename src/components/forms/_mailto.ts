type MailtoPayload = {
  to: string;
  subject: string;
  body: string;
};

const encode = (value: string) => encodeURIComponent(value).replace(/%20/g, '+');

export const buildMailtoUrl = ({ to, subject, body }: MailtoPayload) => {
  return `mailto:${encodeURIComponent(to)}?subject=${encode(subject)}&body=${encode(body)}`;
};

