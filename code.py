import os

def combine_codebase_to_markdown(output_filename="combined_nextjs_codebase.md"):
    project_root = os.path.dirname(os.path.abspath(__file__))
    output_filepath = os.path.join(project_root, output_filename)

    # Define the files and directories to include based on the new structure
    # and the screenshot provided.
    # Categorize for better organization in the output markdown.

    # Files that are primarily configuration or specific non-code files at the root/docs level
    doc_and_root_config_files = [
        "README.md",
        "package.json",
        "next.config.js",
        "tsconfig.json",
        "postcss.config.js",
        "tailwind.config.js",
        "pnpm-lock.yaml", # if you are using pnpm
        "components.json", # if present
        "middleware.ts",
        ".eslintrc.json",
        ".gitignore",
        ".env.example",
        "next-env.d.ts",
    ]

    # Directories that contain Next.js code (TS/JS, JSX/TSX), CSS, etc.
    nextjs_code_dirs = [
        "app",
        "components",
        "lib", # assuming this contains utility functions, not just Python
    ]

    # Helper to determine code block language for markdown formatting
    def get_code_block_type(filepath):
        ext = os.path.splitext(filepath)[1].lower()
        if ext == ".ts" or ext == ".tsx":
            return "typescript"
        elif ext == ".js" or ext == ".jsx":
            return "javascript"
        elif ext == ".css":
            return "css"
        elif ext == ".json":
            return "json"
        elif ext == ".md":
            return "markdown"
        elif ext == ".txt":
            return "text"
        elif ext == ".yml" or ext == ".yaml":
            return "yaml"
        # For image files, we won't embed content, just note their presence
        elif ext in [".png", ".ico", ".jpg", ".jpeg", ".gif", ".svg"]:
            return "image"
        # For dotfiles without common extensions
        elif os.path.basename(filepath) in [".gitignore", ".env.example"]:
            return "text"
        return "" # Default to no specific language if unknown

    with open(output_filepath, "w", encoding="utf-8") as outfile:
        outfile.write("# Combined Next.js Project Codebase\n\n")
        outfile.write("This document contains the consolidated code from key Next.js project files and directories.\n\n")

        # Process Documentation and Root Configuration Files
        outfile.write("## Root Configuration and Documentation\n\n")
        for filename in doc_and_root_config_files:
            filepath = os.path.join(project_root, filename)
            if os.path.exists(filepath) and os.path.abspath(filepath) != os.path.abspath(output_filepath):
                outfile.write(f"---\n### File: `{filename}`\n---\n\n")
                code_type = get_code_block_type(filename)
                
                # Handle image files specifically - don't embed content
                if code_type == "image":
                    outfile.write(f"![{filename}]({filename})\n\n") # Markdown image link
                    outfile.write(f"*(Content of {filename} (image file) is not embedded)*\n\n")
                    continue

                outfile.write(f"```{code_type}\n")
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        outfile.write(f.read())
                except Exception as e:
                    outfile.write(f"# Error reading file {filename}: {e}\n")
                outfile.write("\n```\n\n")
            else:
                if os.path.abspath(filepath) != os.path.abspath(output_filepath):
                    outfile.write(f"---\n### File: `{filename}` (Not Found or Excluded)\n---\n\n")

        # Process Next.js Application Directories (app, components, lib)
        for dirname in nextjs_code_dirs:
            dir_path = os.path.join(project_root, dirname)
            if os.path.isdir(dir_path):
                outfile.write(f"## Directory: `{dirname}`\n\n")
                for root, dirs, files in os.walk(dir_path):
                    # Exclude common build/cache directories
                    dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '__pycache__', 'dist', 'out']]
                    
                    files.sort()
                    for file in files:
                        # Include relevant Next.js file types
                        if any(file.endswith(ext) for ext in [".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md"]):
                            filepath = os.path.join(root, file)
                            relative_filepath = os.path.relpath(filepath, project_root)
                            outfile.write(f"---\n### File: `{relative_filepath}`\n---\n\n")
                            
                            code_type = get_code_block_type(file)
                            outfile.write(f"```{code_type}\n")
                            try:
                                with open(filepath, "r", encoding="utf-8") as f:
                                    outfile.write(f.read())
                            except Exception as e:
                                outfile.write(f"# Error reading file {relative_filepath}: {e}\n")
                            outfile.write("\n```\n\n")
                        elif any(file.endswith(ext) for ext in [".png", ".ico", ".jpg", ".jpeg", ".gif", ".svg"]):
                             filepath = os.path.join(root, file)
                             relative_filepath = os.path.relpath(filepath, project_root)
                             outfile.write(f"---\n### File: `{relative_filepath}` (Image)\n---\n\n")
                             outfile.write(f"![{file}]({relative_filepath})\n\n")
                             outfile.write(f"*(Content of {relative_filepath} (image file) is not embedded)*\n\n")
            else:
                outfile.write(f"## Directory: `{dirname}` (Not Found)\n\n")

    print(f"Codebase combined into {output_filepath}")

if __name__ == "__main__":
    combine_codebase_to_markdown()