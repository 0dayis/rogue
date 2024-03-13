import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '0day.is',
  subtitle: 'Logue',
  lang: 'en',
  themeHue: 300,
  banner: {
    enable: true,
    src: 'assets/images/Logomiyako.png',
  },
  thumbnail: {
    src: 'assets/images/thumbnail.png',
  }
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Telegram',
      url: 'https://t.me/is0day/',
      external: true,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/0dayis/',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/rebecca_avatar.png',
  name: 'mel0n',
  bio: 'Night City civilian',
  links: [
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/unittype',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/nonnil',
    },
    {
      name: 'Mail',
      icon: 'material-symbols:mail',
      url: 'mailto:supp@0day.is',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
