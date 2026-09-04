import React, { useState } from 'react';
import { FileDown, ShieldCheck, Check } from 'lucide-react';
import { downloadCertificate, CertificateData } from '../../lib/certificateGenerator.ts';

interface CertificateGeneratorProps {
  actionId?: string;
  blockNumber?: number;
  recipientName?: string;
  className?: string;
}

/**
 * CertificateGenerator: In-browser vector PDF generator component (§9, Task 17).
 * Uses pdf-lib directly in the client; zero server round-trip.
 */
export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  actionId = 'rec_verified_godmode',
  blockNumber = 10008,
  recipientName = 'System Operator',
  className = ''
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const data: CertificateData = {
        recipientName,
        actionId,
        blockNumber,
        date: new Date().toISOString(),
        systemName: 'GODMODE V1.0.0',
        auditScore: '20/20'
      };
      await downloadCertificate(data);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    } catch (err) {
      console.error('Failed to generate PDF in-browser:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center text-accent-primary shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-heading font-bold text-sm text-text-primary">
              Verifiable Vector Clearance Certificate
            </h4>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-accent-secondary border border-slate-700">
              pdf-lib client
            </span>
          </div>
          <p className="text-xs text-text-secondary mt-0.5">
            Generates high-resolution vector PDF in-browser (zero server round-trip).
          </p>
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={downloading}
        className="flex items-center gap-2 px-4 py-2.5 bg-accent-primary hover:bg-accent-primary/90 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 shrink-0"
      >
        {downloaded ? (
          <>
            <Check className="w-4 h-4 text-emerald-300" />
            <span>Downloaded PDF!</span>
          </>
        ) : (
          <>
            <FileDown className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
            <span>{downloading ? 'Rendering PDF...' : 'Download Certificate'}</span>
          </>
        )}
      </button>
    </div>
  );
};
