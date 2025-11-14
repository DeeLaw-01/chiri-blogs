"use client"
import React, { useState, useEffect } from 'react';
import { Input } from '@/ui/shadcn/ui/input';
import { Textarea } from '@/ui/shadcn/ui/textarea';

interface EditableInputProps {
    initialValue: string;
    onBlur: (value: string) => void;
    placeholder?: string;
    className?: string;
    multiline?: boolean;
    type?: string;
}

const EditableInput: React.FC<EditableInputProps> = ({
    initialValue,
    onBlur,
    placeholder,
    className,
    multiline = false,
    type = 'text'
}) => {
    const [value, setValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleBlur = () => {
        setIsEditing(false);
        if (value !== initialValue) {
            onBlur(value);
        }
    };

    return (
        <div className={className}>
            {isEditing ? (
                multiline ? (
                    <Textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        className="min-h-[100px]"
                        autoFocus
                    />
                ) : (
                    <Input
                        type={type}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        autoFocus
                    />
                )
            ) : (
                <div
                    onClick={() => setIsEditing(true)}
                    className="cursor-pointer p-2 border rounded hover:bg-gray-50"
                >
                    {value || placeholder}
                </div>
            )}
        </div>
    );
};

export default EditableInput; 