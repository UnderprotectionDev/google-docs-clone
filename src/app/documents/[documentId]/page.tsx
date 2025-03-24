import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIDPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIDPage({ params }: DocumentIDPageProps) {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
}
