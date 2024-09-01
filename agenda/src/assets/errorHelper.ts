import axios from "axios";

export type ErrorResponse = {
  message: string;
  status?: number;
};

export const handleError = (error: unknown): ErrorResponse => {
  // Si el error es un AxiosError
  console.log(error)
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.response?.data ||
      error.response?.data?.error ||
      "Error en la solicitud";
      if (message === 'Token ha expirado' || message === 'Token no proporcionado' ) {
        console.log('message', message)
        window.location.href= '/sesion'
      }
    return {
      message,
      status,
    };
  }

  // Si es un error de la propia aplicación o un error desconocido
  if (error instanceof Error) {
    return {
      message: error.message || "Ocurrió un error desconocido",
    };
  }

  // Si no es ningún tipo de error conocido
  return {
    message: "Error desconocido",
  };
};
