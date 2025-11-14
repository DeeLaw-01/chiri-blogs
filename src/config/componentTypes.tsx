import React from 'react';
import { ListChecks, Plane, FileText, Info, HelpCircle, Table, LayoutGrid, PanelLeftOpen, LineChart, DollarSign, Banknote, Package, BarChart3, TrendingUp, TrendingDown, Calendar } from 'lucide-react';

export const componentTypes = {
    FeatureSection: {
        label: 'Features',
        icon: <ListChecks className="w-6 h-6" />,
        template: {
            type: 'FeatureSection',
            id: '',
            features: []
        }
    },
    FlightList: {
        label: 'Flight List',
        icon: <Plane className="w-6 h-6" />,
        template: {
            type: 'FlightList',
            id: '',
            title: '',
            subtitle: '',
            flights: []
        }
    },
    text: {
        label: 'Text Section',
        icon: <FileText className="w-6 h-6" />,
        template: {
            type: 'text',
            id: '',
            content: ''
        }
    },
    QuickFacts: {
        label: 'Quick Facts',
        icon: <Info className="w-6 h-6" />,
        template: {
            type: 'QuickFacts',
            id: '',
            title: '',
            subtitle: '',
            facts: []
        }
    },
    FAQSection: {
        label: 'FAQ Section',
        icon: <HelpCircle className="w-6 h-6" />,
        template: {
            type: 'FAQSection',
            id: '',
            questions: []
        }
    },
    TableSection: {
        label: 'Table',
        icon: <Table className="w-6 h-6" />,
        template: {
            type: 'TableSection',
            id: '',
            title: '',
            headers: ['Column 1', 'Column 2', 'Column 3'],
            data: [
                ['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3'],
                ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3']
            ]
        }
    },
    InfoCardsSection: {
        label: 'Info Cards',
        icon: <LayoutGrid className="w-6 h-6" />,
        template: {
            type: 'InfoCardsSection',
            id: '',
            title: 'Information Cards',
            cards: []
        }
    },
    InsightTabsSection: {
        label: 'Insight Tabs',
        icon: <PanelLeftOpen className="w-6 h-6" />,
        template: {
            type: 'InsightTabsSection',
            id: '',
            title: 'Insights',
            tabs: []
        }
    },
    PriceInfoSection: {
        label: 'Price Information',
        icon: <DollarSign className="w-6 h-6" />,
        template: {
            type: 'PriceInfoSection',
            id: '',
            title: 'Price Trends',
            prices: []
        }
    },
    ReturnFlightSection: {
        label: 'Return Flights',
        icon: <Plane className="w-6 h-6" />,
        template: {
            type: 'ReturnFlightSection',
            id: '',
            title: 'Return Flights',
            flights: [{
                id: `flight-${Date.now()}`,
                departureDate: new Date().toISOString().split('T')[0],
                returnDate: new Date().toISOString().split('T')[0],
                price: '$0',
                airline: 'Airline Name'
            }]
        }
    },
    ChartSection: {
        label: 'Chart Section',
        icon: <LineChart className="w-6 h-6" />,
        template: {
            type: 'ChartSection',
            id: '',
            title: 'Chart Analysis',
            image: '',
            content: ''
        }
    },
    CheapFlightSection: {
        label: 'Cheap Flights',
        icon: <Banknote className="w-6 h-6" />,
        template: {
            type: 'CheapFlightSection',
            id: '',
            title: 'Best Flight Deals',
            flights: []
        }
    },
    PackageSearchSection: {
        label: 'Package Search',
        icon: <Package className="w-6 h-6" />,
        template: {
            type: 'PackageSearchSection',
            id: '',
            title: 'Available Packages',
            subtitle: 'Find the best travel packages',
            locode: '',
            fromLocation: '',
            toLocation: '',
            packages: []
        }
    },
    RoundTripEstimate: {
        label: 'Round-trip Price Estimate',
        icon: <TrendingUp className="w-6 h-6" />,
        template: {
            type: 'RoundTripEstimate',
            id: '',
            title: 'Round-trip Flight Estimate',
            subtitle: 'Find the best prices for your route',
            fromLocation: '',
            toLocation: '',
            priceEstimate: undefined
        }
    },
    CheapestAirline: {
        label: 'Cheapest Airline',
        icon: <TrendingDown className="w-6 h-6" />,
        template: {
            type: 'CheapestAirline',
            id: '',
            title: 'Cheapest Airlines',
            subtitle: 'Compare airline prices and find the best deals',
            fromLocation: '',
            toLocation: '',
            cheapestAirline: '',
            priceData: []
        }
    },
    AirlineFlights: {
        label: 'Airline Flights',
        icon: <Calendar className="w-6 h-6" />,
        template: {
            type: 'AirlineFlights',
            id: '',
            title: 'Airline Flights',
            subtitle: 'Find flights from your preferred airline',
            fromLocation: '',
            toLocation: '',
            airlineName: '',
            flights: []
        }
    },
    StopsAnalysisSection: {
        label: 'Stops Analysis',
        icon: <BarChart3 className="w-6 h-6" />,
        template: {
            type: 'StopsAnalysisSection',
            id: '',
            title: 'Flight Stops Analysis',
            subtitle: 'Compare prices by number of stops',
            fromLocation: '',
            toLocation: '',
            stopsData: undefined
        }
    }
} as const;
