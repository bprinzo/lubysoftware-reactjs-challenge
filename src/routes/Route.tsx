import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { useData } from '../hooks/DataContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { userData } = useData();

  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivate === !!userData.id ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/user' }} />
        );
      }}
    />
  );
};

export default Route;
