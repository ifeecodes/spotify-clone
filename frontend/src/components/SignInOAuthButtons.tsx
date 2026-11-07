import { Button } from "./ui/button";
import { useSignIn } from "@clerk/react";

export default function SignInOAuthButtons() {
  const { signIn, errors } = useSignIn();

  const signInWithGoogle = async () => {
    const { error } = await signIn.sso({
      strategy: "oauth_google",
      redirectCallbackUrl: "/sso-callback",
      redirectUrl: "/auth-callback",
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant={"secondary"}
        onClick={signInWithGoogle}
        className="w-full text-white border-zinc-200 h-11"
      >
        Continue with Google
      </Button>

      {errors?.fields?.identifier && (
  <p role="alert">{errors.fields.identifier.message}</p>
)}
    </>
  );
}
