import { useState } from "react";
import { Upload, File, Trash2, Download, CheckCircle, AlertCircle } from "lucide-react";

type CVFile = {
  id: string;
  filename: string;
  url: string;
  size: string;
  uploadedAt: string;
  active: boolean;
};

const MOCK_FILES: CVFile[] = [
  {
    id: "1",
    filename: "Resume_DevOps_2024_v3.pdf",
    url: "https://s3.amazonaws.com/portfolio-assets/cv/Resume_DevOps_2024_v3.pdf",
    size: "284 KB",
    uploadedAt: "2024-01-10",
    active: true,
  },
  {
    id: "2",
    filename: "Resume_DevOps_2023.pdf",
    url: "https://s3.amazonaws.com/portfolio-assets/cv/Resume_DevOps_2023.pdf",
    size: "256 KB",
    uploadedAt: "2023-07-15",
    active: false,
  },
];

export function AdminCV() {
  const [files, setFiles] = useState<CVFile[]>(MOCK_FILES);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type === "application/pdf") setSelectedFile(file);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file?.type === "application/pdf") setSelectedFile(file);
  }

  async function handleUpload() {
    if (!selectedFile) return;
    setUploading(true);
    setUploadStatus("idle");

    await new Promise((r) => setTimeout(r, 1800));

    const newFile: CVFile = {
      id: Date.now().toString(),
      filename: selectedFile.name,
      url: `https://s3.amazonaws.com/portfolio-assets/cv/${selectedFile.name}`,
      size: `${Math.round(selectedFile.size / 1024)} KB`,
      uploadedAt: new Date().toISOString().split("T")[0],
      active: false,
    };

    setFiles((fs) => [newFile, ...fs]);
    setUploading(false);
    setUploadStatus("success");
    setSelectedFile(null);
    setTimeout(() => setUploadStatus("idle"), 3000);
  }

  function setActive(id: string) {
    setFiles((fs) => fs.map((f) => ({ ...f, active: f.id === id })));
  }

  function deleteFile(id: string) {
    setFiles((fs) => fs.filter((f) => f.id !== id));
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[#e1fdff] text-[24px] tracking-[-0.5px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>CV / Resume</h1>
        <p className="text-[#849495] text-[12px] tracking-[0.28px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>Stored on S3-compatible object storage // AWS S3 / R2 / MinIO</p>
      </div>

      {/* Upload zone */}
      <div
        className={`rounded-[4px] border-2 border-dashed p-10 flex flex-col items-center justify-center gap-4 transition-colors ${
          dragging
            ? "border-[rgba(0,242,255,0.6)] bg-[rgba(0,242,255,0.05)]"
            : "border-[rgba(225,253,255,0.15)] bg-[rgba(10,10,10,0.4)]"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <Upload size={32} className="text-[#849495]" />
        <div className="text-center">
          <p className="text-[#e1fdff] text-[16px] mb-1" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600 }}>
            {selectedFile ? selectedFile.name : "Drop PDF here"}
          </p>
          <p className="text-[#849495] text-[13px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            PDF only · Max 10 MB · Uploaded to S3
          </p>
        </div>
        <label className="flex items-center gap-2 px-5 py-2.5 border border-[rgba(225,253,255,0.3)] text-[#e1fdff] rounded-[2px] text-[12px] tracking-[1.2px] uppercase cursor-pointer hover:border-[rgba(225,253,255,0.6)] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
          <File size={12} /> SELECT_FILE
          <input type="file" accept=".pdf" className="hidden" onChange={handleFileInput} />
        </label>
      </div>

      {/* Upload status */}
      {uploadStatus === "success" && (
        <div className="flex items-center gap-2 p-4 rounded-[2px] border border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.05)] text-[#00F2FF] text-[13px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
          <CheckCircle size={14} /> FILE_UPLOADED // S3 ACK RECEIVED
        </div>
      )}
      {uploadStatus === "error" && (
        <div className="flex items-center gap-2 p-4 rounded-[2px] border border-[rgba(255,80,80,0.3)] bg-[rgba(255,80,80,0.05)] text-red-400 text-[13px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
          <AlertCircle size={14} /> UPLOAD_FAILED // Check S3 credentials
        </div>
      )}

      {selectedFile && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="flex items-center justify-center gap-2 bg-[#e1fdff] text-[#00363a] px-6 py-3 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity disabled:opacity-60 shadow-[0_0_7.5px_rgba(0,242,255,0.3)] w-fit"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          <Upload size={12} />
          {uploading ? "UPLOADING..." : "UPLOAD_TO_S3"}
        </button>
      )}

      {/* File list */}
      <div>
        <p className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>[STORED_FILES]</p>
        <div className="flex flex-col gap-3">
          {files.map((file) => (
            <div
              key={file.id}
              className={`backdrop-blur-[6px] rounded-[4px] border p-4 flex items-center gap-4 ${
                file.active
                  ? "border-[rgba(0,242,255,0.4)] bg-[rgba(0,242,255,0.04)]"
                  : "border-[rgba(225,253,255,0.1)] bg-[rgba(10,10,10,0.5)]"
              }`}
            >
              <File size={20} className={file.active ? "text-[#00F2FF]" : "text-[#849495]"} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[#e1fdff] text-[14px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600 }}>{file.filename}</span>
                  {file.active && (
                    <span className="text-[10px] px-2 py-0.5 rounded-[2px] bg-[rgba(0,242,255,0.1)] text-[#00F2FF] border border-[rgba(0,242,255,0.3)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>ACTIVE</span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{file.size}</span>
                  <span className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{file.uploadedAt}</span>
                  <span className="text-[#849495] text-[11px] truncate max-w-[200px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400 }}>{file.url}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {!file.active && (
                  <button
                    onClick={() => setActive(file.id)}
                    className="text-[12px] px-3 py-1.5 border border-[rgba(0,242,255,0.3)] text-[#00F2FF] rounded-[2px] hover:bg-[rgba(0,242,255,0.08)] transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                  >
                    SET ACTIVE
                  </button>
                )}
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-[#849495] hover:text-[#e1fdff] transition-colors">
                  <Download size={14} />
                </a>
                <button onClick={() => deleteFile(file.id)} className="text-[#849495] hover:text-red-400 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S3 Config info */}
      <div className="rounded-[4px] border border-[rgba(179,197,255,0.15)] p-5" style={{ background: "rgba(10,10,10,0.4)" }}>
        <p className="text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>S3 CONFIGURATION</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { key: "AWS_BUCKET_NAME", val: "portfolio-assets" },
            { key: "AWS_REGION", val: "us-east-1" },
            { key: "AWS_ACCESS_KEY_ID", val: "••••••••••••XXXX" },
            { key: "AWS_SECRET_ACCESS_KEY", val: "••••••••••••••••••••XXXX" },
          ].map(({ key, val }) => (
            <div key={key} className="flex items-center gap-3">
              <span className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{key}=</span>
              <span className="text-[#b9cacb] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400 }}>{val}</span>
            </div>
          ))}
        </div>
        <p className="text-[#849495] text-[12px] mt-3" style={{ fontFamily: "'Inter', sans-serif" }}>Set these in <code className="text-[#00F2FF]">.env.local</code> for Next.js. Compatible with AWS S3, Cloudflare R2, and MinIO.</p>
      </div>
    </div>
  );
}
