import React from 'react';
import { ChartSection as ChartSectionType } from '@/ui/shadcn/blog/types';
import EditableInput from '@/ui/shadcn/blog/components/EditableInput';
import Image from 'next/image';

interface ChartSectionProps {
    section: ChartSectionType;
    index: number;
    onUpdate: (data: { image: string; content: string; title: string }) => void;
}

const ChartSection: React.FC<ChartSectionProps> = ({ section, index, onUpdate }) => {
    return (
        <div className="space-y-4">
            <EditableInput
                initialValue={section.title}
                onBlur={(title) => onUpdate({ ...section, title })}
                className="text-xl font-semibold"
            />
            <div className="space-y-4">
                {section.image && (
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden border">
                        <Image
                            src={section.image}
                            alt={section.title || 'Chart image'}
                            fill
                            className="object-contain bg-white"
                        />
                    </div>
                )}
                <div className="mt-4">
                    <EditableInput
                        initialValue={section.content}
                        onBlur={(content) => onUpdate({ ...section, content })}
                        className="text-gray-600"
                        multiline
                        placeholder="Add description or analysis for the chart..."
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartSection; 