import React from 'react';
import { Button } from '@/ui/shadcn/ui/button';
import { Plus, X } from 'lucide-react';
import { EditableInput, InlineTextEditor } from '.';
import { InsightTabsSection as InsightTabsSectionType } from '@/ui/shadcn/blog/types';

interface InsightTabsSectionProps {
    section: InsightTabsSectionType;
    index: number;
    onUpdate: (section: InsightTabsSectionType) => void;
}

const InsightTabsSection: React.FC<InsightTabsSectionProps> = ({ section, index, onUpdate }) => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [tabs, setTabs] = React.useState(section.tabs || []);

    const handleAddTab = () => {
        if (tabs.length >= 3) return;
        const newTab = {
            id: `tab-${Date.now()}`,
            title: `Tab ${tabs.length + 1}`,
            content: ''
        };
        const newTabs = [...tabs, newTab];
        setTabs(newTabs);
        onUpdate({ ...section, tabs: newTabs });
    };

    const handleRemoveTab = (tabIndex: number) => {
        const newTabs = tabs.filter((_, i) => i !== tabIndex);
        setTabs(newTabs);
        setActiveTab(Math.min(activeTab, newTabs.length - 1));
        onUpdate({ ...section, tabs: newTabs });
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                {tabs.map((tab, i) => (
                    <div key={tab.id} className="relative group">
                        <Button
                            onClick={() => setActiveTab(i)}
                            variant={activeTab === i ? "default" : "outline"}
                            className="pr-8"
                        >
                            {tab.title}
                        </Button>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-transparent p-0 h-full aspect-square"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveTab(i);
                            }}
                        >
                            <X
                                color={activeTab === i ? 'white' : 'black'}
                                className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
                {tabs.length < 3 && (
                    <Button variant="outline" onClick={handleAddTab}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Tab
                    </Button>
                )}
            </div>

            {tabs.map((tab, i) => (
                <div key={tab.id} className={activeTab === i ? 'block' : 'hidden'}>
                    <EditableInput
                        initialValue={tab.title}
                        onBlur={(value) => {
                            const newTabs = tabs.map((t, idx) =>
                                idx === i ? { ...t, title: value } : t
                            );
                            setTabs(newTabs);
                            onUpdate({ ...section, tabs: newTabs });
                        }}
                        placeholder="Tab Title"
                        className="mb-4"
                    />
                    <InlineTextEditor
                        content={tab.content}
                        onSave={(content) => {
                            const newTabs = tabs.map((t, idx) =>
                                idx === i ? { ...t, content } : t
                            );
                            setTabs(newTabs);
                            onUpdate({ ...section, tabs: newTabs });
                        }}
                        onCancel={() => { }}
                    />
                </div>
            ))}
        </div>
    );
};

export default InsightTabsSection; 