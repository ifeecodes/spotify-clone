import { buttonVariants } from "@/components/ui/button";
import { Show } from "@clerk/react";
import { cn } from "cn";
import { HomeIcon, Library, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const LeftSideBar = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      {/**Navigation */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
          <Link
            to={"/"}
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800",
              }),
            )}
          >
            <HomeIcon className="mr-2 size-5" />
            <span className="hidden md:inline">Home</span>
          </Link>

          <Show when="signed-in">
            <Link
              to={"/chat"}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className:
                    "w-full justify-start text-white hover:bg-zinc-800",
                }),
              )}
            >
              <MessageCircle className="mr-2 size-5" />
              <span className="hidden md:inline">Messages</span>
            </Link>
          </Show>
        </div>
      </div>


      {/**library section */}
      <div className="flex-1 rounded-lg bg-zinc-900 p-4">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-white">
                <Library className="size-5 mr-2 " />
                <span className="hidden md:inline">Playlists</span>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default LeftSideBar;
