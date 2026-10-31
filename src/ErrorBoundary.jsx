import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      retryKey: 0,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('RouteGo Runtime Error:', error)
    console.error('Component Stack:', errorInfo.componentStack)
  }

  handleRetry = () => {
    this.setState((previousState) => ({
      hasError: false,
      retryKey: previousState.retryKey + 1,
    }))
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-card" role="alert">
            <div className="error-boundary-icon">⚠️</div>

            <h1>რაღაც შეცდომა მოხდა</h1>

            <p>
              RouteGo-ს მუშაობისას მოულოდნელი პრობლემა წარმოიშვა.
              გთხოვთ, სცადოთ ხელახლა.
            </p>

            <button
              type="button"
              onClick={this.handleRetry}
            >
              სცადეთ ხელახლა
            </button>
          </div>
        </div>
      )
    }

    return (
      <div key={this.state.retryKey}>
        {this.props.children}
      </div>
    )
  }
}

export default ErrorBoundary