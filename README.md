# PocketFlow RAG Chat UI

## Description
This is a starter kit for building applications with Next.js and Supabase, featuring a complete authentication system and a Retrieval-Augmented Generation (RAG) chat interface. Users can sign up, ingest content from websites or PDFs, and then have conversations with an AI that uses the ingested documents as its knowledge base.

## Run Locally
1. Clone repository:
   ```bash
   git clone https://github.com/ntrakiyski/pocketflow-rag-chat-ui.git
   cd pocketflow-rag-chat-ui
   ```2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run application:
   ```bash
   pnpm dev
   ```

## Live Demo
Test the live version: [https://pocketflow-ui.worfklow.org/protected](https://pocketflow-ui.worfklow.org/protected)

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js (App Router), Supabase
- **Database**: Supabase (PostgreSQL)
- **Tools**: Vercel, Git, pnpm, TypeScript
- **Other**: Supabase SSR (Authentication), REST API

## Approach & Architecture
The application is a full-stack Next.js project using a client-server architecture. It integrates Supabase for backend-as-a-service functionalities and a custom, separate backend API for the core RAG (Retrieval-Augmented Generation) capabilities.

### Custom RAG Backend API
This UI is powered by a custom FastAPI backend that handles all the heavy lifting of document processing and AI chat logic.

-   **High-Level Functionality**: The API ingests content from websites or PDFs, creates vector embeddings, stores them in a vector database, and uses this data to provide intelligent, context-aware answers to user questions.
-   **Architecture**: It uses a modular design with FastAPI for handling API requests, Celery for running heavy background tasks (like document ingestion and FAQ generation), Redis for managing session data and task queues, and Qdrant as the vector database for efficient AI searches.
-   **Repository**: You can find the full backend implementation here: [https://github.com/Ntrakiyski/rag-chat-pocketflow-fastapi](https://github.com/Ntrakiyski/rag-chat-pocketflow-fastapi)

### Frontend and Data Flow

- **Overall Architecture**: The application uses the Next.js App Router for both client-side interactivity and server-side rendering. Supabase manages all user authentication, while the custom RAG API handles all document-related and AI chat functions.

- **Key Components and Interactions**:
    - **Supabase Authentication (`lib/supabase`, `app/auth/*`)**: The system uses `@supabase/ssr` for robust, cookie-based authentication. The `middleware.ts` file intercepts requests to protect routes and ensure users are logged in.
    - **RAG API Client (`lib/api/rag-api-client.ts`)**: This client acts as a dedicated interface for the Next.js frontend to communicate with the custom FastAPI backend.
    - **State Management (`lib/contexts/*`)**:
        - `UserContext.tsx`: Tracks the authenticated user's state via Supabase.
        - `SessionContext.tsx`: Manages the lifecycle of document ingestion sessions, including polling the RAG API to check on the processing status.
    - **UI Components (`components/rag/*`)**: `IngestionForm.tsx` handles document submission, `SessionList.tsx` displays the user's processed documents, and `ChatComponent.tsx` provides the main chat interface.

- **Data Flow Through the System**:
    1. A user signs up or logs in via the UI, which interacts with **Supabase Auth**.
    2. The user submits a document (URL or PDF) through the `IngestionForm`.
    3. The UI sends the document to the **FastAPI RAG backend**, which starts a background ingestion task with **Celery** and immediately returns a `session_id`.
    4. The Next.js app saves a record linking the `user_id` (from Supabase) and the `session_id` in its own **Supabase database**.
    5. The UI polls the RAG API's status endpoint. Once the document is ready, the user can start a chat.
    6. In the `ChatComponent`, messages are sent to the RAG API. The API searches the **Qdrant** vector database for relevant information, generates an answer using an LLM, and returns it to the UI.
