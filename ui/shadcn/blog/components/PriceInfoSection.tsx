import React from 'react';
import { PriceInfoSection as PriceInfoSectionType } from '@/ui/shadcn/blog/types';
import { Button } from '@/ui/shadcn/ui/button';
import { Plus, X, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import EditableInput from '@/ui/shadcn/blog/components/EditableInput';

interface PriceInfoSectionProps {
    section: PriceInfoSectionType;
    index: number;
    onUpdate: (sectionData: Partial<PriceInfoSectionType>) => void;
}

const PriceInfoSection: React.FC<PriceInfoSectionProps> = ({ section, onUpdate }) => {
    const addPrice = () => {
        onUpdate({
            prices: [
                ...section.prices,
                {
                    id: `price-${Date.now()}`,
                    month: 'New Item',
                    price: '$0',
                    change: 'stable',
                    percentage: '0%'
                }
            ]
        });
    };

    const removePrice = (id: string) => {
        onUpdate({
            prices: section.prices.filter(price => price.id !== id)
        });
    };

    const updatePrice = (id: string, field: keyof typeof section.prices[0], value: string) => {
        onUpdate({
            prices: section.prices.map(price =>
                price.id === id ? { ...price, [field]: value } : price
            )
        });
    };

    const updateChange = (id: string) => {
        onUpdate({
            prices: section.prices.map(price => {
                if (price.id === id) {
                    const changes = ['up', 'stable', 'down'] as const;
                    const currentIndex = changes.indexOf(price.change);
                    const nextIndex = (currentIndex + 1) % changes.length;
                    return { ...price, change: changes[nextIndex] };
                }
                return price;
            })
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
                {section.prices.map((price) => (
                    <div key={price.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                        <EditableInput
                            initialValue={price.month}
                            onBlur={(value) => updatePrice(price.id, 'month', value)}
                            className="font-medium"
                        />
                        <EditableInput
                            initialValue={price.price}
                            onBlur={(value) => updatePrice(price.id, 'price', value)}
                            className="font-bold"
                        />
                        <button
                            onClick={() => updateChange(price.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            {price.change === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                            {price.change === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                            {price.change === 'stable' && <Minus className="w-4 h-4 text-gray-500" />}
                        </button>
                        <EditableInput
                            initialValue={price.percentage}
                            onBlur={(value) => updatePrice(price.id, 'percentage', value)}
                            className="text-sm text-gray-500"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removePrice(price.id)}
                            className="ml-auto"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                ))}
            </div>
            <Button onClick={addPrice} variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Price
            </Button>
        </div>
    );
};

export default PriceInfoSection; 