import React from 'react';
import { Plus } from 'lucide-react';

interface AddTextButtonProps {
    onClick: () => void;
}

const AddTextButton: React.FC<AddTextButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full h-0.5 group opacity-0 hover:opacity-100 transition-opacity relative"
        >
            <div className="absolute inset-0 border-t border-dashed border-gray-300" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full">
                <Plus className="w-4 h-4 text-gray-500" />
            </div>
        </button>
    );
};

export default AddTextButton; 