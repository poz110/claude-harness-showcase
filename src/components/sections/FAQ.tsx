'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/content/faq'
import { SECTION_IDS } from '@/lib/content/sections'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function FAQ() {
  const { t } = useLanguage()

  return (
    <section
      id={SECTION_IDS.faq}
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
      style={{ backgroundColor: 'var(--color-zinc-900)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="font-semibold mb-4"
            style={{
              fontSize: '2rem',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              color: 'var(--color-zinc-50)',
            }}
          >
            {t.faq.heading}
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'var(--color-zinc-400)',
            }}
          >
            {t.faq.subheading}
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          className="space-y-2"
          aria-label="Frequently asked questions"
        >
          {FAQ_ITEMS.map((item) => {
            const i18nItem = t.faq.items[item.id]
            const question = i18nItem?.question ?? item.question
            const answer = i18nItem?.answer ?? item.answer

            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-lg border px-4"
                style={{
                  backgroundColor: 'var(--color-zinc-800)',
                  borderColor: 'var(--color-zinc-700)',
                }}
              >
                <AccordionTrigger
                  className="py-4 text-base font-medium"
                  style={{
                    color: 'var(--color-zinc-100)',
                  }}
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-4"
                  style={{
                    color: 'var(--color-zinc-400)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                  }}
                >
                  {answer}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
