import React, { useState } from "react";
import { Button } from "../ui/button";

// Props accepted by ErrorBoundary
interface ErrorBoundaryProps {
  // Any child component wrapped inside ErrorBoundary
  children: React.ReactNode;
}

// Internal state of ErrorBoundary
interface ErrorBoundaryState {
  // Flag to decide whether fallback UI should be shown
  hasError: boolean;
  // Store actual error for debugging / display
  error?: Error;
}

//ErrorBoundary MUST be a Class component
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  // Initial state
  state: ErrorBoundaryState = {
    hasError: false,
  };

  /**
   * This lifecycle method is called when
   * a child component throws an error during render
   * Used to update state so fallback UI can be shown
   */
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  /**
   * Called after the error is caught
   * Useful for logging errors to monitoring services
   * (Sentry, Datadog, NewRelic, etc.)
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error:", error.message);

    // This shows the component tree where error happened
    console.error("Component Stack:", errorInfo.componentStack);
  }

  render() {
    // If an error occurred, show fallback UI
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600">
          <h2 className="font-bold text-lg">Something went wrong 🚨</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    // Otherwise render children normally
    return this.props.children;
  }
}

// Component that deliberately throws error during render
function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  // Error MUST be thrown during render
  // so that ErrorBoundary can catch it
  if (shouldThrow) {
    throw new Error("Throwing custom error to check error boundary");
  }

  return <p>No error yet</p>;
}


export default function ErrorBoundaryExample() {
  // Controls when the error should be thrown
  const [throwError, setThrowError] = useState(false);
  
    return (
      // Wrapping components with ErrorBoundary
      <ErrorBoundary>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold self-center">
            Error Boundary Example
          </p>

          {/* Error will be thrown here during render */}
          <BuggyComponent shouldThrow={throwError} />

          {/* Clicking button updates state and triggers re-render */}
          <Button
            className="w-sm self-center"
            onClick={() => setThrowError(true)}
          >
            Click Me To Generate Error!!!
          </Button>
        </div>
      </ErrorBoundary>
    );
}
