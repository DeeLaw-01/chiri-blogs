import React from 'react';
import dynamic from 'next/dynamic';
import { Section } from '@/ui/shadcn/blog/types';

// Dynamic imports for better performance
const FeatureSection = dynamic(() => import('@/ui/shadcn/blog/components/FeatureSection'), { ssr: false });
const FlightListSection = dynamic(() => import('@/ui/shadcn/blog/components/FlightListSection'), { ssr: false });
const QuickFactsSection = dynamic(() => import('@/ui/shadcn/blog/components/QuickFactsSection'), { ssr: false });
const FAQSection = dynamic(() => import('@/ui/shadcn/blog/components/FAQSection'), { ssr: false });
const InlineTextEditor = dynamic(() => import('@/ui/shadcn/blog/components/InlineTextEditor'), { ssr: false });
const TableSection = dynamic(() => import('@/ui/shadcn/blog/components/TableSection'), { ssr: false });
const InfoCardsSection = dynamic(() => import('@/ui/shadcn/blog/components/InfoCardsSection'), { ssr: false });
const InsightTabsSection = dynamic(() => import('@/ui/shadcn/blog/components/InsightTabsSection'), { ssr: false });
const PriceInfoSection = dynamic(() => import('@/ui/shadcn/blog/components/PriceInfoSection'), { ssr: false });
const ReturnFlightSection = dynamic(() => import('@/ui/shadcn/blog/components/ReturnFlightSection'), { ssr: false });
const ChartSection = dynamic(() => import('@/ui/shadcn/blog/components/ChartSection'), { ssr: false });
const CheapFlightSection = dynamic(() => import('@/ui/shadcn/blog/components/CheapFlightSection'), { ssr: false });
const PackageSearchSection = dynamic(() => import('@/ui/shadcn/blog/components/PackageSearchSection'), { ssr: false });
const TravelStatsSection = dynamic(() => import('@/ui/shadcn/blog/components/TravelStatsSection'), { ssr: false });
const RoundTripEstimate = dynamic(() => import('@/ui/shadcn/blog/components/RoundTripEstimate'), { ssr: false });
const BestAirlines = dynamic(() => import('@/ui/shadcn/blog/components/BestAirlines'), { ssr: false });
const CheapestAirline = dynamic(() => import('@/ui/shadcn/blog/components/CheapestAirline'), { ssr: false });
const AirlineFlights = dynamic(() => import('@/ui/shadcn/blog/components/AirlineFlights'), { ssr: false });

export const renderSection = (section: Section, index: number, onUpdate?: (updates: Partial<Section>) => void, readOnly = false) => {
  const key = `section-${section.id || index}`;

  switch (section.type) {
    case 'FeatureSection':
      return (
        <FeatureSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'FlightList':
      return (
        <FlightListSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'QuickFacts':
      return (
        <QuickFactsSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'FAQSection':
      return (
        <FAQSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'text':
      return (
        <InlineTextEditor
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'TableSection':
      return (
        <TableSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'InfoCardsSection':
      return (
        <InfoCardsSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'InsightTabsSection':
      return (
        <InsightTabsSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'PriceInfoSection':
      return (
        <PriceInfoSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'ReturnFlightSection':
      return (
        <ReturnFlightSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'ChartSection':
      return (
        <ChartSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'CheapFlightSection':
      return (
        <CheapFlightSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'PackageSearchSection':
      return (
        <PackageSearchSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'TravelStatsSection':
      return (
        <TravelStatsSection
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'RoundTripEstimate':
      return (
        <RoundTripEstimate
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'BestAirlines':
      return (
        <BestAirlines
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'CheapestAirline':
      return (
        <CheapestAirline
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    case 'AirlineFlights':
      return (
        <AirlineFlights
          key={key}
          section={section}
          index={index}
          onUpdate={onUpdate as (updates: Partial<typeof section>) => void}
          readOnly={readOnly}
        />
      );

    default:
      return null;
  }
}; 