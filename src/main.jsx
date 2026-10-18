import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled runtime error in application:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#060D1D] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#0B1528] border border-white/10 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-bold font-sans text-white">Something went wrong</h2>
            <p className="text-sm text-white/60">
              An unexpected display issue occurred. Please click below to refresh the page.
            </p>
            <button
              type="button"
              onClick={() => {
                window.location.href = '/';
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
