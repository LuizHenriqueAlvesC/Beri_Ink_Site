import React from 'react';
import { Provider } from 'react-redux';
import store from '../Store'; // Ajuste conforme necessário

const ProviderRenderer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ProviderRenderer;