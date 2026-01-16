import { Button } from "../ui/button";
import useAuth from "./useAuth";

export default function AuthCustomHook() {
  //call custom hook to check if user is authenticated
  const { isAuthenticated } = useAuth();

    const handleAuthentication = () => {
      //simulate authentication by setting token in localStorage
      window.localStorage.setItem("token", "dummyToken");

      // Manually dispatch storage event for same tab
      window.dispatchEvent(new Event("storage"));
    };

  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold self-center">Auth Custom Hook</p>
      <Button className="w-sm" onClick={handleAuthentication}>
        Access With Authenticate
      </Button>

      {isAuthenticated ? (
        <div className="text-green-600">
          User is Authenticated: You can access app
        </div>
      ) : (
        <div className="text-red-600">
          User is NOT Authenticated: You cannot access app
        </div>
      )}
    </div>
  );
}
