import { Suspense, use } from "react";
import { getUsers } from "../api/users";
import { ErrorBoundaryWithRetry } from "./ErrorBoundaryWithRetry";

function Users() {
  const data = use(getUsers());

  return (
    <ul className="mt-4">
      {data.users.map((u) => (
        <li key={u.id}>{u.firstName}</li>
      ))}
    </ul>
  );
}

export default function RetryRequest() {
  return (
    <div className="p-4">
      <p className="font-bold text-lg text-center">Retry Failed API Request</p>

      <ErrorBoundaryWithRetry>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <Users />
        </Suspense>
      </ErrorBoundaryWithRetry>
    </div>
  );
}
