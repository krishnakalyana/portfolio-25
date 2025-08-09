import { NextResponse } from "next/server";

export async function GET(request) {
  // Redirect to the static resume in public/
  return NextResponse.redirect(new URL("/resume.pdf", request.url));
}


