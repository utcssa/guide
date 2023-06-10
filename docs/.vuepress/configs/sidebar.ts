import { SidebarConfig } from 'vuepress'

const sidebar: SidebarConfig = {
  '/newcomer/': [
    {
      text: '序言',
      link: '/newcomer/preface',
      children: ['/newcomer/preface/about.md'],
      collapsible: true,
    },
    {
      text: '第零章 · 从零开始',
      link: '/newcomer/chapter-0',
      children: [
        '/newcomer/chapter-0/contact-us.md',
        '/newcomer/chapter-0/useful-links.md',
        '/newcomer/chapter-0/pickup-forms.md',
        '/newcomer/chapter-0/housing.md',
        '/newcomer/chapter-0/important-documents.md',
        '/newcomer/chapter-0/health.md',
      ],
      collapsible: true,
    },
    {
      text: '第壹章 · 作别故土',
      children: [
        '/newcomer/chapter-1/departure.md',
        '/newcomer/chapter-1/financial.md',
        '/newcomer/chapter-1/bags.md',
        '/newcomer/chapter-1/credentials.md',
        '/newcomer/chapter-1/connecting-flights.md',
        '/newcomer/chapter-1/security-checks.md',
      ],
      collapsible: true,
    },
    {
      text: '第贰章 · 初来乍到',
      link: '/newcomer/chapter-2',
      children: [
        '/newcomer/chapter-2/necessary-steps.md',
        '/newcomer/chapter-2/tests.md',
        '/newcomer/chapter-2/phone.md',
        '/newcomer/chapter-2/bank.md',
        '/newcomer/chapter-2/employment-and-insurance.md',
        '/newcomer/chapter-2/register-for-class.md',
      ],
      collapsible: true,
    },
    {
      text: '第叁章 · 安居乐业',
      children: [
        '/newcomer/chapter-3/residence-halls.md',
        '/newcomer/chapter-3/renter.md',
        '/newcomer/chapter-3/temporary-domicile.md',
      ],
      collapsible: true,
    },
    {
      text: '第肆章 · 渐入佳境',
      children: [
        '/newcomer/chapter-4/supermarkets.md',
        '/newcomer/chapter-4/restaurants.md',
        '/newcomer/chapter-4/shopping.md',
        '/newcomer/chapter-4/entertainments.md',
        '/newcomer/chapter-4/public-transportations.md',
        '/newcomer/chapter-4/car.md',
      ],
      collapsible: true,
    },
    {
      text: '第伍章 · 落地扎根',
      children: [
        '/newcomer/chapter-5/travel.md',
        '/newcomer/chapter-5/common-sense.md',
        '/newcomer/chapter-5/website-list.md',
      ],
      collapsible: true,
    },
    {
      text: '附录',
      children: ['/newcomer/appendix/faq.md'],
    },
  ],
  '/course-guide': [
    {
      text: '序言',
      link: '/course-guide/preface',
      collapsible: true,
    },
    {
      text: 'Introduction',
      link: '/course-guide/Introduction',
      children: [
        '/course-guide/Introduction/选课checklist.md',
        '/course-guide/Introduction/DegreePlanLinks.md',
        '/course-guide/Introduction/ClaimCredit.md',
        '/course-guide/Introduction/选课时非常有用的网站.md',
        '/course-guide/Introduction/超17学分申请流程.md',
        '/course-guide/Introduction/各项评分参考.md',
      ],
      collapsible: true,
    },
    {
      text: 'CoreCurriculum',
      link: '/course-guide/CoreCurriculum',
      children: [
        '/course-guide/CoreCurriculum/UGS.md',
        '/course-guide/CoreCurriculum/Government&History.md',
        '/course-guide/CoreCurriculum/Social&BehavioralScience.md',
        '/course-guide/CoreCurriculum/Mathematics.md',
        '/course-guide/CoreCurriculum/NatureScience.md',
        '/course-guide/CoreCurriculum/English.md',
        '/course-guide/CoreCurriculum/VAPA.md',
      ],
      collapsible: true,
    },
    {
      text: 'Colleges',
      link: '/course-guide/College',
      children: [
        '/course-guide/College/CockrellSchoolOfEngineering.md',
        '/course-guide/College/CollegeOfNaturalScience.md',
        '/course-guide/College/McCombsSchoolOfBusiness.md',
        '/course-guide/College/MoodyCollegeOfCommunication.md',
        '/course-guide/College/CollegeOfLiberalArts.md',
        '/course-guide/College/CollegeOfEducation.md',
        '/course-guide/College/JacksonSchoolOfGeosciences.md',
        '/course-guide/College/CollegeOfFineArts.md',
      ],
      collapsible: true,
    },
  ],
}

export { sidebar }
