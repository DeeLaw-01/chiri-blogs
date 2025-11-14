import React from 'react';
import { Button } from '@/ui/shadcn/ui/button';
import { GripVertical, X } from 'lucide-react';

interface SectionWrapperProps {
    section: any;
    index: number;
    onDelete: () => void;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    section,
    index,
    onDelete,
    children
}) => {
    return (
        <div >
        </div>
    );
};

export default SectionWrapper; 