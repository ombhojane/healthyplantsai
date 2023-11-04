import { Code, ImageIcon, Leaf, LeafIcon, LeafyGreen, LeafyGreenIcon, MessageSquare, Music, PlaneTakeoff, ThumbsUpIcon, VideoIcon } from "lucide-react";
import { Love_Light } from "next/font/google";

export const MAX_FREE_COUNTS = 100;

export const tools = [
  {
    label: 'Plant Disease Detection',
    icon: Leaf,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Preventive Measures',
    icon: LeafyGreen,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Remedies and Treatment',
    icon: LeafIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  
];
