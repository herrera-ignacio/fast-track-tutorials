"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// This page will handle success, cancel, and error states
// resulting from a checkout session
export default function CheckoutRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isSuccess = searchParams.get("success") === "true";
  const isCanceled = searchParams.get("cancel") === "true";
  const isError = searchParams.get("error") === "true";
  const errorMessage = searchParams.get("message");
  const sessionId = searchParams.get("session_id");
  const isRedirect = isSuccess || isCanceled || isError;

  const redirectToLanding = () => router.push("/");

  useEffect(() => {
    if (isError) {
      // Could replace with a toast
      alert("Error: " + errorMessage);
      redirectToLanding();
    }
  }, [isError, errorMessage]);

  // TIP: In this page you should also handle fulfillment
  // after a customer is redirected from a successful checkout.

  if (!isRedirect) {
    // redirect back to landing
    redirectToLanding();
  }

  return (
    <main>
      <h2>Checkout redirect</h2>
      <div>
        <p>{sessionId && `Session id: ${sessionId}`}</p>
        <p>
          {isSuccess && "The operation was successful."}
          {isCanceled && "The operation was canceled."}
        </p>
      </div>
    </main>
  );
}
