import React from 'react';
import { Button } from '@/ui/shadcn/ui/button';
import { Input } from '@/ui/shadcn/ui/input';
import { Textarea } from '@/ui/shadcn/ui/textarea';

interface FAQSectionProps {
    section: any;
    index: number;
    onUpdate: (questions: any[]) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ section, index, onUpdate }) => {
    const handleQuestionChange = (qIndex: number, field: string, value: string) => {
        const newQuestions = section.questions.map((q: any, i: number) => {
            if (i === qIndex) {
                return { ...q, [field]: value };
            }
            return q;
        });
        onUpdate(newQuestions);
    };

    return (
        <div className="space-y-4">
            {section.questions && section.questions.map((question: any, qIndex: number) => (
                <div key={qIndex} className="border p-4 rounded">
                    <Input
                        value={question.question}
                        onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                        placeholder="Question"
                        className="mb-2"
                    />
                    <Textarea
                        value={question.answer}
                        onChange={(e) => handleQuestionChange(qIndex, 'answer', e.target.value)}
                        placeholder="Answer"
                    />
                </div>
            ))}
            <Button
                variant="outline"
                onClick={() => onUpdate([...section.questions, { question: '', answer: '' }])}
            >
                Add Question
            </Button>
        </div>
    );
};

export default FAQSection; 