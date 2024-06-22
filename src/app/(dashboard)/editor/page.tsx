import BreadCrumb from '@/components/breadcrumb';
import Editor from '@/components/lexical-editor';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbItems = [{ title: 'Lexical editor', link: '/dashboard/editor' }];



export default async function page() {

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Lexical editor`}
            description="Edit Your notes..."
          />
        </div>
        <Separator />
        <Editor />
     
      </div>
    </ScrollArea>
  );
}
