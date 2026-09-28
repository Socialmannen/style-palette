import { useState } from 'react';
import { ChevronDown, Copy, Info, Settings2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../design-system/components/accordion';
import { Button } from '../design-system/components/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../design-system/components/collapsible';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../design-system/components/dialog';
import { Input } from '../design-system/components/input';
import { Popover, PopoverContent, PopoverTrigger } from '../design-system/components/popover';
import { Progress } from '../design-system/components/progress';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../design-system/components/sheet';
import { Skeleton } from '../design-system/components/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../design-system/components/tabs';
import { toast } from '../design-system/components/toast';
import { Tooltip, TooltipContent, TooltipTrigger } from '../design-system/components/tooltip';

function MotionSection({ name, description, children }: { name: string; description: string; children: React.ReactNode }) {
  return <section id={name.toLowerCase().replaceAll(' ', '-')} className="scroll-mt-28 border-t border-border py-10"><div className="mb-7"><p className="text-xs font-medium text-primary">@refined/{name.toLowerCase().replaceAll(' ', '-')}</p><h2 className="mt-2 font-display text-2xl font-semibold">{name}</h2><p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p></div>{children}</section>;
}

function PanelBody({ side }: { side: string }) {
  return <><SheetHeader><SheetTitle>{side} panel</SheetTitle><SheetDescription>A focused workspace that keeps the current page in context.</SheetDescription></SheetHeader><div className="grid gap-4 py-2"><label className="grid gap-2 text-sm font-medium">Project label<Input defaultValue="Northstar" /></label><div className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">Focus stays inside this panel until it closes.</div></div><SheetFooter><SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose><SheetClose asChild><Button>Apply changes</Button></SheetClose></SheetFooter></>;
}

export function MotionComponents() {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [progress, setProgress] = useState(64);
  const sides = ['left', 'right', 'top', 'bottom'] as const;
  return <>
    <MotionSection name="Sheet" description="Edge panels with focus lock, backdrop, Escape handling, outside-click dismissal, and four directions.">
      <div className="flex flex-wrap gap-3">{sides.map(side => <Sheet key={side}><SheetTrigger asChild><Button variant="outline">Open from {side}</Button></SheetTrigger><SheetContent side={side}><PanelBody side={side} /></SheetContent></Sheet>)}</div>
    </MotionSection>

    <MotionSection name="Dialog" description="A centered interruption for short decisions and focused forms.">
      <Dialog><DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Invite teammate</DialogTitle><DialogDescription>Send a workspace invitation without leaving the current view.</DialogDescription></DialogHeader><label className="grid gap-2 text-sm font-medium">Email address<Input type="email" placeholder="name@company.com" /></label><DialogFooter><DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose><DialogClose asChild><Button onClick={() => toast.success('Invitation prepared')}>Prepare invite</Button></DialogClose></DialogFooter></DialogContent></Dialog>
    </MotionSection>

    <MotionSection name="Accordion" description="Expandable content with animated height and a calm rotating indicator.">
      <Accordion type="single" collapsible className="max-w-2xl rounded-md border border-border px-5"><AccordionItem value="tokens"><AccordionTrigger>How do motion tokens work?</AccordionTrigger><AccordionContent>Durations and easing curves are defined once and reused across every component.</AccordionContent></AccordionItem><AccordionItem value="accessibility"><AccordionTrigger>What happens with reduced motion?</AccordionTrigger><AccordionContent>Transitions collapse to nearly instant state changes while all controls remain fully usable.</AccordionContent></AccordionItem><AccordionItem value="speed"><AccordionTrigger>Can projects change speed?</AccordionTrigger><AccordionContent>Set one root attribute to make every system animation faster or slower consistently.</AccordionContent></AccordionItem></Accordion>
    </MotionSection>

    <MotionSection name="Collapsible" description="A lighter reveal pattern for one related block.">
      <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="max-w-2xl rounded-md border border-border p-4"><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-medium">Advanced settings</p><p className="text-xs text-muted-foreground">Optional workspace controls</p></div><CollapsibleTrigger asChild><Button variant="ghost" size="icon" aria-label={collapsibleOpen ? 'Hide advanced settings' : 'Show advanced settings'}><ChevronDown className={`size-4 transition-transform duration-motion-normal ease-motion-standard ${collapsibleOpen ? 'rotate-180' : ''}`} /></Button></CollapsibleTrigger></div><CollapsibleContent><div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2"><Input aria-label="Workspace prefix" placeholder="Workspace prefix" /><Input aria-label="Default region" placeholder="Default region" /></div></CollapsibleContent></Collapsible>
    </MotionSection>

    <MotionSection name="Popover" description="Compact interactive content anchored to its trigger.">
      <Popover><PopoverTrigger asChild><Button variant="outline"><Settings2 className="size-4" /> Quick settings</Button></PopoverTrigger><PopoverContent align="start"><p className="text-sm font-semibold">Display density</p><p className="mt-1 text-xs text-muted-foreground">Choose how much information fits in each view.</p><div className="mt-4 flex gap-2"><Button size="sm">Comfortable</Button><Button size="sm" variant="ghost">Compact</Button></div></PopoverContent></Popover>
    </MotionSection>

    <MotionSection name="Tooltip" description="Short supporting labels for compact controls, with a deliberate delay.">
      <div className="flex gap-3"><Tooltip><TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Copy project link"><Copy className="size-4" /></Button></TooltipTrigger><TooltipContent>Copy project link</TooltipContent></Tooltip><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" aria-label="About this workspace"><Info className="size-4" /></Button></TooltipTrigger><TooltipContent side="right">About this workspace</TooltipContent></Tooltip></div>
    </MotionSection>

    <MotionSection name="Tabs" description="Keyboard-friendly switching between related views at the same level.">
      <Tabs defaultValue="overview" className="max-w-2xl"><TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger><TabsTrigger value="settings">Settings</TabsTrigger></TabsList><TabsContent value="overview" className="rounded-md border border-border bg-card p-5"><h3 className="font-display font-semibold">Project overview</h3><p className="mt-2 text-sm text-muted-foreground">A concise view of current progress and ownership.</p></TabsContent><TabsContent value="activity" className="rounded-md border border-border bg-card p-5"><h3 className="font-display font-semibold">Recent activity</h3><p className="mt-2 text-sm text-muted-foreground">Three updates were made today.</p></TabsContent><TabsContent value="settings" className="rounded-md border border-border bg-card p-5"><h3 className="font-display font-semibold">Project settings</h3><p className="mt-2 text-sm text-muted-foreground">Manage project-level preferences.</p></TabsContent></Tabs>
    </MotionSection>

    <MotionSection name="Toast" description="Non-blocking feedback that enters and leaves without interrupting the task.">
      <div className="flex flex-wrap gap-3"><Button onClick={() => toast.success('Changes saved')}>Success toast</Button><Button variant="outline" onClick={() => toast('Export started', { description: 'Your file will be ready shortly.' })}>Informational toast</Button><Button variant="destructive" onClick={() => toast.error('Could not archive project')}>Error toast</Button></div>
    </MotionSection>

    <MotionSection name="Skeleton" description="Reduced-motion-aware loading placeholders that mirror the incoming content.">
      <div className="max-w-md rounded-md border border-border bg-card p-5"><div className="flex items-center gap-4"><Skeleton className="size-11 rounded-full" /><div className="flex-1 space-y-2"><Skeleton className="h-4 w-36" /><Skeleton className="h-3 w-56 max-w-full" /></div></div><Skeleton className="mt-5 h-20 w-full" /></div>
    </MotionSection>

    <MotionSection name="Progress" description="Smooth determinate progress and a restrained indeterminate state.">
      <div className="grid max-w-2xl gap-6 sm:grid-cols-2"><div><div className="mb-2 flex justify-between text-sm"><span>Upload progress</span><span className="text-muted-foreground">{progress}%</span></div><Progress value={progress} /><div className="mt-3 flex gap-2"><Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>−10</Button><Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button></div></div><div><p className="mb-2 text-sm">Preparing workspace</p><Progress indeterminate aria-label="Preparing workspace" /></div></div>
    </MotionSection>
  </>;
}
