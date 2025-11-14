import React from 'react';
import dynamic from 'next/dynamic';
import { Plus, Check } from 'lucide-react';
import { cn } from '@/src/utils/shadcn/cn';


interface InlineTextEditorProps {
    content: string;
    onSave: (content: string) => void;
    onCancel: () => void;
}

const InlineTextEditor: React.FC<InlineTextEditorProps> = ({
    content,
    onSave,
    onCancel
}) => {
    const [value, setValue] = React.useState(content);
    const [isSaving, setIsSaving] = React.useState(false);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
    };

    const handleSave = async () => {
        setIsSaving(true);
        onSave(value);
        // Animation duration
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-end gap-2">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={cn(
                        "px-4 py-2 text-sm font-medium text-white rounded-md relative transition-all duration-300",
                        isSaving ? "bg-green-500 w-[40px]" : "bg-primary hover:bg-green-700 w-[64px]"
                    )}
                >
                    <span className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                        isSaving ? "opacity-0" : "opacity-100"
                    )}>
                        Save
                    </span>
                    <span className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                        isSaving ? "opacity-100" : "opacity-0"
                    )}>
                        <Check className="w-5 h-5" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export const AddTextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-full h-12 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
    >
        <Plus className="w-5 h-5" />
    </button>
);

export default InlineTextEditor;