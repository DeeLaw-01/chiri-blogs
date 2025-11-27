'use client'

import React, { useState } from 'react'
import {
  ChartSection,
  CheapFlightSection,
  InsightTabsSection,
  PriceInfoSection,
  ReturnFlightSection,
  Section,
  TableSection,
  AirlineFlightsSection,
  StopsAnalysisSection as StopsAnalysisSectionType,
  InfoCardsSection
} from '@/ui/shadcn/blog/types'
import {
  ChevronDown,
  ArrowUpIcon,
  ArrowDownIcon,
  MinusIcon,
  Search
} from 'lucide-react'
import { cn } from '@/src/utils/shadcn/cn'

import PriceChart from '@/ui/shadcn/blog/components/PriceChart'
import { StopsAnalysisSection, AirlineFlights, PackageSearchSection } from '@/ui/shadcn/blog/components'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/shadcn/ui/accordion'

interface Question {
  question: string
  answer: string
}


const FAQPreview = ({ questions = [] }: { questions: Question[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {questions.map((q, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <h3 className="font-semibold text-left">{q.question}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">{q.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const TablePreview = ({ section }: { section: TableSection }) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            {section.headers.map((header: string, index: number) => (
              <th
                key={index}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {section.data.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: string, colIndex: number) => (
                <td
                  key={colIndex}
                  className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface Tab {
  id: string
  title: string
  content: string
}

const InsightTabsPreview = ({ section }: { section: InsightTabsSection }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='py-8 max-w-5xl mx-auto'>
      <h3 className='text-2xl font-semibold mb-6'>{section.title}</h3>
      <div className='flex flex-col space-y-6'>
        <div className='flex gap-2 border-b'>
          {section.tabs.map((tab: Tab, index: number) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                'px-4 py-2 font-medium transition-colors',
                activeTab === index
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className='prose max-w-none dark:prose-invert'>
          {section.tabs[activeTab]?.content}
        </div>
      </div>
    </div>
  )
}

const PriceInfoPreview = ({ section }: { section: PriceInfoSection }) => {
  return (
    <div className='py-8 max-w-5xl mx-auto'>
      <h3 className='text-2xl font-semibold mb-6'>{section.title}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {section.prices.map(price => (
          <div key={price.id} className='p-4 border rounded-lg'>
            <div className='text-sm text-muted-foreground'>{price.month}</div>
            <div className='text-2xl font-bold mt-1'>{price.price}</div>
            <div className='flex items-center mt-2'>
              {price.change === 'up' && (
                <ArrowUpIcon className='w-4 h-4 text-red-500' />
              )}
              {price.change === 'down' && (
                <ArrowDownIcon className='w-4 h-4 text-green-500' />
              )}
              {price.change === 'stable' && (
                <MinusIcon className='w-4 h-4 text-yellow-500' />
              )}
              <span className='ml-1 text-sm'>{price.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ReturnFlightPreview = ({ section }: { section: ReturnFlightSection }) => {
  const flights = section.flights || [];

  return (
    <div className='py-8 max-w-5xl mx-auto'>
      <h3 className='text-2xl font-semibold mb-6'>{section.title}</h3>
      <div className='space-y-4'>
        {flights.map(flight => (
          <div key={flight.id} className='p-4 border rounded-lg'>
            <div className='flex justify-between items-center'>
              <div>
                <div className='font-medium'>{flight.airline}</div>
                <div className='text-sm text-muted-foreground'>
                  Departure: {flight.departureDate}
                </div>
                <div className='text-sm text-muted-foreground'>
                  Return: {flight.returnDate}
                </div>
              </div>
              <div className='text-xl font-bold'>{flight.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ChartPreview = ({ section }: { section: ChartSection }) => {
  return (
    <div className='py-8 max-w-5xl mx-auto'>
      <h3 className='text-2xl font-semibold mb-6'>{section.title}</h3>
      <div className='space-y-6'>
        {section.image && (
          <img
            src={section.image}
            alt={section.title}
            className='w-full rounded-lg object-cover max-h-[400px]'
          />
        )}
        <div className='prose max-w-none dark:prose-invert'>
          {section.content}
        </div>
      </div>
    </div>
  )
}

const CheapFlightPreview = ({ section }: { section: CheapFlightSection }) => {
  const flights = section.flights || [];

  return (
    <div className='py-8 max-w-5xl mx-auto'>
      <h3 className='text-2xl font-semibold mb-6'>{section.title}</h3>
      <div className='space-y-4'>
        {flights.map(flight => (
          <div key={flight.id} className='p-4 border rounded-lg'>
            <div className='flex justify-between items-center'>
              <div>
                <div className='font-medium'>{flight.airline}</div>
                <div className='text-sm text-muted-foreground'>
                  {flight.from} → {flight.to}
                </div>
                <div className='text-sm text-muted-foreground'>
                  {flight.date}
                </div>
              </div>
              <div className='text-xl font-bold'>{flight.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Flight {
  from: string
  to: string
  date: string
  duration: string
  price: string
}

interface Feature {
  title: string
  description: string
  image?: string
}

export const renderPreviewSection = (section: Section) => {
  switch (section.type) {
    case 'text':
      return (
        <div className='max-w-3xl mx-auto'>
          <div
            className='prose max-w-none dark:prose-invert'
            style={{
              // Ensure lists are properly styled
              '--tw-prose-bullets': '#374151',
              '--tw-prose-counters': '#374151'
            } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: section.content || '' }}
          />
          <style jsx>{`
            div :global(ul) {
              padding-left: 1.625em;
              list-style-type: disc;
            }
            div :global(ol) {
              padding-left: 1.625em;
              list-style-type: decimal;
            }
            div :global(li) {
              padding-left: 0.375em;
              list-style-position: outside;
            }
            /* Force correct list types based on data-list attribute */
            div :global(li[data-list="bullet"]) {
              list-style-type: disc !important;
            }
            div :global(li[data-list="ordered"]) {
              list-style-type: decimal !important;
            }
            /* Ensure ul shows bullets, ol shows numbers */
            div :global(ul li),
            div :global(ul li[data-list="bullet"]) {
              list-style-type: disc !important;
            }
            div :global(ol li),
            div :global(ol li[data-list="ordered"]) {
              list-style-type: decimal !important;
            }
            /* Remove Quill's custom ::before elements */
            div :global(li::before) {
              display: none !important;
              content: none !important;
            }
            div :global(li.ql-indent-1) {
              padding-left: 3em;
            }
            div :global(li.ql-indent-2) {
              padding-left: 4.5em;
            }
          `}</style>
        </div>
      )

    case 'FeatureSection':
      return (
        <div className='max-w-5xl mx-auto'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-2'>
            {section.features?.map((feature: Feature, i: number) => (
              <div key={i} className='p-4 border rounded-lg'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  {feature.image && (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className='w-full sm:w-1/3 h-48 object-cover rounded-lg'
                    />
                  )}
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-semibold truncate mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-sm text-muted-foreground break-words'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'FlightList':
      return (
        <div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto max-w-6xl'>
            {section.flights?.map((flight: Flight, i: number) => {
              // Convert flight data to match EnhancedFlightCard format
              const formatTime = (dateStr: string) => {
                try {
                  const date = new Date(dateStr)
                  return date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  })
                } catch {
                  return '08:00'
                }
              }

              const formatPrice = (priceStr: string) => {
                const price = parseFloat(priceStr) || 0
                return Math.round(price)
              }

              return (
                <div
                  key={i}
                  className='w-full max-w-sm hover:shadow-lg transition-shadow duration-200 border border-gray-200 rounded-lg'
                >
                  <div className='p-4'>
                    {/* Compact header with airline and price */}
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 text-primary'>
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                          </svg>
                        </div>
                        <span className='font-medium text-gray-900'>Flight</span>
                      </div>
                      <div className='text-right'>
                        <div className='text-lg font-bold text-primary'>
                          EUR {formatPrice(flight.price)}
                        </div>
                      </div>
                    </div>

                    {/* Flight route - simplified layout */}
                    <div className='grid grid-cols-3 items-center gap-2 mb-3'>
                      {/* Departure */}
                      <div className='text-center'>
                        <div className='text-lg font-bold text-gray-800'>
                          {formatTime(flight.date)}
                        </div>
                        <div className='text-sm text-gray-600'>{flight.from}</div>
                      </div>

                      {/* Flight info */}
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-1 text-xs text-gray-500 mb-1'>
                          <div className='w-3 h-3'>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                            </svg>
                          </div>
                          {flight.duration}
                        </div>
                        <div className='w-full h-px bg-gray-300 relative'>
                          <div className='w-3 h-3 text-primary absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white'>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                            </svg>
                          </div>
                        </div>
                        <div className='text-xs mt-1 px-2 py-1 bg-green-100 text-green-800 rounded-full'>
                          Direct
                        </div>
                      </div>

                      {/* Arrival */}
                      <div className='text-center'>
                        <div className='text-lg font-bold text-gray-800'>
                          {formatTime(flight.date)}
                        </div>
                        <div className='text-sm text-gray-600'>{flight.to}</div>
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className='flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100'>
                      <span>Available seats</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )

    case 'QuickFacts':
      return (
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold mb-2'>{section.title}</h2>
            <p className='text-muted-foreground'>{section.subtitle}</p>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
            {section.facts
              ?.slice(0, 4)
              .map(
                (
                  fact: { label: string; value: string; description: string },
                  i: number
                ) => (
                  <div
                    key={i}
                    className='text-center flex flex-col items-center justify-center space-y-4 w-full max-w-[250px] sm:w-auto'
                  >
                    <h3 className='text-neutral-400 text-lg font-medium uppercase text-center w-full'>
                      {fact.label}
                    </h3>
                    <div className='text-2xl text-center w-full'>
                      {fact.value}
                    </div>
                    <div className='w-12 h-px bg-gray-600 mt-6' />
                    <p className='text-[#8f9bb3] text-sm text-center w-full'>
                      {fact.description}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
      )

    case 'FAQSection':
      return (
        <div className='max-w-3xl mx-auto'>
          <FAQPreview questions={section.questions || []} />
        </div>
      )

    case 'TableSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <TablePreview section={section as TableSection} />
        </div>
      )

    case 'InfoCardsSection':
      const infoSection = section as InfoCardsSection
      return (
        <div className='max-w-4xl mx-auto py-8'>
          {infoSection.title && (
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold mb-2'>{infoSection.title}</h2>
            </div>
          )}
          <div className='flex flex-wrap justify-center gap-8'>
            {infoSection.cards.map(card => (
              <div
                key={card.id}
                className='text-center flex flex-col items-center justify-center space-y-4 w-full max-w-[250px] sm:w-auto'
              >
                <h3 className='text-neutral-400 text-lg font-medium uppercase text-center w-full'>
                  {card.title}
                </h3>
                <div className='text-2xl text-center w-full'>
                  {card.data}
                </div>
                <div className='w-12 h-px bg-gray-600 mt-6' />
                <p className='text-[#8f9bb3] text-sm text-center w-full'>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'InsightTabsSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <InsightTabsPreview section={section} />
        </div>
      )

    case 'PriceInfoSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <PriceInfoPreview section={section} />
        </div>
      )

    case 'ReturnFlightSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <ReturnFlightPreview section={section} />
        </div>
      )

    case 'ChartSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <ChartPreview section={section} />
        </div>
      )

    case 'CheapFlightSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <CheapFlightPreview section={section} />
        </div>
      )

    case 'PackageSearchSection':
      // Use the actual component with readOnly=true to fetch real data
      return (
        <div className='max-w-4xl mx-auto'>
          <PackageSearchSection
            section={section}
            index={0}
            onUpdate={() => { }} // No-op for preview
            readOnly={true} // This triggers real data fetching and shows packages with real API data
          />
        </div>
      )

    case 'TravelStatsSection':
      return (
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-6'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>{section.title}</h2>
            </div>
            {section.stats ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='p-6 rounded-lg border bg-card text-center'>
                  <h4 className='font-semibold mb-2'>Average Price</h4>
                  <div className='text-3xl font-bold mb-2'>
                    {section.stats.currency}{' '}
                    {Math.round(section.stats.avgPrice)}
                  </div>
                  <p className='text-muted-foreground'>
                    Based on {section.stats.totalPackages} packages
                  </p>
                </div>
                <div className='p-6 rounded-lg border bg-card text-center'>
                  <h4 className='font-semibold mb-2'>Average Trip Length</h4>
                  <div className='text-3xl font-bold mb-2'>
                    {Math.round(section.stats.avgTripLength)} days
                  </div>
                  <p className='text-muted-foreground'>Typical duration</p>
                </div>
                <div className='p-6 rounded-lg border bg-card text-center'>
                  <h4 className='font-semibold mb-2'>Popular Destination</h4>
                  <div className='text-3xl font-bold mb-2'>
                    {section.stats.popularDestination}
                  </div>
                  <p className='text-muted-foreground'>Most visited</p>
                </div>
              </div>
            ) : (
              <div className='text-center py-8'>
                <div className='flex flex-col items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                  </div>
                  <div className='text-gray-500'>
                    <p className='text-lg font-medium'>
                      No statistics available
                    </p>
                    <p className='text-sm'>
                      Travel statistics will appear here when data is analyzed.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )

    case 'RoundTripEstimate':
      // Mock price estimate for preview
      const mockPriceEstimate = section.priceEstimate || {
        minPrice: 736,
        maxPrice: 1057,
        currentPrice: 1057,
        currency: 'EUR',
        isLow: false,
        trend: 'stable' as const,
        priceRange: 'high' as const
      }

      // Price range bar component for preview
      const PriceRangeBarPreview = ({ estimate }: { estimate: { minPrice: number; maxPrice: number; currentPrice: number; currency: string } }) => {
        const position = ((estimate.currentPrice - estimate.minPrice) / (estimate.maxPrice - estimate.minPrice)) * 100

        return (
          <div className="w-full">
            <div className="relative h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full">
              <div
                className="absolute top-0 w-4 h-4 bg-white border-2 border-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1"
                style={{ left: `${position}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>{estimate.currency}{estimate.minPrice}</span>
              <span>{estimate.currency}{estimate.maxPrice}</span>
            </div>
          </div>
        )
      }

      return (
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-6'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>{section.title || 'Round-trip Flight Estimate'}</h2>
              {(section.subtitle || 'Find the best prices for your route') && (
                <p className='text-gray-600 mt-2'>{section.subtitle || 'Find the best prices for your route'}</p>
              )}
            </div>

            {section.fromLocation && section.toLocation ? (
              <div className='bg-white border rounded-lg'>
                <div className='p-6'>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      What is the typical price of a round-trip flight between {section.fromLocation} and {section.toLocation}?
                    </h3>
                    {mockPriceEstimate.isLow && (
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowDownIcon className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm font-medium">
                          Prices are currently low for flights on this route.
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm mb-1 text-gray-700">
                      Typical prices usually range from {mockPriceEstimate.currency}{mockPriceEstimate.minPrice} to {mockPriceEstimate.currency}{mockPriceEstimate.maxPrice}.
                    </p>
                    <p className="text-sm text-gray-700">
                      The lowest price recently found on this route was {mockPriceEstimate.currency}{mockPriceEstimate.minPrice}.
                    </p>
                  </div>

                  <div className="mb-4">
                    <PriceRangeBarPreview estimate={mockPriceEstimate} />
                  </div>
                </div>
              </div>
            ) : (
              <div className='text-center py-8'>
                <div className='flex flex-col items-center gap-4'>
                  <Search className='w-12 h-12 text-gray-400' />
                  <div className='text-gray-500'>
                    <p className='text-lg font-medium'>No route selected</p>
                    <p className='text-sm'>
                      Price estimate will appear here when locations are configured.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )

    case 'BestAirlines':
      const mockAirlines = [
        { name: 'Turkish Airlines', rating: 4.5, priceFrom: 320, currency: 'EUR', features: ['Free WiFi', 'Meals Included'] },
        { name: 'Lufthansa', rating: 4.3, priceFrom: 380, currency: 'EUR', features: ['Premium Service', 'Lounge Access'] },
        { name: 'Emirates', rating: 4.7, priceFrom: 450, currency: 'EUR', features: ['Entertainment', 'Premium Comfort'] }
      ]

      const hasRealAirlineData = section.airlines && section.airlines.length > 0
      const airlinesToShow = hasRealAirlineData ? section.airlines : mockAirlines

      return (
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-6'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>{section.title || 'Best Airlines'}</h2>
              {(section.subtitle || 'Top-rated airlines for your route') && (
                <p className='text-gray-600 mt-2'>{section.subtitle || 'Top-rated airlines for your route'}</p>
              )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {airlinesToShow?.map((airline, index) => (
                <div key={index} className='p-6 rounded-lg border bg-card'>
                  <h3 className='font-semibold mb-2'>{airline.name}</h3>
                  <div className='space-y-2'>
                    <div className='flex justify-between'>
                      <span className='text-sm text-muted-foreground'>Rating</span>
                      <span className='font-medium'>{airline.rating}/5</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-sm text-muted-foreground'>Price</span>
                      <span className='font-medium'>{airline.priceFrom} {airline.currency}</span>
                    </div>
                    <p className='text-sm mt-2'>{airline.features?.join(', ') || 'Premium service, On-time performance'}</p>
                  </div>
                </div>
              ))}
            </div>

            {!hasRealAirlineData && (
              <div className='text-center text-sm text-gray-500 mt-2'>
                Preview data - configure route to see real airline ratings
              </div>
            )}
          </div>
        </div>
      )

    case 'CheapestAirline':
      return (
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-6'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold'>{section.title || 'Cheapest Airlines'}</h2>
              {(section.subtitle || 'Compare airline prices and find the best deals') && (
                <p className='text-gray-600 mt-2'>{section.subtitle || 'Compare airline prices and find the best deals'}</p>
              )}
            </div>

            <PriceChart
              priceData={section.priceData || []}
              cheapestAirline={section.cheapestAirline}
              fromLocation={section.fromLocation}
              toLocation={section.toLocation}
            />
          </div>
        </div>
      )

    case 'AirlineFlights':
      // Use the actual component with readOnly=true to fetch real flight data
      return (
        <div className='max-w-4xl mx-auto'>
          <AirlineFlights
            section={section as AirlineFlightsSection}
            index={0}
            onUpdate={() => { }} // No-op for preview
            readOnly={true} // This triggers real data fetching and shows only flight tickets
          />
        </div>
      )

    case 'StopsAnalysisSection':
      // Use the actual component with readOnly=true to fetch real data
      return (
        <div className='max-w-4xl mx-auto'>
          <StopsAnalysisSection
            section={section as StopsAnalysisSectionType}
            index={0}
            onUpdate={() => { }} // No-op for preview
            readOnly={true} // This triggers real data fetching
          />
        </div>
      )

    default:
      return null
  }
}
