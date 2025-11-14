import React from 'react';
import { Button } from '@/ui/shadcn/ui/button';
import { Plus } from 'lucide-react';
import { Input } from '@/ui/shadcn/ui/input';
import PhotoUploaderSquare from '@/components/Uploaders/PhotoUploaderSquare';
import EditableInput from '@/ui/shadcn/blog/components/EditableInput';

interface FlightListSectionProps {
    section: any;
    index: number;
    onUpdate: (flights: any[]) => void;
}

const FlightListSection: React.FC<FlightListSectionProps> = React.memo(({ section, index, onUpdate }) => {
    const updateFlight = (fIndex: number, field: string, value: string) => {
        const newFlights = section.flights.map((f: any, i: number) => {
            if (i === fIndex) {
                return { ...f, [field]: value };
            }
            return f;
        });
        onUpdate(newFlights);
    };

    return (
        <div>
            {section.flights && section.flights.map((flight: any, fIndex: number) => (
                <div key={fIndex} className="mb-4 p-4 border rounded">
                    <EditableInput
                        initialValue={flight.from}
                        onBlur={(value) => updateFlight(fIndex, 'from', value)}
                        placeholder="From"
                        className="mb-2"
                    />
                    <EditableInput
                        initialValue={flight.to}
                        onBlur={(value) => updateFlight(fIndex, 'to', value)}
                        placeholder="To"
                        className="mb-2"
                    />
                    <Input
                        type="datetime-local"
                        value={flight.date}
                        onChange={(e) => updateFlight(fIndex, 'date', e.target.value)}
                        placeholder="Date"
                        className="mb-2"
                    />
                    <Input
                        type="time"
                        value={flight.duration}
                        onChange={(e) => updateFlight(fIndex, 'duration', e.target.value)}
                        placeholder="Duration"
                        className="mb-2"
                    />
                    <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={flight.price}
                        onChange={(e) => updateFlight(fIndex, 'price', e.target.value)}
                        placeholder="Price"
                        className="mb-2"
                    />
                </div>
            ))}
            <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdate([...section.flights, {
                    from: '',
                    to: '',
                    date: new Date().toISOString().slice(0, 16), // Current date-time in yyyy-MM-ddThh:mm format
                    duration: '00:00',
                    price: '0.00'
                }])}
            >
                <Plus className="w-4 h-4 mr-2" /> Add Flight
            </Button>
        </div>
    );
});

FlightListSection.displayName = 'FlightListSection';

export default FlightListSection; 