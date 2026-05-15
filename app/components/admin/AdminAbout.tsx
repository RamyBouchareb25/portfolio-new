"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import {
  Save,
  CheckCircle,
  Upload,
  Image as ImageIcon,
  Trash2,
  Star,
  AlertCircle,
} from "lucide-react";
import { AboutAdmin, PhotoAsset } from "@/lib/types";
import {
  updateAboutAction,
  uploadPhotoFileAction,
  setActivePhotoFileAction,
  deletePhotoFileAction,
} from "@/lib/admin-actions";

// const INITIAL = {
//   name: "DevOps Engineer",
//   title: "Platform Engineer · K8s Expert · Cloud Architect",
//   summary:
//     "I architect, deploy, and maintain highly available infrastructure for mission-critical applications. My approach focuses on infrastructure as code, zero-downtime deployments, and robust observability to ensure systems run flawlessly under pressure.",
//   bio: "With 10+ years in the trenches of cloud-native infrastructure, I've led migrations from bare metal to multi-cloud Kubernetes, built platform teams from scratch, and helped companies scale from startup to enterprise without losing reliability.",
//   location: "Remote (US-East timezone)",
//   email: "hello@k8sexpert.dev",
//   github: "https://github.com/devops-engineer",
//   linkedin: "https://linkedin.com/in/devops-engineer",
//   twitter: "@k8s_expert",
//   yearsExp: "10+",
//   deploymentsCount: "500+",
//   uptimeSla: "99.9%",
//   clustersManaged: "50+",
// };

interface AdminAboutProps {
  initialAbout: Partial<AboutAdmin>;
  initialPhotoFiles: PhotoAsset[];
}

const EMPTY_ABOUT = {
  name: "",
  title: "",
  summary: "",
  bio: "",
  location: "",
  email: "",
  github: "",
  linkedin: "",
  twitter: "",
  yearsExp: "",
  deploymentsCount: "",
  uptimeSla: "",
  clustersManaged: "",
};

export function AdminAbout({
  initialAbout,
  initialPhotoFiles,
}: AdminAboutProps) {
  const [form, setForm] = useState(() => ({
    ...EMPTY_ABOUT,
    ...(initialAbout ?? {}),
  }));
  const [photoFiles, setPhotoFiles] = useState<PhotoAsset[]>(initialPhotoFiles);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [photoUploadStatus, setPhotoUploadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  function set(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handlePhotoInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }
    setSelectedPhoto(file);
  }

  function uploadPhoto() {
    if (!selectedPhoto) return;
    setPhotoUploadStatus("idle");

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("file", selectedPhoto);

        const result = await uploadPhotoFileAction(formData);
        if (!result.success || !result.data) {
          throw new Error(result.error ?? "Failed to upload photo");
        }

        setPhotoFiles((files) => [result.data as PhotoAsset, ...files]);
        setSelectedPhoto(null);
        setPhotoUploadStatus("success");
      } catch (error) {
        console.error("Failed to upload photo:", error);
        setPhotoUploadStatus("error");
      }
    });
  }

  function setActivePhoto(id: string) {
    startTransition(async () => {
      try {
        const result = await setActivePhotoFileAction(id);
        if (!result.success) {
          throw new Error(result.error ?? "Failed to set active photo");
        }
        setPhotoFiles((files) =>
          files.map((f) => ({ ...f, active: f.id === id })),
        );
      } catch (error) {
        console.error("Failed to set active photo:", error);
      }
    });
  }

  function deletePhoto(id: string) {
    startTransition(async () => {
      try {
        const result = await deletePhotoFileAction(id);
        if (!result.success) {
          throw new Error(result.error ?? "Failed to delete photo");
        }
        setPhotoFiles((files) => files.filter((f) => f.id !== id));
      } catch (error) {
        console.error("Failed to delete photo:", error);
      }
    });
  }

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      try {
        const result = await updateAboutAction(form);
        if (!result.success) {
          throw new Error(result.error ?? "Failed to update about");
        }

        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } catch (error) {
        console.error("Failed to save about:", error);
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  const ic =
    "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2.5 text-[#e1fdff] text-[14px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";
  const lc =
    "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const ls = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const fi = { fontFamily: "'Inter', sans-serif" };

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-[#e1fdff] text-[24px] tracking-[-0.5px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            About Me
          </h1>
          <p
            className="text-[#849495] text-[12px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            Profile data // PostgreSQL via Prisma
          </p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span
              className="flex items-center gap-2 text-[#00F2FF] text-[12px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              <CheckCircle size={14} /> SAVED
            </span>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-5 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            <Save size={12} /> {isPending ? "SAVING..." : "SAVE CHANGES"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic info */}
        <div
          className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <p
            className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            [BASIC_INFO]
          </p>
          {[
            { k: "name", label: "Display Name" },
            { k: "title", label: "Title / Subtitle" },
            { k: "location", label: "Location" },
            { k: "email", label: "Email" },
          ].map(({ k, label }) => (
            <div key={k}>
              <label className={lc} style={ls}>
                {label}
              </label>
              <input
                className={ic}
                style={fi}
                value={(form as any)[k] ?? ""}
                onChange={(e) => set(k, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Social links */}
        <div
          className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <p
            className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            [SOCIAL_LINKS]
          </p>
          {[
            { k: "github", label: "GitHub URL" },
            { k: "linkedin", label: "LinkedIn URL" },
            { k: "twitter", label: "Twitter / X Handle" },
          ].map(({ k, label }) => (
            <div key={k}>
              <label className={lc} style={ls}>
                {label}
              </label>
              <input
                className={ic}
                style={fi}
                value={(form as any)[k] ?? ""}
                onChange={(e) => set(k, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4 lg:col-span-2"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <p
            className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            [BIO_TEXT]
          </p>
          <div>
            <label className={lc} style={ls}>
              Executive Summary (hero section)
            </label>
            <textarea
              className={ic + " resize-none"}
              style={fi}
              rows={3}
              value={form!.summary}
              onChange={(e) => set("summary", e.target.value)}
            />
          </div>
          <div>
            <label className={lc} style={ls}>
              Full Bio (about page)
            </label>
            <textarea
              className={ic + " resize-none"}
              style={fi}
              rows={4}
              value={form!.bio}
              onChange={(e) => set("bio", e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4 lg:col-span-2"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <p
            className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            [STATS_COUNTERS]
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { k: "yearsExp", label: "Years Experience" },
              { k: "deploymentsCount", label: "Deployments" },
              { k: "uptimeSla", label: "Uptime SLA" },
              { k: "clustersManaged", label: "Clusters Managed" },
            ].map(({ k, label }) => (
              <div key={k}>
                <label className={lc} style={ls}>
                  {label}
                </label>
                <input
                  className={ic}
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                  value={(form as any)[k]}
                  onChange={(e) => set(k, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Profile Photos */}
        <div
          className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4 lg:col-span-2"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <p
            className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            [PROFILE_PHOTOS]
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <label
              className="flex items-center gap-2 px-4 py-2 border border-[rgba(225,253,255,0.3)] text-[#e1fdff] rounded-[2px] text-[12px] tracking-[1.2px] uppercase cursor-pointer hover:border-[rgba(225,253,255,0.6)] transition-colors"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              <ImageIcon size={12} /> SELECT_IMAGE
              <input
                disabled={isPending}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoInput}
              />
            </label>

            {selectedPhoto && (
              <button
                type="button"
                disabled={isPending}
                onClick={uploadPhoto}
                className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity disabled:opacity-60"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                <Upload size={12} /> UPLOAD_TO_PHOTOS
              </button>
            )}
          </div>

          {photoUploadStatus === "success" && (
            <div
              className="flex items-center gap-2 p-3 rounded-[2px] border border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.05)] text-[#00F2FF] text-[13px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              <CheckCircle size={14} /> PHOTO_UPLOADED
            </div>
          )}

          {photoUploadStatus === "error" && (
            <div
              className="flex items-center gap-2 p-3 rounded-[2px] border border-[rgba(255,80,80,0.3)] bg-[rgba(255,80,80,0.05)] text-red-400 text-[13px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              <AlertCircle size={14} /> PHOTO_UPLOAD_FAILED
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photoFiles.map((photo) => (
              <div
                key={photo.id}
                className={`rounded-[4px] border p-3 flex flex-col gap-3 ${
                  photo.active
                    ? "border-[rgba(0,242,255,0.4)] bg-[rgba(0,242,255,0.04)]"
                    : "border-[rgba(225,253,255,0.1)] bg-[rgba(10,10,10,0.5)]"
                }`}
              >
                <div className="relative aspect-square rounded-[4px] overflow-hidden border border-[rgba(225,253,255,0.1)]">
                  <Image
                    src={photo.url}
                    alt={photo.filename}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[#e1fdff] text-[12px] truncate"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {photo.filename}
                  </span>
                  {photo.active && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-[2px] bg-[rgba(0,242,255,0.1)] text-[#00F2FF] border border-[rgba(0,242,255,0.3)]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                      }}
                    >
                      ACTIVE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {!photo.active && (
                    <button
                      type="button"
                      onClick={() => setActivePhoto(photo.id)}
                      className="flex-1 flex items-center justify-center gap-1 text-[11px] px-2 py-1.5 border border-[rgba(0,242,255,0.3)] text-[#00F2FF] rounded-[2px] hover:bg-[rgba(0,242,255,0.08)] transition-colors"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      <Star size={12} /> SET ACTIVE
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => deletePhoto(photo.id)}
                    className="px-2 py-1.5 text-[#849495] hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
