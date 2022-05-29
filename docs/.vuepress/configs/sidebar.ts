import { SidebarConfig } from "vuepress";

const sidebar: SidebarConfig = {
  "/": [
    {
      text: "序言",
      link: "/preface",
      children: ["/preface/about.md"],
      collapsible: true,
    },
    {
      text: "第零章 · 从零开始",
      link: "/chapter-0",
      children: [
        "/chapter-0/contact-us.md",
        "/chapter-0/useful-links.md",
        "/chapter-0/pickup-forms.md",
        "/chapter-0/housing.md",
        "/chapter-0/important-documents.md",
        "/chapter-0/health.md",
      ],
      collapsible: true,
    },
    {
      text: "第壹章 · 作别故土",
      children: [
        "/chapter-1/departure.md",
        "/chapter-1/financial.md",
        "/chapter-1/bags.md",
        "/chapter-1/credentials.md",
        "/chapter-1/connecting-flights.md",
        "/chapter-1/security-checks.md",
      ],
      collapsible: true,
    },
    {
      text: "第贰章 · 初来乍到",
      link: "/chapter-2",
      children: [
        "/chapter-2/necessary-steps.md",
        "/chapter-2/tests.md",
        "/chapter-2/phone.md",
        "/chapter-2/bank.md",
        "/chapter-2/employment-and-insurance.md",
        "/chapter-2/register-for-class.md",
      ],
      collapsible: true,
    },
    {
      text: "第叁章 · 安居乐业",
      children: [
        "/chapter-3/residence-halls.md",
        "/chapter-3/renter.md",
        "/chapter-3/temporary-domicile.md",
      ],
      collapsible: true,
    },
    {
      text: "第肆章 · 渐入佳境",
      children: [
        "/chapter-4/supermarkets.md",
        "/chapter-4/restaurants.md",
        "/chapter-4/shopping.md",
        "/chapter-4/entertainments.md",
        "/chapter-4/public-transportations.md",
        "/chapter-4/car.md",
      ],
      collapsible: true,
    },
    {
      text: "第伍章 · 落地扎根",
      children: [
        "/chapter-5/travel.md",
        "/chapter-5/common-sense.md",
        "/chapter-5/website-list.md",
      ],
      collapsible: true,
    },
    {
      text: "附录",
      children: ["/appendix/faq.md"],
    },
  ],
};

export { sidebar };
