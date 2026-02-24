import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  bgClass?: string; // Optional if image is used
  image?: string;   // Optional real image URL
}

export interface StatMetric {
  label: string;
  value: string;
  unit: string;
  subValue?: string;
  trend?: 'up' | 'down';
  icon?: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: number;
  name: string;
  company: string;
  category: string;
  footprint: string; // kgCO2e/unit
  status: 'certified' | 'pending';
  icon?: LucideIcon;
}

export interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  summary: string;
  results: { label: string; value: string }[];
}

export interface RegionData {
  id: number;
  name: string;
  enterprises: number;
  products: number;
  reduction: string;
}