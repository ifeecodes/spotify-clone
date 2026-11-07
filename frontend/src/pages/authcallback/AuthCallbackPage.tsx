import { Card, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/react";
import { Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const AuthCallbackPage = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const [syncError, setSyncError] = useState<string | null>(null);
  const syncAttempted = useRef(false);

 if (!isLoaded || !user || syncAttempted.current) return;
  useEffect(() => {

    let cancelled = false;
     syncAttempted.current = true;
    const syncUser = async () => {
      try {
        await axiosInstance.post("/api/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        });
       
        if (!cancelled) navigate("/");
      } catch (error) {
        console.error("Error syncing user to the backend", error);
        if (!cancelled) {
          setSyncError("We couldn't save your account. Please try again.");
        }
      }
    };
    syncUser();
    return () => {
      cancelled = true;
    };
  }, [isLoaded, user, navigate]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          {syncError ? (
            <>
              <h3 className="text-red-400 text-xl font-bold">
                Account setup failed
              </h3>
              <p role="alert" className="text-zinc-400 text-sm">
                {syncError}
              </p>
            </>
          ) : (
            <>
              <Loader className="size-6 text-emerald-500 animate-spin" />
              <h3 className="text-zinc-400 text-xl font-bold">
                Logging you in
              </h3>
              <p className="text-zinc-400 text-sm">Saving your account...</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallbackPage;
