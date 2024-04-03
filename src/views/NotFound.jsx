import React from "react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
