'use client'

import React from 'react'
import { Section } from '@/ui/shadcn/blog/types'
import { renderPreviewSection } from '@/src/utils/shadcn/blog/previewRenderers'
import Image from 'next/image'

interface BlogPreviewProps {
    sections: Section[]
    title: string
    coverImage?: string
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ sections, title, coverImage }) => {
    console.log("sections", sections);
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-8">
            {coverImage && (
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            {sections.map((section, index) => (
                <div key={section.id || index}>
                    {renderPreviewSection(section)}
                </div>
            ))}
        </div>
    )
}

export default BlogPreview 