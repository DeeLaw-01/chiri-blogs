import React from 'react';
import { ReturnFlightSection as ReturnFlightSectionType } from '@/ui/shadcn/blog/types';
import { Button } from '@/ui/shadcn/ui/button';
import { Plus, X } from 'lucide-react';
import EditableInput from '@/ui/shadcn/blog/components/EditableInput';

interface ReturnFlightSectionProps {
    section: ReturnFlightSectionType;
    index: number;
    onUpdate: (sectionData: Partial<ReturnFlightSectionType>) => void;
}

const ReturnFlightSection: React.FC<ReturnFlightSectionProps> = ({ section, onUpdate }) => {
    // Ensure flights is always an array
    const flights = section.flights || [];

    const addFlight = () => {
        onUpdate({
            flights: [
                ...flights,
                {
                    id: `flight-${Date.now()}`,
                    departureDate: new Date().toISOString().split('T')[0],
                    returnDate: new Date().toISOString().split('T')[0],
                    price: '$0',
                    airline: 'Airline Name'
                }
            ]
        });
    };

    const removeFlight = (id: string) => {
        onUpdate({
            flights: flights.filter(flight => flight.id !== id)
        });
    };

    const updateFlight = (id: string, field: keyof typeof flights[0], value: string) => {
        onUpdate({
            flights: flights.map(flight =>
                flight.id === id ? { ...flight, [field]: value } : flight
            )
        });
    };

    const updateTitle = (value: string) => {
        onUpdate({ title: value });
    };

    return (
        <div className="space-y-4">
            <EditableInput
                initialValue={section.title}
                onBlur={updateTitle}
                className="text-xl font-semibold"
            />
            <div className="grid gap-4">
                {flights.map((flight) => (
                    <div key={flight.id} className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow">
                        <EditableInput
                            initialValue={flight.departureDate}
                            onBlur={(value) => updateFlight(flight.id, 'departureDate', value)}
                            className="text-sm text-gray-500"
                        />
                        <span>→</span>
                        <EditableInput
                            initialValue={flight.returnDate}
                            onBlur={(value) => updateFlight(flight.id, 'returnDate', value)}
                            className="text-sm text-gray-500"
                        />
                        <EditableInput
                            initialValue={flight.price}
                            onBlur={(value) => updateFlight(flight.id, 'price', value)}
                            className="font-bold"
                        />
                        <EditableInput
                            initialValue={flight.airline}
                            onBlur={(value) => updateFlight(flight.id, 'airline', value)}
                            className="text-sm text-gray-500"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFlight(flight.id)}
                            className="ml-auto"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                ))}
            </div>
            <Button onClick={addFlight} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Return Flight
            </Button>
        </div>
    );
};

export default ReturnFlightSection; 