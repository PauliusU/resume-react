import { Component } from "react";
import translations from "../translations";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  constructor(props) {
    super(props);
    this.errorMessage = translations[props.lang].errorMessage;
  }

  componentDidCatch(error, info) {
    console.log({ error, info });

    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    const errorMessage = this.errorMessage;

    if (hasError) {
      return <p>{errorMessage}</p>;
    }

    return children;
  }
}

export default ErrorBoundary;
