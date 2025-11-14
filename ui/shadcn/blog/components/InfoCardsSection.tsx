import React from 'react';
import { Button } from '@/ui/shadcn/ui/button';
import { Plus, X } from 'lucide-react';
import { EditableInput } from '.';
import { InfoCardsSection as InfoCardsSectionType } from '@/ui/shadcn/blog/types';

interface InfoCardsSectionProps {
    section: InfoCardsSectionType;
    index: number;
    onUpdate: (section: InfoCardsSectionType) => void;
}

const InfoCardsSection: React.FC<InfoCardsSectionProps> = ({ section, index, onUpdate }) => {
    const [cards, setCards] = React.useState(section.cards || []);

    const handleAddCard = () => {
        const newCard = {
            id: `card-${Date.now()}`,
            title: '',
            data: '',
            description: ''
        };
        const newCards = [...cards, newCard];
        setCards(newCards);
        onUpdate({ ...section, cards: newCards });
    };

    const handleRemoveCard = (cardIndex: number) => {
        const newCards = cards.filter((_, i) => i !== cardIndex);
        setCards(newCards);
        onUpdate({ ...section, cards: newCards });
    };

    const updateCard = (index: number, field: keyof typeof cards[0], value: string) => {
        const newCards = cards.map((card, i) => {
            if (i === index) {
                return { ...card, [field]: value };
            }
            return card;
        });
        setCards(newCards);
        onUpdate({ ...section, cards: newCards });
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, i) => (
                    <div key={card.id} className="relative group p-4 border rounded-lg space-y-2">
                        <Button
                            size="sm"
                            variant="ghost"
                            className="absolute -right-2 -top-2 opacity-0 bg-neutral-700 transition-all text-white group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground rounded-full p-0 w-6 h-6"
                            onClick={() => handleRemoveCard(i)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <EditableInput
                            initialValue={card.title}
                            onBlur={(value) => updateCard(i, 'title', value)}
                            placeholder="Card Title"
                            className="mb-2"
                        />
                        <EditableInput
                            initialValue={card.data}
                            onBlur={(value) => updateCard(i, 'data', value)}
                            placeholder="Data Value"
                            className="mb-2"
                        />
                        <EditableInput
                            initialValue={card.description}
                            onBlur={(value) => updateCard(i, 'description', value)}
                            placeholder="Description"
                        />
                    </div>
                ))}
            </div>
            <Button variant="outline" onClick={handleAddCard}>
                <Plus className="w-4 h-4 mr-2" />
                Add Card
            </Button>
        </div>
    );
};

export default InfoCardsSection; 