import { LucideIcon } from 'lucide-react';

export enum SkillType {
  TECH = 'Technique',
  MANAGEMENT = 'Commandement',
  RETAIL = 'Commerce Antique'
}

export interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  type: SkillType;
  isCurrent?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}