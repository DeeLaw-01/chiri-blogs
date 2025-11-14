import React from 'react';
import { Button } from '@/ui/shadcn/ui/button';
import { Input } from '@/ui/shadcn/ui/input';
import { Textarea } from '@/ui/shadcn/ui/textarea';

interface Fact {
    label: string;
    value: string;
    description: string;
}

interface QuickFactsSection {
    type: 'QuickFacts';
    id: string;
    title: string;
    subtitle: string;
    facts: Fact[];
}

interface QuickFactsSectionProps {
    section: QuickFactsSection;
    index: number;
    onUpdate: (data: QuickFactsSection) => void;
}

const QuickFactsSection: React.FC<QuickFactsSectionProps> = ({ section, onUpdate }) => {
    const handleFactChange = (fIndex: number, field: keyof Fact, value: string) => {
        const newFacts = section.facts.map((f: Fact, i: number) => {
            if (i === fIndex) {
                return { ...f, [field]: value };
            }
            return f;
        });
        onUpdate({ ...section, facts: newFacts });
    };

    return (
        <div className="space-y-4">
            <Input
                value={section.title || ''}
                onChange={(e) => onUpdate({ ...section, title: e.target.value })}
                placeholder="Section Title"
                className="mb-2"
            />
            <Input
                value={section.subtitle || ''}
                onChange={(e) => onUpdate({ ...section, subtitle: e.target.value })}
                placeholder="Section Subtitle"
                className="mb-4"
            />
            {section.facts && section.facts.map((fact: Fact, fIndex: number) => (
                <div key={fIndex} className="border p-4 rounded">
                    <Input
                        value={fact.label}
                        onChange={(e) => handleFactChange(fIndex, 'label', e.target.value)}
                        placeholder="Label"
                        className="mb-2"
                    />
                    <Input
                        value={fact.value}
                        onChange={(e) => handleFactChange(fIndex, 'value', e.target.value)}
                        placeholder="Value"
                        className="mb-2"
                    />
                    <Textarea
                        value={fact.description}
                        onChange={(e) => handleFactChange(fIndex, 'description', e.target.value)}
                        placeholder="Description"
                    />
                </div>
            ))}
            <Button
                variant="outline"
                onClick={() => onUpdate({
                    ...section,
                    facts: [...section.facts, { label: '', value: '', description: '' }]
                })}
            >
                Add Fact
            </Button>
        </div>
    );
};

export default QuickFactsSection; 