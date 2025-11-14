import React from 'react';
import { TableSection as TableSectionType } from '@/ui/shadcn/blog/types';
import { Button } from '@/ui/shadcn/ui/button';
import { Plus, Trash2 } from 'lucide-react';

interface TableSectionProps {
    section: TableSectionType;
    index: number;
    onUpdate?: (section: TableSectionType) => void;
}

const TableSection: React.FC<TableSectionProps> = ({ section, index, onUpdate }) => {
    const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
        if (!onUpdate) return;
        const newData = [...section.data];
        newData[rowIndex][colIndex] = value;
        onUpdate({ ...section, data: newData });
    };

    const addRow = () => {
        if (!onUpdate) return;
        const newRow = new Array(section.headers.length).fill('');
        onUpdate({ ...section, data: [...section.data, newRow] });
    };

    const addColumn = () => {
        if (!onUpdate) return;
        const newHeaders = [...section.headers, 'New Column'];
        const newData = section.data.map(row => [...row, '']);
        onUpdate({ ...section, headers: newHeaders, data: newData });
    };

    const deleteRow = (rowIndex: number) => {
        if (!onUpdate) return;
        const newData = section.data.filter((_, index) => index !== rowIndex);
        onUpdate({ ...section, data: newData });
    };

    const deleteColumn = (colIndex: number) => {
        if (!onUpdate) return;
        const newHeaders = section.headers.filter((_, index) => index !== colIndex);
        const newData = section.data.map(row => row.filter((_, index) => index !== colIndex));
        onUpdate({ ...section, headers: newHeaders, data: newData });
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-end gap-2 mb-2">
                <Button variant="outline" size="sm" onClick={addRow}>
                    <Plus className="w-4 h-4 mr-1" /> Add Row
                </Button>
                <Button variant="outline" size="sm" onClick={addColumn}>
                    <Plus className="w-4 h-4 mr-1" /> Add Column
                </Button>
            </div>
            <div className="w-full overflow-x-auto border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {section.headers.map((header, index) => (
                                <th key={index} className="px-6 py-3 text-left">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={header}
                                            onChange={(e) => {
                                                if (!onUpdate) return;
                                                const newHeaders = [...section.headers];
                                                newHeaders[index] = e.target.value;
                                                onUpdate({ ...section, headers: newHeaders });
                                            }}
                                            className="w-full p-1 text-sm font-medium text-gray-500 border rounded"
                                        />
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => deleteColumn(index)}
                                            className="p-1 h-7"
                                        >
                                            <Trash2 className="w-4 h-4 text-gray-500" />
                                        </Button>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {section.data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={cell}
                                            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                                            className="w-full p-1 text-sm text-gray-500 border rounded"
                                        />
                                    </td>
                                ))}
                                <td className="px-2 py-4">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => deleteRow(rowIndex)}
                                        className="p-1 h-7"
                                    >
                                        <Trash2 className="w-4 h-4 text-gray-500" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableSection; 