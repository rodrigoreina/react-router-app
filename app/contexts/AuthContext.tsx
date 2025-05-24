import React, { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import { authService } from "app/services/authService";
import type { AuthContextType, LoginRequest, User } from "app/types/auth";

interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
}

type AuthAction =
  | { type: 'SET_LOADING', payload: boolean }
  | { type: 'SET_USER', payload: User | null }
  | { type: 'SET_INITIALIZED', payload: boolean }
  | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload, loading: false };
    case 'SET_INITIALIZED':
      return { ...state, initialized: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, loading: false };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  loading: true,
  initialized: false,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const checkAuth = async (): Promise<void> => {
    if (state.initialized) return;

    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const result = await authService.getCurrentUser();

      if (result.success && result.user) {
        dispatch({ type: 'SET_USER', payload: result.user });
      } else {
        dispatch({ type: 'SET_USER', payload: null });
      }
    } catch (error: any) {
      console.error('Error checking auth: ', error);
      dispatch({ type: 'SET_USER', payload: null });
    } finally {
      // TODO maybe this wont be true when catch an issue
      dispatch({ type: 'SET_INITIALIZED', payload: true });
    }
  };

  const login = async (credentials: LoginRequest): Promise<{ success: boolean, message?: string }> => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const result = await authService.login(credentials);

      if (result.success && result.user) {
        dispatch({ type: 'SET_USER', payload: result.user });
        return { success: true };
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
        return { success: false, message: result.message };
      }
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, message: 'Error inesperado durante el login' };
    }
  };

  const logout = (): void => {
    authService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextType = {
    user: state.user,
    loading: state.loading,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};