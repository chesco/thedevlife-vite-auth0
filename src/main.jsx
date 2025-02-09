import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain={import.meta.env.VITE_AUTH0_DOMAIN}
  clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE
  }}
>
    <Provider store={store}>
    <App />

    </Provider>
  </Auth0Provider>,
);