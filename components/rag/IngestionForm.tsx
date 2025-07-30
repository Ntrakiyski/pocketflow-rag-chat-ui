// components/rag/IngestionForm.tsx

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { useSessions } from "@/lib/contexts/SessionContext";
import { Loader2, UploadCloud } from "lucide-react";

export function IngestionForm() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addSession } = useSessions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let response;
      if (file) {
        const formData = new FormData();
        formData.append("input_type", "pdf");
        formData.append("pdf_file", file);
        response = await ragApiClient.ingestContent(formData);
      } else if (url) {
        const formData = new FormData();
        formData.append("input_type", "website");
        formData.append("web_url", url);
        response = await ragApiClient.ingestContent(formData);
      } else {
        setError("Please provide a URL or upload a PDF.");
        return;
      }

      // addSession is now async, so await it
      await addSession({
        user_session_id: response.session_id,
        input_type: file ? "pdf" : "website",
        input_value: file ? file.name : url,
        status: response.status,
        message: response.message,
      });

      setUrl("");
      setFile(null);
    } catch (err: unknown) {
      // Improved error message for network/CORS issues
      let errorMessage = "An unexpected error occurred during ingestion.";
      if (err instanceof Error) {
        errorMessage = err.message;
        if (err.message.includes("Failed to fetch")) {
          errorMessage = "Network error: Could not connect to the RAG API. " +
                         "Please ensure the Python API is running and accessible (check CORS and URL in .env.local). " +
                         "Original error: " + err.message;
        }
      }
      setError(errorMessage);
      console.error("Ingestion error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Ingest New Content</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* URL Input */}
          <div className="grid gap-2">
            <Label htmlFor="url">Website URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setFile(null);
              }}
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <span className="flex-grow border-t border-border"></span>
            <span className="px-2">OR</span>
            <span className="flex-grow border-t border-border"></span>
          </div>

          {/* File Upload Input */}
          <div className="grid gap-2">
            <Label htmlFor="pdf-file">Upload PDF</Label>
            <Input
              id="pdf-file"
              type="file"
              accept=".pdf"
              onChange={(e) => {
                setFile(e.target.files ? e.target.files[0] : null);
                setUrl("");
              }}
              disabled={isLoading}
            />
            {file && (
              <p className="text-xs text-muted-foreground mt-1">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <UploadCloud className="mr-2 h-4 w-4" />
                Ingest Content
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}