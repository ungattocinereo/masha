/**
 * Icon registry backed by Font Awesome (Free Solid + Brands).
 *
 * Icons render as inline SVG with `fill="currentColor"`. CSS applies brand gradients via
 * `fill: var(--grad, url(#gradId))` on `.icon` containers. The keys mirror the original
 * Lucide-based set so existing callers (data files, components) keep working unchanged.
 *
 * `iconSvg(name, { size, className })` — optional `size` sets explicit width/height in px;
 * optional `className` adds a class attribute on the <svg> (used by per-element CSS rules
 * like `.btn--cta__arrow` for hover transforms).
 */

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowDown, faArrowLeft, faArrowRight, faBookOpen, faCertificate, faCheck, faChevronDown,
  faCirclePlay, faClock, faCompass, faEnvelope, faGraduationCap, faHandshake, faLandmark,
  faLayerGroup, faLocationDot, faMountain, faPuzzlePiece, faQuoteLeft, faRoute, faSailboat,
  faScroll, faStar, faUsers, faWallet, faWandMagicSparkles, faWater, faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faInstagram, faTelegram, faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const ICON_DEFS: Record<string, IconDefinition> = {
  'mountain':       faMountain,
  'castle':         faLandmark,
  'waves':          faWater,
  'puzzle':         faPuzzlePiece,
  'sailboat':       faSailboat,
  'compass':        faCompass,
  'play-circle':    faCirclePlay,
  'sparkles':       faWandMagicSparkles,
  'graduation-cap': faGraduationCap,
  'map-pin':        faLocationDot,
  'scroll-text':    faScroll,
  'clock':          faClock,
  'users':          faUsers,
  'message-circle': faWhatsapp,
  'send':           faTelegram,
  'instagram':      faInstagram,
  'facebook':       faFacebookF,
  'mail':           faEnvelope,
  'wallet':         faWallet,
  'route':          faRoute,
  'book-open':      faBookOpen,
  'heart-handshake':faHandshake,
  'quote':          faQuoteLeft,
  'layers':         faLayerGroup,
  'arrow-left':     faArrowLeft,
  'arrow-right':    faArrowRight,
  'arrow-down':     faChevronDown,
  'check':          faCheck,
  'star':           faStar,
  'shield-check':   faCertificate,
  'x':              faXmark,
};

export interface IconOpts {
  size?: number;
  className?: string;
}

const renderSvg = (def: IconDefinition, opts?: IconOpts): string => {
  const [w, h, , , data] = def.icon;
  const paths = Array.isArray(data)
    ? data.map((d) => `<path d="${d}"/>`).join('')
    : `<path d="${data}"/>`;
  const sizeAttr = opts?.size ? ` width="${opts.size}" height="${opts.size}"` : '';
  const classAttr = opts?.className ? ` class="${opts.className}"` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="currentColor" aria-hidden="true"${sizeAttr}${classAttr}>${paths}</svg>`;
};

export const iconSvg = (name: string, opts?: IconOpts): string =>
  renderSvg(ICON_DEFS[name] ?? ICON_DEFS.sparkles, opts);
