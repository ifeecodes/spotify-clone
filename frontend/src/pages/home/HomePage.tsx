import TopBar from "@/components/Topbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import SectionGrid from "./components/SectionGrid";
import FeaturedSection from "./components/FeaturedSection";

const HomePage = () => {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();
  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);
  return (
    <div className="rounded-md overflow-hidden">
      <TopBar />
      <ScrollArea className='h-[calc(100vh-180px)]'>
				<div className='p-4 sm:p-6'>
					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Good afternoon</h1>
					<FeaturedSection/>
          </div>
          <div className="space-y-8">
            <SectionGrid title="Made for you" songs={madeForYouSongs} isLoading={isLoading} />
            <SectionGrid title="Trending now" songs={trendingSongs} isLoading={isLoading} />
          </div>

      </ScrollArea>
    </div>
  );
};

export default HomePage;
