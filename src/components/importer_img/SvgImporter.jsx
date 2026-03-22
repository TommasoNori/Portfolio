function StudyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-cyan-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14 3 9l9-5 9 5-9 5Zm0 0v6m-6-3v-4m12 4v-4"
      />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-fuchsia-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 13V8a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v5m16 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5m16 0H4"
      />
    </svg>
  );
}


function Download(){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5a2 2 0 0 1 2-2h2.2a1 1 0 0 1 .97.757l.8 3.2a1 1 0 0 1-.27.96l-1.2 1.2a16 16 0 0 0 6.8 6.8l1.2-1.2a1 1 0 0 1 .96-.27l3.2.8a1 1 0 0 1 .76.97V20a2 2 0 0 1-2 2h-1C7.6 22 2 16.4 2 9V5Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5 12 13l9-5.5M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-cyan-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z"
      />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2 15 22l-4-9-9-4 20-7Z"
      />
    </svg>
  );
}

export { StudyIcon, WorkIcon, Download, PhoneIcon, EmailIcon, LocationIcon, SendIcon };
