import { IntResponse } from "./response";

export function createIResponse(response: any): IntResponse {
  return {
    success: true,
    response: response
  };
}

export function createIError(errorCode: number, errorMsg: string): IntResponse {
  return {
    success: false,
    response: {
      errorCode: errorCode,
      errorMsg: errorMsg
    }
  };
}
