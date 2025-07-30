// lib/api/rag-api-types.ts

// --- API Request/Response Models ---

export type IngestResponse = {
    session_id: string;
    // CORRECTED: Make status more specific
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
  
  export type StatusResponse = {
    session_id: string;
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
  
  export type ChatRequest = {
    question: string;
    model_id?: string;
  };
  
  export type ChatResource = {
    source: string;
    text_snippet: string;
    page?: number; // Optional for PDFs
    line_range?: string; // Optional for PDFs
  };
  
  export type ChatResponse = {
    answer: string;
    resources: ChatResource[];
  };
  
  export type FAQGenerationResponse = {
    session_id: string;
    // CORRECTED: Make status more specific
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
  
  // --- Session Data Model (matches your Python SessionData Pydantic model) ---
  
  export type ChatMessage = {
    role: "user" | "assistant";
    content: string;
    timestamp: string; // ISO format datetime
    resources?: ChatResource[]; // Only for assistant messages
  };
  
  export type GeneratedFAQ = {
    question: string;
    answer: string;
  };
  
  export type SessionData = {
    user_session_id: string;
    input_type: string | null;
    input_value: string | null;
  
    processed_content?: string | null;
    pdf_file_content_b64?: string | null;
    generated_faqs?: GeneratedFAQ[];
    active_namespaces?: string[];
  
    chat_history: ChatMessage[];
  
    context_is_ready: boolean;
  
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
