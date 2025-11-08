declare module '@apiverve/silverprice' {
  export interface silverpriceOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface silverpriceResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class silverpriceWrapper {
    constructor(options: silverpriceOptions);

    execute(callback: (error: any, data: silverpriceResponse | null) => void): Promise<silverpriceResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: silverpriceResponse | null) => void): Promise<silverpriceResponse>;
    execute(query?: Record<string, any>): Promise<silverpriceResponse>;
  }
}
