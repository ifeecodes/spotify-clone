import SectionGridSkeleton from "@/components/skeletons/SectionGridSkeleton";
import { Button } from "@/components/ui/button";

const SectionGrid = ({ title, songs, isLoading }: { title: string; songs: any[]; isLoading: boolean }) => {
    if (isLoading) return <SectionGridSkeleton/>
  return (
    <div className='mb-8'>
    <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl sm:text-2xl font-bold'>{title}</h2>
        <Button variant='link' className='text-sm text-zinc-400 hover:text-white'>
            Show all
        </Button>
    </div>
      
    </div>
  )
}

export default SectionGrid

