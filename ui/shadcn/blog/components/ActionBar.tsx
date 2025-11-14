import React from "react";
import { Button } from "@/ui/shadcn/ui/button";
import { Plus, Eye, Save, Loader2, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/ui/shadcn/ui/sheet";
import { Section } from "@/ui/shadcn/blog/types";
import { componentTypes } from "@/src/config/componentTypes";
import { BlogPreview } from ".";
import { useToast } from "@/src/hooks/use-toast";

interface ActionBarProps {
  onSave: () => void;
  isSaving: boolean;
  isDrafting: boolean;
  onAddSection: (type: string) => void;
  onSaveAsDraft: () => void;
  sections: Section[];
  title: string;
  coverImage?: string;
  templateType: string;
  metadata?: any;
  onValidationFail?: () => void;
  isEditing?: boolean;
}

const ActionBar: React.FC<ActionBarProps> = ({
  onSave,
  isSaving,
  isDrafting,
  onAddSection,
  onSaveAsDraft,
  sections,
  title,
  coverImage,
  isEditing,
}) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const handleAddSection = (type: string) => {
    onAddSection(type);
    setOpen(false);
  };

  const handleSaveAsDraft = async () => {
    if (!title) {
      toast({
        title: "Error",
        description: "Please add a title before saving as draft",
        variant: "destructive",
      });
      return;
    }
    onSaveAsDraft();
  };

  const handlePublish = () => {
    onSave();
  };

  return (
    <div className='fixed bottom-6 right-6 flex gap-3 z-50'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full shadow-lg'
          >
            <Plus className='w-5 h-5 mr-2' />
            Add Section
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <SheetHeader>
            <SheetTitle>Add Section</SheetTitle>
            <SheetDescription>
              Choose a section type to add to your template
            </SheetDescription>
          </SheetHeader>
          <div className='h-[calc(100vh-8rem)] overflow-y-auto py-4'>
            <div className='grid grid-cols-1 gap-4'>
              {Object.entries(componentTypes).map(([key, config]) => {
                return (
                  <Button
                    key={key}
                    variant='outline'
                    className='flex items-center justify-start gap-2 h-auto p-4'
                    onClick={() => {
                      handleAddSection(key);
                    }}
                  >
                    {config.icon}
                    <div className='flex flex-col items-start'>
                      <span className='font-medium'>{config.label}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            size='lg'
            className='rounded-full shadow-lg'
          >
            <Eye className='w-5 h-5 mr-2' />
            Preview
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-screen h-screen p-0 sm:max-w-none'
        >
          <div className='h-full overflow-y-auto p-6'>
            <BlogPreview
              sections={sections}
              title={title}
              coverImage={coverImage}
            />
          </div>
        </SheetContent>
      </Sheet>

      {!isEditing && (
        <Button
          onClick={handleSaveAsDraft}
          disabled={isDrafting}
          size='lg'
          variant='outline'
          className='rounded-full shadow-lg'
        >
          {isDrafting ? (
            <>
              <Loader2 className='w-5 h-5 mr-2 animate-spin' />
              Saving Draft...
            </>
          ) : (
            <>
              <FileText className='w-5 h-5 mr-2' />
              Save as Draft
            </>
          )}
        </Button>
      )}

      <Button
        onClick={handlePublish}
        disabled={isSaving}
        size='lg'
        className='rounded-full shadow-lg'
      >
        {isSaving ? (
          <>
            <Loader2 className='w-5 h-5 mr-2 animate-spin' />
            {isEditing ? "Saving..." : "Publishing..."}
          </>
        ) : (
          <>
            <Save className='w-5 h-5 mr-2' />
            {isEditing ? "Save Changes" : "Publish"}
          </>
        )}
      </Button>
    </div>
  );
};

export default ActionBar;
