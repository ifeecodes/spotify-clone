import { HandleSSOCallback } from "@clerk/react";

export default function SSOCallback() {
  return (
    <HandleSSOCallback
      navigateToApp={({ decorateUrl }) => {
       

        window.location.assign(decorateUrl("/auth-callback"));
      }}
      navigateToSignIn={() => window.location.assign("/sign-in")}
      navigateToSignUp={() => window.location.assign("/sign-in/continue")}
    />
  );
}