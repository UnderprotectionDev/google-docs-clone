interface DocumentIDPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIDPage({ params }: DocumentIDPageProps) {
  const { documentId } = await params;
  return <div>Document ID: {documentId}</div>;
}
