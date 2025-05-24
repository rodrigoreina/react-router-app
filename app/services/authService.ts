import type { ApiResponse, LoginRequest, User } from "app/types/auth";
import { apiService } from "./api";
import { API_ENDPOINTS } from "app/utils/constants";

export class AuthService {
  async login(credentials: LoginRequest): Promise<{ success: boolean, user?: User, message?: string }> {
    try {
      const response = await apiService.post<ApiResponse<{ user: User }>>(
        API_ENDPOINTS.LOGIN,
        credentials,
      );

      if (response.status === 200) {
        return {
          success: true,
          user: response.data.data?.user,
        };
      }

      return {
        success: false,
        message: response.data.message || 'Error en el login',
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Error de conexión',
      };
    }
  };

  async getCurrentUser(): Promise<{ success: boolean, user?: User, message?: string }> {
    try {
      const response = await apiService.get<ApiResponse<{ user: User }>>(
        API_ENDPOINTS.GET_CURRENT_USER
      );

      if (response.status === 200) {
        return {
          success: true,
          user: response.data.data?.user,
        };
      }

      return {
        success: false,
        message: response.data.message || 'Usuario no autenticado',
      };
    } catch (error: any) {
      if (error.status === 401) {
        return {
          success: false,
          message: error.response?.data?.message || 'Sesión expirada o no válida',
        };
      }

      return {
        success: false,
        message: error.response?.data?.message || 'Error al verificar autenticación',
      };
    }
  }

  async logout(): Promise<void> {
    try {
      // TODO Logout
      console.log('Logout realizado');
    } catch (error) {
      console.error('Error en logout:', error);
    }
  }
}

export const authService = new AuthService();