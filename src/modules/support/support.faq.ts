import { SupportChatMessage } from './support.validation.js';

export interface FaqItem {
  id: string;
  category: 'booking' | 'status' | 'pricing' | 'payment' | 'coverage' | 'support' | 'tracking';
  questionEn: string;
  answerEn: string;
  questionBn: string;
  answerBn: string;
  keywords: string[];
  tags: string[];
}

export const FALLBACK_MESSAGE_EN =
  "I'm sorry, I don't have verified information to answer that question. Please visit our contact page at /contact for assistance from our support team.";

export const FALLBACK_MESSAGE_BN =
  "দুঃখিত, এই বিষয়ে আমার কাছে যাচাইকৃত তথ্য নেই। বিস্তারিত সহায়তা পেতে অনুগ্রহ করে আমাদের সাপোর্ট পেইজে যোগাযোগ করুন: /contact";

export const GREETING_RESPONSE_EN =
  'Hello! I am your Shiply AI Support Assistant. How can I help you today with booking shipments, calculating delivery rates, tracking parcels, or platform coverage?';

export const GREETING_RESPONSE_BN =
  'হ্যালো! আমি আপনার শিপলি এআই সহকারী। পার্সেল বুকিং, শিপিং খরচ হিসাব, পার্সেল ট্র্যাকিং বা সার্ভিস কভারেজ বিষয়ে কীভাবে আপনাকে সাহায্য করতে পারি?';

export const GRATITUDE_RESPONSE_EN =
  "You're very welcome! Please feel free to ask if you have any more questions about Shiply.";

export const GRATITUDE_RESPONSE_BN =
  'আপনাকে অনেক ধন্যবাদ! শিপলি সম্পর্কিত যেকোনো সহায়তায় আমি সবসময় প্রস্তুত।';


export const FAQ_KNOWLEDGE_BASE: FaqItem[] = [
  {
    id: 'booking-flow',
    category: 'booking',
    questionEn: 'How do I create or book a shipment?',
    answerEn:
      'To book a shipment on Shiply: 1. Sign in to your account. 2. Navigate to "Book Shipment" in your customer dashboard. 3. Select your pickup and destination zones, and enter detailed sender and recipient addresses with contact phone numbers. 4. Choose your service type (Standard or Express) and specify parcel details. 5. Review the calculated price and complete payment via Stripe or bKash.',
    questionBn: 'শিপমেন্ট কিভাবে তৈরি বা বুক করব?',
    answerBn:
      'শিপলিতে পার্সেল বুক করার নিয়ম: ১. আপনার অ্যাকাউন্টে লগইন করুন। ২. ড্যাশবোর্ড থেকে "Book Shipment"-এ যান। ৩. পিকআপ এবং ডেলিভারি জোন নির্বাচন করে ঠিকানা ও ফোন নম্বর প্রদান করুন। ৪. স্ট্যান্ডার্ড বা এক্সপ্রেস সার্ভিস নির্বাচন করুন। ৫. নির্ধারিত ফি দেখে স্ট্রাইপ (Stripe) বা বিকাশ (bKash)-এর মাধ্যমে পেমেন্ট সম্পন্ন করুন।',
    keywords: [
      'create', 'book', 'booking', 'shipment', 'parcel', 'package', 'send',
      'order', 'step', 'steps', 'process', 'ship', 'shipping', 'how to ship',
      'deliver', 'delivery', 'courier', 'send parcel', 'send package',
      'বুক', 'পাঠাব', 'পাঠাতে', 'পার্সেল', 'তৈরি', 'শিপ', 'শিপিং'
    ],
    tags: ['shipment', 'booking', 'order', 'shipping']
  },
  {
    id: 'status-definitions',
    category: 'status',
    questionEn: 'What do the shipment statuses mean?',
    answerEn:
      'Shiply has 10 official shipment statuses: PENDING (shipment created, awaiting payment/confirmation), CONFIRMED (ready for courier assignment), PICKUP_ASSIGNED (courier assigned to collect parcel), PICKED_UP (collected from sender), IN_TRANSIT (moving between hubs), OUT_FOR_DELIVERY (courier actively delivering to recipient), DELIVERED (successfully handed over to recipient), FAILED_DELIVERY (delivery attempt failed; will re-attempt or return), RETURNED (returned to sender), and CANCELLED (cancelled before pickup).',
    questionBn: 'শিপমেন্ট স্ট্যাটাসগুলোর অর্থ কী?',
    answerBn:
      'শিপলির মূল ১০টি স্ট্যাটাস: PENDING (পেমেন্ট বা নিশ্চিতকরণের অপেক্ষায়), CONFIRMED (কুরিয়ার অ্যাসাইন করার জন্য প্রস্তুত), PICKUP_ASSIGNED (পিকআপের জন্য কুরিয়ার নিয়োগ করা হয়েছে), PICKED_UP (পার্সেল সংগ্রহ সম্পন্ন), IN_TRANSIT (হাবের মাঝে পরিবহনরত), OUT_FOR_DELIVERY (ডেলিভারির জন্য কুরিয়ার বের হয়েছে), DELIVERED (সফলভাবে গ্রাহকের কাছে হস্তান্তর), FAILED_DELIVERY (ডেলিভারি চেষ্টা ব্যর্থ, পুনরায় চেষ্টা বা ফেরত হবে), RETURNED (প্রেরকের কাছে ফেরত), CANCELLED (বাতিল)।',
    keywords: [
      'status', 'meaning', 'in transit', 'out for delivery', 'pending',
      'confirmed', 'delivered', 'failed', 'returned', 'cancelled', 'pickup',
      'স্ট্যাটাস', 'ইন ট্রানজিট', 'ডেলিভারি', 'পেন্ডিং', 'কনফার্ম'
    ],
    tags: ['status', 'tracking-status', 'lifecycle']
  },
  {
    id: 'pricing-calculation',
    category: 'pricing',
    questionEn: 'How are shipping rates and delivery prices calculated?',
    answerEn:
      'Shipping rates on Shiply are calculated dynamically using the formula: Base Price + (Weight in kg * Price per kg). Pricing rules vary based on the destination delivery zone and the selected service type (Standard vs Express). If a specific zone rule is not set, a system default rule is applied. Shiply operates on a transparent pay-per-shipment model with no hidden subscription fees.',
    questionBn: 'ডেলিভারি চার্জ বা শিপিং খরচ কিভাবে হিসাব করা হয়?',
    answerBn:
      'শিপিং চার্জ একটি নিয়মে স্বয়ংক্রিয়ভাবে হিসাব করা হয়: বেস প্রাইস (Base Price) + (ওজন প্রতি কেজি * প্রতি কেজির মূল্য)। চার্জ ডেলিভারি জোন এবং সার্ভিসের ধরন (স্ট্যান্ডার্ড বনাম এক্সপ্রেস)-এর ওপর নির্ভর করে। কোনো মাসিক সাবস্ক্রিপশন ফি বা লুকানো চার্জ নেই।',
    keywords: [
      'price', 'pricing', 'rate', 'rates', 'cost', 'fee', 'charge', 'charges',
      'calculate', 'calculation', 'express', 'standard', 'weight', 'kg',
      'দাম', 'খরচ', 'চার্জ', 'হিসাব', 'টাকা', 'রেট', 'মূল্য'
    ],
    tags: ['pricing', 'rate', 'cost', 'fee']
  },
  {
    id: 'payment-methods',
    category: 'payment',
    questionEn: 'What payment methods do you support and how do I pay?',
    answerEn:
      'Shiply supports direct online payments through Stripe (credit/debit cards including Visa and Mastercard) and bKash (mobile financial service in Bangladesh). When booking a shipment or paying for a pending delivery, select your preferred gateway to complete the transaction securely.',
    questionBn: 'পেমেন্ট কিভাবে করতে হয় এবং কোন মাধ্যমগুলো সমর্থিত?',
    answerBn:
      'শিপলিতে অনলাইন পেমেন্টের জন্য স্ট্রাইপ (Stripe - ডেবিট/ক্রেডিট কার্ড) এবং বিকাশ (bKash) সমর্থিত। বুকিং করার সময় বা ড্যাশবোর্ড থেকে সহজেই পছন্দের মাধ্যমে নিরাপদে পেমেন্ট সম্পন্ন করতে পারবেন।',
    keywords: [
      'payment', 'pay', 'stripe', 'bkash', 'card', 'credit', 'debit', 'visa',
      'mastercard', 'gateway', 'method', 'methods', 'পেমেন্ট', 'টাকা পরিশোধ', 'বিকাশ', 'কার্ড'
    ],
    tags: ['payment', 'stripe', 'bkash']
  },
  {
    id: 'coverage-areas',
    category: 'coverage',
    questionEn: 'Which areas and districts do you serve?',
    answerEn:
      'Shiply operates across 8 regional delivery divisions in Bangladesh: Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur, and Mymensingh. Specific city and district availability depends on the currently active delivery zones in the platform, which are selectable and verified during the booking process.',
    questionBn: 'শিপলি কোন কোন এলাকা বা জেলায় সার্ভিস প্রদান করে?',
    answerBn:
      'শিপলি বাংলাদেশের ৮টি প্রশাসনিক বিভাগে সার্ভিস পরিচালনা করে: ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, বরিশাল, সিলেট, রংপুর এবং ময়মনসিংহ। নির্দিষ্ট জেলা বা শহরে সার্ভিস প্রাপ্যতা প্ল্যাটফর্মের সক্রিয় ডেলিভারি জোনের ওপর নির্ভর করে এবং বুকিং করার সময় তা নির্বাচন ও যাচাই করা যায়।',
    keywords: [
      'area', 'areas', 'coverage', 'district', 'districts', 'division',
      'divisions', 'city', 'cities', 'dhaka', 'chattogram', 'chittagong',
      'rajshahi', 'khulna', 'barishal', 'sylhet', 'rangpur', 'mymensingh',
      'bangladesh', 'সার্ভিস এরিয়া', 'কভারেজ', 'জেলা', 'বিভাগ', 'কোথায় কোথায়'
    ],
    tags: ['coverage', 'zones', 'locations']
  },
  {
    id: 'tracking-guidance',
    category: 'tracking',
    questionEn: 'How can I track my shipment or parcel?',
    answerEn:
      'You can track any parcel live by visiting the Track Shipment page in your customer dashboard at /dashboard/tracking or by using the tracking bar on the homepage. Enter your unique tracking number (format: CLG-YYYYMMDD-XXXXX). Please note that this AI assistant does not perform private parcel lookups or display confidential customer delivery records in chat.',
    questionBn: 'আমি কিভাবে পার্সেল বা শিপমেন্ট ট্র্যাক করতে পারি?',
    answerBn:
      'আপনি আপনার ড্যাশবোর্ডের /dashboard/tracking পেইজে গিয়ে অথবা ওয়েবসাইটের হোমপেইজের ট্র্যাকিং বক্সে ট্র্যাকিং নম্বর (ফরম্যাট: CLG-YYYYMMDD-XXXXX) লিখে পার্সেল ট্র্যাক করতে পারেন। গ্রাহকের গোপনীয়তা রক্ষার্থে এই এআই চ্যাটবট সরাসরি চ্যাটের ভেতর পার্সেল ডাটা দেখায় না।',
    keywords: [
      'track', 'tracking', 'parcel status', 'where is my', 'package location',
      'number', 'clg', 'ট্র্যাক', 'ট্র্যাকিং', 'কোথায় আছে', 'পার্সেল কোথায়'
    ],
    tags: ['tracking', 'shipment-lookup']
  },
  {
    id: 'support-contact',
    category: 'support',
    questionEn: 'How can I contact human customer support?',
    answerEn:
      'You can contact the Shiply support team anytime through our official Contact Form at /contact, or via in-app support within your customer dashboard. Our team will review your message and assist you directly.',
    questionBn: 'কাস্টমার সাপোর্টের সাথে কিভাবে সরাসরি যোগাযোগ করব?',
    answerBn:
      'সাপোর্ট টিমের সাথে যোগাযোগের জন্য আমাদের ওয়েবসাইটের কন্টাক্ট ফর্ম (/contact) ব্যবহার করুন অথবা ড্যাশবোর্ডের ইন-অ্যাপ সাপোর্ট থেকে মেসেজ দিন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।',
    keywords: [
      'contact', 'support', 'human', 'agent', 'help', 'team', 'call',
      'reach', 'email', 'form', 'যোগাযোগ', 'সাহায্য', 'হেল্প', 'সাপোর্ট'
    ],
    tags: ['support', 'contact', 'help']
  },
  {
    id: 'account-privacy',
    category: 'support',
    questionEn: 'Can this AI assistant access my personal account or shipment information?',
    answerEn:
      'No. This AI assistant is strictly designed for general platform guidance and cannot view, access, or modify your personal account information, passwords, payment details, or private shipment records. You can view and manage your account securely by logging in to your [Customer Dashboard](/dashboard) or [Profile](/profile).',
    questionBn: 'এই এআই সহকারী কি আমার ব্যক্তিগত অ্যাকাউন্ট বা শিপমেন্টের তথ্য দেখতে পারে?',
    answerBn:
      'না। এই এআই সহকারী শুধুমাত্র প্ল্যাটফর্মের সাধারণ সহায়তার জন্য তৈরি এবং এটি আপনার ব্যক্তিগত অ্যাকাউন্ট, পাসওয়ার্ড, পেমেন্ট বা গোপন শিপমেন্ট তথ্যে প্রবেশ করতে পারে না। আপনার অ্যাকাউন্ট পরিচালনা করতে আপনার [ড্যাশবোর্ড](/dashboard) বা [প্রোফাইলে](/profile) যান।',
    keywords: [
      'account', 'profile', 'personal', 'private', 'access', 'privacy',
      'password', 'security', 'data', 'info', 'information', 'আমার অ্যাকাউন্ট',
      'অ্যাকাউন্ট তথ্য', 'ব্যক্তিগত তথ্য'
    ],
    tags: ['account', 'privacy', 'security']
  }
];

/**
 * Builds a search query string using the current message plus up to 2 recent user turns.
 * Assistant messages are strictly excluded as untrusted client context.
 */
export function buildFaqSearchQuery(message: string, history: SupportChatMessage[] = []): string {
  const recentUserTurns = history
    .filter((turn) => turn.role === 'user')
    .slice(-2)
    .map((turn) => turn.content);

  return [...recentUserTurns, message].join(' ').trim();
}

export function isGreeting(text: string): boolean {
  if (!text) return false;
  const trimmed = text.trim().toLowerCase().replace(/[^\w\s\u0980-\u09FF]/g, '');
  const greetingExact = new Set([
    'hi',
    'hello',
    'hey',
    'heya',
    'hey there',
    'hello there',
    'greetings',
    'good morning',
    'good afternoon',
    'good evening',
    'good day',
    'salam',
    'assalamu alaikum',
    'assalamualaikum',
    'হাই',
    'হ্যালো',
    'সালাম',
    'আসসালামু আলাইকুম',
    'আসসালামুআলাইকুম',
    'নমস্কার',
    'কেমন আছেন'
  ]);
  return greetingExact.has(trimmed);
}

export function isGratitude(text: string): boolean {
  if (!text) return false;
  const trimmed = text.trim().toLowerCase().replace(/[^\w\s\u0980-\u09FF]/g, '');
  const gratitudeExact = new Set([
    'thanks',
    'thank you',
    'thank u',
    'thx',
    'thanks a lot',
    'thank you so much',
    'many thanks',
    'ধন্যবাদ',
    'অনেক ধন্যবাদ',
    'অসংখ্য ধন্যবাদ',
    'থ্যাংকস',
    'শুকরিয়া'
  ]);
  return gratitudeExact.has(trimmed);
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'can', 'could',
  'will', 'would', 'should', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him',
  'her', 'us', 'them', 'my', 'your', 'his', 'their', 'our', 'what', 'which', 'who',
  'whom', 'this', 'that', 'these', 'those', 'am', 'be', 'been', 'being', 'have', 'has',
  'had', 'having', 'for', 'in', 'on', 'at', 'to', 'from', 'by', 'with', 'about', 'of',
  'and', 'or', 'not', 'no', 'give', 'tell', 'please', 'some', 'any', 'how'
]);

/**
 * Calculates a match score for a single FAQ item against a query string.
 */
export function scoreFaqItem(item: FaqItem, text: string): number {
  if (!text || !text.trim()) return 0;

  const normalized = text.toLowerCase();
  const tokens = normalized
    .replace(/[^\w\s\u0980-\u09FF]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 2 && !STOP_WORDS.has(t));

  if (tokens.length === 0) {
    return 0;
  }

  let score = 0;

  // Check exact keyword matches (primary signal)
  for (const kw of item.keywords) {
    const lowerKw = kw.toLowerCase();
    if (normalized.includes(lowerKw)) {
      score += lowerKw.includes(' ') ? 4 : 2;
    }
  }

  // Check tag matches
  for (const tag of item.tags) {
    if (tokens.includes(tag.toLowerCase())) {
      score += 3;
    }
  }

  // Check token stem/prefix match against keywords for words with length >= 4
  for (const token of tokens) {
    if (token.length >= 4) {
      for (const kw of item.keywords) {
        if (kw.length >= 4 && (kw.startsWith(token) || token.startsWith(kw))) {
          score += 2;
          break;
        }
      }
    }
  }

  // Check meaningful question token matches
  const questionTokensEn = item.questionEn
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => !STOP_WORDS.has(t));
  const questionTokensBn = item.questionBn
    .split(/\s+/)
    .filter((t) => !STOP_WORDS.has(t));

  for (const token of tokens) {
    if (questionTokensEn.includes(token)) score += 1;
    if (questionTokensBn.includes(token)) score += 1;
  }

  return score;
}

/**
 * Selects relevant FAQ items based on keyword and tag relevance scoring.
 * Returns an empty array if no relevance threshold is met.
 */
export function selectRelevantFaq(searchQuery: string, limit = 3): FaqItem[] {
  if (!searchQuery || !searchQuery.trim()) {
    return [];
  }

  const scored = FAQ_KNOWLEDGE_BASE.map((item) => ({
    item,
    score: scoreFaqItem(item, searchQuery)
  }));

  const matches = scored
    .filter((s) => s.score >= 2) // Require a meaningful score threshold
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item);

  return matches;
}

/**
 * Searches with historical conversation context, requiring that the CURRENT user message
 * also has a relevant signal (score >= 1) in the matched FAQ to prevent historical topic bleed.
 */
export function selectRelevantFaqWithContext(
  searchQuery: string,
  currentMessage: string,
  limit = 3
): FaqItem[] {
  if (!searchQuery || !searchQuery.trim()) {
    return [];
  }

  const scored = FAQ_KNOWLEDGE_BASE.map((item) => {
    const currentScore = scoreFaqItem(item, currentMessage);
    const combinedScore = scoreFaqItem(item, searchQuery);
    return {
      item,
      currentScore,
      combinedScore
    };
  });

  return scored
    // Must have at least score >= 1 from the current message, and combined score >= 2
    .filter((s) => s.currentScore >= 1 && s.combinedScore >= 2)
    .sort((a, b) => b.combinedScore - a.combinedScore)
    .slice(0, limit)
    .map((s) => s.item);
}


/**
 * Formats matched FAQ items into a delimited markdown string for system instructions.
 */
export function formatFaqContext(items: FaqItem[], locale: 'en' | 'bn' = 'en'): string {
  if (items.length === 0) return '';

  return items
    .map((item, index) => {
      const q = locale === 'bn' ? item.questionBn : item.questionEn;
      const a = locale === 'bn' ? item.answerBn : item.answerEn;
      return `[FAQ Entry ${index + 1}: ${item.category.toUpperCase()}]\nQ: ${q}\nA: ${a}`;
    })
    .join('\n\n');
}
