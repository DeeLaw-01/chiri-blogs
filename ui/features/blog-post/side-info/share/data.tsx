import FacebookIcon from '@/icons/socials/colored-circle/fb.svg'
import WhatsAppIcon from '@/icons/socials/colored-circle/whatsapp.svg'
import LinkedInIcon from '@/icons/socials/colored-circle/linkedIn.svg'
import XIcon from '@/icons/socials/colored-circle/x.svg'
import MailIcon from '@/icons/socials/colored-circle/mail.svg'

export type ShareItemType = {
  type: string
  icon: JSX.Element
  url: string
}

export const data = (link: string) =>
  [
    {
      type: 'Facebook',
      icon: <FacebookIcon width="2.5rem" height="2.5rem" />,
      url: `https://www.facebook.com/sharer.php?u=${link}`,
    },
    {
      type: 'WhatsApp',
      icon: <WhatsAppIcon width="2.5rem" height="2.5rem" />,
      url: `https://wa.me/?text=${link}`,
    },
    {
      type: 'LinkedIn',
      icon: <LinkedInIcon width="2.5rem" height="2.5rem" />,
      url: `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${link}`,
    },
    {
      type: 'X',
      icon: <XIcon width="2.5rem" height="2.5rem" />,
      url: `https://x.com/intent/tweet?url=${link}`,
    },
    {
      type: 'Mail',
      icon: <MailIcon width="2.5rem" height="2.5rem" />,
      url: `mailto:?subject=&body=${link}`,
    },
  ] as ShareItemType[]
