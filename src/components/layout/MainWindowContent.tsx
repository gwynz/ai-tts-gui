import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StoryList } from '@/components/stories/StoryList'

interface MainWindowContentProps {
  children?: React.ReactNode
  className?: string
}

export function MainWindowContent({
  children,
  className,
}: MainWindowContentProps) {
  return (
    <div className={cn('flex h-full flex-col bg-background', className)}>
      {children || (
        <Tabs defaultValue="stories" className="flex flex-1 flex-col h-full">
          <TabsList className="shrink-0 border-b rounded-none w-full justify-center px-4">
            <TabsTrigger value="stories">Story List</TabsTrigger>
            <TabsTrigger value="proxies">Proxy List</TabsTrigger>
            <TabsTrigger value="profiles">Profile List</TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="flex-1 overflow-auto p-4">
            <StoryList />
          </TabsContent>

          <TabsContent value="proxies" className="flex-1 p-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Proxy List
            </h2>
          </TabsContent>

          <TabsContent value="profiles" className="flex-1 p-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Profile List
            </h2>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
