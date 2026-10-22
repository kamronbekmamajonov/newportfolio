export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly description?: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface PersonalProfile {
  readonly name: string;
  readonly role: string;
  readonly headlinePrefix: string;
  readonly headlineHighlight: string;
  readonly bioQuote: string;
  readonly primaryCtaText: string;
  readonly primaryCtaHref: string;
  readonly secondaryCtaText: string;
  readonly secondaryCtaHref: string;
}

export interface MarketingStep {
  readonly stepNumber: string;
  readonly title: string;
  readonly description: string;
  readonly icon: 'search' | 'target' | 'rocket' | 'chart';
}

export interface ApproachSectionData {
  readonly kicker: string;
  readonly title: string;
  readonly description: string;
  readonly steps: readonly MarketingStep[];
}

export interface CaseMetric {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly context: string;
}

export interface CaseImageItem {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly category: 'hero' | 'logo' | 'proof' | 'process';
  readonly tag: string;
}

export interface HilolMedCaseData {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly objective: string;
  readonly completedTasks: readonly string[];
  readonly rubricsExamples: readonly string[];
  readonly metrics: readonly CaseMetric[];
  readonly images: {
    readonly building: string;
    readonly logo: string;
    readonly profileProof: string;
    readonly reelProof: string;
    readonly interview: string;
    readonly team: string;
  };
}

export interface ScholarHubCaseData {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly objective: string;
  readonly completedTasks: readonly string[];
  readonly mainMetrics: readonly CaseMetric[];
  readonly additionalMetrics: readonly CaseMetric[];
  readonly images: {
    readonly before: string;
    readonly after: string;
    readonly leadMagnetReel: string;
    readonly salesProof: string;
    readonly process: string;
    readonly visual1: string;
    readonly visual2: string;
  };
}

export interface OtlichnoCaseData {
  readonly id: string;
  readonly title: string;
  readonly role: string;
  readonly period: string;
  readonly category: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly objective: string;
  readonly completedTasks: readonly string[];
  readonly oct2022Stats: readonly CaseMetric[];
  readonly nov2023Stats: readonly CaseMetric[];
  readonly reportHighlights: readonly string[];
  readonly mainMetrics: readonly CaseMetric[];
  readonly images: {
    readonly logo: string;
    readonly before: string;
    readonly after: string;
    readonly reel16k: string;
    readonly reel6k: string;
    readonly tiktokReel: string;
    readonly tiktokLeads: string;
    readonly youtubeVideo: string;
  };
}

export interface MarketingMaximumCaseData {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly objective: string;
  readonly completedTasks: readonly string[];
  readonly mainMetrics: readonly CaseMetric[];
  readonly images: {
    readonly before: string;
    readonly after: string;
    readonly visualBefore: string;
    readonly visualAfter: string;
    readonly reel: string;
  };
}

export interface UstozAkademiyasiCaseData {
  readonly id: string;
  readonly title: string;
  readonly role: string;
  readonly category: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly completedTasks: readonly string[];
  readonly mainMetrics: readonly CaseMetric[];
  readonly images: {
    readonly profile: string;
    readonly reel: string;
    readonly visual: string;
  };
}

export interface EngoraCaseData {
  readonly id: string;
  readonly title: string;
  readonly role: string;
  readonly period: string;
  readonly category: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly statusNote: string;
  readonly completedTasks: readonly string[];
  readonly mainMetrics: readonly CaseMetric[];
  readonly images: {
    readonly before: string;
    readonly after: string;
    readonly reel1: string;
    readonly reel2: string;
  };
}

export interface MuxsinzadaCaseData {
  readonly id: string;
  readonly title: string;
  readonly role: string;
  readonly period: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly focusSummary: string;
  readonly completedTasks: readonly string[];
  readonly images: {
    readonly main: string;
    readonly visual: string;
    readonly reel: string;
    readonly process: string;
  };
}

export interface ZetricCaseData {
  readonly id: string;
  readonly title: string;
  readonly role: string;
  readonly period: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly b2bContext: string;
  readonly resultValue: string;
  readonly resultLabel: string;
  readonly resultDescription: string;
  readonly completedTasks: readonly string[];
  readonly images: {
    readonly main: string;
    readonly visual: string;
    readonly process1: string;
    readonly process2: string;
  };
}

export interface IqiblaCaseData {
  readonly id: string;
  readonly title: string;
  readonly role: string;
  readonly field: string;
  readonly shortDesc: string;
  readonly focusSummary: string;
  readonly completedTasks: readonly string[];
  readonly images: {
    readonly main: string;
    readonly profile: string;
    readonly carousel: string;
    readonly bloger1: string;
    readonly bloger2: string;
  };
}

export interface ZamonaCaseData {
  readonly id: string;
  readonly title: string;
  readonly field: string;
  readonly objective: string;
  readonly adBudget: string;
  readonly ordersResult: string;
  readonly ordersDescription: string;
  readonly budgetDescription: string;
  readonly measurementNote: string;
  readonly menuPriceContext: string;
  readonly beforeContext: string;
  readonly afterContext: string;
  readonly images: {
    readonly profile: string;
  };
}

export interface IbtidoMonthStats {
  readonly monthLabel: string;
  readonly leads: string;
  readonly cpl: string;
  readonly spend: string;
  readonly spendNote?: string;
}

export interface IbtidoComparisonRow {
  readonly metric: string;
  readonly month1: string;
  readonly month2: string;
  readonly isHighlighted?: boolean;
}

export interface IbtidoCaseData {
  readonly id: string;
  readonly tag: string;
  readonly title: string;
  readonly field: string;
  readonly role: string;
  readonly projectState: string;
  readonly contextSummary: string;
  readonly honestComparisonNote: string;
  readonly month1: IbtidoMonthStats;
  readonly month2: IbtidoMonthStats;
  readonly comparisonTable: readonly IbtidoComparisonRow[];
  readonly images: {
    readonly adsMain: string;
    readonly adsSecondary: string;
    readonly profile: string;
  };
}

export interface WaterFilterMonthStats {
  readonly monthLabel: string;
  readonly sales: string;
  readonly inquiries: string;
  readonly spend: string;
}

export interface WaterFilterComparisonRow {
  readonly metric: string;
  readonly month1: string;
  readonly month2: string;
  readonly growthNote: string;
  readonly isHighlighted?: boolean;
}

export interface WaterFilterCaseData {
  readonly id: string;
  readonly title: string;
  readonly field: string;
  readonly role: string;
  readonly shortDesc: string;
  readonly completedTasks: readonly string[];
  readonly month1: WaterFilterMonthStats;
  readonly month2: WaterFilterMonthStats;
  readonly additionalResultValue: string;
  readonly additionalResultLabel: string;
  readonly comparisonRows: readonly WaterFilterComparisonRow[];
  readonly images: {
    readonly profile: string;
    readonly reelResult: string;
    readonly reel: string;
  };
}

export interface BeforeAfterTransformationItem {
  readonly id: string;
  readonly projectTitle: string;
  readonly category: string;
  readonly metricBadge: string;
  readonly summary: string;
  readonly beforeLabel: string;
  readonly afterLabel: string;
  readonly beforeImage: string;
  readonly afterImage: string;
}

export interface ExperienceTimelineItem {
  readonly id: string;
  readonly period: string;
  readonly company: string;
  readonly role: string;
  readonly description: string;
}

export interface CompetencyAreaItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tasks: readonly string[];
}

export interface ProfessionalCourseItem {
  readonly id: string;
  readonly provider: string;
  readonly program: string;
}

export interface BottomPortfolioSectionsData {
  readonly beforeAfterItems: readonly BeforeAfterTransformationItem[];
  readonly aboutPositioningQuote: string;
  readonly aboutPillars: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly experiences: readonly ExperienceTimelineItem[];
  readonly competencies: readonly CompetencyAreaItem[];
  readonly universityEducation: {
    readonly institution: string;
    readonly field: string;
    readonly year: string;
  };
  readonly professionalCourses: readonly ProfessionalCourseItem[];
  readonly contactCtaTitle: string;
  readonly contactCtaSubtitle: string;
}




