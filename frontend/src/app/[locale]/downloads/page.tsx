'use client';
// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

type LocaleKey = 'zh' | 'en' | 'ja' | 'ko' | 'ar' | 'de' | 'es';

const i18n: Record<LocaleKey, any> = {
  zh: {
    hero: {
      title: "\u8D44\u6599\u4E0B\u8F7D\u4E2D\u5FC3",
      subtitle: "\u4EA7\u54C1\u624B\u518C\u3001\u6280\u672F\u89C4\u683C\u3001\u8BA4\u8BC1\u6587\u4EF6\uFF0C\u4E00\u7AD9\u5F0F\u83B7\u53D6\u6240\u6709\u8D44\u6599"
    },
    sections: [
      {
        title: "\u4EA7\u54C1\u8D44\u6599",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "\u4EA7\u54C1\u624B\u518C",
            title: "Horse-MS.30P \u4E13\u4E1A\u4E09\u9879\u8D5B\u6A21\u62DF\u5668\n\u5B8C\u6574\u4EA7\u54C1\u624B\u518C",
            desc: "\u5305\u542B\u5B8C\u6574\u6280\u672F\u53C2\u6570\u3001\u8FD0\u52A8\u5E73\u53F0\u89C4\u683C\u3001AI\u8BAD\u7EC3\u7CFB\u7EDF\u8BF4\u660E\u3001\u5B89\u88C5\u8981\u6C42\u53CA\u914D\u4EF6\u6E05\u5355\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7EA6 8MB", "\u4E2D/\u82F1\u53CC\u8BED"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "\u4EA7\u54C1\u624B\u518C",
            title: "Pony-MS.30 \u667A\u80FD\u6559\u5B66\u6A21\u62DF\u5668\n\u5B8C\u6574\u4EA7\u54C1\u624B\u518C",
            desc: "\u5305\u542B\u6280\u672F\u53C2\u6570\u3001\u6559\u5B66\u6A21\u5F0F\u8BF4\u660E\u3001\u8BFE\u7A0B\u5316\u914D\u7F6E\u65B9\u6848\u3001\u7EF4\u62A4\u624B\u518C\u53CA\u5E38\u89C1\u95EE\u9898\u89E3\u7B54\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7EA6 6MB", "\u4E2D/\u82F1\u53CC\u8BED"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "\u4EA7\u54C1\u624B\u518C",
            title: "Racehorse-MS.20 \u8D5B\u9A6C\u7ADE\u901F\u6A21\u62DF\u5668\n\u5B8C\u6574\u4EA7\u54C1\u624B\u518C",
            desc: "\u5305\u542B\u7ADE\u901F\u6A21\u62DF\u7CFB\u7EDF\u89C4\u683C\u3001\u9A91\u5E08\u8BAD\u7EC3\u6A21\u5F0F\u3001\u6570\u636E\u91C7\u96C6\u63A5\u53E3\u53CA\u8D5B\u573A\u7EA7\u5B89\u88C5\u65B9\u6848\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7EA6 5MB", "\u4E2D/\u82F1\u53CC\u8BED"],
            action: 'form'
          }
        ]
      },
      {
        title: "\u8BA4\u8BC1\u4E0E\u8D44\u8D28",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "\u5B98\u65B9\u8BA4\u8BC1",
            title: "CE \u8BA4\u8BC1\u8BC1\u4E66",
            desc: "\u6B27\u76DFCE\u5B89\u5168\u8BA4\u8BC1\uFF0C\u8986\u76D6\u5168\u7CFB\u4EA7\u54C1\uFF0C\u7B26\u5408\u6B27\u6D32\u5E02\u573A\u51C6\u5165\u6807\u51C6\uFF0C\u9002\u7528\u4E8E\u5B66\u6821\u3001\u5EB7\u590D\u673A\u6784\u7B49\u5BF9\u5408\u89C4\u6709\u8981\u6C42\u7684\u91C7\u8D2D\u65B9\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u5B98\u65B9\u626B\u63CF\u4EF6"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "\u5408\u4F5C\u8BC1\u660E",
            title: "\u9999\u6E2F\u8D5B\u9A6C\u4F1A (HKJC)\n\u5408\u4F5C\u8BC1\u660E\u6587\u4EF6",
            desc: "\u9999\u6E2F\u8D5B\u9A6C\u4F1A\u5B98\u65B9\u91C7\u8D2D\u53CA\u4F7F\u7528\u8BC1\u660E\uFF0C\u53EF\u7528\u4E8E\u91C7\u8D2D\u51B3\u7B56\u53C2\u8003\uFF0C\u8BC1\u660E\u4EA7\u54C1\u5728\u9876\u7EA7\u4E13\u4E1A\u673A\u6784\u7684\u5B9E\u9645\u4F7F\u7528\u60C5\u51B5\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u9700\u7B7E\u4FDD\u5BC6\u534F\u8BAE"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "\u56FD\u9645\u8BA4\u8BC1",
            title: "RDA \u6B8B\u969C\u9A91\u672F\u534F\u4F1A\n\u8BA4\u53EF\u8BC1\u660E",
            desc: "\u82F1\u56FDRDA\uFF08Riding for the Disabled Association\uFF09\u5B98\u65B9\u8BA4\u53EF\u6587\u4EF6\uFF0C\u8BC1\u660E\u4EA7\u54C1\u7B26\u5408\u5EB7\u590D\u6CBB\u7597\u7528\u9014\u7684\u4E13\u4E1A\u6807\u51C6\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u82F1\u6587\u539F\u4EF6"],
            action: 'contact'
          }
        ]
      },
      {
        title: "\u89E3\u51B3\u65B9\u6848\u8D44\u6599",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "\u65B9\u6848\u6587\u4EF6",
            title: "\u4FF1\u4E50\u90E8 & \u57F9\u8BAD\u4E2D\u5FC3\n\u6574\u4F53\u89E3\u51B3\u65B9\u6848",
            desc: "\u5305\u542B\u573A\u9986\u89C4\u5212\u5EFA\u8BAE\u3001\u8BBE\u5907\u914D\u7F6E\u65B9\u6848\u3001\u8FD0\u8425\u6A21\u5F0F\u53C2\u8003\u3001\u57F9\u8BAD\u8BFE\u7A0B\u6846\u67B6\u53CA\u6295\u8D44\u56DE\u62A5\u6D4B\u7B97\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7EA6 12MB"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "\u65B9\u6848\u6587\u4EF6",
            title: "\u5B66\u6821 & \u6559\u80B2\u673A\u6784\n\u6574\u4F53\u89E3\u51B3\u65B9\u6848",
            desc: "\u5305\u542B\u8BFE\u7A0B\u4F53\u7CFB\u8BBE\u8BA1\u3001\u5B66\u65F6\u89C4\u5212\u3001\u573A\u5730\u8981\u6C42\u3001\u5B89\u5168\u89C4\u8303\u53CA\u6559\u5B66\u8BC4\u4F30\u6807\u51C6\uFF0C\u9002\u5408K12\u53CA\u9AD8\u6821\u4F53\u80B2\u90E8\u95E8\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7EA6 10MB"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "\u65B9\u6848\u6587\u4EF6",
            title: "\u5EB7\u590D\u6CBB\u7597\u673A\u6784\n\u6574\u4F53\u89E3\u51B3\u65B9\u6848",
            desc: "\u5305\u542B\u9A6C\u672F\u7597\u6CD5\u539F\u7406\u4ECB\u7ECD\u3001\u8BBE\u5907\u53C2\u6570\u4E0E\u7597\u6548\u5173\u8054\u3001\u6CBB\u7597\u65B9\u6848\u6A21\u677F\u53CA\u6CE8\u610F\u4E8B\u9879\uFF0C\u9644\u751F\u7269\u529B\u5B66\u7814\u7A76\u53C2\u8003\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7EA6 9MB"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "\u5E38\u89C1\u95EE\u9898\u89E3\u7B54",
      items: [
        {
          question: "\u8D44\u6599\u4E0B\u8F7D\u9700\u8981\u4ED8\u8D39\u5417\uFF1F",
          answer: "\u6240\u6709\u4EA7\u54C1\u624B\u518C\u3001\u6280\u672F\u89C4\u683C\u548CCE\u8BA4\u8BC1\u6587\u4EF6\u5747\u514D\u8D39\u63D0\u4F9B\uFF0C\u586B\u5199\u8868\u5355\u540EPDF\u5C06\u53D1\u9001\u81F3\u60A8\u7684\u90AE\u7BB1\uFF0C\u65E0\u9700\u4ED8\u8D39\u3002"
        },
        {
          question: "\u53EF\u4EE5\u7533\u8BF7\u6837\u54C1\u6216\u5B9E\u673A\u6F14\u793A\u5417\uFF1F",
          answer: "\u53EF\u4EE5\u9884\u7EA6\u7EBF\u4E0A\u6216\u7EBF\u4E0B\u6F14\u793A\uFF0C\u6B22\u8FCE\u901A\u8FC7\u8054\u7CFB\u9875\u9762\u63D0\u4EA4\u6F14\u793A\u7533\u8BF7\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u5B89\u6392\u3002"
        },
        {
          question: "\u8D44\u6599\u652F\u6301\u54EA\u4E9B\u8BED\u8A00\uFF1F",
          answer: "\u76EE\u524D\u63D0\u4F9B\u4E2D\u6587\u548C\u82F1\u6587\u7248\u672C\u8D44\u6599\uFF0C\u5982\u9700\u5176\u4ED6\u8BED\u8A00\u7248\u672C\u8BF7\u8054\u7CFB\u6211\u4EEC\u5B9A\u5236\u3002"
        }
      ]
    },
    cta: {
      title: "\u9700\u8981\u5B9A\u5236\u5316\u8D44\u6599\u5305\uFF1F",
      subtitle: "\u544A\u8BC9\u6211\u4EEC\u60A8\u7684\u673A\u6784\u7C7B\u578B\u548C\u91C7\u8D2D\u9700\u6C42\uFF0C\u6211\u4EEC\u4E3A\u60A8\u51C6\u5907\u4E13\u5C5E\u8D44\u6599\u5305\u5E76\u5B89\u6392\u987E\u95EE\u8DDF\u8FDB",
      button: "\u7ACB\u5373\u8054\u7CFB\u6211\u4EEC"
    },
    modal: {
      title: "\u514D\u8D39\u83B7\u53D6\u8D44\u6599",
      subtitle: "\u586B\u5199\u4EE5\u4E0B\u4FE1\u606F\uFF0CPDF\u5C06\u81EA\u52A8\u53D1\u9001\u81F3\u60A8\u7684\u90AE\u7BB1",
      successIcon: "\u2705",
      successMessage: "\u5DF2\u63D0\u4EA4\uFF01PDF\u5C06\u572824\u5C0F\u65F6\u5185\u53D1\u9001\u81F3\u60A8\u7684\u90AE\u7BB1",
      fields: {
        name: "\u60A8\u7684\u59D3\u540D *",
        email: "\u7535\u5B50\u90AE\u7BB1 * \uFF08PDF\u5C06\u53D1\u81F3\u6B64\u90AE\u7BB1\uFF09",
        country: "\u6240\u5728\u56FD\u5BB6/\u5730\u533A *",
        industry: "\u6240\u5728\u884C\u4E1A *"
      },
      countries: [
        "\u4E2D\u56FD\u5927\u9646",
        "\u4E2D\u56FD\u9999\u6E2F",
        "\u82F1\u56FD",
        "\u7F8E\u56FD",
        "\u6FB3\u5927\u5229\u4E9A",
        "\u5FB7\u56FD",
        "\u65E5\u672C",
        "\u97E9\u56FD",
        "\u5176\u4ED6"
      ],
      industries: [
        "\u9A6C\u672F\u4FF1\u4E50\u90E8 / \u8BAD\u7EC3\u4E2D\u5FC3",
        "\u5B66\u6821 / \u6559\u80B2\u673A\u6784",
        "\u5EB7\u590D / \u6CBB\u7597\u673A\u6784",
        "\u8D5B\u9A6C / \u9A91\u5E08\u8BAD\u7EC3",
        "\u4F53\u9A8C\u573A\u9986 / \u65C5\u6E38",
        "\u5BB6\u5EAD / \u4E2A\u4EBA",
        "\u5176\u4ED6"
      ],
      button: "\uD83D\uDCE7 \u53D1\u9001\u8D44\u6599\u5230\u6211\u7684\u90AE\u7BB1",
      privacy: "\u6211\u4EEC\u4E0D\u4F1A\u5411\u7B2C\u4E09\u65B9\u5206\u4EAB\u60A8\u7684\u4FE1\u606F\uFF0C\u627F\u8BFA24\u5C0F\u65F6\u5185\u53D1\u9001"
    },
    buttons: {
      getResource: "\u83B7\u53D6\u8D44\u6599 \u2192",
      contactUs: "\u8054\u7CFB\u6211\u4EEC\u7533\u8BF7\u83B7\u53D6 \u2192"
    }
  },
  en: {
    hero: {
      title: "Resource Download Center",
      subtitle: "Product manuals, technical specifications, certifications - all resources in one place"
    },
    sections: [
      {
        title: "Product Materials",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "Product Manual",
            title: "Horse-MS.30P Professional Eventing Simulator\nComplete Product Manual",
            desc: "Includes complete technical parameters, motion platform specifications, AI training system description, installation requirements and accessory list.",
            meta: ["\uD83D\uDCC4 PDF", "~8MB", "CN/EN Bilingual"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "Product Manual",
            title: "Pony-MS.30 Smart Training Simulator\nComplete Product Manual",
            desc: "Includes technical parameters, teaching mode description, curriculum configuration solutions, maintenance manual and FAQs.",
            meta: ["\uD83D\uDCC4 PDF", "~6MB", "CN/EN Bilingual"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "Product Manual",
            title: "Racehorse-MS.20 Racing Simulator\nComplete Product Manual",
            desc: "Includes racing simulation system specifications, jockey training modes, data collection interfaces and track-level installation solutions.",
            meta: ["\uD83D\uDCC4 PDF", "~5MB", "CN/EN Bilingual"],
            action: 'form'
          }
        ]
      },
      {
        title: "Certifications & Credentials",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "Official Certification",
            title: "CE Certification",
            desc: "EU CE safety certification, covering all product lines, compliant with European market access standards, suitable for schools and rehabilitation institutions with compliance requirements.",
            meta: ["\uD83D\uDCC4 PDF", "Official Scanned Copy"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "Partnership Proof",
            title: "Hong Kong Jockey Club (HKJC)\nPartnership Certificate",
            desc: "Official procurement and usage certificate from HKJC, can be used as procurement decision reference, proving product usage in top professional institutions.",
            meta: ["\uD83D\uDCC4 PDF", "NDA Required"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "International Certification",
            title: "RDA (Riding for the Disabled)\nAccreditation Certificate",
            desc: "Official accreditation from UK RDA (Riding for the Disabled Association), certifying product compliance with professional standards for rehabilitation therapy.",
            meta: ["\uD83D\uDCC4 PDF", "English Original"],
            action: 'contact'
          }
        ]
      },
      {
        title: "Solution Materials",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "Solution Document",
            title: "Riding Clubs & Training Centers\nComplete Solution",
            desc: "Includes venue planning recommendations, equipment configuration solutions, operational mode references, training curriculum framework and ROI calculations.",
            meta: ["\uD83D\uDCC4 PDF", "~12MB"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "Solution Document",
            title: "Schools & Educational Institutions\nComplete Solution",
            desc: "Includes curriculum design, class hour planning, venue requirements, safety regulations and teaching assessment standards, suitable for K12 and university sports departments.",
            meta: ["\uD83D\uDCC4 PDF", "~10MB"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "Solution Document",
            title: "Rehabilitation & Therapy Centers\nComplete Solution",
            desc: "Includes hippotherapy principles introduction, equipment parameters and efficacy correlation, treatment plan templates and precautions, with biomechanics research references.",
            meta: ["\uD83D\uDCC4 PDF", "~9MB"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is there a fee for downloading materials?",
          answer: "All product manuals, technical specifications and CE certification documents are provided free of charge. After filling out the form, the PDF will be sent to your email at no cost."
        },
        {
          question: "Can I request a sample or live demonstration?",
          answer: "Yes, you can schedule an online or offline demonstration. Please submit a demo request through the contact page, and we will arrange it within 24 hours."
        },
        {
          question: "What languages are the materials available in?",
          answer: "Currently available in Chinese and English versions. Please contact us if you need materials in other languages."
        }
      ]
    },
    cta: {
      title: "Need a Customized Resource Pack?",
      subtitle: "Tell us your institution type and procurement needs, and we'll prepare a dedicated resource pack and assign a consultant to follow up",
      button: "Contact Us Now"
    },
    modal: {
      title: "Free Resource Access",
      subtitle: "Fill in the information below and the PDF will be automatically sent to your email",
      successIcon: "\u2705",
      successMessage: "Submitted! PDF will be sent to your email within 24 hours",
      fields: {
        name: "Your Name *",
        email: "Email Address * (PDF will be sent here)",
        country: "Country/Region *",
        industry: "Industry *"
      },
      countries: [
        "China Mainland",
        "Hong Kong, China",
        "United Kingdom",
        "United States",
        "Australia",
        "Germany",
        "Japan",
        "South Korea",
        "Other"
      ],
      industries: [
        "Riding Club / Training Center",
        "School / Educational Institution",
        "Rehabilitation / Therapy Center",
        "Racing / Jockey Training",
        "Experience Venue / Tourism",
        "Home / Individual",
        "Other"
      ],
      button: "\uD83D\uDCE7 Send Materials to My Email",
      privacy: "We will not share your information with third parties. Delivery guaranteed within 24 hours."
    },
    buttons: {
      getResource: "Get Materials \u2192",
      contactUs: "Contact Us to Request \u2192"
    }
  },
  ja: {
    hero: {
      title: "\u8CC7\u6599\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30BB\u30F3\u30BF\u30FC",
      subtitle: "\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB\u3001\u6280\u8853\u4ED5\u69D8\u3001\u8A8D\u8A3C\u66F8\u985E\u3092\u4E00\u62EC\u53D6\u5F97"
    },
    sections: [
      {
        title: "\u88FD\u54C1\u8CC7\u6599",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB",
            title: "Horse-MS.30P \u30D7\u30ED\u7DCF\u5408\u99AC\u8853\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\n\u5B8C\u5168\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB",
            desc: "\u5B8C\u5168\u306A\u6280\u8853\u4ED5\u69D8\u3001\u30E2\u30FC\u30B7\u30E7\u30F3\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u898F\u683C\u3001AI\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u306E\u8AAC\u660E\u3001\u8A2D\u7F6E\u8981\u4EF6\u3001\u4ED8\u5C5E\u54C1\u30EA\u30B9\u30C8\u3092\u542B\u307F\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7D048MB", "\u4E2D/\u82F1\u4E8C\u30AB\u56FD\u8A9E"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB",
            title: "Pony-MS.30 \u30B9\u30DE\u30FC\u30C8\u6559\u80B2\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\n\u5B8C\u5168\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB",
            desc: "\u6280\u8853\u4ED5\u69D8\u3001\u6559\u80B2\u30E2\u30FC\u30C9\u306E\u8AAC\u660E\u3001\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0\u8A2D\u5B9A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3001\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB\u3001FAQ\u3092\u542B\u307F\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7D046MB", "\u4E2D/\u82F1\u4E8C\u30AB\u56FD\u8A9E"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB",
            title: "Racehorse-MS.20 \u7AF6\u99AC\u30EC\u30FC\u30B7\u30F3\u30B0\u30B7\u30DF\u30E5\u30EC\u30FC\u30BF\u30FC\n\u5B8C\u5168\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB",
            desc: "\u30EC\u30FC\u30B7\u30F3\u30B0\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30B7\u30B9\u30C6\u30E0\u898F\u683C\u3001\u9A0E\u624B\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9\u3001\u30C7\u30FC\u30BF\u53CE\u96C6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3001\u30C8\u30E9\u30C3\u30AF\u30EC\u30D9\u30EB\u306E\u8A2D\u7F6E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u542B\u307F\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7D045MB", "\u4E2D/\u82F1\u4E8C\u30AB\u56FD\u8A9E"],
            action: 'form'
          }
        ]
      },
      {
        title: "\u8A8D\u8A3C\u30FB\u8CC7\u683C",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "\u516C\u5F0F\u8A8D\u8A3C",
            title: "CE\u8A8D\u8A3C\u8A3C\u660E\u66F8",
            desc: "EU CE\u5B89\u5168\u8A8D\u8A3C\u3001\u5168\u88FD\u54C1\u30E9\u30A4\u30F3\u3092\u30AB\u30D0\u30FC\u3001\u6B27\u5DDE\u5E02\u5834\u30A2\u30AF\u30BB\u30B9\u57FA\u6E96\u306B\u9069\u5408\u3001\u5B66\u6821\u3084\u30EA\u30CF\u30D3\u30EA\u65BD\u8A2D\u306A\u3069\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u8981\u4EF6\u306E\u3042\u308B\u8CFC\u5165\u8005\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u516C\u5F0F\u30B9\u30AD\u30E3\u30F3\u30B3\u30D4\u30FC"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u8A3C\u660E",
            title: "\u9999\u6E2F\u30B8\u30E7\u30C3\u30AD\u30FC\u30AF\u30E9\u30D6 (HKJC)\n\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u8A3C\u660E\u66F8",
            desc: "HKJC\u516C\u5F0F\u8CFC\u5165\u30FB\u4F7F\u7528\u8A3C\u660E\u66F8\u3001\u8CFC\u5165\u610F\u601D\u6C7A\u5B9A\u306E\u53C2\u8003\u8CC7\u6599\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u3001\u30C8\u30C3\u30D7\u30D7\u30ED\u6A5F\u95A2\u3067\u306E\u5B9F\u969B\u306E\u4F7F\u7528\u3092\u8A3C\u660E\u3002",
            meta: ["\uD83D\uDCC4 PDF", "NDA\u5FC5\u8981"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "\u56FD\u969B\u8A8D\u8A3C",
            title: "RDA \u969C\u5BB3\u8005\u4E57\u99AC\u5354\u4F1A\n\u8A8D\u5B9A\u8A3C\u660E\u66F8",
            desc: "\u82F1\u56FDRDA\uFF08Riding for the Disabled Association\uFF09\u516C\u5F0F\u8A8D\u5B9A\u6587\u66F8\u3001\u30EA\u30CF\u30D3\u30EA\u6CBB\u7642\u7528\u9014\u306E\u5C02\u9580\u57FA\u6E96\u3078\u306E\u9069\u5408\u3092\u8A3C\u660E\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u82F1\u8A9E\u539F\u672C"],
            action: 'contact'
          }
        ]
      },
      {
        title: "\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u8CC7\u6599",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u6587\u66F8",
            title: "\u4E57\u99AC\u30AF\u30E9\u30D6&\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC\n\u7DCF\u5408\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3",
            desc: "\u4F1A\u5834\u8A08\u753B\u63D0\u6848\u3001\u6A5F\u5668\u69CB\u6210\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3001\u904B\u55B6\u30E2\u30C7\u30EB\u53C2\u8003\u3001\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3001ROI\u8A08\u7B97\u3092\u542B\u307F\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7D0412MB"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u6587\u66F8",
            title: "\u5B66\u6821&\u6559\u80B2\u6A5F\u95A2\n\u7DCF\u5408\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3",
            desc: "\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0\u8A2D\u8A08\u3001\u6388\u696D\u6642\u9593\u8A08\u753B\u3001\u4F1A\u5834\u8981\u4EF6\u3001\u5B89\u5168\u898F\u5236\u3001\u6559\u80B2\u8A55\u4FA1\u57FA\u6E96\u3092\u542B\u307F\u3001K12\u304A\u3088\u3073\u5927\u5B66\u306E\u30B9\u30DD\u30FC\u30C4\u90E8\u9580\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7D0410MB"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u6587\u66F8",
            title: "\u30EA\u30CF\u30D3\u30EA\u30C6\u30FC\u30B7\u30E7\u30F3&\u6CBB\u7642\u30BB\u30F3\u30BF\u30FC\n\u7DCF\u5408\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3",
            desc: "\u99AC\u8853\u7642\u6CD5\u539F\u7406\u306E\u7D39\u4ECB\u3001\u6A5F\u5668\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u7642\u52B9\u306E\u76F8\u95A2\u3001\u6CBB\u7642\u8A08\u753B\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3001\u6CE8\u610F\u4E8B\u9805\u3001\u30D0\u30A4\u30AA\u30E1\u30AB\u30CB\u30AF\u30B9\u7814\u7A76\u53C2\u8003\u3092\u542B\u307F\u307E\u3059\u3002",
            meta: ["\uD83D\uDCC4 PDF", "\u7D049MB"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "\u3088\u304F\u3042\u308B\u8CEA\u554F",
      items: [
        {
          question: "\u8CC7\u6599\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u6709\u6599\u3067\u3059\u304B\uFF1F",
          answer: "\u3059\u3079\u3066\u306E\u88FD\u54C1\u30DE\u30CB\u30E5\u30A2\u30EB\u3001\u6280\u8853\u4ED5\u69D8\u3001CE\u8A8D\u8A3C\u6587\u66F8\u306F\u7121\u6599\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30E0\u306B\u8A18\u5165\u5F8C\u3001PDF\u304C\u30E1\u30FC\u30EB\u3067\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"
        },
        {
          question: "\u30B5\u30F3\u30D7\u30EB\u307E\u305F\u306F\u5B9F\u6A5F\u30C7\u30E2\u3092\u4F9D\u983C\u3067\u304D\u307E\u3059\u304B\uFF1F",
          answer: "\u306F\u3044\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u307E\u305F\u306F\u30AA\u30D5\u30E9\u30A4\u30F3\u306E\u30C7\u30E2\u3092\u4E88\u7D04\u3067\u304D\u307E\u3059\u3002\u304A\u554F\u3044\u5408\u308F\u305B\u30DA\u30FC\u30B8\u304B\u3089\u30C7\u30E2\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u304F\u3060\u3055\u3044\u300224\u6642\u9593\u4EE5\u5185\u306B\u624B\u914D\u3057\u307E\u3059\u3002"
        },
        {
          question: "\u8CC7\u6599\u306F\u4F55\u8A9E\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u304B\uFF1F",
          answer: "\u73FE\u5728\u3001\u4E2D\u56FD\u8A9E\u3068\u82F1\u8A9E\u7248\u304C\u3042\u308A\u307E\u3059\u3002\u4ED6\u306E\u8A00\u8A9E\u304C\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"
        }
      ]
    },
    cta: {
      title: "\u30AB\u30B9\u30BF\u30E0\u8CC7\u6599\u30D1\u30C3\u30AF\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F",
      subtitle: "\u7D44\u7E54\u306E\u7A2E\u985E\u3068\u8CFC\u5165\u30CB\u30FC\u30BA\u3092\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044\u3002\u5C02\u7528\u8CC7\u6599\u30D1\u30C3\u30AF\u3092\u3054\u7528\u610F\u3057\u3001\u30B3\u30F3\u30B5\u30EB\u30BF\u30F3\u30C8\u304C\u5BFE\u5FDC\u3044\u305F\u3057\u307E\u3059\u3002",
      button: "\u4ECA\u3059\u3050\u304A\u554F\u3044\u5408\u308F\u305B"
    },
    modal: {
      title: "\u7121\u6599\u8CC7\u6599\u30A2\u30AF\u30BB\u30B9",
      subtitle: "\u4EE5\u4E0B\u306E\u60C5\u5831\u3092\u5165\u529B\u3059\u308B\u3068\u3001PDF\u304C\u81EA\u52D5\u7684\u306B\u30E1\u30FC\u30EB\u3067\u9001\u4FE1\u3055\u308C\u307E\u3059",
      successIcon: "\u2705",
      successMessage: "\u9001\u4FE1\u5B8C\u4E86\uFF0124\u6642\u9593\u4EE5\u5185\u306BPDF\u304C\u30E1\u30FC\u30EB\u3067\u9001\u4FE1\u3055\u308C\u307E\u3059",
      fields: {
        name: "\u304A\u540D\u524D *",
        email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 * (PDF\u9001\u4FE1\u5148)",
        country: "\u56FD/\u5730\u57DF *",
        industry: "\u696D\u754C *"
      },
      countries: [
        "\u4E2D\u56FD\u672C\u571F",
        "\u9999\u6E2F",
        "\u82F1\u56FD",
        "\u7C73\u56FD",
        "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2",
        "\u30C9\u30A4\u30C4",
        "\u65E5\u672C",
        "\u97D3\u56FD",
        "\u305D\u306E\u4ED6"
      ],
      industries: [
        "\u4E57\u99AC\u30AF\u30E9\u30D6/\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC",
        "\u5B66\u6821/\u6559\u80B2\u6A5F\u95A2",
        "\u30EA\u30CF\u30D3\u30EA/\u6CBB\u7642\u30BB\u30F3\u30BF\u30FC",
        "\u7AF6\u99AC/\u9A0E\u624B\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0",
        "\u4F53\u9A13\u65BD\u8A2D/\u89B3\u5149",
        "\u5BB6\u5EAD/\u500B\u4EBA",
        "\u305D\u306E\u4ED6"
      ],
      button: "\uD83D\uDCE7 \u8CC7\u6599\u3092\u30E1\u30FC\u30EB\u3067\u9001\u4FE1",
      privacy: "\u7B2C\u4E09\u8005\u3068\u60C5\u5831\u3092\u5171\u6709\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u300224\u6642\u9593\u4EE5\u5185\u306B\u914D\u4FE1\u3057\u307E\u3059\u3002"
    },
    buttons: {
      getResource: "\u8CC7\u6599\u3092\u5165\u624B \u2192",
      contactUs: "\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044 \u2192"
    }
  },
  ko: {
    hero: {
      title: "\uC790\uB8CC \uB2E4\uC6B4\uB85C\uB4DC \uC13C\uD130",
      subtitle: "\uC81C\uD488 \uB9E4\uB274\uC5BC, \uAE30\uC220 \uC0AC\uC591, \uC778\uC99D \uBB38\uC11C\uB97C \uD55C \uACF3\uC5D0\uC11C \uD655\uBCF4"
    },
    sections: [
      {
        title: "\uC81C\uD488 \uC790\uB8CC",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "\uC81C\uD488 \uB9E4\uB274\uC5BC",
            title: "Horse-MS.30P \uC804\uBB38 \uC885\uD569\uB9C8\uC220 \uC2DC\uBBAE\uB808\uC774\uD130\n\uC644\uC804\uD55C \uC81C\uD488 \uB9E4\uB274\uC5BC",
            desc: "\uC644\uC804\uD55C \uAE30\uC220 \uC0AC\uC591, \uBAA8\uC158 \uD50C\uB7AB\uD3FC \uC0AC\uC591, AI \uD6C8\uB828 \uC2DC\uC2A4\uD15C \uC124\uBA85, \uC124\uCE58 \uC694\uAD6C\uC0AC\uD56D \uBC0F \uC561\uC138\uC11C\uB9AC \uBAA9\uB85D \uD3EC\uD568.",
            meta: ["\uD83D\uDCC4 PDF", "\uC57D 8MB", "\uC911/\uC601 \uC774\uC911\uC5B8\uC5B4"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "\uC81C\uD488 \uB9E4\uB274\uC5BC",
            title: "Pony-MS.30 \uC2A4\uB9C8\uD2B8 \uAD50\uC721 \uC2DC\uBBAE\uB808\uC774\uD130\n\uC644\uC804\uD55C \uC81C\uD488 \uB9E4\uB274\uC5BC",
            desc: "\uAE30\uC220 \uC0AC\uC591, \uAD50\uC721 \uBAA8\uB4DC \uC124\uBA85, \uCEE4\uB9AC\uD058\uB7FC \uAD6C\uC131 \uC194\uB8E8\uC158, \uC720\uC9C0\uBCF4\uC218 \uB9E4\uB274\uC5BC \uBC0F FAQ \uD3EC\uD568.",
            meta: ["\uD83D\uDCC4 PDF", "\uC57D 6MB", "\uC911/\uC601 \uC774\uC911\uC5B8\uC5B4"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "\uC81C\uD488 \uB9E4\uB274\uC5BC",
            title: "Racehorse-MS.20 \uACBD\uB9C8 \uB808\uC774\uC2F1 \uC2DC\uBBAE\uB808\uC774\uD130\n\uC644\uC804\uD55C \uC81C\uD488 \uB9E4\uB274\uC5BC",
            desc: "\uB808\uC774\uC2F1 \uC2DC\uBBAE\uB808\uC774\uC158 \uC2DC\uC2A4\uD15C \uC0AC\uC591, \uAE30\uC218 \uD6C8\uB828 \uBAA8\uB4DC, \uB370\uC774\uD130 \uC218\uC9D1 \uC778\uD130\uD398\uC774\uC2A4 \uBC0F \uD2B8\uB799 \uB808\uBCA8 \uC124\uCE58 \uC194\uB8E8\uC158 \uD3EC\uD568.",
            meta: ["\uD83D\uDCC4 PDF", "\uC57D 5MB", "\uC911/\uC601 \uC774\uC911\uC5B8\uC5B4"],
            action: 'form'
          }
        ]
      },
      {
        title: "\uC778\uC99D \uBC0F \uC790\uACA9",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "\uACF5\uC2DD \uC778\uC99D",
            title: "CE \uC778\uC99D\uC11C",
            desc: "EU CE \uC548\uC804 \uC778\uC99D, \uBAA8\uB4E0 \uC81C\uD488 \uB77C\uC778 \uCEE4\uBC84, \uC720\uB7FD \uC2DC\uC7A5 \uC9C4\uC785 \uAE30\uC900 \uC900\uC218, \uADDC\uC815 \uC900\uC218\uAC00 \uD544\uC694\uD55C \uD559\uAD50 \uBC0F \uC7AC\uD65C \uAE30\uAD00\uC5D0 \uC801\uD569.",
            meta: ["\uD83D\uDCC4 PDF", "\uACF5\uC2DD \uC2A4\uCEE8 \uBCF5\uC0AC\uBCF8"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "\uD30C\uD2B8\uB108\uC2ED \uC99D\uBA85",
            title: "\uD64D\uCF69 \uC870\uD0A4 \uD074\uB7FD (HKJC)\n\uD30C\uD2B8\uB108\uC2ED \uC778\uC99D\uC11C",
            desc: "HKJC \uACF5\uC2DD \uAD6C\uB9E4 \uBC0F \uC0AC\uC6A9 \uC778\uC99D\uC11C, \uAD6C\uB9E4 \uACB0\uC815 \uCC38\uACE0 \uC790\uB8CC\uB85C \uC0AC\uC6A9 \uAC00\uB2A5, \uCD5C\uC0C1\uAE09 \uC804\uBB38 \uAE30\uAD00\uC5D0\uC11C\uC758 \uC2E4\uC81C \uC0AC\uC6A9 \uC785\uC99D.",
            meta: ["\uD83D\uDCC4 PDF", "NDA \uD544\uC694"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "\uAD6D\uC81C \uC778\uC99D",
            title: "RDA \uC7A5\uC560\uC778\uC2B9\uB9C8\uD611\uD68C\n\uC778\uC99D\uC11C",
            desc: "\uC601\uAD6D RDA(Riding for the Disabled Association) \uACF5\uC2DD \uC778\uC99D \uBB38\uC11C, \uC7AC\uD65C \uCE58\uB8CC \uC6A9\uB3C4\uC758 \uC804\uBB38 \uAE30\uC900 \uC900\uC218 \uC785\uC99D.",
            meta: ["\uD83D\uDCC4 PDF", "\uC601\uBB38 \uC6D0\uBCF8"],
            action: 'contact'
          }
        ]
      },
      {
        title: "\uC194\uB8E8\uC158 \uC790\uB8CC",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "\uC194\uB8E8\uC158 \uBB38\uC11C",
            title: "\uC2B9\uB9C8 \uD074\uB7FD & \uD6C8\uB828 \uC13C\uD130\n\uC885\uD569 \uC194\uB8E8\uC158",
            desc: "\uC2DC\uC124 \uACC4\uD68D \uC81C\uC548, \uC7A5\uBE44 \uAD6C\uC131 \uC194\uB8E8\uC158, \uC6B4\uC601 \uBAA8\uB378 \uCC38\uACE0, \uD6C8\uB828 \uCEE4\uB9AC\uD058\uB7FC \uD504\uB808\uC784\uC6CC\uD06C \uBC0F ROI \uACC4\uC0B0 \uD3EC\uD568.",
            meta: ["\uD83D\uDCC4 PDF", "\uC57D 12MB"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "\uC194\uB8E8\uC158 \uBB38\uC11C",
            title: "\uD559\uAD50 & \uAD50\uC721\uAE30\uAD00\n\uC885\uD569 \uC194\uB8E8\uC158",
            desc: "\uCEE4\uB9AC\uD058\uB7FC \uC124\uACC4, \uC218\uC5C5 \uC2DC\uAC04 \uACC4\uD68D, \uC2DC\uC124 \uC694\uAC74, \uC548\uC804 \uADDC\uC815 \uBC0F \uAD50\uC721 \uD3C9\uAC00 \uAE30\uC900 \uD3EC\uD568, K12 \uBC0F \uB300\uD559 \uCCB4\uC721 \uBD80\uC11C\uC5D0 \uC801\uD569.",
            meta: ["\uD83D\uDCC4 PDF", "\uC57D 10MB"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "\uC194\uB8E8\uC158 \uBB38\uC11C",
            title: "\uC7AC\uD65C & \uCE58\uB8CC \uC13C\uD130\n\uC885\uD569 \uC194\uB8E8\uC158",
            desc: "\uB9C8\uC220 \uCE58\uB8CC \uC6D0\uB9AC \uC18C\uAC1C, \uC7A5\uBE44 \uB9E4\uAC1C\uBCC0\uC218\uC640 \uCE58\uB8CC \uD6A8\uACFC \uC0C1\uAD00\uAD00\uACC4, \uCE58\uB8CC \uACC4\uD68D \uD15C\uD50C\uB9BF \uBC0F \uC8FC\uC758\uC0AC\uD56D, \uC0DD\uCCB4\uC5ED\uD559 \uC5F0\uAD6C \uCC38\uACE0 \uD3EC\uD568.",
            meta: ["\uD83D\uDCC4 PDF", "\uC57D 9MB"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",
      items: [
        {
          question: "\uC790\uB8CC \uB2E4\uC6B4\uB85C\uB4DC\uB294 \uC720\uB8CC\uC778\uAC00\uC694?",
          answer: "\uBAA8\uB4E0 \uC81C\uD488 \uB9E4\uB274\uC5BC, \uAE30\uC220 \uC0AC\uC591 \uBC0F CE \uC778\uC99D \uBB38\uC11C\uB294 \uBB34\uB8CC\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC591\uC2DD\uC744 \uC791\uC131\uD558\uBA74 PDF\uAC00 \uC774\uBA54\uC77C\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4."
        },
        {
          question: "\uC0D8\uD50C\uC774\uB098 \uC2E4\uC81C \uB370\uBAA8\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uB098\uC694?",
          answer: "\uC608, \uC628\uB77C\uC778 \uB610\uB294 \uC624\uD504\uB77C\uC778 \uB370\uBAA8\uB97C \uC608\uC57D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBB38\uC758 \uD398\uC774\uC9C0\uB97C \uD1B5\uD574 \uB370\uBAA8 \uC694\uCCAD\uC744 \uC81C\uCD9C\uD558\uBA74 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4."
        },
        {
          question: "\uC790\uB8CC\uB294 \uC5B4\uB5A4 \uC5B8\uC5B4\uB85C \uC81C\uACF5\uB418\uB098\uC694?",
          answer: "\uD604\uC7AC \uC911\uAD6D\uC5B4 \uBC0F \uC601\uC5B4 \uBC84\uC804\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uC5B8\uC5B4\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0 \uBB38\uC758\uD574 \uC8FC\uC138\uC694."
        }
      ]
    },
    cta: {
      title: "\uB9DE\uCDA4\uD615 \uC790\uB8CC \uD328\uD0A4\uC9C0\uAC00 \uD544\uC694\uD558\uC2E0\uAC00\uC694?",
      subtitle: "\uAE30\uAD00 \uC720\uD615\uACFC \uAD6C\uB9E4 \uC694\uAD6C\uC0AC\uD56D\uC744 \uC54C\uB824\uC8FC\uC2DC\uBA74, \uC804\uC6A9 \uC790\uB8CC \uD328\uD0A4\uC9C0\uB97C \uC900\uBE44\uD558\uACE0 \uCEE8\uC124\uD134\uD2B8\uAC00 \uD6C4\uC18D \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4",
      button: "\uC9C0\uAE08 \uBB38\uC758\uD558\uAE30"
    },
    modal: {
      title: "\uBB34\uB8CC \uC790\uB8CC \uC561\uC138\uC2A4",
      subtitle: "\uC544\uB798 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uBA74 PDF\uAC00 \uC790\uB3D9\uC73C\uB85C \uC774\uBA54\uC77C\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4",
      successIcon: "\u2705",
      successMessage: "\uC81C\uCD9C \uC644\uB8CC! 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 PDF\uAC00 \uC774\uBA54\uC77C\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4",
      fields: {
        name: "\uC131\uD568 *",
        email: "\uC774\uBA54\uC77C \uC8FC\uC18C * (PDF \uC804\uC1A1 \uB300\uC0C1)",
        country: "\uAD6D\uAC00/\uC9C0\uC5ED *",
        industry: "\uC5C5\uC885 *"
      },
      countries: [
        "\uC911\uAD6D \uBCF8\uD1A0",
        "\uD64D\uCF69",
        "\uC601\uAD6D",
        "\uBBF8\uAD6D",
        "\uD638\uC8FC",
        "\uB3C5\uC77C",
        "\uC77C\uBCF8",
        "\uD55C\uAD6D",
        "\uAE30\uD0C0"
      ],
      industries: [
        "\uC2B9\uB9C8 \uD074\uB7FD/\uD6C8\uB828 \uC13C\uD130",
        "\uD559\uAD50/\uAD50\uC721\uAE30\uAD00",
        "\uC7AC\uD65C/\uCE58\uB8CC \uC13C\uD130",
        "\uACBD\uB9C8/\uAE30\uC218 \uD6C8\uB828",
        "\uCCB4\uD5D8 \uC2DC\uC124/\uAD00\uAD11",
        "\uAC00\uC815/\uAC1C\uC778",
        "\uAE30\uD0C0"
      ],
      button: "\uD83D\uDCE7 \uC774\uBA54\uC77C\uB85C \uC790\uB8CC \uBC1B\uAE30",
      privacy: "\uC81C3\uC790\uC640 \uC815\uBCF4\uB97C \uACF5\uC720\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. 24\uC2DC\uAC04 \uC774\uB0B4 \uBC30\uC1A1 \uBCF4\uC99D."
    },
    buttons: {
      getResource: "\uC790\uB8CC \uBC1B\uAE30 \u2192",
      contactUs: "\uBB38\uC758\uD558\uC5EC \uC694\uCCAD\uD558\uAE30 \u2192"
    }
  },
  ar: {
    hero: {
      title: "\u0645\u0631\u0643\u0632 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0648\u0627\u0631\u062F",
      subtitle: "\u0623\u062F\u0644\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u0648\u0634\u0647\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F - \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F"
    },
    sections: [
      {
        title: "\u0645\u0648\u0627\u062F \u0627\u0644\u0645\u0646\u062A\u062C",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C",
            title: "Horse-MS.30P \u062C\u0647\u0627\u0632 \u0645\u062D\u0627\u0643\u0627\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064A\u0629 \u0627\u0644\u0645\u062D\u062A\u0631\u0641\n\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0643\u0627\u0645\u0644",
            desc: "\u064A\u062A\u0636\u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0648\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0645\u0646\u0635\u0629 \u0627\u0644\u062D\u0631\u0643\u0629 \u0648\u0648\u0635\u0641 \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0644\u062D\u0642\u0627\u062A.",
            meta: ["\uD83D\uDCC4 PDF", "~8 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A", "\u0635\u064A\u0646\u064A/\u0625\u0646\u062C\u0644\u064A\u0632\u064A"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C",
            title: "Pony-MS.30 \u062C\u0647\u0627\u0632 \u0645\u062D\u0627\u0643\u0627\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0630\u0643\u064A\n\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0643\u0627\u0645\u0644",
            desc: "\u064A\u062A\u0636\u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u0648\u0648\u0635\u0641 \u0648\u0636\u0639 \u0627\u0644\u062A\u062F\u0631\u064A\u0633 \u0648\u062D\u0644\u0648\u0644 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0645\u0646\u0627\u0647\u062C \u0648\u062F\u0644\u064A\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629.",
            meta: ["\uD83D\uDCC4 PDF", "~6 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A", "\u0635\u064A\u0646\u064A/\u0625\u0646\u062C\u0644\u064A\u0632\u064A"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C",
            title: "Racehorse-MS.20 \u062C\u0647\u0627\u0632 \u0645\u062D\u0627\u0643\u0627\u0629 \u0633\u0628\u0627\u0642 \u0627\u0644\u062E\u064A\u0648\u0644\n\u062F\u0644\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0643\u0627\u0645\u0644",
            desc: "\u064A\u062A\u0636\u0645\u0646 \u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0646\u0638\u0627\u0645 \u0645\u062D\u0627\u0643\u0627\u0629 \u0627\u0644\u0633\u0628\u0627\u0642 \u0648\u0623\u0648\u0636\u0627\u0639 \u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0641\u0631\u0633\u0627\u0646 \u0648\u0648\u0627\u062C\u0647\u0627\u062A \u062C\u0645\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u062D\u0644\u0648\u0644 \u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062D\u0644\u0628\u0629.",
            meta: ["\uD83D\uDCC4 PDF", "~5 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A", "\u0635\u064A\u0646\u064A/\u0625\u0646\u062C\u0644\u064A\u0632\u064A"],
            action: 'form'
          }
        ]
      },
      {
        title: "\u0627\u0644\u0634\u0647\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "\u0627\u0639\u062A\u0645\u0627\u062F \u0631\u0633\u0645\u064A",
            title: "\u0634\u0647\u0627\u062F\u0629 CE",
            desc: "\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0633\u0644\u0627\u0645\u0629 CE \u0644\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A\u060C \u064A\u063A\u0637\u064A \u062C\u0645\u064A\u0639 \u062E\u0637\u0648\u0637 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0645\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A\u0629\u060C \u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u0645\u062F\u0627\u0631\u0633 \u0648\u0645\u0631\u0627\u0643\u0632 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0645\u0639 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644.",
            meta: ["\uD83D\uDCC4 PDF", "\u0646\u0633\u062E\u0629 \u0645\u0645\u0633\u0648\u062D\u0629 \u0631\u0633\u0645\u064A\u0629"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0643\u0629",
            title: "\u0646\u0627\u062F\u064A \u0647\u0648\u0646\u062C \u0643\u0648\u0646\u062C \u0644\u0644\u062C\u0648\u0643\u064A (HKJC)\n\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0634\u0631\u0627\u0643\u0629",
            desc: "\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0645\u0646 HKJC\u060C \u064A\u0645\u0643\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0643\u0645\u0631\u062C\u0639 \u0644\u0642\u0631\u0627\u0631 \u0627\u0644\u0634\u0631\u0627\u0621\u060C \u062A\u062B\u0628\u062A \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0641\u0639\u0644\u064A \u0641\u064A \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0645\u062D\u062A\u0631\u0641\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629.",
            meta: ["\uD83D\uDCC4 PDF", "\u0645\u0637\u0644\u0648\u0628 \u0627\u062A\u0641\u0627\u0642\u064A\u0629 \u0639\u062F\u0645 \u0625\u0641\u0634\u0627\u0621"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "\u0627\u0639\u062A\u0645\u0627\u062F \u062F\u0648\u0644\u064A",
            title: "\u062C\u0645\u0639\u064A\u0629 RDA \u0644\u0644\u0641\u0631\u0648\u0633\u064A\u0629 \u0644\u0644\u0645\u0639\u0627\u0642\u064A\u0646\n\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F",
            desc: "\u0648\u062B\u064A\u0642\u0629 \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0645\u0646 RDA \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A\u0629 (Riding for the Disabled Association)\u060C \u062A\u062B\u0628\u062A \u0627\u0645\u062A\u062B\u0627\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0644\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0644\u0644\u0639\u0644\u0627\u062C \u0628\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644.",
            meta: ["\uD83D\uDCC4 PDF", "\u0627\u0644\u0623\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629"],
            action: 'contact'
          }
        ]
      },
      {
        title: "\u0645\u0648\u0627\u062F \u0627\u0644\u062D\u0644\u0648\u0644",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "\u0645\u0633\u062A\u0646\u062F \u0627\u0644\u062D\u0644",
            title: "\u0646\u0648\u0627\u062F\u064A \u0627\u0644\u0641\u0631\u0648\u0633\u064A\u0629 \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\n\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644",
            desc: "\u064A\u062A\u0636\u0645\u0646 \u062A\u0648\u0635\u064A\u0627\u062A \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0643\u0627\u0646 \u0648\u062D\u0644\u0648\u0644 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0645\u0631\u0627\u062C\u0639 \u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u0625\u0637\u0627\u0631 \u0645\u0646\u0647\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0648\u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0627\u0626\u062F \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631.",
            meta: ["\uD83D\uDCC4 PDF", "~12 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "\u0645\u0633\u062A\u0646\u062F \u0627\u0644\u062D\u0644",
            title: "\u0627\u0644\u0645\u062F\u0627\u0631\u0633 \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629\n\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644",
            desc: "\u064A\u062A\u0636\u0645\u0646 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0646\u0647\u062C \u0648\u062A\u062E\u0637\u064A\u0637 \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u062D\u0635\u0635 \u0648\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0643\u0627\u0646 \u0648\u0644\u0648\u0627\u0626\u062D \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u060C \u0645\u0646\u0627\u0633\u0628 \u0644\u0645\u062F\u0627\u0631\u0633 K12 \u0648\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0628\u0627\u0644\u062C\u0627\u0645\u0639\u0627\u062A.",
            meta: ["\uD83D\uDCC4 PDF", "~10 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "\u0645\u0633\u062A\u0646\u062F \u0627\u0644\u062D\u0644",
            title: "\u0645\u0631\u0627\u0643\u0632 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0648\u0627\u0644\u0639\u0644\u0627\u062C\n\u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644",
            desc: "\u064A\u062A\u0636\u0645\u0646 \u0645\u0642\u062F\u0645\u0629 \u0645\u0628\u0627\u062F\u0626 \u0627\u0644\u0639\u0644\u0627\u062C \u0628\u0627\u0644\u0641\u0631\u0648\u0633\u064A\u0629 \u0648\u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u064A\u0646 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0641\u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0639\u0644\u0627\u062C \u0648\u0642\u0648\u0627\u0644\u0628 \u062E\u0637\u0629 \u0627\u0644\u0639\u0644\u0627\u062C \u0648\u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u0627\u062A\u060C \u0645\u0639 \u0645\u0631\u0627\u062C\u0639 \u0623\u0628\u062D\u0627\u062B \u0627\u0644\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u0627 \u0627\u0644\u062D\u064A\u0648\u064A\u0629.",
            meta: ["\uD83D\uDCC4 PDF", "~9 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
      items: [
        {
          question: "\u0647\u0644 \u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0645\u0648\u0627\u062F \u0645\u062C\u0627\u0646\u064A\u061F",
          answer: "\u062C\u0645\u064A\u0639 \u0623\u062F\u0644\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u0648\u0648\u062B\u0627\u0626\u0642 \u0627\u0639\u062A\u0645\u0627\u062F CE \u0645\u062A\u0627\u062D\u0629 \u0645\u062C\u0627\u0646\u064B\u0627. \u0628\u0639\u062F \u0645\u0644\u0621 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u060C \u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0641 PDF \u0625\u0644\u0649 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u062F\u0648\u0646 \u062A\u0643\u0644\u0641\u0629."
        },
        {
          question: "\u0647\u0644 \u064A\u0645\u0643\u0646\u0646\u064A \u0637\u0644\u0628 \u0639\u064A\u0646\u0629 \u0623\u0648 \u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u062D\u064A\u061F",
          answer: "\u0646\u0639\u0645\u060C \u064A\u0645\u0643\u0646\u0643 \u062C\u062F\u0648\u0644\u0629 \u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0623\u0648 \u062D\u0636\u0648\u0631\u064A. \u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A \u0639\u0628\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u060C \u0648\u0633\u0646\u0642\u0648\u0645 \u0628\u062A\u0631\u062A\u064A\u0628\u0647 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629."
        },
        {
          question: "\u0645\u0627 \u0647\u064A \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u0645\u0648\u0627\u062F\u061F",
          answer: "\u062D\u0627\u0644\u064A\u064B\u0627 \u0645\u062A\u0648\u0641\u0631 \u0628\u0627\u0644\u0646\u0633\u062E\u062A\u064A\u0646 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0648\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0646\u0627 \u0625\u0630\u0627 \u0643\u0646\u062A \u0628\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u0645\u0648\u0627\u062F \u0628\u0644\u063A\u0627\u062A \u0623\u062E\u0631\u0649."
        }
      ]
    },
    cta: {
      title: "\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062D\u0632\u0645\u0629 \u0645\u0648\u0627\u0631\u062F \u0645\u062E\u0635\u0635\u0629\u061F",
      subtitle: "\u0623\u062E\u0628\u0631\u0646\u0627 \u0628\u0646\u0648\u0639 \u0645\u0624\u0633\u0633\u062A\u0643 \u0648\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643 \u0644\u0644\u0634\u0631\u0627\u0621\u060C \u0648\u0633\u0646\u0642\u0648\u0645 \u0628\u0625\u0639\u062F\u0627\u062F \u062D\u0632\u0645\u0629 \u0645\u0648\u0627\u0631\u062F \u0645\u062E\u0635\u0635\u0629 \u0648\u062A\u062E\u0635\u064A\u0635 \u0645\u0633\u062A\u0634\u0627\u0631 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629",
      button: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0627\u0644\u0622\u0646"
    },
    modal: {
      title: "\u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A \u0644\u0644\u0645\u0648\u0627\u0631\u062F",
      subtitle: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0623\u062F\u0646\u0627\u0647 \u0648\u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0641 PDF \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0625\u0644\u0649 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      successIcon: "\u2705",
      successMessage: "\u062A\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644! \u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0641 PDF \u0625\u0644\u0649 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629",
      fields: {
        name: "\u0627\u0633\u0645\u0643 *",
        email: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A * (\u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 PDF \u0625\u0644\u064A\u0647)",
        country: "\u0627\u0644\u0628\u0644\u062F/\u0627\u0644\u0645\u0646\u0637\u0642\u0629 *",
        industry: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629 *"
      },
      countries: [
        "\u0627\u0644\u0635\u064A\u0646 \u0627\u0644\u0642\u0627\u0631\u064A\u0629",
        "\u0647\u0648\u0646\u062C \u0643\u0648\u0646\u062C",
        "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629",
        "\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629",
        "\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627",
        "\u0623\u0644\u0645\u0627\u0646\u064A\u0627",
        "\u0627\u0644\u064A\u0627\u0628\u0627\u0646",
        "\u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629",
        "\u0623\u062E\u0631\u0649"
      ],
      industries: [
        "\u0646\u0627\u062F\u064A \u0641\u0631\u0648\u0633\u064A\u0629 / \u0645\u0631\u0643\u0632 \u062A\u062F\u0631\u064A\u0628",
        "\u0645\u062F\u0631\u0633\u0629 / \u0645\u0624\u0633\u0633\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629",
        "\u0645\u0631\u0643\u0632 \u0625\u0639\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 / \u0639\u0644\u0627\u062C",
        "\u0633\u0628\u0627\u0642 \u062E\u064A\u0644 / \u062A\u062F\u0631\u064A\u0628 \u0641\u0631\u0633\u0627\u0646",
        "\u0645\u0643\u0627\u0646 \u062A\u062C\u0631\u0628\u0629 / \u0633\u064A\u0627\u062D\u0629",
        "\u0645\u0646\u0632\u0644 / \u0641\u0631\u062F\u064A",
        "\u0623\u062E\u0631\u0649"
      ],
      button: "\uD83D\uDCE7 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0645\u0648\u0627\u062F \u0625\u0644\u0649 \u0628\u0631\u064A\u062F\u064A \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      privacy: "\u0644\u0646 \u0646\u0634\u0627\u0631\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643 \u0645\u0639 \u0623\u0637\u0631\u0627\u0641 \u062B\u0627\u0644\u062B\u0629. \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0645\u0636\u0645\u0648\u0646 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629."
    },
    buttons: {
      getResource: "\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0627\u062F \u2190",
      contactUs: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0644\u0644\u0637\u0644\u0628 \u2190"
    }
  },
  de: {
    hero: {
      title: "Ressourcen-Download-Center",
      subtitle: "Produkthandb\u00FCcher, technische Spezifikationen, Zertifizierungen - alle Ressourcen an einem Ort"
    },
    sections: [
      {
        title: "Produktmaterialien",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "Produkthandbuch",
            title: "Horse-MS.30P Professioneller Vielseitigkeits-Simulator\nVollst\u00E4ndiges Produkthandbuch",
            desc: "Enth\u00E4lt vollst\u00E4ndige technische Parameter, Motion-Plattform-Spezifikationen, AI-Trainingssystem-Beschreibung, Installationsanforderungen und Zubeh\u00F6rliste.",
            meta: ["\uD83D\uDCC4 PDF", "~8MB", "CN/EN Zweisprachig"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "Produkthandbuch",
            title: "Pony-MS.30 Smart Training Simulator\nVollst\u00E4ndiges Produkthandbuch",
            desc: "Enth\u00E4lt technische Parameter, Beschreibung des Unterrichtsmodus, Curriculum-Konfigurationsl\u00F6sungen, Wartungshandbuch und FAQs.",
            meta: ["\uD83D\uDCC4 PDF", "~6MB", "CN/EN Zweisprachig"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "Produkthandbuch",
            title: "Racehorse-MS.20 Rennsimulator\nVollst\u00E4ndiges Produkthandbuch",
            desc: "Enth\u00E4lt Spezifikationen des Rennsimulationssystems, Jockey-Trainingsmodi, Datenerfassungsschnittstellen und Rennbahn-Installationsl\u00F6sungen.",
            meta: ["\uD83D\uDCC4 PDF", "~5MB", "CN/EN Zweisprachig"],
            action: 'form'
          }
        ]
      },
      {
        title: "Zertifizierungen & Qualifikationen",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "Offizielle Zertifizierung",
            title: "CE-Zertifizierung",
            desc: "EU CE-Sicherheitszertifizierung, deckt alle Produktlinien ab, entspricht europ\u00E4ischen Marktzugangsstandards, geeignet f\u00FCr Schulen und Rehabilitationseinrichtungen mit Compliance-Anforderungen.",
            meta: ["\uD83D\uDCC4 PDF", "Offizielle gescannte Kopie"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "Partnerschaftsnachweis",
            title: "Hong Kong Jockey Club (HKJC)\nPartnerschaftszertifikat",
            desc: "Offizielle Beschaffungs- und Nutzungsbescheinigung von HKJC, kann als Referenz f\u00FCr Beschaffungsentscheidungen verwendet werden, beweist die Produktnutzung in Top-Profieinrichtungen.",
            meta: ["\uD83D\uDCC4 PDF", "NDA erforderlich"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "Internationale Zertifizierung",
            title: "RDA (Riding for the Disabled)\nAkkreditierungszertifikat",
            desc: "Offizielle Akkreditierung der UK RDA (Riding for the Disabled Association), bescheinigt die Einhaltung professioneller Standards f\u00FCr die Rehabilitationstherapie.",
            meta: ["\uD83D\uDCC4 PDF", "Englisches Original"],
            action: 'contact'
          }
        ]
      },
      {
        title: "L\u00F6sungsmaterialien",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "L\u00F6sungsdokument",
            title: "Reitclubs & Trainingszentren\nVollst\u00E4ndige L\u00F6sung",
            desc: "Enth\u00E4lt Standortplanungsempfehlungen, Ger\u00E4tekonfigurationsl\u00F6sungen, Betriebsmodellreferenzen, Schulungscurriculumrahmen und ROI-Berechnungen.",
            meta: ["\uD83D\uDCC4 PDF", "~12MB"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "L\u00F6sungsdokument",
            title: "Schulen & Bildungseinrichtungen\nVollst\u00E4ndige L\u00F6sung",
            desc: "Enth\u00E4lt Lehrplangestaltung, Stundenplanung, Standortanforderungen, Sicherheitsvorschriften und Lehrbewertungsstandards, geeignet f\u00FCr K12- und universit\u00E4re Sportabteilungen.",
            meta: ["\uD83D\uDCC4 PDF", "~10MB"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "L\u00F6sungsdokument",
            title: "Rehabilitations- & Therapiezentren\nVollst\u00E4ndige L\u00F6sung",
            desc: "Enth\u00E4lt Einf\u00FChrung in Hippotherapie-Prinzipien, Korrelation zwischen Ger\u00E4teparametern und Wirksamkeit, Behandlungsplanvorlagen und Vorsichtsma\u00DFnahmen, mit biomechanischen Forschungsreferenzen.",
            meta: ["\uD83D\uDCC4 PDF", "~9MB"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "H\u00E4ufig gestellte Fragen",
      items: [
        {
          question: "Ist das Herunterladen von Materialien kostenpflichtig?",
          answer: "Alle Produkthandb\u00FCcher, technischen Spezifikationen und CE-Zertifizierungsdokumente werden kostenlos zur Verf\u00FCgung gestellt. Nach dem Ausf\u00FCllen des Formulars wird das PDF kostenlos an Ihre E-Mail gesendet."
        },
        {
          question: "Kann ich eine Probe oder Live-Demonstration anfordern?",
          answer: "Ja, Sie k\u00F6nnen eine Online- oder Offline-Demonstration vereinbaren. Bitte reichen Sie eine Demo-Anfrage \u00FCber die Kontaktseite ein, und wir werden sie innerhalb von 24 Stunden arrangieren."
        },
        {
          question: "In welchen Sprachen sind die Materialien verf\u00FCgbar?",
          answer: "Derzeit in chinesischer und englischer Version verf\u00FCgbar. Bitte kontaktieren Sie uns, wenn Sie Materialien in anderen Sprachen ben\u00F6tigen."
        }
      ]
    },
    cta: {
      title: "Ben\u00F6tigen Sie ein individuelles Ressourcenpaket?",
      subtitle: "Teilen Sie uns Ihren Institutionstyp und Ihre Beschaffungsanforderungen mit, und wir bereiten ein dediziertes Ressourcenpaket vor und weisen einen Berater zur Nachverfolgung zu",
      button: "Jetzt kontaktieren"
    },
    modal: {
      title: "Kostenloser Ressourcenzugang",
      subtitle: "F\u00FCllen Sie die folgenden Informationen aus und das PDF wird automatisch an Ihre E-Mail gesendet",
      successIcon: "\u2705",
      successMessage: "\u00DCbermittelt! PDF wird innerhalb von 24 Stunden an Ihre E-Mail gesendet",
      fields: {
        name: "Ihr Name *",
        email: "E-Mail-Adresse * (PDF wird hierher gesendet)",
        country: "Land/Region *",
        industry: "Branche *"
      },
      countries: [
        "Festlandchina",
        "Hongkong, China",
        "Vereinigtes K\u00F6nigreich",
        "Vereinigte Staaten",
        "Australien",
        "Deutschland",
        "Japan",
        "S\u00FCdkorea",
        "Andere"
      ],
      industries: [
        "Reitclub / Trainingszentrum",
        "Schule / Bildungseinrichtung",
        "Rehabilitation / Therapiezentrum",
        "Rennsport / Jockey-Training",
        "Erlebnisst\u00E4tte / Tourismus",
        "Zuhause / Einzelperson",
        "Andere"
      ],
      button: "\uD83D\uDCE7 Materialien an meine E-Mail senden",
      privacy: "Wir werden Ihre Informationen nicht an Dritte weitergeben. Lieferung innerhalb von 24 Stunden garantiert."
    },
    buttons: {
      getResource: "Materialien erhalten \u2192",
      contactUs: "Kontaktieren Sie uns zur Anfrage \u2192"
    }
  },
  es: {
    hero: {
      title: "Centro de Descarga de Recursos",
      subtitle: "Manuales de productos, especificaciones t\u00E9cnicas, certificaciones - todos los recursos en un solo lugar"
    },
    sections: [
      {
        title: "Materiales del Producto",
        items: [
          {
            icon: "\uD83D\uDCD8",
            type: "Manual del Producto",
            title: "Horse-MS.30P Simulador Profesional de Concurso Completo\nManual Completo del Producto",
            desc: "Incluye par\u00E1metros t\u00E9cnicos completos, especificaciones de la plataforma de movimiento, descripci\u00F3n del sistema de entrenamiento con IA, requisitos de instalaci\u00F3n y lista de accesorios.",
            meta: ["\uD83D\uDCC4 PDF", "~8MB", "CN/EN Biling\u00FCe"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD7",
            type: "Manual del Producto",
            title: "Pony-MS.30 Simulador de Entrenamiento Inteligente\nManual Completo del Producto",
            desc: "Incluye par\u00E1metros t\u00E9cnicos, descripci\u00F3n del modo de ense\u00F1anza, soluciones de configuraci\u00F3n curricular, manual de mantenimiento y preguntas frecuentes.",
            meta: ["\uD83D\uDCC4 PDF", "~6MB", "CN/EN Biling\u00FCe"],
            action: 'form'
          },
          {
            icon: "\uD83D\uDCD9",
            type: "Manual del Producto",
            title: "Racehorse-MS.20 Simulador de Carreras\nManual Completo del Producto",
            desc: "Incluye especificaciones del sistema de simulaci\u00F3n de carreras, modos de entrenamiento de jinetes, interfaces de recolecci\u00F3n de datos y soluciones de instalaci\u00F3n a nivel de hip\u00F3dromo.",
            meta: ["\uD83D\uDCC4 PDF", "~5MB", "CN/EN Biling\u00FCe"],
            action: 'form'
          }
        ]
      },
      {
        title: "Certificaciones y Credenciales",
        items: [
          {
            icon: "\uD83C\uDFC5",
            type: "Certificaci\u00F3n Oficial",
            title: "Certificaci\u00F3n CE",
            desc: "Certificaci\u00F3n de seguridad CE de la UE, cubre todas las l\u00EDneas de productos, cumple con los est\u00E1ndares de acceso al mercado europeo, adecuado para escuelas e instituciones de rehabilitaci\u00F3n con requisitos de cumplimiento.",
            meta: ["\uD83D\uDCC4 PDF", "Copia escaneada oficial"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDD1D",
            type: "Prueba de Asociaci\u00F3n",
            title: "Hong Kong Jockey Club (HKJC)\nCertificado de Asociaci\u00F3n",
            desc: "Certificado oficial de adquisici\u00F3n y uso de HKJC, puede utilizarse como referencia para decisiones de adquisici\u00F3n, demuestra el uso del producto en instituciones profesionales de primer nivel.",
            meta: ["\uD83D\uDCC4 PDF", "NDA requerido"],
            action: 'contact'
          },
          {
            icon: "\u267F",
            type: "Certificaci\u00F3n Internacional",
            title: "RDA (Riding for the Disabled)\nCertificado de Acreditaci\u00F3n",
            desc: "Acreditaci\u00F3n oficial de RDA del Reino Unido (Riding for the Disabled Association), certifica el cumplimiento del producto con est\u00E1ndares profesionales para terapia de rehabilitaci\u00F3n.",
            meta: ["\uD83D\uDCC4 PDF", "Original en ingl\u00E9s"],
            action: 'contact'
          }
        ]
      },
      {
        title: "Materiales de Soluciones",
        items: [
          {
            icon: "\uD83C\uDFC7",
            type: "Documento de Soluci\u00F3n",
            title: "Clubes de Equitaci\u00F3n y Centros de Entrenamiento\nSoluci\u00F3n Completa",
            desc: "Incluye recomendaciones de planificaci\u00F3n de instalaciones, soluciones de configuraci\u00F3n de equipos, referencias de modelos operativos, marco curricular de entrenamiento y c\u00E1lculos de ROI.",
            meta: ["\uD83D\uDCC4 PDF", "~12MB"],
            action: 'contact'
          },
          {
            icon: "\uD83C\uDFEB",
            type: "Documento de Soluci\u00F3n",
            title: "Escuelas e Instituciones Educativas\nSoluci\u00F3n Completa",
            desc: "Incluye dise\u00F1o curricular, planificaci\u00F3n de horas de clase, requisitos de instalaciones, regulaciones de seguridad y est\u00E1ndares de evaluaci\u00F3n did\u00E1ctica, adecuado para departamentos de deportes de K12 y universidades.",
            meta: ["\uD83D\uDCC4 PDF", "~10MB"],
            action: 'contact'
          },
          {
            icon: "\uD83E\uDE7A",
            type: "Documento de Soluci\u00F3n",
            title: "Centros de Rehabilitaci\u00F3n y Terapia\nSoluci\u00F3n Completa",
            desc: "Incluye introducci\u00F3n a los principios de hipoterapia, correlaci\u00F3n entre par\u00E1metros del equipo y eficacia, plantillas de planes de tratamiento y precauciones, con referencias de investigaci\u00F3n biomec\u00E1nica.",
            meta: ["\uD83D\uDCC4 PDF", "~9MB"],
            action: 'contact'
          }
        ]
      }
    ],
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "\u00BFHay un cargo por descargar materiales?",
          answer: "Todos los manuales de productos, especificaciones t\u00E9cnicas y documentos de certificaci\u00F3n CE se proporcionan de forma gratuita. Despu\u00E9s de completar el formulario, el PDF se enviar\u00E1 a su correo electr\u00F3nico sin costo alguno."
        },
        {
          question: "\u00BFPuedo solicitar una muestra o demostraci\u00F3n en vivo?",
          answer: "S\u00ED, puede programar una demostraci\u00F3n en l\u00EDnea o presencial. Por favor, env\u00EDe una solicitud de demostraci\u00F3n a trav\u00E9s de la p\u00E1gina de contacto, y la organizaremos dentro de 24 horas."
        },
        {
          question: "\u00BFEn qu\u00E9 idiomas est\u00E1n disponibles los materiales?",
          answer: "Actualmente disponible en versiones en chino e ingl\u00E9s. Por favor, cont\u00E1ctenos si necesita materiales en otros idiomas."
        }
      ]
    },
    cta: {
      title: "\u00BFNecesita un Paquete de Recursos Personalizado?",
      subtitle: "Dinos el tipo de instituci\u00F3n y tus necesidades de adquisici\u00F3n, y prepararemos un paquete de recursos dedicado y asignaremos un consultor para el seguimiento",
      button: "Cont\u00E1ctanos Ahora"
    },
    modal: {
      title: "Acceso Gratuito a Recursos",
      subtitle: "Complete la informaci\u00F3n a continuaci\u00F3n y el PDF se enviar\u00E1 autom\u00E1ticamente a su correo electr\u00F3nico",
      successIcon: "\u2705",
      successMessage: "\u00A1Enviado! El PDF se enviar\u00E1 a su correo electr\u00F3nico dentro de 24 horas",
      fields: {
        name: "Su Nombre *",
        email: "Direcci\u00F3n de Correo Electr\u00F3nico * (el PDF se enviar\u00E1 aqu\u00ED)",
        country: "Pa\u00EDs/Regi\u00F3n *",
        industry: "Industria *"
      },
      countries: [
        "China Continental",
        "Hong Kong, China",
        "Reino Unido",
        "Estados Unidos",
        "Australia",
        "Alemania",
        "Jap\u00F3n",
        "Corea del Sur",
        "Otro"
      ],
      industries: [
        "Club de Equitaci\u00F3n / Centro de Entrenamiento",
        "Escuela / Instituci\u00F3n Educativa",
        "Rehabilitaci\u00F3n / Centro de Terapia",
        "Carreras / Entrenamiento de Jinetes",
        "Lugar de Experiencia / Turismo",
        "Hogar / Individual",
        "Otro"
      ],
      button: "\uD83D\uDCE7 Enviar Materiales a Mi Correo",
      privacy: "No compartiremos su informaci\u00F3n con terceros. Entrega garantizada dentro de 24 horas."
    },
    buttons: {
      getResource: "Obtener Materiales \u2192",
      contactUs: "Cont\u00E1ctenos para Solicitar \u2192"
    }
  }
};

export default function DownloadsPage() {
  const locale = useLocale() as LocaleKey;
  const t = i18n[locale] ?? i18n.en;
  const isRTL = locale === 'ar';

  const [modal, setModal] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          country,
          industry,
          resource: modal,
          locale,
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setModal(null);
          setSubmitted(false);
          setName('');
          setEmail('');
          setCountry('');
          setIndustry('');
        }, 2800);
      } else {
        alert('提交失败，请稍后再试');
      }
    } catch (error) {
      console.error('提交错误:', error);
      alert('提交失败，请检查网络连接');
    }
  };

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} style={{ paddingTop: '0', background: '#FAF8F5', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "name": t.hero.title, "description": t.hero.subtitle, "url": "https://www.equestrian-simulators.com/downloads", "provider": { "@type": "Organization", "name": "\u5E7F\u4E1C\u63A2\u6708\u6559\u80B2\u8BBE\u5907\u6709\u9650\u516C\u53F8", "alternateName": "\u6A21\u62DF\u9A6C\u00AE" } }) }} />
      
      {/* Hero */}
      <div style={{ padding: '140px 40px 60px', textAlign: 'center', background: '#F5F0E8', borderBottom: '1px solid #E0D8C8' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#0A1E3F', marginBottom: '8px', letterSpacing: '-0.5px' }}>{t.hero.title}</h1>
        <p style={{ fontSize: '16px', color: '#5A6478', maxWidth: '500px', margin: '0 auto' }}>{t.hero.subtitle}</p>
      </div>

      {/* Resource Cards */}
      {t.sections.map((group: any, gi: number) => (
        <div key={gi}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: gi === 0 ? '60px 40px 0' : '0 40px' }}>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#0A1E3F', textAlign: 'center', marginBottom: '32px', letterSpacing: '-0.3px' }}>{group.title}</div>
          </div>
          <div id={`downloads-grid-${gi}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', maxWidth: '1100px', margin: '0 auto', padding: gi === 0 ? '0 40px 80px' : '0 40px 80px' }}>
            {group.items.map((item: any, ii: number) => (
              <div key={ii} style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E0D8C8', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,18,16,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#C9A84C' }} />
                <div style={{ fontSize: '36px' }}>{item.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C' }}>{item.type}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0A1E3F', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#5A6478', lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', color: '#8A94A8', flexWrap: 'wrap' }}>
                  {item.meta.map((m: string, mi: number) => <span key={mi}>{m}</span>)}
                </div>
                {item.action === 'form' ? (
                  <button onClick={() => setModal(item.title.replace('\n', ' '))}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0A1E3F', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                    {t.buttons.getResource}
                  </button>
                ) : (
                  <Link href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0A1E3F', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                    {t.buttons.contactUs}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0A1E3F', textAlign: 'center', marginBottom: '40px' }}>{t.faq.title}</h2>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": t.faq.items.map((item: any) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
          }) }} />
          {t.faq.items.map((item: any, index: number) => (
            <details key={index} style={{ borderBottom: '1px solid #E8E4DC', padding: '20px 0' }}>
              <summary style={{ fontSize: '15px', fontWeight: 600, color: '#0A1E3F', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                {item.question}
                <span style={{ color: '#C9A84C', fontSize: '20px', marginLeft: '12px' }}>+</span>
              </summary>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.7, marginTop: '16px' }}>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: '#0A1E3F', color: '#fff', textAlign: 'center', padding: '60px 40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>{t.cta.title}</h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{t.cta.subtitle}</p>
        <Link href="/contact" style={{ display: 'inline-block', padding: '14px 32px', background: '#C9A84C', color: '#fff', borderRadius: '8px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>{t.cta.button}</Link>
      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(10,18,35,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: '20px', padding: '44px 40px', maxWidth: '480px', width: '90%', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', fontSize: '22px', color: '#aaa', cursor: 'pointer' }}>×</button>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#C9A84C', marginBottom: '8px' }}>{t.modal.title}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0A1E3F', marginBottom: '6px' }}>{modal}</h3>
            <p style={{ fontSize: '13px', color: '#5A6478', marginBottom: '24px' }}>{t.modal.subtitle}</p>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{t.modal.successIcon}</div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#2E7D32' }}>{t.modal.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input type="text" placeholder={t.modal.fields.name} required value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '12px 16px', border: '1px solid #E0D8C8', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                <input type="email" placeholder={t.modal.fields.email} required value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '12px 16px', border: '1px solid #E0D8C8', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                <select required value={country} onChange={(e) => setCountry(e.target.value)} style={{ padding: '12px 16px', border: '1px solid #E0D8C8', borderRadius: '8px', fontSize: '14px', color: '#5A6478', outline: 'none', background: '#fff' }}>
                  <option value="">{t.modal.fields.country}</option>
                  {t.modal.countries.map((c: string, i: number) => <option key={i} value={c}>{c}</option>)}
                </select>
                <select required value={industry} onChange={(e) => setIndustry(e.target.value)} style={{ padding: '12px 16px', border: '1px solid #E0D8C8', borderRadius: '8px', fontSize: '14px', color: '#5A6478', outline: 'none', background: '#fff' }}>
                  <option value="">{t.modal.fields.industry}</option>
                  {t.modal.industries.map((ind: string, i: number) => <option key={i} value={ind}>{ind}</option>)}
                </select>
                <button type="submit" style={{ padding: '14px', fontSize: '15px', fontWeight: 700, background: '#C9A84C', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>{t.modal.button}</button>
                <p style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', margin: 0 }}>{t.modal.privacy}</p>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}