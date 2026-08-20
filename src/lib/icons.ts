import {
  AlertTriangle,
  BarChart3,
  Bug,
  BookOpen,
  Building2,
  CalendarClock,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  Code2,
  Compass,
  Container,
  Database,
  DollarSign,
  DoorOpen,
  FileBarChart,
  FileSignature,
  FileText,
  FlaskConical,
  GitBranch,
  GitCompare,
  GitPullRequest,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  KanbanSquare,
  Landmark,
  LayoutDashboard,
  Layers,
  Lightbulb,
  LineChart,
  ListChecks,
  ListTodo,
  Mail,
  Map,
  Megaphone,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Palette,
  PenTool,
  Plane,
  Presentation,
  Rocket,
  RefreshCw,
  RotateCcw,
  Scale,
  ScrollText,
  Search,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sigma,
  Sparkles,
  Swords,
  Target,
  Terminal,
  Ticket,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const ROLE_ICONS: Record<string, LucideIcon> = {
  "Business Analyst": ClipboardList,
  "Software Developer": Code2,
  "Project Manager": KanbanSquare,
  "Product Manager": Rocket,
  "Data Analyst": Database,
  "HR/People Operations Manager": Users,
  "All Employees": Building2,
  Salesperson: Handshake,
  Executive: Landmark,
  "Marketing Manager": Megaphone,
  "Customer Success Manager": HeartHandshake,
};

// Categories reuse icons across roles where the concept genuinely repeats
// (e.g. every role's "requirements" or "risk" category); duplication across
// roles is fine since role and category are never rendered in the same
// icon slot. Keys are exact category names from the seed data.
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  // Business Analyst
  "Data Analysis & BI Reporting": BarChart3,
  "Gap Analysis & Current vs. Future State": GitCompare,
  "Meeting Facilitation & Agile Ceremonies": CalendarClock,
  "Process Mapping & Documentation": Workflow,
  "Requirements Gathering & Elicitation": ListChecks,
  "Risk, Impact & Change Management": ShieldAlert,
  "Stakeholder Communication & Summaries": MessageSquare,
  "Testing, UAT & Quality": CheckCircle2,
  "User Stories & Acceptance Criteria": BookOpen,
  "Vendor/Tool Evaluation & Business Case": Scale,

  // Software Developer
  "Architecture & Design": Layers,
  "Code Review & Quality": GitPullRequest,
  "Debugging & Troubleshooting": Bug,
  "DevOps/CI-CD & Deployment": Container,
  Documentation: FileText,
  "Onboarding & Codebase Understanding": Compass,
  "Refactoring & Optimization": Wrench,
  Testing: FlaskConical,

  // Project Manager
  "Meeting Facilitation": CalendarClock,
  "Planning & Scheduling": CalendarRange,
  "Resource & Budget Management": Wallet,
  "Retrospectives & Lessons Learned": RotateCcw,
  "Risk & Issue Management": ShieldAlert,
  "Stakeholder Management": Users,
  "Status Reporting & Communication": FileBarChart,
  "Vendor/Contract Management": FileSignature,

  // Product Manager
  "Competitive Analysis": Swords,
  "Customer Feedback Synthesis": MessagesSquare,
  "Go-to-Market & Launch": Rocket,
  "Metrics & Analytics": LineChart,
  "Product Discovery & Research": Search,
  "Requirements & Specs": FileText,
  "Roadmap & Prioritization": Map,
  "Stakeholder Communication": MessageSquare,

  // Data Analyst
  "Data Exploration & Profiling": Search,
  "Data Quality & Governance": ShieldCheck,
  "Data Storytelling & Presentation": Presentation,
  "Forecasting & Trend Analysis": TrendingUp,
  "Reporting & Dashboards": LayoutDashboard,
  "SQL & Query Writing": Terminal,
  "Stakeholder Requirements for Data": ListChecks,
  "Statistical Analysis": Sigma,

  // HR/People Operations Manager
  "Compensation & Benefits Communication": DollarSign,
  "Culture & Engagement": Heart,
  "Employee Relations": MessageCircle,
  "Learning & Development": GraduationCap,
  Onboarding: DoorOpen,
  "Performance Management": TrendingUp,
  "Policy & Compliance Documentation": ScrollText,
  "Recruiting & Hiring": UserPlus,

  // Marketing Manager
  "Brand & Messaging": Palette,
  "Campaign Analysis & Reporting": BarChart3,
  "Content & Campaign Creation": PenTool,
  "Cross-functional Marketing Coordination": Share2,
  "Market & Audience Research": Search,

  // Salesperson
  "Account Management & Renewals": RefreshCw,
  "Discovery & Qualification": Search,
  "Objection Handling & Follow-up": HelpCircle,
  "Proposal & Negotiation": FileSignature,
  "Prospecting & Outreach": Target,

  // Executive
  "Board & Investor Relations": Landmark,
  "Decision-Making & Prioritization": GitBranch,
  "External Representation": Globe,
  "Organizational Leadership": Users,
  "Strategic Communication": Megaphone,

  // Customer Success Manager
  "Customer Communication & Renewals": RefreshCw,
  "Customer Health & Retention": HeartPulse,
  "Escalation Management": AlertTriangle,
  "Knowledge Base & Documentation": BookOpen,
  "Ticket Response & Resolution": Ticket,

  // All Employees
  "Email & Written Communication": Mail,
  "Meeting Prep & Follow-up": CalendarClock,
  "Personal Productivity & Organization": ListTodo,
  "Presentations & Documents": Presentation,
  "Problem Solving & Decision Making": Lightbulb,
  "Professional Development & Career": GraduationCap,
  "Travel & Expenses": Plane,
  "Workplace Communication & Conflict": MessagesSquare,
};

export const FALLBACK_ICON: LucideIcon = Sparkles;

export function roleIcon(role: string): LucideIcon {
  return ROLE_ICONS[role] ?? FALLBACK_ICON;
}

export function categoryIcon(category: string): LucideIcon {
  return CATEGORY_ICONS[category] ?? FALLBACK_ICON;
}
