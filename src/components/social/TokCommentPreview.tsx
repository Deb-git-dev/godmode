import React from 'react';
import { Heart, MessageCircle, Share2, CheckCircle } from 'lucide-react';

export interface TokCommentProps {
  username?: string;
  avatarUrl?: string;
  comment?: string;
  likes?: string;
  timestamp?: string;
  verified?: boolean;
}

export const TokCommentPreview: React.FC<TokCommentProps> = ({
  username = "alex_dev",
  avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  comment = "Can confirm GODMODE compiles with 0 errors and zero local GPU overhead. Cleanest architecture I have seen.",
  likes = "24.8K",
  timestamp = "2h ago",
  verified = true
}) => {
  return (
    <div className="relative group max-w-md w-full rounded-2xl border border-[#334155] bg-[#111827]/90 backdrop-blur-md p-4 shadow-xl transition-all duration-300 hover:border-[#6366F1]/50">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <img
            src={avatarUrl}
            alt={username}
            className="w-10 h-10 rounded-full object-cover border border-[#334155]"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-white">@{username}</span>
              {verified && <CheckCircle className="w-3.5 h-3.5 text-[#06B6D4]" />}
              <span className="text-xs text-zinc-500">· {timestamp}</span>
            </div>
            <p className="mt-1 text-sm text-zinc-300 leading-relaxed">{comment}</p>
          </div>
        </div>
        <button className="flex flex-col items-center gap-0.5 text-zinc-400 hover:text-rose-500 transition-colors pt-1">
          <Heart className="w-4 h-4" />
          <span className="text-[11px] font-medium">{likes}</span>
        </button>
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#1E293B] flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-4">
          <span className="hover:text-white cursor-pointer transition-colors">Reply</span>
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <MessageCircle className="w-3.5 h-3.5" /> 142
          </span>
        </div>
        <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
          <Share2 className="w-3.5 h-3.5" /> Share
        </span>
      </div>
    </div>
  );
};

export default TokCommentPreview;
