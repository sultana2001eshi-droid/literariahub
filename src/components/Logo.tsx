export default function Logo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Open book */}
      <path
        d="M16 8C12 6 8 6 4 7v16c4-1 8-1 12 1 4-2 8-2 12-1V7c-4-1-8-1-12 1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Center spine */}
      <path
        d="M16 8v16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Quill */}
      <path
        d="M24 3c-2 2-3 5-3 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M26 2c-1.5 1-4 4-5 9"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
