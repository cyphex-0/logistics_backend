import { describe, it, expect } from 'vitest';
import {
  selectRelevantFaq,
  buildFaqSearchQuery,
  formatFaqContext,
  FALLBACK_MESSAGE_EN,
  FALLBACK_MESSAGE_BN
} from '../../src/modules/support/support.faq.js';
import { SupportChatMessage } from '../../src/modules/support/support.validation.js';

describe('Support FAQ Knowledge Base & Matcher', () => {
  it('correctly matches booking inquiries', () => {
    const matches = selectRelevantFaq('How do I create a new shipment on Shiply?');
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.category === 'booking')).toBe(true);
  });

  it('correctly matches status inquiries including specific status values', () => {
    const inTransitMatches = selectRelevantFaq('What does In Transit mean?');
    expect(inTransitMatches.length).toBeGreaterThan(0);
    expect(inTransitMatches.some((m) => m.category === 'status')).toBe(true);

    const outForDeliveryMatches = selectRelevantFaq('What is Out for Delivery?');
    expect(outForDeliveryMatches.some((m) => m.category === 'status')).toBe(true);
  });

  it('correctly matches pricing inquiries', () => {
    const matches = selectRelevantFaq('How are delivery charges and rates calculated?');
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.category === 'pricing')).toBe(true);
  });

  it('correctly matches payment inquiries for Stripe and bKash', () => {
    const matches = selectRelevantFaq('Can I pay with bKash or credit card?');
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.category === 'payment')).toBe(true);
  });

  it('correctly matches coverage inquiries for Bangladesh districts/divisions', () => {
    const matches = selectRelevantFaq('Do you deliver in Sylhet and Chittagong?');
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.category === 'coverage')).toBe(true);
  });

  it('correctly matches tracking inquiries and directs to tracking page', () => {
    const matches = selectRelevantFaq('How do I track my package?');
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.category === 'tracking')).toBe(true);
  });

  it('correctly matches Bangla queries', () => {
    const bookingBn = selectRelevantFaq('আমি কিভাবে পার্সেল বুক করব?');
    expect(bookingBn.length).toBeGreaterThan(0);
    expect(bookingBn.some((m) => m.category === 'booking')).toBe(true);

    const paymentBn = selectRelevantFaq('বিকাশে পেমেন্ট করা যাবে?');
    expect(paymentBn.length).toBeGreaterThan(0);
    expect(paymentBn.some((m) => m.category === 'payment')).toBe(true);
  });

  it('returns empty array (zero match) for out-of-scope or irrelevant queries', () => {
    const pancake = selectRelevantFaq('Give me a recipe for blueberry pancakes');
    expect(pancake).toEqual([]);

    const coding = selectRelevantFaq('Write a Python function to invert binary trees');
    expect(coding).toEqual([]);

    const nonsense = selectRelevantFaq('xyz abc 123 !@#');
    expect(nonsense).toEqual([]);
  });

  it('buildFaqSearchQuery combines current message with recent user turns and excludes assistant turns', () => {
    const history: SupportChatMessage[] = [
      { role: 'user', content: 'How is shipping calculated?' },
      { role: 'assistant', content: 'It is based on weight and base price.' },
      { role: 'user', content: 'Does it depend on the zone?' },
      { role: 'assistant', content: 'Yes, destination zones have different rates.' }
    ];

    const currentMessage = 'What about express?';
    const searchQuery = buildFaqSearchQuery(currentMessage, history);

    expect(searchQuery).toContain('How is shipping calculated?');
    expect(searchQuery).toContain('Does it depend on the zone?');
    expect(searchQuery).toContain('What about express?');
    // Assistant messages must NOT be in search query
    expect(searchQuery).not.toContain('It is based on weight');
    expect(searchQuery).not.toContain('Yes, destination zones');
  });

  it('correctly resolves follow-up questions using combined user query', () => {
    const history: SupportChatMessage[] = [
      { role: 'user', content: 'How is shipping priced?' },
      { role: 'assistant', content: 'Shipping is priced by base price + weight * pricePerKg.' }
    ];

    const currentMessage = 'What about express?';
    // On its own "What about express?" might be ambiguous, but combined it has pricing context
    const combinedQuery = buildFaqSearchQuery(currentMessage, history);
    const matches = selectRelevantFaq(combinedQuery);

    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.category === 'pricing')).toBe(true);
  });

  it('formats FAQ context into formatted markdown', () => {
    const matches = selectRelevantFaq('How are rates calculated?');
    const formatted = formatFaqContext(matches, 'en');

    expect(formatted).toContain('[FAQ Entry');
    expect(formatted).toContain('Q:');
    expect(formatted).toContain('A:');
    expect(formatted).toContain('Base Price');
  });

  it('provides official fallback messages', () => {
    expect(FALLBACK_MESSAGE_EN).toContain('/contact');
    expect(FALLBACK_MESSAGE_BN).toContain('/contact');
  });
});
