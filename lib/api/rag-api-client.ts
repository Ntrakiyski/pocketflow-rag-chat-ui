// lib/api/rag-api-client.ts

import {
    IngestResponse,
    StatusResponse,
    ChatRequest,
    ChatResponse,
    FAQGenerationResponse,
    SessionData,
  } from "./rag-api-types"; // We will create this file next
  import { getRagApiUrl } from "@/lib/env"; // This will be created soon
  
  const RAG_API_BASE_URL = getRagApiUrl();
  
  // Helper function for API requests
  async function callApi<T>(
    endpoint: string,
    method: string,
    body?: any,
    headers?: HeadersInit,
  ): Promise<T> {
    const url = `${RAG_API_BASE_URL}${endpoint}`;
  
    const requestHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...(headers as Record<string, string>),
    };
  
    const config: RequestInit = {
      method,
      headers: requestHeaders,
    };
  
    if (body) {
      if (body instanceof FormData) {
        delete requestHeaders["Content-Type"];
        config.body = body;
      } else {
        config.body = JSON.stringify(body);
      }
    }
  
    try {
      const response = await fetch(url, config);
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.detail ||
            `API Error: ${response.status} ${response.statusText}`,
        );
      }
  
      return await response.json();
    } catch (error) {
      console.error(`Error calling API endpoint ${endpoint}:`, error);
      throw error;
    }
  }
  
  // --- API Client Functions ---
  
  export const ragApiClient = {
    /**
     * Initiates content ingestion for a website URL or PDF file.
     * @param data - Either { input_type: 'website', web_url: string } or FormData for PDF.
     */
    ingestContent: async (
      data: { input_type: "website"; web_url: string } | FormData,
    ): Promise<IngestResponse> => {
      if (!(data instanceof FormData)) {
        const formData = new FormData();
        formData.append("input_type", data.input_type);
        formData.append("web_url", data.web_url);
        data = formData;
      }
      return callApi<IngestResponse>("/api/v1/ingest", "POST", data);
    },
  
    /**
     * Checks the status of a content ingestion job.
     * @param sessionId - The ID of the session.
     */
    getIngestionStatus: async (sessionId: string): Promise<StatusResponse> => {
      return callApi<StatusResponse>(`/api/v1/ingest/status/${sessionId}`, "GET");
    },
  
    /**
     * Submits a question to an active session and receives a context-aware answer.
     * @param sessionId - The ID of the session.
     * @param question - The user's question.
     */
    chat: async (sessionId: string, question: string): Promise<ChatResponse> => {
      return callApi<ChatResponse>(`/api/v1/chat/${sessionId}`, "POST", {
        question,
      });
    },
  
    /**
     * Initiates an asynchronous job to generate FAQs for an already ingested session.
     * @param sessionId - The ID of the session.
     */
    generateFaqs: async (sessionId: string): Promise<FAQGenerationResponse> => {
      return callApi<FAQGenerationResponse>(
        `/api/v1/faq/generate/${sessionId}`,
        "POST",
      );
    },
  
    /**
     * Retrieves the complete data object for a given session.
     * @param sessionId - The ID of the session.
     */
    getSession: async (sessionId: string): Promise<SessionData> => {
      return callApi<SessionData>(`/api/v1/session/${sessionId}`, "GET");
    },
  
    /**
     * Updates a session object with the provided data.
     * @param sessionId - The ID of the session.
     * @param updates - A partial object of session fields to update.
     */
    updateSession: async (
      sessionId: string,
      updates: Partial<SessionData>,
    ): Promise<SessionData> => {
      return callApi<SessionData>(`/api/v1/session/${sessionId}`, "PUT", updates);
    },
  };