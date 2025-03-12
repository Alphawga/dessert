import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | DissertCoach",
  description: "Find answers to common questions about DissertCoach's document review and analysis services.",
  keywords: "FAQs, document review FAQs, DissertCoach help, document analysis questions, multilingual review questions",
}

export default function FAQsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
} 