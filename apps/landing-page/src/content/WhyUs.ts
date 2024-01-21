import { Building2, Cpu, Leaf, Presentation as PresentationIcon } from 'lucide-react';
import { ColumnBlockPageProps } from '../components/ColumnBlock/types';

export const whyUs: ColumnBlockPageProps[] = [
  {
    Icon: Leaf,
    title: 'Opting for sustainability-driven solutions',
    content: 'OptingForSustainabilityContent',
  },
  {
    Icon: Cpu,
    title: 'Utilizing cutting-edge eco-friendly technologies',
    content: 'UtilizingCuttingEdgeContent',
  },
  {
    Icon: Building2,
    title: 'Demonstrated success with like-minded businesses',
    content: 'DemonstratedSuccessContent',
  },
  {
    Icon: PresentationIcon,
    title: 'Offering a holistic sustainability strategy',
    content: 'OfferingAHolisticContent',
  },
];
