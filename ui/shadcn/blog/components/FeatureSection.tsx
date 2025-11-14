"use client"
import React, { useEffect } from 'react';
import { Section } from '@/ui/shadcn/blog/types';
import { Button } from '@/ui/shadcn/ui/button';
import { Label } from '@/ui/shadcn/ui/label';
import { Trash2Icon } from 'lucide-react';

interface FeatureSectionProps {
    section: Section;
    index: number;
    onUpdate: (features: any) => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ section, index, onUpdate }) => {
    //@ts-ignore
    const [features, setFeatures] = React.useState(section.features || []);
    const [images, setImages] = React.useState<string[]>([]);

    useEffect(() => {
        onUpdate(features);
    }, [features]);

    useEffect(() => {
        if (images.length > 0) {
            const currentFeatureIndex = features.findIndex((f: any) => !f.image);
            if (currentFeatureIndex !== -1) {
                setFeatures((prev: any) => {
                    const newFeatures = [...prev];
                    newFeatures[currentFeatureIndex] = {
                        ...newFeatures[currentFeatureIndex],
                        image: images[0]
                    };
                    return newFeatures;
                });
                setImages([]); // Reset images after updating feature
            }
        }
    }, [images]);

    const handleAddFeature = () => {
        setFeatures((prev: any) => [
            ...prev,
            { title: '', description: '', image: '' }
        ]);
    };

    const handleFeatureChange = (index: number, key: string, value: string) => {
        setFeatures((prev: any) => {
            const newFeatures = [...prev];
            newFeatures[index][key] = value;
            return newFeatures;
        });
    };

    const handleRemoveFeature = (index: number) => {
        setFeatures((prev: any) => prev.filter((_: any, i: number) => i !== index));
    };

    return (
        <div className="space-y-4">
            {features.map((feature: any, i: any) => (
                <div key={i} className="border p-4 rounded">
                    <Label>Feature Title</Label>
                    <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => handleFeatureChange(i, 'title', e.target.value)}
                        className="border rounded p-2 w-full"
                    />
                    <Label>Description</Label>
                    <textarea
                        value={feature.description}
                        onChange={(e) => handleFeatureChange(i, 'description', e.target.value)}
                        className="border rounded p-2 w-full"
                    />
                    <Label>Image</Label>
                    <Button className="mt-2 bg-red-500 text-white hover:bg-red-600" onClick={() => handleRemoveFeature(i)}>
                        <Trash2Icon className="w-4 h-4" />
                    </Button>
                </div>
            ))}
            <Button onClick={handleAddFeature}>Add Feature</Button>
        </div>
    );
};

export default FeatureSection; 