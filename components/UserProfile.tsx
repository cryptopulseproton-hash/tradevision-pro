"use client";

import { auth } from "../lib/firebase";

export default function UserProfile() {
  const user = auth.currentUser;

  return (
    <div className="bg-[#161b22] rounded-xl p-5 border border-gray-800">
      <h2 className="text-xl font-bold mb-3">
        User Profile
      </h2>

      <p>
        <strong>Email:</strong>{" "}
        {user?.email || "Not Logged In"}
      </p>

      <p className="mt-2">
        <strong>UID:</strong>{" "}
        {user?.uid || "-"}
      </p>
    </div>
  );
}
