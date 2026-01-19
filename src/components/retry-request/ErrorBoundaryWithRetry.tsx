
import React from "react";
import { resetUsersPromise } from "../api/users";

export class ErrorBoundaryWithRetry extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  handleRetry = () => {
    resetUsersPromise(); // 🔥 THIS IS THE KEY
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4">
          <p className="text-red-500">{this.state.error?.message}</p>
          <button
            onClick={this.handleRetry}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
