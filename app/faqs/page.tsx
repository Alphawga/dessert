"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, CheckCircle, Search, Clock, Shield, Languages, FileCheck, ArrowRight } from "lucide-react"

// Animation helper function
const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom

        // Check if element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add("animate-fade-in")
        }
      })
    }

    // Run once on load
    animateElements()

    // Add scroll event listener
    window.addEventListener("scroll", animateElements)

    // Clean up
    return () => window.removeEventListener("scroll", animateElements)
  }, [])
}

export default function FAQsPage() {
  useAnimateOnScroll()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl mb-8">
              Find answers to common questions about our document review services
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">FAQ Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#general" className="text-primary hover:text-secondary transition-colors">
                        General Questions
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-primary hover:text-secondary transition-colors">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="text-primary hover:text-secondary transition-colors">
                        Pricing & Plans
                      </a>
                    </li>
                    <li>
                      <a href="#security" className="text-primary hover:text-secondary transition-colors">
                        Security & Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#support" className="text-primary hover:text-secondary transition-colors">
                        Support & Help
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Can't find the answer you're looking for? Our support team is here to help.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {/* General Questions */}
              <div id="general" className="mb-12 animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">General Questions</h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
                >
                  <AccordionItem value="general-1" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What is DissertCoach?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      DissertCoach is a professional document review and analysis service that helps individuals and 
                      organizations with comprehensive document review, analysis, and feedback. We specialize in 
                      multilingual document review across various industries including legal, financial, medical, 
                      academic, and technical fields.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="general-2" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Who can benefit from DissertCoach services?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Our services benefit a wide range of clients including students, researchers, legal professionals, 
                      businesses, financial institutions, healthcare organizations, and anyone needing expert document 
                      review and analysis. Whether you need dissertation feedback, contract review, or technical document 
                      analysis, our expert team can help.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="general-3" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How do I get started with DissertCoach?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Getting started is simple. You can sign up for an account on our website, choose a suitable plan 
                      for your needs, and start uploading documents for review. Our user-friendly platform guides you 
                      through the entire process, from document submission to receiving detailed feedback and analysis.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="general-4" className="px-6">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What makes DissertCoach different from other review services?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      DissertCoach stands out with our multilingual capabilities, industry-specific expertise, and 
                      comprehensive review approach. We combine human expertise with advanced technology to provide 
                      thorough, accurate, and insightful document analysis. Our team includes specialists across various 
                      fields ensuring domain-specific knowledge for your documents.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Our Services */}
              <div id="services" className="mb-12 animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Services</h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
                >
                  <AccordionItem value="services-1" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What types of documents do you review?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      We review a wide range of documents including academic papers, dissertations, legal contracts, 
                      financial reports, medical documents, technical manuals, research papers, business proposals, 
                      marketing materials, and more. Our team has expertise across multiple disciplines to ensure 
                      accurate and insightful reviews.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="services-2" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What languages do you support?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      We support over 40 languages including English, Spanish, French, German, Chinese, Japanese, 
                      Arabic, Russian, Portuguese, Italian, Dutch, Korean, and many more. Our team consists of native 
                      speakers and linguistic experts to ensure accurate translations and reviews across all languages.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="services-3" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What is included in your document review service?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Our comprehensive document review includes content analysis, structural assessment, language and 
                      grammar review, fact-checking, consistency verification, and detailed feedback with improvement 
                      suggestions. For specialized documents, we also provide industry-specific analysis, compliance 
                      checks, and technical accuracy verification.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="services-4" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How long does the review process take?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Our standard turnaround time is 24-48 hours for most documents, depending on length and complexity. 
                      For urgent requests, we offer expedited services with faster delivery times. Large projects or 
                      highly specialized documents may require additional time, which we'll communicate clearly during 
                      the submission process.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="services-5" className="px-6">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you offer plagiarism checking?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, we offer comprehensive plagiarism checking as part of our premium and enterprise plans. 
                      Our plagiarism detection tools compare your document against billions of web pages, academic 
                      papers, and publications to ensure originality. We provide detailed reports highlighting any 
                      potential issues and suggestions for improvement.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Pricing & Plans */}
              <div id="pricing" className="mb-12 animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Pricing & Plans</h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
                >
                  <AccordionItem value="pricing-1" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How much do your services cost?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      We offer flexible pricing plans starting from ₦15,000 per month for our Basic plan, ₦45,000 for 
                      our Gold plan, and custom pricing for Enterprise solutions. One-time document reviews are also 
                      available with pricing based on document length, complexity, and turnaround time. Visit our 
                      Pricing page for detailed information.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing-2" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you offer discounts for bulk submissions?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, we offer volume discounts for bulk submissions and long-term contracts. The discount 
                      percentage depends on the number of documents and the subscription duration. Contact our sales 
                      team for a customized quote based on your specific requirements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing-3" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Can I upgrade or downgrade my plan?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, you can upgrade or downgrade your subscription plan at any time. When upgrading, you'll 
                      immediately gain access to additional features and benefits. When downgrading, the changes will 
                      take effect at the start of your next billing cycle. All plan changes can be managed through 
                      your account dashboard.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pricing-4" className="px-6">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you offer a satisfaction guarantee?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, we stand behind the quality of our work with a satisfaction guarantee. If you're not 
                      satisfied with our review, we offer one free revision to address your concerns. If you're still 
                      not satisfied after the revision, we'll provide a partial or full refund depending on the 
                      circumstances.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Security & Privacy */}
              <div id="security" className="mb-12 animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Security & Privacy</h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
                >
                  <AccordionItem value="security-1" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How do you ensure document confidentiality?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      We take confidentiality seriously. All documents are processed through secure, encrypted channels. 
                      Our reviewers sign strict confidentiality agreements, and we implement access controls to ensure 
                      only authorized personnel can view your documents. We never share your documents with third parties 
                      without explicit permission.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="security-2" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Is my data secure with DissertCoach?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Absolutely. We employ industry-standard security measures including SSL encryption, secure data 
                      storage, regular security audits, and strict access controls. Our systems are designed with 
                      security as a priority, and we continuously update our security protocols to address emerging 
                      threats.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="security-3" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you comply with data protection regulations?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, we comply with global data protection regulations including GDPR, CCPA, and other relevant 
                      privacy laws. We maintain transparent data processing practices, obtain necessary consents, and 
                      provide mechanisms for users to exercise their data rights. Our privacy policy details how we 
                      collect, use, and protect your information.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="security-4" className="px-6">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How long do you retain my documents?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      We retain documents for a limited period necessary to complete the review process and handle any 
                      follow-up questions or revision requests. By default, documents are automatically deleted 30 days 
                      after the completion of the review. You can request earlier deletion through your account 
                      dashboard or by contacting our support team.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Support & Help */}
              <div id="support" className="mb-12 animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Support & Help</h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
                >
                  <AccordionItem value="support-1" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      How can I contact customer support?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      You can reach our customer support team through multiple channels: email at 
                      support@dissertcoach.com, live chat on our website, or by phone at +234 800 123 4567. Our 
                      support hours are Monday to Friday, 8:00 AM to 8:00 PM WAT, with limited weekend support.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support-2" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      What if I'm not satisfied with my review?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      If you're not satisfied with your review, please contact our support team within 7 days of 
                      receiving the review. We offer one free revision to address your concerns. Our goal is your 
                      complete satisfaction, and we'll work with you to resolve any issues with the review.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support-3" className="px-6 border-b border-border">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Do you offer training or onboarding?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, we provide comprehensive onboarding for new clients, especially for enterprise accounts. 
                      This includes platform training, best practices for document submission, and guidance on 
                      interpreting review results. We also offer regular webinars and knowledge base articles to help 
                      you maximize the value of our services.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="support-4" className="px-6">
                    <AccordionTrigger className="text-lg font-medium py-4">
                      Can I request specific reviewers for my documents?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, enterprise clients can request specific reviewers or reviewer qualifications for their 
                      documents. While we cannot guarantee availability of specific individuals, we do our best to 
                      accommodate preferences for industry expertise, language proficiency, and academic background 
                      to ensure the most appropriate match for your document.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg mb-8">
              Our support team is ready to help you with any additional questions or concerns.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 