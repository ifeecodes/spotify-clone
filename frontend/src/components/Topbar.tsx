import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router";
import { Show, SignOutButton, UserButton } from '@clerk/react'
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";

const TopBar = () => {
  const {isAdmin} = useAuthStore();
  return (
    <div
      className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 
      backdrop-blur-md z-10"
    >
      <div className="flex gap-2 items-center">
        
       <img src="/spotify.png" className="size-8" alt="Spotify logo" />
        Spotify
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2" /> Admin Dashboard
          </Link>
        )}

<Show when="signed-in">
         <SignOutButton />
        </Show>
        <Show when="signed-out">
            <SignInOAuthButtons/>
        </Show>

        <UserButton/>

      </div>
    </div>
  );
};

export default TopBar;
